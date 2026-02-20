import { useTranslation } from 'react-i18next';
import Container from '../common/Container';
import Badge from '../common/Badge';
import LocalizedLink from '../common/LocalizedLink';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation('common');

  const footerLinks = {
    product: [
      { labelKey: 'product.cashManagement', path: '/platform/cash-management' },
      { labelKey: 'product.aiForecasting', path: '/platform/ai-forecasting' },
      { labelKey: 'product.loans', path: '/platform/loans' },
      { labelKey: 'product.investments', path: '/platform/investments' },
      { labelKey: 'product.riskFx', path: '/platform/risk-fx-management' },
      { labelKey: 'product.payments', path: '/platform/payments' },
      { labelKey: 'product.lgLc', path: '/platform/lg-lc' },
      { labelKey: 'product.connectivity', path: '/platform/connectivity' },
    ],
    solutions: [
      { labelKey: 'solutions.cfo', path: '/solutions/cfo' },
      { labelKey: 'solutions.treasurer', path: '/solutions/treasurer' },
      { labelKey: 'solutions.controller', path: '/solutions/controller' },
      { labelKey: 'solutions.semiGovernment', path: '/solutions/semi-government' },
      { labelKey: 'solutions.construction', path: '/solutions/construction' },
      { labelKey: 'solutions.oilGas', path: '/solutions/oil-gas' },
      { labelKey: 'solutions.fmcg', path: '/solutions/fmcg' },
      { labelKey: 'solutions.manufacturing', path: '/solutions/manufacturing' },
      { labelKey: 'solutions.realEstate', path: '/solutions/real-estate' },
      { labelKey: 'solutions.ecommerce', path: '/solutions/ecommerce' },
    ],
    resources: [
      { labelKey: 'resources.trustSecurity', path: '/resources/trust-security' },
    ],
    company: [
      { labelKey: 'company.about', path: '/company/about' },
      { labelKey: 'company.contact', path: '/company/contact' },
      { labelKey: 'company.pricing', path: '/pricing' },
    ],
  };

  return (
    <footer className="bg-primary-900 text-white">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Product */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-white">{t('footer.sections.product')}</h4>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.path}>
                    <LocalizedLink
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {t(`footer.${link.labelKey}`)}
                    </LocalizedLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-white">{t('footer.sections.solutions')}</h4>
              <ul className="space-y-2">
                {footerLinks.solutions.map((link) => (
                  <li key={link.path}>
                    <LocalizedLink
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {t(`footer.${link.labelKey}`)}
                    </LocalizedLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-white">{t('footer.sections.resources')}</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.path}>
                    <LocalizedLink
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {t(`footer.${link.labelKey}`)}
                    </LocalizedLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-white">{t('footer.sections.company')}</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.path}>
                    <LocalizedLink
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {t(`footer.${link.labelKey}`)}
                    </LocalizedLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-3 mb-8 pb-8 border-b border-primary-700">
            <Badge variant="primary" className="bg-primary-700 text-white">
              {t('trustBadges.soc2')}
            </Badge>
            <Badge variant="primary" className="bg-primary-700 text-white">
              {t('trustBadges.gdpr')}
            </Badge>
            <Badge variant="primary" className="bg-primary-700 text-white">
              {t('trustBadges.iso27001')}
            </Badge>
            <Badge variant="primary" className="bg-primary-700 text-white">
              {t('trustBadges.encryption')}
            </Badge>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <LocalizedLink to="/" className="inline-block">
                <img src="/assets/logos/tijori_logo.png" alt="TiJori" className="h-12 brightness-0 invert" />
              </LocalizedLink>
              <p className="text-gray-400 text-sm mt-2">
                {t('footer.tagline')}
              </p>
            </div>
            <div className="text-gray-400 text-sm">
              {t('footer.copyright', { year: currentYear })}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
