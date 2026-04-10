'use client';

import { Phone, FileText } from 'lucide-react';
import Link from 'next/link';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t-2 border-orange shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
      <div className="grid grid-cols-2 divide-x divide-gray-200">
        <a
          href="tel:+17186866550"
          className="flex items-center justify-center gap-2 py-3.5 bg-navy text-white font-bold text-sm"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <Link
          href="/get-quote"
          className="flex items-center justify-center gap-2 py-3.5 bg-orange text-white font-bold text-sm"
        >
          <FileText className="w-5 h-5" />
          Free Estimate
        </Link>
      </div>
    </div>
  );
}
