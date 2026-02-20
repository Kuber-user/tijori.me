import React from 'react';
import Container from '../common/Container';
import Section from '../common/Section';
import Card from '../common/Card';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureGridProps {
  features: Feature[];
  title?: string;
  description?: string;
}

export default function FeatureGrid({ features, title, description }: FeatureGridProps) {
  return (
    <Section background="white" padding="lg">
      <Container>
        {(title || description) && (
          <div className="text-center mb-16">
            {title && <h2 className="mb-4">{title}</h2>}
            {description && (
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              hover
              className="group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="inline-flex p-3 rounded-lg bg-primary-50 text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl mb-3">{feature.title}</h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
