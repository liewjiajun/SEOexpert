import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { ContactForm } from '@/components/forms/ContactForm';
import { FloatingBlob } from '@/components/ui/FloatingElements';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with SEOExpert. Book a discovery call or request a free audit.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="section relative overflow-hidden">
        <FloatingBlob color="violet" size="xl" className="-top-32 -right-32 opacity-20" animationDelay="0s" />
        <FloatingBlob color="fuchsia" size="lg" className="bottom-0 -left-20 opacity-15" animationDelay="3s" />

        <Container className="relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <p className="eyebrow">Contact</p>
            <h1 className="mb-6">
              Let&apos;s <span className="text-gradient">talk</span>
            </h1>
            <p className="text-xl text-ink-secondary">
              Whether you have a specific project in mind or just want to explore how we can help,
              we&apos;d love to hear from you.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3 animate-fade-in-up">
              <Card variant="glass">
                <ContactForm />
              </Card>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8 animate-fade-in-up animation-delay-200">
              <div>
                <h2 className="text-lg font-medium mb-4">Contact details</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-xl icon-gradient flex items-center justify-center flex-shrink-0 group-hover:shadow-glow-sm transition-shadow">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted">Email</p>
                      <a href={`mailto:${SITE_CONFIG.email}`} className="text-ink hover:text-violet-600 transition-colors">
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_15px_rgba(37,211,102,0.5)] transition-shadow">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted">WhatsApp</p>
                      <a
                        href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}`}
                        className="text-ink hover:text-violet-600 transition-colors"
                      >
                        {SITE_CONFIG.whatsapp}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-xl icon-gradient flex items-center justify-center flex-shrink-0 group-hover:shadow-glow-sm transition-shadow">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted">Location</p>
                      <p className="text-ink">Remote — working worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium mb-4">Response time</h2>
                <p className="text-ink-secondary">
                  We typically respond within 24 hours during business days.
                  For urgent matters, WhatsApp is the fastest way to reach us.
                </p>
              </div>

              <Card variant="gradient-border" className="p-6">
                <h3 className="font-medium mb-2">Prefer a call?</h3>
                <p className="text-sm text-ink-secondary mb-4">
                  Book a free 30-minute discovery call to discuss your project.
                </p>
                <a
                  href="#"
                  className="text-violet-600 font-medium text-sm inline-flex items-center hover:text-fuchsia-500 transition-colors group"
                >
                  Schedule a call
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
