import Link from 'next/link';
import { Phone } from 'lucide-react';

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  variant?: 'navy' | 'orange' | 'gold';
}

export default function CTASection({
  heading = "Ready to Transform Your Space?",
  subheading = "Get a free, no-obligation estimate from NYC's most trusted construction team. 25+ years of excellence.",
  variant = 'navy'
}: CTASectionProps) {
  const bgClass = variant === 'navy' ? 'gradient-navy' : variant === 'orange' ? 'bg-orange' : 'gradient-gold';

  return (
    <section className={`${bgClass} py-16 md:py-20`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{heading}</h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">{subheading}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/get-quote"
            className={`px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg ${
              variant === 'navy'
                ? 'bg-orange text-white hover:bg-orange-hover shadow-orange/25'
                : 'bg-white text-navy hover:bg-gray-100'
            }`}
          >
            Get Your Free Estimate
          </Link>
          <a
            href="tel:+17186866550"
            className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg border-2 border-white text-white hover:bg-white/10 transition-colors"
          >
            <Phone className="w-5 h-5" />
            (718) 686-6550
          </a>
        </div>
        <p className="text-sm text-white/70 mt-6">
          Licensed & Insured | NYC & Nassau County | Free Estimates Within 24 Hours
        </p>
      </div>
    </section>
  );
}
