import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/seo/SEOHead';
import SchemaMarkup from '../../components/seo/SchemaMarkup';
import Container from '../../components/common/Container';
import Section from '../../components/common/Section';
import Button from '../../components/common/Button';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TiJori',
  url: 'https://tijori.me',
  logo: 'https://tijori.me/favicon-tijori.png',
  description:
    'Treasury management platform for Middle East corporates, with AES-256 encryption, role-based access and dual approval workflows.'
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://tijori.me/'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Resources',
      item: 'https://tijori.me/resources'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Trust & Security'
    }
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is my data encrypted?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All data is encrypted at rest using AES-256 and in transit using TLS 1.3. Encryption keys are managed through a dedicated key management service with automatic rotation. Database-level encryption ensures that even raw storage access cannot expose sensitive treasury data.'
      }
    },
    {
      '@type': 'Question',
      name: 'Where is my data stored?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your data stays in your region. TiJori is deployed either in your own Oracle Cloud (OCI) tenancy or on OCI hosted in your region, with disaster recovery in a separate region.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do you handle security incidents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If a security incident is identified, our team responds 24/7 and works on it around the clock until it is resolved. Affected customers are notified promptly, and we share a post-incident review with them.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you support Single Sign-On (SSO)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. TiJori supports single sign-on with Microsoft (Entra ID, formerly Azure Active Directory), so your team signs in with their existing company accounts.'
      }
    }
  ]
};

const securityFeatureKeys = ['encryption', 'mfa', 'rbac', 'dualApproval', 'auditLogs', 'dataResidency'] as const;

const securityIcons: Record<string, React.ReactNode> = {
  encryption: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  mfa: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
    </svg>
  ),
  rbac: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  dualApproval: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  auditLogs: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  dataResidency: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
};

const infraKeys = ['uptime', 'deployment', 'backups', 'monitoring', 'pentest'] as const;
const faqKeys = ['encryption', 'storage', 'incidents', 'sso'] as const;

export default function TrustSecurity() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t, i18n } = useTranslation('company');
  const isRTL = i18n.language === 'ar';

  const seoKeywords = t('trustSecurity.seo.keywords', { returnObjects: true }) as string[];

  return (
    <>
      <SEOHead
        title={t('trustSecurity.seo.title')}
        description={t('trustSecurity.seo.description')}
        keywords={seoKeywords}
      />
      <SchemaMarkup schema={organizationSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={faqSchema} />

      {/* Hero */}
      <Section background="dark" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              {t('trustSecurity.hero.badge')}
            </div>
            <h1 className="text-white mb-6">
              {t('trustSecurity.hero.title')}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t('trustSecurity.hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" href="/company/contact">
                {t('trustSecurity.hero.requestReport')}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Security Architecture */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('trustSecurity.security.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('trustSecurity.security.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatureKeys.map((key) => (
              <div
                key={key}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600 mb-4">
                  {securityIcons[key]}
                </div>
                <h3 className="text-lg font-bold mb-2">{t(`trustSecurity.security.features.${key}.title`)}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t(`trustSecurity.security.features.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Infrastructure & Operations */}
      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('trustSecurity.infrastructure.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('trustSecurity.infrastructure.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infraKeys.map((key) => (
              <div key={key} className="text-center bg-gray-50 rounded-xl p-8">
                <div className="text-3xl font-bold text-primary-600 mb-2 ltr-nums">
                  {t(`trustSecurity.infrastructure.items.${key}.metric`)}
                </div>
                <div className="text-gray-900 font-semibold mb-2">
                  {t(`trustSecurity.infrastructure.items.${key}.label`)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(`trustSecurity.infrastructure.items.${key}.detail`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Security FAQ */}
      <Section background="gray" padding="lg">
        <Container size="md">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('trustSecurity.faq.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('trustSecurity.faq.description')}
            </p>
          </div>

          <div className="space-y-4">
            {faqKeys.map((key, index) => (
              <div
                key={key}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  className={`w-full px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors ${isRTL ? 'text-right flex-row-reverse' : 'text-left'}`}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  <span className="font-semibold text-gray-900">{t(`trustSecurity.faq.items.${key}.question`)}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{t(`trustSecurity.faq.items.${key}.answer`)}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="gradient" padding="lg">
        <Container>
          <div className="text-center">
            <h2 className="text-white mb-4">{t('trustSecurity.cta.title')}</h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              {t('trustSecurity.cta.description')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button variant="secondary" size="lg" href="/company/contact">
                {t('trustSecurity.cta.requestReport')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/company/contact"
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
              >
                {t('trustSecurity.cta.contactSecurity')}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
