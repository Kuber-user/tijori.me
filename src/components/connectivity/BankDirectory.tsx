import Container from '../common/Container';
import Section from '../common/Section';
import type { Integration } from '../../types';
import IntegrationCard from './IntegrationCard';

interface BankDirectoryProps {
  integrations: Integration[];
}

export default function BankDirectory({ integrations }: BankDirectoryProps) {
  const bankIntegrations = integrations.filter(i => i.category === 'Bank');

  return (
    <Section background="gray" padding="lg">
      <Container>
        <div className="text-center mb-12">
          <h2 className="mb-4">Bank Integrations</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Direct connections to global banks for real-time balance reporting and payment processing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bankIntegrations.map((integration) => (
            <IntegrationCard key={integration.id} integration={integration} />
          ))}
        </div>

        {/* Supported Formats */}
        <div className="mt-16 bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-center">Supported Banking Standards</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">SWIFT</div>
              <div className="text-sm text-gray-600">MT940, MT942, MT101</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">ISO 20022</div>
              <div className="text-sm text-gray-600">CAMT.053, PAIN.001</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">BAI2</div>
              <div className="text-sm text-gray-600">North American standard</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">API</div>
              <div className="text-sm text-gray-600">Real-time REST/SOAP</div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
