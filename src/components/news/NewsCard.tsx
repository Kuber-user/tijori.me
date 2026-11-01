import { useTranslation } from 'react-i18next';
import LocalizedLink from '../common/LocalizedLink';
import { formatNewsDate } from '../../lib/news';
import type { LocalizedNewsPost, NewsType } from '../../lib/news';

const typeIcons: Record<NewsType, React.ReactNode> = {
  announcement: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
  ),
  event: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  ),
  partnership: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  ),
  customer: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  ),
  insight: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  ),
};

export function NewsCover({ post, className = '' }: { post: LocalizedNewsPost; className?: string }) {
  if (post.cover) {
    return <img src={post.cover} alt={post.title} className={`w-full h-full object-cover ${className}`} loading="lazy" />;
  }
  // Branded placeholder for posts without a photo
  return (
    <div
      className={`w-full h-full flex items-center justify-center ${className}`}
      style={{ backgroundImage: 'radial-gradient(ellipse at 80% 0%, rgba(94,120,240,0.35), transparent 60%), linear-gradient(170deg, #0f0d1f 0%, #1a1540 60%, #13102a 100%)' }}
    >
      <svg className="w-14 h-14 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {typeIcons[post.type]}
      </svg>
    </div>
  );
}

export default function NewsCard({ post }: { post: LocalizedNewsPost }) {
  const { t, i18n } = useTranslation('news');

  return (
    <LocalizedLink
      to={`/news/${post.slug}`}
      className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200 h-full"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <NewsCover post={post} className="group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-6 flex flex-col flex-1" dir={post.contentLang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="flex items-center gap-3 text-sm mb-3">
          <span className="px-2.5 py-0.5 rounded-full bg-primary-50 text-primary-600 font-medium">
            {t(`types.${post.type}`)}
          </span>
          <span className="text-gray-500">{formatNewsDate(post.date, i18n.language)}</span>
          {post.draft && <span className="px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium">Draft</span>}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed flex-1">{post.summary}</p>
        <span className="mt-4 text-sm font-medium text-primary-600">{t('readMore')} →</span>
      </div>
    </LocalizedLink>
  );
}
