import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/seo/SEOHead';
import Container from '../../components/common/Container';
import Section from '../../components/common/Section';
import Button from '../../components/common/Button';

const valueKeys = ['precision', 'security', 'innovation'] as const;

const valueIcons: Record<string, React.ReactNode> = {
  precision: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  security: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  innovation: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
};

const officeKeys = ['difc', 'abuDhabi', 'chennai'] as const;

export default function About() {
  const { t } = useTranslation('company');

  return (
    <>
      <SEOHead
        title={t('about.seo.title')}
        description={t('about.seo.description')}
        keywords={t('about.seo.keywords', { returnObjects: true }) as string[]}
      />

      {/* Hero */}
      <Section background="dark" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white mb-6">
              {t('about.hero.title')}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t('about.hero.description')}
            </p>
          </div>
        </Container>
      </Section>

      {/* Mission */}
      <Section background="white" padding="lg">
        <Container size="md">
          <div className="text-center">
            <h2 className="mb-6">{t('about.mission.title')}</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              {t('about.mission.description')}
            </p>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('about.values.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('about.values.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {valueKeys.map((key) => (
              <div
                key={key}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-5 text-primary-600" style={{ backgroundColor: 'rgba(94, 120, 240, 0.1)' }}>
                  {valueIcons[key]}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t(`about.values.items.${key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`about.values.items.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Company */}
      <Section background="white" padding="lg">
        <Container size="md">
          <div className="text-center">
            <img
              src="/assets/screenshots/seertree.png"
              alt="Seertree Global Services"
              className="h-14 object-contain mx-auto mb-6"
            />
            <h2 className="mb-6">{t('about.company.title')}</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
              {t('about.company.description')}
            </p>
            <a
              href={`https://${t('about.company.website')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary-600 font-medium hover:underline"
            >
              {t('about.company.website')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </Container>
      </Section>

      {/* Offices */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('about.offices.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('about.offices.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {officeKeys.map((key) => (
              <div
                key={key}
                className="bg-white rounded-xl p-8 shadow-sm text-center"
              >
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-5 text-primary-600" style={{ backgroundColor: 'rgba(94, 120, 240, 0.1)' }}>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {t(`about.offices.items.${key}.city`)}
                </h3>
                <p className="text-gray-600">
                  {t(`about.offices.items.${key}.location`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="gradient" padding="lg">
        <Container>
          <div className="text-center">
            <h2 className="text-white mb-4">
              {t('about.cta.title')}
            </h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              {t('about.cta.description')}
            </p>
            <Button variant="secondary" size="lg" href="/company/contact">
              {t('about.cta.getInTouch')}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
