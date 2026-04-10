import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, CheckCircle, Home, Shield } from 'lucide-react';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import TestimonialCard from '@/components/TestimonialCard';
import TrustBadges from '@/components/TrustBadges';

export const metadata: Metadata = {
  title: 'Construction Contractor Brooklyn NY | Asif Contracting',
  description:
    'Brooklyn construction contractor with 21+ years of experience. Brownstone renovations, townhouse remodeling, row house conversions, and new construction. Park Slope, Williamsburg, DUMBO & more. Free estimates.',
  alternates: { canonical: '/service-areas/brooklyn' },
};

const neighborhoods = [
  'Park Slope', 'Williamsburg', 'DUMBO', 'Brooklyn Heights', 'Bay Ridge',
  'Bushwick', 'Bed-Stuy', 'Crown Heights', 'Flatbush', 'Cobble Hill',
  'Carroll Gardens', 'Red Hook', 'Greenpoint', 'Sunset Park',
];

const specialties = [
  {
    title: 'Brownstone Gut Renovations',
    desc: 'Brooklyn brownstones are beautiful but demanding. Sagging joists, deteriorated lintels, and century-old plumbing are standard. We restore the bones of these buildings while opening them up for modern living — new kitchens, reconfigured bathrooms, and owner suites that never existed in the original floor plan.',
  },
  {
    title: 'Townhouse & Row House Conversions',
    desc: 'Converting a multi-family row house back to a single-family home — or the other direction — requires DOB alteration permits, structural engineering, and deep knowledge of Brooklyn zoning. We have handled dozens of these conversions in Bed-Stuy, Crown Heights, and Bushwick.',
  },
  {
    title: 'Garden-Level & Cellar Build-Outs',
    desc: 'Brooklyn owners are maximizing every square foot. We transform damp, unfinished cellars into legal living space with proper egress, waterproofing, and mechanical systems. From rentable garden apartments in Park Slope to home offices in Carroll Gardens, below-grade is our specialty.',
  },
  {
    title: 'New Development & Infill Construction',
    desc: 'Brooklyn is still building. We construct ground-up multi-family and mixed-use buildings on infill lots in neighborhoods like Bushwick, East New York, and Sunset Park. Our team manages the full scope from foundation to certificate of occupancy.',
  },
];

const services = [
  { name: 'Brownstone Remodeling', href: '/services/remodeling', desc: 'Full-floor and whole-house brownstone renovations preserving historic character.' },
  { name: 'Home Improvement', href: '/services/home-improvement', desc: 'Kitchen upgrades, bathroom overhauls, and layout changes for Brooklyn homes.' },
  { name: 'New Construction', href: '/services/new-construction', desc: 'Ground-up residential builds and multi-family development across Brooklyn.' },
  { name: 'Exterior Restoration', href: '/services/exterior-work', desc: 'Facade repair, brownstone re-pointing, stoop rebuilds, and cornice restoration.' },
  { name: 'Structural Alterations', href: '/services/alterations', desc: 'Load-bearing wall removals, floor-through conversions, and rear extensions.' },
];

const faqs = [
  {
    question: 'How much does a Brooklyn brownstone renovation cost?',
    answer: 'A full gut renovation of a Brooklyn brownstone typically runs $200 to $350 per square foot, depending on the level of finish and structural work involved. A single-floor renovation of a parlor level might cost $150,000 to $300,000, while a full four-story gut can range from $600,000 to over $1 million. We provide detailed, line-item estimates after an in-person walkthrough.',
  },
  {
    question: 'Do you work with Brooklyn brownstone facades and stoops?',
    answer: 'Yes. We handle full brownstone facade restoration including re-pointing, dutchman repairs, stoop rebuilds, and cornice work. If your building is in a historic district like Park Slope or Brooklyn Heights, we coordinate LPC approval as part of the project.',
  },
  {
    question: 'Can you convert my Brooklyn two-family to a single-family home?',
    answer: 'We handle these conversions regularly. The process requires a DOB alteration permit (typically Type I), updated zoning analysis, and often structural modifications to open up between floors. We manage the full process from architect coordination through final sign-off.',
  },
  {
    question: 'How do you handle construction in attached Brooklyn row houses?',
    answer: 'Attached row houses share party walls with neighbors, which means any structural work — especially near the shared wall — needs careful engineering. We protect adjacent properties, comply with party wall agreements, and communicate proactively with neighbors. Our crews understand the sensitivity of working in tight Brooklyn blocks where houses are literally connected.',
  },
  {
    question: 'What permits do I need for a Brooklyn home renovation?',
    answer: 'Most significant renovations in Brooklyn require DOB permits. Simple cosmetic updates (paint, hardware, non-structural work) generally do not need permits. Anything involving plumbing relocation, electrical panel upgrades, structural changes, or layout modifications requires a DOB filing. We handle all permit applications and can typically tell you what is needed during your free estimate.',
  },
];

export default function BrooklynPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4" />
            Brooklyn, New York
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Brooklyn Construction Contractor
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Brownstone guts in Park Slope. Townhouse conversions in Bed-Stuy. New builds in Bushwick. Asif Contracting has been shaping Brooklyn for 21+ years.
          </p>
        </div>
      </section>

      <TrustBadges />

      {/* Neighborhoods */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-3">Brooklyn Neighborhoods We Serve</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            Brooklyn is 70 square miles of row houses, brownstones, new condo towers, and everything in between. We have worked on blocks from the Promenade to the Belt Parkway.
          </p>
          <div className="flex flex-wrap gap-3">
            {neighborhoods.map((n) => (
              <span key={n} className="bg-gray-100 text-navy font-medium px-4 py-2 rounded-full text-sm">
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Brooklyn Specialties */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-3">Brooklyn Construction Specialties</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            Brooklyn is a borough of brownstones and row houses — building types that require specific knowledge most general contractors do not have.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialties.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <Home className="w-6 h-6 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-2">{s.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-3">Our Brooklyn Services</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            Every service is adapted for Brooklyn building stock — from 1890s limestone row houses to brand-new condo developments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-orange/30 transition-all"
              >
                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-orange transition-colors">
                  {s.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-orange text-sm font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">What Brooklyn Clients Say</h2>
          <TestimonialCard
            name="David & Sarah K."
            location="Park Slope, Brooklyn"
            text="We bought a run-down brownstone on 5th Street and Asif Contracting turned it into our dream home. They gutted all four floors, rebuilt the stoop, restored the original moldings on the parlor floor, and created a modern open kitchen on the garden level. The project was massive but their team stayed organized and communicative the entire time. Worth every penny."
            rating={5}
            project="Full Brownstone Gut Renovation"
          />
        </div>
      </section>

      <FAQSection
        faqs={faqs}
        heading="Brooklyn Construction FAQs"
        subheading="Common questions from Brooklyn homeowners and property investors."
      />

      {/* Other Boroughs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 mb-4">We also serve:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Manhattan', 'Queens', 'Bronx', 'Staten Island'].map((b) => (
              <Link
                key={b}
                href={`/service-areas/${b.toLowerCase().replace(' ', '-')}`}
                className="text-sm text-navy font-medium bg-gray-100 hover:bg-orange/10 hover:text-orange px-4 py-2 rounded-full transition-colors"
              >
                {b}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Plan Your Brooklyn Renovation"
        subheading="Get a free estimate from a contractor who has renovated brownstones, row houses, and townhouses across every Brooklyn neighborhood."
      />
    </>
  );
}
