import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/seo/SEOHead';
import Container from '../../components/common/Container';
import Section from '../../components/common/Section';
import NewsCard from '../../components/news/NewsCard';
import CTASection from '../../components/home/CTASection';
import { getPosts, newsTypes } from '../../lib/news';
import type { NewsType } from '../../lib/news';

export default function NewsList() {
  const { t, i18n } = useTranslation('news');
  const [filter, setFilter] = useState<NewsType | 'all'>('all');

  const posts = getPosts(i18n.language);
  // Only offer filters for types that have posts
  const availableTypes = newsTypes.filter((type) => posts.some((post) => post.type === type));
  const visible = filter === 'all' ? posts : posts.filter((post) => post.type === filter);

  const chipClass = (active: boolean) =>
    `px-4 py-2 rounded-full text-sm font-medium transition-colors ${
      active ? 'bg-primary-600 text-white' : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
    }`;

  return (
    <>
      <SEOHead
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords', { returnObjects: true }) as string[]}
      />

      {/* Hero */}
      <Section background="dark" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white mb-6">{t('hero.title')}</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
          </div>
        </Container>
      </Section>

      <Section background="gray" padding="lg">
        <Container>
          {availableTypes.length > 1 && (
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button className={chipClass(filter === 'all')} onClick={() => setFilter('all')}>
                {t('types.all')}
              </button>
              {availableTypes.map((type) => (
                <button key={type} className={chipClass(filter === type)} onClick={() => setFilter(type)}>
                  {t(`filters.${type}`)}
                </button>
              ))}
            </div>
          )}

          {visible.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visible.map((post) => (
                <NewsCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 text-lg">{t('empty')}</p>
          )}
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
