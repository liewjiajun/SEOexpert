'use client';

import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { VALUES, ANTI_VALUES } from '@/lib/constants';

export function Differentiators() {
  return (
    <section className="section relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-50/50 via-white to-violet-50/50" />

      <Container className="relative z-10">
        <AnimatedSection className="section-header">
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="text-balance mb-4">
            SEO without the <span className="text-gradient">agency fluff</span>
          </h2>
          <p className="text-ink-secondary">
            We built this agency to be different. Here&apos;s what that actually means.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* What We're Against */}
          <AnimatedSection delay={100} animation="slide-right">
            <Card variant="default" className="h-full border-coral/20 hover:border-coral/40 transition-colors">
              <h3 className="text-lg font-medium mb-6 flex items-center gap-2">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-coral to-fuchsia-400 text-white flex items-center justify-center shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                What we&apos;re against
              </h3>
              <ul className="space-y-4">
                {ANTI_VALUES.map((value, index) => (
                  <li key={value.title} className="group" style={{ animationDelay: `${index * 50}ms` }}>
                    <p className="font-medium text-ink mb-1 group-hover:text-coral transition-colors flex items-center gap-2">
                      <svg className="w-5 h-5 text-coral flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                      </svg>
                      {value.title}
                    </p>
                    <p className="text-sm text-ink-secondary pl-7">{value.description}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </AnimatedSection>

          {/* What We Stand For */}
          <AnimatedSection delay={200} animation="slide-left">
            <Card variant="glass" className="h-full border-violet-200/50 hover:border-violet-300 transition-colors">
              <h3 className="text-lg font-medium mb-6 flex items-center gap-2">
                <span className="w-10 h-10 rounded-xl icon-gradient flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                What we stand for
              </h3>
              <ul className="space-y-4">
                {VALUES.map((value, index) => (
                  <li key={value.title} className="group" style={{ animationDelay: `${index * 50}ms` }}>
                    <p className="font-medium text-ink mb-1 group-hover:text-violet-600 transition-colors flex items-center gap-2">
                      <svg className="w-5 h-5 text-violet-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {value.title}
                    </p>
                    <p className="text-sm text-ink-secondary pl-7">{value.description}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
