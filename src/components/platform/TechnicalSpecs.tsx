import { useState } from 'react';
import Container from '../common/Container';
import Section from '../common/Section';

interface TechnicalSpec {
  category: string;
  items: Array<{
    label: string;
    value: string;
  }>;
}

interface TechnicalSpecsProps {
  specs: TechnicalSpec[];
  title?: string;
}

export default function TechnicalSpecs({ specs, title = 'Technical Specifications' }: TechnicalSpecsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section background="white" padding="lg">
      <Container>
        <div className="text-center mb-12">
          <h2 className="mb-4">{title}</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {specs.map((spec, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === index
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {spec.category}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl mb-6">{specs[activeTab].category}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {specs[activeTab].items.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    {item.label}
                  </dt>
                  <dd className="text-lg text-gray-900">
                    {item.value}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need more technical details or have specific requirements?
          </p>
          <a
            href="/company/contact"
            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            Contact our technical team
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </Container>
    </Section>
  );
}
