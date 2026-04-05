import { MapPin } from 'lucide-react';
import AuthAwareButtons from '@/components/AuthAwareButtons';
import { hero } from '@/content/homepage';
import { bouquets } from '@/content/bouquets';

// The hero image is the first available bouquet that has a real imageUrl.
// If none have been added yet, a styled placeholder is shown.
// To set the hero image: add an imageUrl to the first bouquet in bouquets.ts.
function HeroImage() {
  const featuredBouquet = bouquets.find((b) => b.available && b.imageUrl);

  if (featuredBouquet?.imageUrl) {
    return (
      <div className="relative w-full h-full min-h-[420px] rounded-2xl overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={featuredBouquet.imageUrl}
          alt={featuredBouquet.name}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  // Placeholder — replace by adding an imageUrl to bouquets.ts
  return (
    <div className="relative w-full min-h-[420px] rounded-2xl overflow-hidden bg-primary-50 flex flex-col items-center justify-center gap-3 border border-primary-100">
      <div className="text-6xl select-none" aria-hidden="true">🌸</div>
      <p className="text-sm text-primary-400 font-medium">
        Add imageUrl to bouquets.ts to display your hero photo
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <div className="flex flex-col gap-6">
            {/* Delivery badge */}
            <div className="inline-flex items-center gap-2 text-sm text-primary-700 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 w-fit">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{hero.deliveryBadge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-secondary-900 leading-tight">
              {hero.headline}
              <span className="block text-primary-600 mt-1">
                {hero.headlineAccent}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-secondary-600 leading-relaxed max-w-lg">
              {hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary — auth-aware (Shop Now / Go to Dashboard) */}
              <AuthAwareButtons variant="primary" />
            </div>
          </div>

          {/* Right — image */}
          <div className="w-full">
            <HeroImage />
          </div>

        </div>
      </div>
    </section>
  );
}
