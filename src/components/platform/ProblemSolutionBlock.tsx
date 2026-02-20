import Container from '../common/Container';
import Section from '../common/Section';

interface ProblemSolutionBlockProps {
  problem: {
    title: string;
    description: string;
    painPoints: string[];
  };
  solution: {
    title: string;
    description: string;
    benefits: string[];
  };
}

export default function ProblemSolutionBlock({ problem, solution }: ProblemSolutionBlockProps) {
  return (
    <Section background="gray" padding="lg">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem */}
          <div>
            <div className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
              The Challenge
            </div>
            <h2 className="mb-6">{problem.title}</h2>
            <p className="text-gray-600 text-lg mb-6">
              {problem.description}
            </p>
            <ul className="space-y-3">
              {problem.painPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg">
            <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              The Synclane Solution
            </div>
            <h2 className="mb-6">{solution.title}</h2>
            <p className="text-gray-600 text-lg mb-6">
              {solution.description}
            </p>
            <ul className="space-y-3">
              {solution.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
