import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

interface LanguageSwitcherProps {
  variant?: 'button' | 'dropdown';
  className?: string;
}

// Globe icon as inline SVG
function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );
}

export default function LanguageSwitcher({ variant = 'button', className = '' }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const currentLang = i18n.language;
  const isArabic = currentLang === 'ar';

  const toggleLanguage = () => {
    const newLang = isArabic ? 'en' : 'ar';

    // Update i18n language
    i18n.changeLanguage(newLang);

    // Update document direction for RTL support
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;

    // Update URL with new language prefix
    const pathParts = location.pathname.split('/').filter(Boolean);

    // Check if first part is a language code
    if (pathParts[0] === 'en' || pathParts[0] === 'ar') {
      pathParts[0] = newLang;
    } else {
      pathParts.unshift(newLang);
    }

    const newPath = '/' + pathParts.join('/') + location.search + location.hash;
    navigate(newPath);
  };

  if (variant === 'dropdown') {
    return (
      <button
        onClick={toggleLanguage}
        className={`flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors ${className}`}
        aria-label={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}
      >
        <GlobeIcon className="h-5 w-5" />
        <span>{isArabic ? 'English' : 'عربي'}</span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium border border-gray-300 rounded-lg hover:border-primary-500 hover:text-primary-600 transition-colors ${className}`}
      aria-label={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}
    >
      <GlobeIcon className="h-4 w-4" />
      <span>{isArabic ? 'EN' : 'عربي'}</span>
    </button>
  );
}
