import { testimonials } from '@/content/homepage';

export default function Testimonials() {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-secondary-900">
            {testimonials.heading}
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.items.map((item) => (
            <div
              key={item.author}
              className="bg-white rounded-2xl border border-secondary-100 p-6 flex flex-col gap-4"
            >
              {/* Quote mark */}
              <span className="text-3xl text-primary-200 leading-none select-none" aria-hidden="true">
                &ldquo;
              </span>

              {/* Quote text */}
              <p className="text-secondary-700 text-sm leading-relaxed flex-1">
                {item.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-secondary-100">
                {/* Initials avatar */}
                <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-semibold text-primary-700">
                    {item.initials}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-secondary-900">
                    {item.author}
                  </span>
                  <span className="text-xs text-secondary-400">
                    {item.context}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
