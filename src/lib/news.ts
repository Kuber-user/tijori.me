import { marked } from 'marked';
import { parseFrontMatter } from './frontmatter';
import type { FrontMatterValue } from './frontmatter';

// Each post lives in src/content/news/<slug>/ as en.md (required) and ar.md (optional).
// Shared fields (date, type, cover, gallery, draft) are read from en.md.
// Images go in public/news/<slug>/ and are referenced by file name.

export const newsTypes = ['announcement', 'event', 'partnership', 'customer', 'insight'] as const;
export type NewsType = (typeof newsTypes)[number];

interface NewsText {
  title: string;
  summary: string;
  location?: string;
  html: string;
}

export interface NewsPost {
  slug: string;
  type: NewsType;
  date: string;
  cover?: string;
  // YouTube video id, shown in place of the cover on the post page
  video?: string;
  gallery: string[];
  draft: boolean;
  text: Record<'en', NewsText> & Partial<Record<'ar', NewsText>>;
}

export interface LocalizedNewsPost extends Omit<NewsPost, 'text'>, NewsText {
  // Language the text is actually in (Arabic falls back to English)
  contentLang: 'en' | 'ar';
}

const files = import.meta.glob('../content/news/*/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const str = (value: FrontMatterValue | undefined) => (typeof value === 'string' ? value : '');
const imagePath = (slug: string, file: string) => (file.startsWith('/') ? file : `/news/${slug}/${file}`);
// Accepts youtu.be/<id>, youtube.com/watch?v=<id> or a bare id
const youtubeId = (url: string) =>
  /(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([\w-]{11})/.exec(url)?.[1] ?? (/^[\w-]{11}$/.test(url) ? url : undefined);

function toText(data: Record<string, FrontMatterValue>, body: string): NewsText {
  return {
    title: str(data.title),
    summary: str(data.summary),
    location: str(data.location) || undefined,
    html: marked.parse(body, { async: false }),
  };
}

function loadPosts(): NewsPost[] {
  const bySlug: Record<string, Partial<Record<'en' | 'ar', ReturnType<typeof parseFrontMatter>>>> = {};
  for (const [path, raw] of Object.entries(files)) {
    const [, slug, lang] = /news\/([^/]+)\/(en|ar)\.md$/.exec(path) ?? [];
    if (!slug) continue;
    (bySlug[slug] ??= {})[lang as 'en' | 'ar'] = parseFrontMatter(raw);
  }

  const posts: NewsPost[] = [];
  for (const [slug, langs] of Object.entries(bySlug)) {
    const en = langs.en;
    if (!en) continue;
    const type = str(en.data.type) as NewsType;
    if (!newsTypes.includes(type)) continue;
    const gallery = Array.isArray(en.data.gallery) ? en.data.gallery : [];

    posts.push({
      slug,
      type,
      date: str(en.data.date),
      cover: str(en.data.cover) ? imagePath(slug, str(en.data.cover)) : undefined,
      video: youtubeId(str(en.data.video)),
      gallery: gallery.map((file) => imagePath(slug, file)),
      draft: en.data.draft === true,
      text: {
        en: toText(en.data, en.body),
        ...(langs.ar ? { ar: toText(langs.ar.data, langs.ar.body) } : {}),
      },
    });
  }

  // Drafts only show on the local preview, never on the live site
  return posts
    .filter((post) => import.meta.env.DEV || !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

const allPosts = loadPosts();

export function localizePost(post: NewsPost, lang: string): LocalizedNewsPost {
  const { text, ...rest } = post;
  if (lang === 'ar' && text.ar) return { ...rest, ...text.ar, contentLang: 'ar' };
  return { ...rest, ...text.en, contentLang: 'en' };
}

export function getPosts(lang: string): LocalizedNewsPost[] {
  return allPosts.map((post) => localizePost(post, lang));
}

export function getPost(slug: string, lang: string): LocalizedNewsPost | undefined {
  const post = allPosts.find((p) => p.slug === slug);
  return post && localizePost(post, lang);
}

export function formatNewsDate(date: string, lang: string): string {
  const parsed = new Date(`${date}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  return new Intl.DateTimeFormat(lang === 'ar' ? 'ar-AE' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    numberingSystem: 'latn',
  }).format(parsed);
}
