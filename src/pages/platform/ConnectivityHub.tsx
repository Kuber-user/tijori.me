import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/seo/SEOHead';
import SchemaMarkup, { createProductSchema, createBreadcrumbSchema } from '../../components/seo/SchemaMarkup';
import Container from '../../components/common/Container';
import Section from '../../components/common/Section';
import Button from '../../components/common/Button';
import IntegrationSearch from '../../components/connectivity/IntegrationSearch';
import IntegrationCard from '../../components/connectivity/IntegrationCard';
import ERPDirectory from '../../components/connectivity/ERPDirectory';
import BankDirectory from '../../components/connectivity/BankDirectory';
import { integrations } from '../../data/integrations';

export default function ConnectivityHub() {
  const { t, i18n } = useTranslation('platform');
  const { t: tCommon } = useTranslation('common');
  const isRTL = i18n.language === 'ar';
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter integrations based on search and category
  const filteredIntegrations = useMemo(() => {
    return integrations.filter((integration) => {
      const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          integration.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || integration.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const featuredKeys = ['oracleFusion', 'sapS4hana', 'saudiBanks', 'oracleEbs'] as const;

  const productSchema = createProductSchema(
    'TiJori Connectivity Hub',
    '200+ integrations with banks and ERPs for automated treasury data flow'
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Platform', item: '/platform' },
    { name: 'Connectivity Hub' }
  ]);

  return (
    <>
      <SEOHead
        title={t('connectivity.seo.title')}
        description={t('connectivity.seo.description')}
        keywords={t('connectivity.seo.keywords', { returnObjects: true }) as string[]}
      />
      <SchemaMarkup schema={productSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />

      {/* Hero */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              {t('connectivity.hero.breadcrumb')}
            </div>
            <h1 className="text-white mb-6">
              {t('connectivity.hero.title')}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t('connectivity.hero.description')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button variant="secondary" size="lg" href="/company/contact">
                {tCommon('buttons.requestIntegration')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#integrations"
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
              >
                {tCommon('buttons.browseIntegrations')}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <Section background="white" padding="md">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {(['saudiBanks', 'oracle', 'sap', 'swift'] as const).map((key) => (
              <div key={key}>
                <div className="text-4xl font-bold text-gradient mb-2 ltr-nums">{t(`connectivity.stats.${key}.value`)}</div>
                <div className="text-gray-600">{t(`connectivity.stats.${key}.label`)}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Search & Results */}
      <Section background="gray" padding="lg" id="integrations">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('connectivity.search.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('connectivity.search.description')}
            </p>
          </div>

          {/* Search Component */}
          <IntegrationSearch
            onSearch={setSearchQuery}
            onFilter={setActiveCategory}
            activeCategory={activeCategory}
          />

          {/* Search Results */}
          {(searchQuery || activeCategory !== 'All') && (
            <div className="mb-16">
              <div className={`flex items-center justify-between mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <h3 className="text-2xl font-bold">
                  <span className="ltr-nums">{filteredIntegrations.length}</span>{' '}
                  {filteredIntegrations.length !== 1
                    ? tCommon('integrations.foundPlural')
                    : tCommon('integrations.found')}
                </h3>
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('All');
                    }}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    {tCommon('buttons.clearSearch')}
                  </button>
                )}
              </div>

              {filteredIntegrations.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredIntegrations.map((integration) => (
                    <IntegrationCard key={integration.id} integration={integration} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 mb-4">{tCommon('integrations.noResults')}</p>
                  <Button variant="outline" onClick={() => setSearchQuery('')}>
                    {tCommon('buttons.clearSearch')}
                  </Button>
                </div>
              )}
            </div>
          )}
        </Container>
      </Section>

      {/* ERP Directory */}
      <ERPDirectory integrations={integrations} />

      {/* Bank Directory */}
      <BankDirectory integrations={integrations} />

      {/* Integration Process */}
      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('connectivity.process.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('connectivity.process.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {(['select', 'configure', 'map', 'goLive'] as const).map((key, index) => (
              <div key={key} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full text-2xl font-bold mb-4 ltr-nums">
                  {index + 1}
                </div>
                <h3 className="text-xl mb-2">{t(`connectivity.process.steps.${key}.title`)}</h3>
                <p className="text-gray-600 text-sm">{t(`connectivity.process.steps.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Integrations */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">{t('connectivity.featured.title')}</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredKeys.map((key) => (
                <div key={key} className="bg-white p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">{t(`connectivity.featured.${key}.title`)}</h3>
                  <p className="text-gray-600 mb-4">
                    {t(`connectivity.featured.${key}.description`)}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {(t(`connectivity.featured.${key}.features`, { returnObjects: true }) as string[]).map((feature, i) => (
                      <li key={i} className={`flex items-start ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                        <svg className={`w-5 h-5 text-primary-500 ${isRTL ? 'ml-2' : 'mr-2'} flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="gradient" padding="lg">
        <Container>
          <div className="text-center">
            <h2 className="text-white mb-4">{t('connectivity.cta.title')}</h2>
            <p className="text-white/90 text-xl mb-8">
              {t('connectivity.cta.description')}
            </p>
            <Button variant="secondary" size="lg" href="/company/contact">
              {tCommon('buttons.requestCustom')}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
