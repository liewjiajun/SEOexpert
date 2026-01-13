import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FloatingBlob } from '@/components/ui/FloatingElements';
import { SERVICES, CTA } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Full-stack digital marketing services including SEO, PPC, Social Media, Content Marketing, and Analytics.',
};

const iconMap: Record<string, React.ReactNode> = {
  search: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  target: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  share: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
  ),
  edit: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  ),
  chart: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section relative overflow-hidden">
        <FloatingBlob color="violet" size="xl" className="-top-32 -right-32 opacity-20" animationDelay="0s" />
        <FloatingBlob color="fuchsia" size="lg" className="bottom-0 -left-20 opacity-15" animationDelay="3s" />

        <Container className="relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <p className="eyebrow">Our Services</p>
            <h1 className="mb-6">
              Full-stack <span className="text-gradient">digital marketing</span>
            </h1>
            <p className="text-xl text-ink-secondary">
              From strategy to execution, we handle every aspect of your digital presence.
              No silos, no gaps—just cohesive marketing that drives results.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card variant="glass" hover className="h-full group">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-xl icon-gradient flex items-center justify-center flex-shrink-0 group-hover:shadow-glow-md transition-shadow duration-300">
                      {iconMap[service.icon]}
                    </div>
                    <div>
                      <h2 className="text-xl font-medium mb-2 group-hover:text-gradient transition-all duration-300">
                        {service.title}
                      </h2>
                      <p className="text-ink-secondary mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.slice(0, 3).map((feature) => (
                          <Badge key={feature} variant="glass" size="sm">
                            {feature}
                          </Badge>
                        ))}
                        {service.features.length > 3 && (
                          <Badge variant="outline" size="sm">
                            +{service.features.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-24">
        <Container>
          <Card variant="gradient-border" className="text-center animate-fade-in-up">
            <h2 className="mb-4">
              Not sure which service <span className="text-gradient">you need?</span>
            </h2>
            <p className="text-ink-secondary max-w-xl mx-auto mb-8">
              Book a free discovery call and we&apos;ll help you identify the best strategy for your business.
            </p>
            <Button
              href={CTA.primary.href}
              size="lg"
              glow
              icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              }
              iconPosition="right"
            >
              {CTA.primary.text}
            </Button>
          </Card>
        </Container>
      </section>
    </>
  );
}
