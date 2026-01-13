import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { ServiceCards } from '@/components/sections/ServiceCards';
import { Differentiators } from '@/components/sections/Differentiators';
import { ResultsPreview } from '@/components/sections/ResultsPreview';
import { FounderSection } from '@/components/sections/FounderSection';
import { CTAFooter } from '@/components/sections/CTAFooter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServiceCards />
      <Differentiators />
      <ResultsPreview />
      <FounderSection />
      <CTAFooter />
    </>
  );
}
