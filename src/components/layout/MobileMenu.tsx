import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { navigation } from '../../data/navigation';
import Button from '../common/Button';
import LocalizedLink from '../common/LocalizedLink';
import LanguageSwitcher from '../common/LanguageSwitcher';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const { t: tNav } = useTranslation('navigation');
  const { t: tCommon } = useTranslation('common');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 lg:hidden"
        onClick={onClose}
      />

      {/* Menu */}
      <div className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 lg:hidden overflow-y-auto">
        <div className="p-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-gray-500 hover:text-gray-700"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Logo */}
          <LocalizedLink to="/" onClick={onClose} className="block mb-8">
            <img src="/assets/logos/tijori_logo.png" alt="TiJori" className="h-10" />
          </LocalizedLink>

          {/* Navigation */}
          <nav className="space-y-4">
            {navigation.map((item) => (
              <div key={item.label}>
                {item.path ? (
                  <LocalizedLink
                    to={item.path}
                    onClick={onClose}
                    className="block py-2 font-medium text-gray-900 hover:text-primary-600"
                  >
                    {tNav(item.label)}
                  </LocalizedLink>
                ) : (
                  <>
                    <button
                      onClick={() =>
                        setExpandedSection(expandedSection === item.label ? null : item.label)
                      }
                      className="flex items-center justify-between w-full py-2 font-medium text-gray-900 hover:text-primary-600"
                    >
                      {tNav(item.label)}
                      <svg
                        className={`w-5 h-5 transition-transform ${
                          expandedSection === item.label ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expandedSection === item.label && item.children && (
                      <div className="pl-4 space-y-2 mt-2 rtl:pr-4 rtl:pl-0">
                        {item.children.map((child) => (
                          <LocalizedLink
                            key={child.path}
                            to={child.path!}
                            onClick={onClose}
                            className="block py-2 text-sm text-gray-600 hover:text-primary-600"
                          >
                            {tNav(child.label)}
                          </LocalizedLink>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <LanguageSwitcher variant="dropdown" className="w-full justify-center" />
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <Button variant="primary" size="md" href="/company/contact" className="w-full">
              {tCommon('buttons.requestDemo')}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
