import Container from '../common/Container';
import Section from '../common/Section';
import type { Integration } from '../../types';
import IntegrationCard from './IntegrationCard';

interface ERPDirectoryProps {
  integrations: Integration[];
}

export default function ERPDirectory({ integrations }: ERPDirectoryProps) {
  const erpIntegrations = integrations.filter(i => i.category === 'ERP');

  return (
    <Section background="white" padding="lg">
      <Container>
        <div className="text-center mb-12">
          <h2 className="mb-4">ERP Integrations</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Seamless connectivity with leading enterprise resource planning systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {erpIntegrations.map((integration) => (
            <IntegrationCard key={integration.id} integration={integration} />
          ))}
        </div>

        {/* Key Benefits */}
        <div className="mt-16 bg-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">ERP Integration Benefits</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">2-way</div>
              <div className="text-gray-700">Bi-directional data sync</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">Real-time</div>
              <div className="text-gray-700">Automated data updates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">90%</div>
              <div className="text-gray-700">Reduction in manual entry</div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
