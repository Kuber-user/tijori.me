import { useTranslation } from 'react-i18next';
import Container from '../common/Container';
import Section from '../common/Section';
import type { Integration } from '../../types';
import IntegrationCard from './IntegrationCard';

interface BankDirectoryProps {
  integrations: Integration[];
}

const standardKeys = ['swift', 'iso20022', 'openBanking', 'api'] as const;

export default function BankDirectory({ integrations }: BankDirectoryProps) {
  const { t } = useTranslation('platform');
  const bankIntegrations = integrations.filter(i => i.category === 'Bank');

  return (
    <Section background="gray" padding="lg">
      <Container>
        <div className="text-center mb-12">
          <h2 className="mb-4">{t('bankDirectory.title')}</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t('bankDirectory.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bankIntegrations.map((integration) => (
            <IntegrationCard key={integration.id} integration={integration} />
          ))}
        </div>

        {/* Supported Formats */}
        <div className="mt-16 bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-center">{t('bankDirectory.standards.title')}</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {standardKeys.map((key) => (
              <div key={key}>
                <div className="text-3xl font-bold text-primary-600 mb-2">{t(`bankDirectory.standards.${key}.name`)}</div>
                <div className="text-sm text-gray-600">{t(`bankDirectory.standards.${key}.description`)}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
