import { useTranslation } from 'react-i18next';
import SEOHead from '../components/seo/SEOHead';
import SchemaMarkup, { organizationSchema } from '../components/seo/SchemaMarkup';
import Hero from '../components/home/Hero';
import SocialProofBar from '../components/home/SocialProofBar';
import PlatformOverview from '../components/home/PlatformOverview';
import ThreePillars from '../components/home/ThreePillars';
import ROIMetrics from '../components/home/ROIMetrics';
import CTASection from '../components/home/CTASection';

export default function Home() {
  const { t } = useTranslation('home');

  return (
    <>
      <SEOHead
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords', { returnObjects: true }) as string[]}
      />
      <SchemaMarkup schema={organizationSchema} />

      <Hero />
      <SocialProofBar />
      <PlatformOverview />
      <ThreePillars />
      <ROIMetrics />
      <CTASection />
    </>
  );
}
