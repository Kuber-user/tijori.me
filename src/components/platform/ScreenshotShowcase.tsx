import Container from '../common/Container';
import Section from '../common/Section';
import Button from '../common/Button';

interface ScreenshotShowcaseProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  title?: string;
  layout?: 'single' | 'grid' | 'stacked';
  buttonText?: string;
  buttonHref?: string;
  onButtonClick?: () => void;
}

export default function ScreenshotShowcase({
  images,
  title,
  layout = 'single',
  buttonText,
  buttonHref,
  onButtonClick
}: ScreenshotShowcaseProps) {
  const layoutClasses = {
    single: 'max-w-6xl mx-auto',
    grid: 'grid md:grid-cols-2 gap-8',
    stacked: 'space-y-12 max-w-5xl mx-auto'
  };

  return (
    <Section background="gray" padding="lg">
      <Container>
        {title && (
          <div className="text-center mb-12">
            <h2 className="mb-4">{title}</h2>
          </div>
        )}

        <div className={layoutClasses[layout]}>
          {images.map((image, index) => (
            <div key={index} className="group">
              {/* Screenshot Container */}
              <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/5 transition-colors duration-300"></div>
                </div>
              </div>

              {/* Caption */}
              {image.caption && (
                <p className="text-center text-gray-600 text-sm mt-4">
                  {image.caption}
                </p>
              )}
            </div>
          ))}
        </div>

        {buttonText && (buttonHref || onButtonClick) && (
          <div className="text-center mt-8">
            <Button
              variant="primary"
              size="lg"
              href={onButtonClick ? undefined : buttonHref}
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          </div>
        )}
      </Container>
    </Section>
  );
}
