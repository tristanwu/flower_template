import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cta } from '@/content/homepage';

export default function CTABanner() {
  return (
    <section className="py-20 bg-primary-600">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h2 className="text-3xl font-semibold text-white tracking-tight">
          {cta.heading}
        </h2>

        <p className="mt-4 text-lg text-primary-100">
          {cta.subheading}
        </p>

        <Link
          href={cta.buttonHref}
          className="mt-8 inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-white text-primary-700 font-medium hover:bg-primary-50 transition-colors"
        >
          {cta.buttonLabel}
          <ArrowRight className="w-4 h-4" />
        </Link>

      </div>
    </section>
  );
}
