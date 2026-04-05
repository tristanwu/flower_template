import Link from 'next/link';
import { footer } from '@/content/homepage';

export default function MarketingFooter() {
  const productName = process.env.NEXT_PUBLIC_PRODUCTNAME;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary-50 border-t border-secondary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Top row — brand + columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
            <span className="text-base font-semibold text-secondary-900">
              {productName}
            </span>
            <p className="text-sm text-secondary-500 leading-relaxed">
              {footer.tagline}
            </p>
          </div>

          {/* Link columns — driven by footer.columns in homepage.ts */}
          {footer.columns.map((column) => (
            <div key={column.heading} className="flex flex-col gap-3">
              <h4 className="text-xs font-semibold text-secondary-900 uppercase tracking-wider">
                {column.heading}
              </h4>
              <ul className="flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-secondary-500 hover:text-secondary-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-secondary-200">
          <p className="text-center text-xs text-secondary-400">
            © {year} {productName}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
