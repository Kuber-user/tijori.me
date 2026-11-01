import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { parseFrontMatter } from './src/lib/frontmatter'

const SITE_URL = 'https://tijori.me'
const LANGS = ['en', 'ar'] as const

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

interface PageMeta {
  path: string
  title: string
  description: string
  image: string
}

// LinkedIn, WhatsApp and other link previewers don't run JavaScript, so they only
// see index.html. This writes a copy of index.html for each News & Insights page
// with its own title, description and image, and adds the pages to the sitemap.
function newsPages(): Plugin {
  let outDir = 'dist'
  return {
    name: 'tijori-news-pages',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir
    },
    closeBundle() {
      const contentDir = path.resolve('src/content/news')
      const locale = (lang: string) =>
        JSON.parse(fs.readFileSync(path.resolve(`src/locales/${lang}/news.json`), 'utf8'))
      const pages: PageMeta[] = []

      for (const lang of LANGS) {
        const text = locale(lang)
        pages.push({
          path: `/${lang}/news`,
          title: lang === 'ar' ? text.seo.title : `${text.seo.title} | Tijori`,
          description: text.seo.description,
          image: '/assets/screenshots/treasury-overview.png',
        })
      }

      const slugs = fs.existsSync(contentDir) ? fs.readdirSync(contentDir) : []
      for (const slug of slugs) {
        const read = (lang: string) => {
          const file = path.join(contentDir, slug, `${lang}.md`)
          return fs.existsSync(file) ? parseFrontMatter(fs.readFileSync(file, 'utf8')).data : null
        }
        const en = read('en')
        if (!en || en.draft === true) continue
        const cover = typeof en.cover === 'string' && en.cover ? en.cover : ''
        const image = cover ? (cover.startsWith('/') ? cover : `/news/${slug}/${cover}`) : '/assets/screenshots/treasury-overview.png'

        for (const lang of LANGS) {
          const data = (lang === 'ar' && read('ar')) || en
          pages.push({
            path: `/${lang}/news/${slug}`,
            title: `${String(data.title)} | Tijori`,
            description: String(data.summary ?? ''),
            image,
          })
        }
      }

      const template = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8')
      for (const page of pages) {
        const url = `${SITE_URL}${page.path}`
        const image = `${SITE_URL}${encodeURI(page.image)}`
        const lang = page.path.split('/')[1]
        const tags = [
          `<meta name="description" content="${escapeHtml(page.description)}" />`,
          `<link rel="canonical" href="${url}" />`,
          `<meta property="og:type" content="article" />`,
          `<meta property="og:url" content="${url}" />`,
          `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
          `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
          `<meta property="og:image" content="${image}" />`,
          `<meta name="twitter:card" content="summary_large_image" />`,
        ].join('\n    ')
        const html = template
          .replace(/<html lang="en" dir="ltr">/, `<html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">`)
          .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(page.title)}</title>\n    ${tags}`)
        const file = path.join(outDir, page.path, 'index.html')
        fs.mkdirSync(path.dirname(file), { recursive: true })
        fs.writeFileSync(file, html)
      }

      // Sitemap: give every static page its /en and /ar address, then add the news pages
      const sitemapFile = path.join(outDir, 'sitemap.xml')
      if (fs.existsSync(sitemapFile)) {
        const sitemap = fs.readFileSync(sitemapFile, 'utf8')
        const entries = [...sitemap.matchAll(/<url>[\s\S]*?<\/url>/g)].map((m) => m[0])
        const localized = entries.flatMap((entry) => {
          const loc = /<loc>https:\/\/tijori\.me(\/[^<]*)<\/loc>/.exec(entry)?.[1] ?? '/'
          if (/^\/(en|ar)(\/|$)/.test(loc)) return [entry]
          return LANGS.map((lang) => entry.replace(/<loc>[^<]*<\/loc>/, `<loc>${SITE_URL}/${lang}${loc === '/' ? '' : loc}</loc>`))
        })
        const news = pages.map((page) =>
          `  <url>\n    <loc>${SITE_URL}${page.path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`)
        const body = [...localized.map((entry) => `  ${entry}`), ...news].join('\n')
        fs.writeFileSync(sitemapFile, sitemap.replace(/<urlset([^>]*)>[\s\S]*<\/urlset>/, `<urlset$1>\n${body}\n</urlset>`))
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), newsPages()],
})
