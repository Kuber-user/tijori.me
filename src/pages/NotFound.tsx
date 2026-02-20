import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import Button from '../components/common/Button';

export default function NotFound() {
  const popularPages = [
    { label: 'Cash & Liquidity Management', path: '/platform/cash-management' },
    { label: 'AI Cash Forecasting', path: '/platform/ai-forecasting' },
    { label: 'Connectivity Hub', path: '/platform/connectivity' },
    { label: 'Trust & Security', path: '/resources/trust-security' },
    { label: 'Contact Us', path: '/company/contact' },
  ];

  return (
    <>
      <SEOHead
        title="Page Not Found | Synclane"
        description="The page you're looking for doesn't exist."
      />

      <Section background="white" padding="xl">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-8xl font-bold text-gradient mb-6">404</div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Page Not Found</h1>
            <p className="text-gray-600 text-lg mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Button variant="primary" size="lg" href="/">
              Return to Home
            </Button>

            <div className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-primary-900 mb-6">Popular Pages</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {popularPages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-primary-50 hover:text-primary-600 transition-colors text-sm font-medium"
                  >
                    {page.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
