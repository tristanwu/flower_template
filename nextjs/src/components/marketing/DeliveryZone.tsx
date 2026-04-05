import Link from 'next/link';
import { Clock } from 'lucide-react';
import { delivery } from '@/content/homepage';

export default function DeliveryZone() {
  return (
    <section id="about" className="py-16 bg-white border-t border-secondary-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Heading */}
        <h2 className="text-2xl font-semibold tracking-tight text-secondary-900 mb-6">
          {delivery.heading}
        </h2>

        {/* Zone list */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {delivery.zones.map((zone) => (
            <span
              key={zone}
              className="px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-sm text-primary-700 font-medium"
            >
              {zone}
            </span>
          ))}
        </div>

        {/* Cutoff message */}
        <div className="flex items-center justify-center gap-2 text-secondary-600 text-sm mb-4">
          <Clock className="w-4 h-4 text-primary-500 flex-shrink-0" />
          <span>{delivery.cutoffMessage}</span>
        </div>

        {/* Contact prompt */}
        <p className="text-sm text-secondary-400">
          {delivery.questionPrompt}{' '}
          <Link
            href={delivery.questionCtaHref}
            className="text-primary-600 hover:text-primary-700 underline underline-offset-2"
          >
            {delivery.questionCta}
          </Link>
        </p>

      </div>
    </section>
  );
}
