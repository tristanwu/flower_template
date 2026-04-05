import MarketingNav from '@/components/marketing/MarketingNav';
import Hero from '@/components/marketing/Hero';
import FeaturedBouquets from '@/components/marketing/FeaturedBouquets';
import HowItWorks from '@/components/marketing/HowItWorks';
import Testimonials from '@/components/marketing/Testimonials';
import DeliveryZone from '@/components/marketing/DeliveryZone';
import CTABanner from '@/components/marketing/CTABanner';
import MarketingFooter from '@/components/marketing/MarketingFooter';

// ----------------------------------------------------------------
// Public landing page
// Section order and content are controlled here by component arrangement.
// Copy  → src/content/homepage.ts
// Products / images → src/content/bouquets.ts
// ----------------------------------------------------------------
export default function Home() {
  return (
    <div className="min-h-screen">
      <MarketingNav />
      <Hero />
      <FeaturedBouquets />
      <HowItWorks />
      <Testimonials />
      <DeliveryZone />
      <CTABanner />
      <MarketingFooter />
    </div>
  );
}