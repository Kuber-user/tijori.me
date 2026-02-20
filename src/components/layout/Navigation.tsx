import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LocalizedLink from '../common/LocalizedLink';
import { navigation } from '../../data/navigation';

interface NavigationProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { t, i18n } = useTranslation('navigation');

  const textColor = isScrolled ? 'text-gray-700' : 'text-gray-900';
  const isRTL = i18n.language === 'ar';

  return (
    <nav className={`flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
      {navigation.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => item.children && setOpenDropdown(item.label)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {item.path ? (
            <LocalizedLink
              to={item.path}
              className={`font-medium hover:text-primary-600 transition-colors ${textColor}`}
            >
              {t(item.label)}
            </LocalizedLink>
          ) : (
            <button
              className={`font-medium hover:text-primary-600 transition-colors flex items-center ${textColor}`}
            >
              {t(item.label)}
              {item.children && (
                <svg className={`w-4 h-4 ${isRTL ? 'mr-1' : 'ml-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </button>
          )}

          {/* Dropdown - pt-2 creates visual gap while keeping hover zone continuous */}
          {item.children && openDropdown === item.label && (
            <div className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} pt-2 z-50`}>
              <div className="w-64 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                {item.children.map((child) => (
                  <LocalizedLink
                    key={child.path}
                    to={child.path!}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {t(child.label)}
                  </LocalizedLink>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
