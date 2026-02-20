import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../common/Container';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import Button from '../common/Button';
import LanguageSwitcher from '../common/LanguageSwitcher';
import LocalizedLink from '../common/LocalizedLink';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation('common');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <LocalizedLink to="/" className="flex items-center">
              <img src="/assets/logos/tijori_logo.png" alt="TiJori" className="h-14" />
            </LocalizedLink>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <Navigation isScrolled={isScrolled} />
            </div>

            {/* CTA Button and Language Switcher */}
            <div className="hidden lg:flex items-center gap-3">
              <LanguageSwitcher />
              <Button variant="primary" size="md" href="/company/contact">
                {t('buttons.requestDemo')}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-primary-600"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-20" />
    </>
  );
}
