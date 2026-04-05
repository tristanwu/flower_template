// ============================================================
// BOUQUETS — your primary product editing file
// ============================================================
// Edit this file to:
//   • Add or remove bouquets (add/remove objects from the array)
//   • Change a name, price, or description
//   • Swap in a real image URL (paste your Supabase public URL into imageUrl)
//   • Mark a bouquet unavailable (available: false hides it from the page)
//
// Image URLs:
//   Leave imageUrl as "" to show a styled placeholder.
//   Once you upload a photo to Supabase Storage, paste the public URL here.
//   Example: "https://your-project.supabase.co/storage/v1/object/public/product-images/sunday-edit.jpg"
//
// Tiers:
//   standard  — everyday gift ($65–$75)
//   premium   — special occasions ($95–$110)
//   grand     — statement piece ($145–$175)
// ============================================================

export type BouquetTier = 'standard' | 'premium' | 'grand';

export interface Bouquet {
  id: string;          // URL-safe slug — used as a key and future route param
  name: string;        // Display name shown on the card
  tagline: string;     // One-line description shown on the card
  description: string; // Two-sentence description for future detail page
  price: number;       // Numeric price in CAD
  priceLabel: string;  // Formatted price string shown on the card
  imageUrl: string;    // Supabase public URL — leave "" for placeholder
  tier: BouquetTier;
  available: boolean;  // false = hidden from the page
}

export const bouquets: Bouquet[] = [
  {
    id: 'sunday-edit',
    name: 'The Sunday Edit',
    tagline: 'White ranunculus, silver eucalyptus & soft greenery',
    description:
      'A calm, unhurried arrangement built for the people who appreciate the quiet things. White ranunculus and silver eucalyptus in a clean, airy composition.',
    price: 75,
    priceLabel: '$75',
    imageUrl: 'https://nahqhyycbofgoumqlkve.supabase.co/storage/v1/object/public/public_assets/flowers2.jpg',
    tier: 'standard',
    available: true,
  },
  {
    id: 'golden-hour',
    name: 'Golden Hour',
    tagline: 'Amber dahlias, yellow roses & warm orange spray roses',
    description:
      'Warm tones that feel like late afternoon light. Amber dahlias and yellow garden roses arranged with intention — a bouquet that fills a room.',
    price: 95,
    priceLabel: '$95',
    imageUrl: 'https://nahqhyycbofgoumqlkve.supabase.co/storage/v1/object/public/public_assets/flowers2.jpg',
    tier: 'premium',
    available: true,
  },
  {
    id: 'garden-party',
    name: 'Garden Party',
    tagline: 'Pink garden roses, white sweet peas & fresh greenery',
    description:
      'Fresh-cut and unapologetically cheerful. Pink garden roses and white sweet peas in a loose, garden-gathered style that looks effortless.',
    price: 75,
    priceLabel: '$75',
    imageUrl: 'https://nahqhyycbofgoumqlkve.supabase.co/storage/v1/object/public/public_assets/flowers2.jpg',
    tier: 'standard',
    available: true,
  },
  {
    id: 'first-snow',
    name: 'First Snow',
    tagline: 'All white — roses, tulips & snowball hydrangea',
    description:
      'A study in restraint. All-white roses, tulips, and snowball hydrangea. When you want the flowers to speak without competing.',
    price: 95,
    priceLabel: '$95',
    imageUrl: 'https://nahqhyycbofgoumqlkve.supabase.co/storage/v1/object/public/public_assets/flowers2.jpg',
    tier: 'premium',
    available: true,
  },
  {
    id: 'deep-dusk',
    name: 'Deep Dusk',
    tagline: 'Burgundy dahlias, plum anemones & dark foliage',
    description:
      'Rich, moody, and unforgettable. Burgundy dahlias and plum anemones set against dark foliage — the bouquet for someone who knows exactly what they want.',
    price: 110,
    priceLabel: '$110',
    imageUrl: 'https://nahqhyycbofgoumqlkve.supabase.co/storage/v1/object/public/public_assets/flowers2.jpg',
    tier: 'premium',
    available: true,
  },
  {
    id: 'the-classic',
    name: 'The Classic',
    tagline: 'Red roses — arranged beautifully, without apology',
    description:
      'Some things are classic because they work. Premium red roses, arranged with care by a local Toronto florist. No flourishes needed.',
    price: 65,
    priceLabel: '$65',
    imageUrl: 'https://nahqhyycbofgoumqlkve.supabase.co/storage/v1/object/public/public_assets/flowers2.jpg',
    tier: 'standard',
    available: true,
  },
  {
    id: 'wild-and-local',
    name: 'Wild & Local',
    tagline: 'Seasonal stems chosen fresh — changes weekly',
    description:
      'Whatever is most beautiful this week. Our florist partners choose the freshest seasonal stems available and arrange them the way they would for themselves.',
    price: 85,
    priceLabel: '$85',
    imageUrl: 'https://nahqhyycbofgoumqlkve.supabase.co/storage/v1/object/public/public_assets/flowers2.jpg',
    tier: 'standard',
    available: true,
  },
];
