import { useTranslation } from 'react-i18next';
import Container from '../common/Container';
import Section from '../common/Section';
import LocalizedLink from '../common/LocalizedLink';
import NewsCard from '../news/NewsCard';
import { getPosts } from '../../lib/news';

// Three most recent posts; hidden until the first post is published
export default function LatestNews() {
  const { t, i18n } = useTranslation('news');
  const posts = getPosts(i18n.language).slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <Section background="gray" padding="lg">
      <Container>
        <div className="text-center mb-12">
          <h2 className="mb-4">{t('latest.title')}</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">{t('latest.description')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="text-center mt-10">
          <LocalizedLink to="/news" className="text-primary-600 font-semibold hover:underline">
            {t('latest.viewAll')} →
          </LocalizedLink>
        </div>
      </Container>
    </Section>
  );
}
