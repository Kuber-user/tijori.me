import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/seo/SEOHead';
import SchemaMarkup from '../../components/seo/SchemaMarkup';
import Container from '../../components/common/Container';
import Section from '../../components/common/Section';
import LocalizedLink from '../../components/common/LocalizedLink';
import { NewsCover } from '../../components/news/NewsCard';
import CTASection from '../../components/home/CTASection';
import NotFound from '../NotFound';
import { formatNewsDate, getPost } from '../../lib/news';

export default function NewsPost() {
  const { slug = '' } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation('news');
  const post = getPost(slug, i18n.language);

  if (!post) return <NotFound />;

  const dir = post.contentLang === 'ar' ? 'rtl' : 'ltr';
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    ...(post.cover ? { image: `https://tijori.me${encodeURI(post.cover)}` } : {}),
    publisher: {
      '@type': 'Organization',
      name: 'Tijori',
      logo: { '@type': 'ImageObject', url: 'https://tijori.me/favicon-tijori.png' },
    },
  };

  return (
    <>
      <SEOHead title={post.title} description={post.summary} ogImage={post.cover} />
      <SchemaMarkup schema={articleSchema} />

      {/* Hero */}
      <Section background="dark" padding="xl">
        <Container size="md">
          <div className="max-w-3xl mx-auto text-center" dir={dir}>
            <LocalizedLink to="/news" className="inline-block text-sm text-white/60 hover:text-white mb-6">
              {t('backToNews')}
            </LocalizedLink>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm mb-6">
              <span className="px-3 py-1 rounded-full bg-white/10 text-white font-medium">
                {t(`types.${post.type}`)}
              </span>
              <span className="text-white/70">{formatNewsDate(post.date, i18n.language)}</span>
              {post.location && <span className="text-white/70">· {post.location}</span>}
            </div>
            <h1 className="text-white mb-6">{post.title}</h1>
            {post.summary && <p className="text-xl text-white/90 leading-relaxed">{post.summary}</p>}
            {post.draft && (
              <p className="mt-6 inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium">
                {t('draft')}
              </p>
            )}
          </div>
        </Container>
      </Section>

      <Section background="white" padding="lg">
        <Container size="md">
          <div className={`max-w-3xl mx-auto ${dir === 'rtl' ? 'text-right' : 'text-left'}`} dir={dir}>
            {post.cover && (
              <div className="rounded-xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
                <NewsCover post={post} />
              </div>
            )}

            <article
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-primary-600"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            {post.gallery.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('gallery')}</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {post.gallery.map((image) => (
                    <a key={image} href={image} target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden aspect-[4/3]">
                      <img src={image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 pt-8 border-t border-gray-200">
              <LocalizedLink to="/news" className="text-primary-600 font-medium hover:underline">
                {t('backToNews')}
              </LocalizedLink>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
