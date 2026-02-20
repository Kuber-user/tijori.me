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
  name: 'Synclane',
  url: 'https://synclane.io',
  logo: 'https://synclane.io/logo.png',
  description:
    'Enterprise treasury management platform with SOC 2 Type II, GDPR, and ISO 27001 certified security.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US'
  },
  sameAs: ['https://www.linkedin.com/company/synclane'],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'SOC 2 Type II'
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'ISO 27001'
    }
  ]
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://synclane.io/'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Resources',
      item: 'https://synclane.io/resources'
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
        text: 'Synclane offers data residency options across three regions: United States (US-East, US-West), European Union (Frankfurt, Dublin), and Asia-Pacific (Singapore, Sydney). You choose your primary region during onboarding, and all data processing remains within that region to meet local regulatory requirements.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do you handle security incidents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our Security Operations Center operates 24/7 with automated threat detection and a documented incident response plan. Critical incidents are escalated within 15 minutes, and affected customers are notified within 72 hours per GDPR requirements. Post-incident reviews are conducted for every security event.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can we get a copy of your SOC 2 report?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide our most recent SOC 2 Type II report to prospective and current customers under NDA. Contact our security team or your account manager to request a copy. Reports are issued annually by an independent third-party auditor.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you support Single Sign-On (SSO)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Synclane supports SAML 2.0 and OpenID Connect (OIDC) for enterprise SSO integration. We work with all major identity providers including Okta, Azure AD, Google Workspace, and OneLogin. SSO is available on all enterprise plans at no additional cost.'
      }
    }
  ]
};

const certKeys = ['soc2', 'gdpr', 'iso27001'] as const;

const certIcons: Record<string, React.ReactNode> = {
  soc2: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  gdpr: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  iso27001: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
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

const infraKeys = ['uptime', 'deployment', 'backups', 'monitoring', 'pentest', 'bugBounty'] as const;
const faqKeys = ['encryption', 'storage', 'incidents', 'soc2Report', 'sso'] as const;

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
        canonical="https://synclane.io/resources/trust-security"
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

      {/* Certifications & Compliance */}
      <Section background="white" padding="lg" id="compliance">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('trustSecurity.compliance.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('trustSecurity.compliance.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certKeys.map((key) => {
              const points = t(`trustSecurity.compliance.certs.${key}.points`, { returnObjects: true }) as string[];
              return (
                <div
                  key={key}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={`flex items-center gap-4 mb-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <div className="text-primary-600 flex-shrink-0">{certIcons[key]}</div>
                    <h3 className="text-xl font-bold">{t(`trustSecurity.compliance.certs.${key}.name`)}</h3>
                  </div>
                  <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                    {t(`trustSecurity.compliance.certs.${key}.description`)}
                  </p>
                  <ul className="space-y-2">
                    {points.map((point, idx) => (
                      <li key={idx} className={`flex items-start gap-2 text-sm text-gray-700 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                        <svg
                          className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
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
