import type { Metadata } from 'next';
import Link from 'next/link';
import { Star, ArrowRight, ExternalLink } from 'lucide-react';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Reviews & Testimonials | Asif Contracting NYC',
  description:
    'Read 187+ verified reviews from NYC homeowners. See why Asif Contracting Corp is rated 4.9/5 stars for construction, remodeling, and renovation across all 5 boroughs.',
  alternates: { canonical: '/testimonials' },
};

const testimonials = [
  {
    name: 'Michael & Sarah T.',
    location: 'Upper West Side, Manhattan',
    text: 'Asif Contracting completely transformed our pre-war apartment. They handled the DOB permits, managed the co-op board requirements, and delivered a stunning renovation on time. The attention to period detail — restoring our crown moldings while modernizing the kitchen — was exactly what we needed.',
    project: 'Full Apartment Renovation',
    rating: 5,
  },
  {
    name: 'David R.',
    location: 'Park Slope, Brooklyn',
    text: 'We interviewed 6 contractors for our brownstone renovation. Asif was the only one who gave us a detailed, transparent estimate with no hidden costs. They dealt with the DOB filing, the structural engineer, and the plumber — all coordinated seamlessly. The final result exceeded our expectations.',
    project: 'Brownstone Gut Renovation',
    rating: 5,
  },
  {
    name: 'Jennifer L.',
    location: 'Astoria, Queens',
    text: 'Our kitchen and bathroom remodel was completed in 5 weeks — faster than any other contractor quoted. The crew was professional, clean, and respectful of our home. They put down drop cloths every morning and cleaned up every evening. Already referred them to three neighbors.',
    project: 'Kitchen & Bath Remodel',
    rating: 5,
  },
  {
    name: 'Robert & Maria G.',
    location: 'Riverdale, The Bronx',
    text: 'We needed a full roof replacement and new siding on our two-family home. Asif gave us a fair price, started when they said they would, and finished in 10 days. The crew was on-site by 7:30 every morning. No complaints from the neighbors, which in the Bronx is saying something.',
    project: 'Roof & Siding Replacement',
    rating: 5,
  },
  {
    name: 'Patricia K.',
    location: 'Tribeca, Manhattan',
    text: 'I had a nightmare experience with a previous contractor who walked off the job. Asif came in, assessed the mess, and finished the renovation in 6 weeks. They were upfront about what needed to be redone vs. what could be saved. Honest and fair — rare in this city.',
    project: 'Loft Renovation Rescue',
    rating: 5,
  },
  {
    name: 'James & Aisha W.',
    location: 'Crown Heights, Brooklyn',
    text: 'Basement conversion with a separate entrance, egress window, full bathroom, and kitchenette. They handled the DOB cellar-to-basement filing and got us through inspection on the first try. Our rental income now covers our mortgage. Life-changing project.',
    project: 'Basement Conversion',
    rating: 5,
  },
  {
    name: 'Thomas C.',
    location: 'Forest Hills, Queens',
    text: 'Built a 600 sq ft addition on the back of our house — new master bedroom and bathroom. The foundation work, framing, and finishing were all done by Asif\'s own crew, not random subs. You can tell the difference in quality when one team handles everything.',
    project: 'Home Addition',
    rating: 5,
  },
  {
    name: 'Linda & Steve M.',
    location: 'Great Kills, Staten Island',
    text: 'Asif remodeled our entire first floor — opened up the kitchen, new hardwood floors throughout, recessed lighting, and a complete bathroom redo. The price was $8K less than the next closest bid and the quality was better than what we saw at the other contractor\'s showroom.',
    project: 'First Floor Remodel',
    rating: 5,
  },
  {
    name: 'Priya S.',
    location: 'Jackson Heights, Queens',
    text: 'We hired Asif for a commercial buildout of our dental office — 1,800 sq ft with plumbing for 4 operatories, specialized electrical, and a custom reception desk. They coordinated with our equipment vendor, passed all DOB and DOH inspections, and we opened on schedule.',
    project: 'Commercial Office Buildout',
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Client Reviews</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">
            What NYC Homeowners Say
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Don&apos;t take our word for it. Read verified reviews from homeowners, landlords, and business owners across all 5 boroughs.
          </p>

          {/* Overall Rating */}
          <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-5">
            <div>
              <div className="text-5xl font-bold text-white">4.9</div>
              <div className="flex gap-0.5 mt-1 justify-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
            </div>
            <div className="text-left border-l border-white/20 pl-6">
              <div className="text-2xl font-bold text-white">187+</div>
              <div className="text-sm text-gray-300">Verified Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL GRID ===== */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEW PLATFORMS ===== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Find Us on Review Platforms</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto">
            We&apos;re proud of our reputation. Check our reviews on these independent platforms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 px-8 py-4 rounded-xl font-semibold text-navy hover:bg-gray-100 transition-colors"
            >
              Google Reviews <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>
            <a
              href="https://yelp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 px-8 py-4 rounded-xl font-semibold text-navy hover:bg-gray-100 transition-colors"
            >
              Yelp Reviews <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Have a project with us? We&apos;d love your honest feedback — good or bad. It helps us improve.
          </p>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <CTASection
        heading="Join 1,000+ Satisfied NYC Homeowners"
        subheading="See why our clients keep coming back — and referring their neighbors. Get your free estimate today."
        variant="orange"
      />
    </>
  );
}
