'use client';

import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { STATS } from '@/lib/constants';

export function ResultsPreview() {
  return (
    <section className="section relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet-50/30 via-transparent to-fuchsia-50/30 pointer-events-none" />

      <Container className="relative z-10">
        <AnimatedSection className="section-header">
          <p className="eyebrow">Results</p>
          <h2 className="text-balance mb-4">
            Numbers that <span className="text-gradient">matter</span>
          </h2>
          <p className="text-ink-secondary">
            We focus on metrics that actually impact your business, not vanity stats.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 100} animation="pop-in">
              <div className="text-center group">
                <p className="text-4xl md:text-5xl font-display text-gradient-animated mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </p>
                <p className="text-ink-secondary">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* What Clients Can Expect */}
        <AnimatedSection delay={400} className="mt-16">
          <Card variant="glass" className="p-8 md:p-12">
            <h3 className="text-xl font-medium mb-6 text-center">
              What you can <span className="text-gradient">expect</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                  title: 'Organic Traffic Growth',
                  description: 'Sustainable rankings that compound over time',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: 'Revenue Impact',
                  description: 'Marketing that actually drives sales',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: 'Qualified Leads',
                  description: 'Attract the right customers, not just traffic',
                },
              ].map((item, index) => (
                <AnimatedSection key={item.title} delay={500 + index * 100}>
                  <div className="text-center group">
                    <div className="w-12 h-12 rounded-xl icon-gradient flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-md transition-shadow duration-300">
                      {item.icon}
                    </div>
                    <p className="font-medium mb-1 group-hover:text-violet-600 transition-colors">{item.title}</p>
                    <p className="text-sm text-muted">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Card>
        </AnimatedSection>
      </Container>
    </section>
  );
}
