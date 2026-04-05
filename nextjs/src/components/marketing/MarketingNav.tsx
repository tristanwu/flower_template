'use client';

import Link from 'next/link';
import AuthAwareButtons from '@/components/AuthAwareButtons';
import { nav } from '@/content/homepage';

export default function MarketingNav() {
  const productName = process.env.NEXT_PUBLIC_PRODUCTNAME;

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Brand */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-xl font-semibold tracking-tight text-secondary-900">
              {productName}
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {nav.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-secondary-600 hover:text-secondary-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth-aware CTA — logic lives in AuthAwareButtons */}
          <div className="flex items-center gap-4">
            <AuthAwareButtons variant="nav" />
          </div>

        </div>
      </div>
    </nav>
  );
}
