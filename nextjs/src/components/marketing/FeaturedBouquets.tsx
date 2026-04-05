import { bouquets, type Bouquet } from '@/content/bouquets';
import { bouquetsSection } from '@/content/homepage';

// ----------------------------------------------------------------
// BouquetPlaceholder
// Shown when a bouquet has no imageUrl yet.
// Edit the bouquet's imageUrl in src/content/bouquets.ts to replace it.
// ----------------------------------------------------------------
function BouquetPlaceholder({ name }: { name: string }) {
  return (
    <div className="w-full aspect-[4/3] bg-primary-50 border border-primary-100 rounded-xl flex flex-col items-center justify-center gap-2">
      <span className="text-4xl select-none" aria-hidden="true">🌷</span>
      <span className="text-xs text-primary-300 text-center px-4 leading-snug">
        {name}
      </span>
    </div>
  );
}

// ----------------------------------------------------------------
// BouquetCard
// ----------------------------------------------------------------
function BouquetCard({ bouquet }: { bouquet: Bouquet }) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-secondary-100 overflow-hidden hover:shadow-md transition-shadow duration-200">

      {/* Image or placeholder */}
      <div className="w-full aspect-[4/3] overflow-hidden bg-primary-50">
        {bouquet.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={bouquet.imageUrl}
            alt={bouquet.name}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
        ) : (
          <BouquetPlaceholder name={bouquet.name} />
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex flex-col gap-1 flex-1">
          <h3 className="text-base font-semibold text-secondary-900">
            {bouquet.name}
          </h3>
          <p className="text-sm text-secondary-500 leading-snug">
            {bouquet.tagline}
          </p>
        </div>

        {/* Price + CTA row */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-base font-semibold text-secondary-900">
            {bouquet.priceLabel}
          </span>
          <button
            type="button"
            className="text-sm font-medium text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-200 px-4 py-1.5 rounded-lg transition-colors"
          >
            {bouquetsSection.orderButtonLabel}
          </button>
        </div>
      </div>

    </div>
  );
}

// ----------------------------------------------------------------
// FeaturedBouquets — section
// ----------------------------------------------------------------
export default function FeaturedBouquets() {
  const available = bouquets.filter((b) => b.available);

  return (
    <section id="bouquets" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-secondary-900">
            {bouquetsSection.heading}
          </h2>
          <p className="mt-3 text-secondary-500 text-lg">
            {bouquetsSection.subheading}
          </p>
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {available.map((bouquet) => (
            <BouquetCard key={bouquet.id} bouquet={bouquet} />
          ))}
        </div>

      </div>
    </section>
  );
}
