import { useState } from 'react';
import type { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/seo/SEOHead';
import Container from '../../components/common/Container';
import Section from '../../components/common/Section';
import Button from '../../components/common/Button';

interface FormData {
  firstName: string;
  lastName: string;
  workEmail: string;
  companyName: string;
  jobTitle: string;
  message: string;
}

const jobTitleKeys = ['select', 'cfo', 'treasurer', 'controller', 'financeDirector', 'other'] as const;
const jobTitleValues = ['', 'cfo', 'treasurer', 'controller', 'finance-director', 'other'];

const expectationStepKeys = ['response', 'demo', 'plan'] as const;

export default function Contact() {
  const { t, i18n } = useTranslation('company');
  const isRTL = i18n.language === 'ar';

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    workEmail: '',
    companyName: '',
    jobTitle: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with WordPress REST API endpoint
      const response = await fetch('/wp-json/synclane/v1/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          workEmail: '',
          companyName: '',
          jobTitle: '',
          message: '',
        });
      }
    } catch {
      // Handle error silently for now
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    'block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-gray-900 px-4 py-3';

  return (
    <>
      <SEOHead
        title={t('contact.seo.title')}
        description={t('contact.seo.description')}
        keywords={t('contact.seo.keywords', { returnObjects: true }) as string[]}
      />

      {/* Hero */}
      <Section background="dark" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white mb-6">{t('contact.hero.title')}</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              {t('contact.hero.description')}
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Form + Info */}
      <Section background="white" padding="lg">
        <Container>
          <div className={`grid lg:grid-cols-5 gap-12 lg:gap-16 ${isRTL ? 'direction-rtl' : ''}`}>
            {/* Left Column: Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {t('contact.form.title')}
              </h2>
              <p className="text-gray-600 mb-8">
                {t('contact.form.description')}
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('contact.success.title')}
                  </h3>
                  <p className="text-gray-600">
                    {t('contact.success.description')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {t('contact.form.fields.firstName.label')} {t('contact.form.required')}
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder={t('contact.form.fields.firstName.placeholder')}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {t('contact.form.fields.lastName.label')} {t('contact.form.required')}
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder={t('contact.form.fields.lastName.placeholder')}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="workEmail"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t('contact.form.fields.workEmail.label')} {t('contact.form.required')}
                    </label>
                    <input
                      type="email"
                      id="workEmail"
                      name="workEmail"
                      required
                      value={formData.workEmail}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder={t('contact.form.fields.workEmail.placeholder')}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {t('contact.form.fields.companyName.label')} {t('contact.form.required')}
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder={t('contact.form.fields.companyName.placeholder')}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="jobTitle"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {t('contact.form.fields.jobTitle.label')} {t('contact.form.required')}
                      </label>
                      <select
                        id="jobTitle"
                        name="jobTitle"
                        required
                        value={formData.jobTitle}
                        onChange={handleChange}
                        className={inputClasses}
                      >
                        {jobTitleKeys.map((key, index) => (
                          <option key={key} value={jobTitleValues[index]}>
                            {t(`contact.form.jobTitles.${key}`)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t('contact.form.fields.message.label')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder={t('contact.form.fields.message.placeholder')}
                    />
                  </div>

                  <div>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: What to Expect */}
            <div className="lg:col-span-2 space-y-8">
              {/* What to Expect */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('contact.expectations.title')}
                </h3>
                <div className="space-y-4">
                  {expectationStepKeys.map((key, index) => (
                    <div key={key} className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold ltr-nums" style={{ backgroundImage: 'linear-gradient(135deg, #5E78F0 0%, #3657EC 100%)' }}>
                        {index + 1}
                      </div>
                      <p className="text-gray-700 font-medium pt-1">
                        {t(`contact.expectations.steps.${key}`)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
