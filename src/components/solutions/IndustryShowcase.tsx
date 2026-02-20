import Container from '../common/Container';
import Section from '../common/Section';

interface IndustryShowcaseProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  title?: string;
  subtitle?: string;
  layout?: 'hero' | 'split' | 'offset';
}

export default function IndustryShowcase({
  images,
  title,
  subtitle,
  layout = 'split'
}: IndustryShowcaseProps) {

  if (layout === 'hero') {
    // Full-width single image with gradient overlay
    return (
      <Section background="white" padding="lg">
        <Container>
          {title && (
            <div className="text-center mb-8">
              <h2 className="mb-2">{title}</h2>
              {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
            </div>
          )}
          <div className="relative rounded-2xl overflow-hidden aspect-[21/9] group">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </Container>
      </Section>
    );
  }

  if (layout === 'split') {
    // Two images side by side with subtle styling
    return (
      <Section background="white" padding="lg">
        <Container>
          {title && (
            <div className="text-center mb-10">
              <h2 className="mb-2">{title}</h2>
              {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
            </div>
          )}
          <div className="grid md:grid-cols-2 gap-6">
            {images.slice(0, 2).map((image, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              </div>
            ))}
          </div>
        </Container>
      </Section>
    );
  }

  // 'offset' layout - overlapping images for visual interest
  return (
    <Section background="gray" padding="lg">
      <Container>
        {title && (
          <div className="text-center mb-10">
            <h2 className="mb-2">{title}</h2>
            {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
          </div>
        )}
        <div className="relative h-[400px] md:h-[500px] max-w-5xl mx-auto">
          <div className="absolute top-0 left-0 w-[70%] md:w-[65%] rounded-2xl overflow-hidden shadow-xl">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-auto object-cover aspect-[16/10]"
              loading="lazy"
            />
          </div>
          {images[1] && (
            <div className="absolute bottom-0 right-0 w-[60%] md:w-[55%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={images[1].src}
                alt={images[1].alt}
                className="w-full h-auto object-cover aspect-[16/10]"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
