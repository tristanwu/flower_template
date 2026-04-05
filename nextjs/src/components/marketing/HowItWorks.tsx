import { ShoppingBag, Leaf, Clock } from 'lucide-react';
import { howItWorks } from '@/content/homepage';

// One icon per step — edit the icon imports above to change them.
// Order matches the steps array in src/content/homepage.ts.
const stepIcons = [ShoppingBag, Leaf, Clock];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-semibold tracking-tight text-secondary-900">
            {howItWorks.heading}
          </h2>
          <p className="mt-3 text-secondary-500 text-lg">
            {howItWorks.subheading}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10 relative">

          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-8 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-primary-100"
            aria-hidden="true"
          />

          {howItWorks.steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <div key={step.number} className="flex flex-col items-center text-center gap-4">

                {/* Step number + icon bubble */}
                <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 border border-primary-100 z-10">
                  <Icon className="w-6 h-6 text-primary-600" strokeWidth={1.5} />
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary-600 text-white text-xs font-semibold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                {/* Copy */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-semibold text-secondary-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-secondary-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
