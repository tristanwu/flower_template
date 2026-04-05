// ============================================================
// HOMEPAGE COPY — your primary text editing file
// ============================================================
// Edit this file to change any text visible to visitors on the landing page.
// No React or component knowledge required — just edit the strings.
//
// Sections covered:
//   nav           Navigation links
//   hero          Main headline, subheadline, and CTA labels
//   bouquets      Section heading above the product grid
//   howItWorks    Three-step process explanation
//   testimonials  Three customer quotes
//   delivery      GTA zone list and order cutoff messaging
//   cta           Closing call-to-action banner
//   footer        Footer columns and brand tagline
// ============================================================

export const nav = {
  links: [
    { label: 'Shop', href: '#bouquets' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'About', href: '#about' },
  ],
};

export const hero = {
  headline: 'Fresh flowers for Toronto.',
  headlineAccent: 'Curated, not complicated.',
  subheadline:
    'We work with Toronto\'s best local florists to bring you a small selection of genuinely beautiful arrangements — ready to order in under two minutes.',
  primaryCta: 'Shop Now',
  secondaryCta: 'How It Works',
  secondaryCtaHref: '#how-it-works',
  deliveryBadge: 'Same-day delivery across Toronto & GTA',
};

export const bouquetsSection = {
  heading: 'This Week\'s Selection',
  subheading: 'A small, curated collection. Changed with the seasons.',
  orderButtonLabel: 'Order Now',
  soldOutLabel: 'Back soon',
};

export const howItWorks = {
  heading: 'How It Works',
  subheading: 'Three steps. That\'s genuinely it.',
  steps: [
    {
      number: '1',
      title: 'Choose your bouquet',
      description:
        'Pick from our small weekly selection. No catalog to scroll, no decisions to second-guess.',
    },
    {
      number: '2',
      title: 'We handle everything',
      description:
        'We work with local Toronto florists to prepare your order fresh. You don\'t coordinate anything.',
    },
    {
      number: '3',
      title: 'They receive it today',
      description:
        'Fresh from the florist, delivered to their door within hours. Order by 2 PM for same-day.',
    },
  ],
};

export const testimonials = {
  heading: 'What customers say',
  items: [
    {
      quote:
        'I ordered at noon and it arrived by 4 PM. The arrangement was nothing like the generic stuff I\'ve sent before. She cried.',
      author: 'Michael T.',
      context: 'Sent to his mother for her birthday',
      initials: 'MT',
    },
    {
      quote:
        'Finally a flower service that doesn\'t make me feel like I\'m shopping on a coupon site. The bouquet was beautiful and it was here in hours.',
      author: 'Priya S.',
      context: 'Anniversary gift, downtown Toronto',
      initials: 'PS',
    },
    {
      quote:
        'My friend texted me a photo the moment it arrived. The flowers looked exactly like the website — which never happens.',
      author: 'James K.',
      context: 'Congratulations bouquet, Mississauga',
      initials: 'JK',
    },
  ],
};

export const delivery = {
  heading: 'We deliver across Toronto & GTA',
  zones: [
    'Toronto',
    'North York',
    'Scarborough',
    'Etobicoke',
    'Mississauga',
    'Markham',
    'Vaughan',
    'Richmond Hill',
  ],
  cutoffMessage: 'Order by 2:00 PM for same-day delivery.',
  questionPrompt: 'Not sure if we deliver to you?',
  questionCta: 'Contact us',
  questionCtaHref: 'mailto:hello@example.com',
};

export const cta = {
  heading: 'Someone in your life deserves flowers today.',
  subheading: 'Order in under two minutes. Delivered the same day.',
  buttonLabel: 'Shop Now',
  buttonHref: '#bouquets',
};

export const footer = {
  tagline: 'Curated flower delivery for Toronto & GTA.',
  columns: [
    {
      heading: 'Shop',
      links: [
        { label: 'All Bouquets', href: '#bouquets' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'About', href: '#about' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/legal/privacy' },
        { label: 'Terms of Service', href: '/legal/terms' },
        { label: 'Refund Policy', href: '/legal/refund' },
      ],
    },
    {
      heading: 'Work With Us',
      links: [
        { label: 'Florist Partners', href: 'mailto:partners@example.com' },
        { label: 'Corporate Orders', href: 'mailto:corporate@example.com' },
      ],
    },
  ],
};
