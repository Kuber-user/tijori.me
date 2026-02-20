import Card from '../common/Card';
import Badge from '../common/Badge';
import type { Integration } from '../../types';

interface IntegrationCardProps {
  integration: Integration;
}

export default function IntegrationCard({ integration }: IntegrationCardProps) {
  const categoryColors = {
    ERP: 'primary',
    Bank: 'secondary',
    Accounting: 'info'
  } as const;

  return (
    <Card hover className="h-full">
      <div className="flex items-start gap-4 mb-4">
        {/* Logo Placeholder */}
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-2xl font-bold text-gray-400">
            {integration.name.charAt(0)}
          </span>
        </div>

        {/* Name & Category */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{integration.name}</h3>
          <Badge variant={categoryColors[integration.category]}>
            {integration.category}
          </Badge>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        {integration.description}
      </p>

      {/* Setup Time */}
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Setup: {integration.setupTime}
      </div>

      {/* Features */}
      <div className="space-y-2">
        {integration.features.slice(0, 3).map((feature, index) => (
          <div key={index} className="flex items-start text-sm text-gray-600">
            <svg className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </div>
        ))}
      </div>
    </Card>
  );
}
