import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Shield } from 'lucide-react';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import TestimonialCard from '@/components/TestimonialCard';
import TrustBadges from '@/components/TrustBadges';

export const metadata: Metadata = {
  title: 'Construction Contractor Queens NY | Asif Contracting',
  description:
    'Licensed Queens construction contractor with 25+ years of experience. Home renovations, new construction, additions, and remodeling in Astoria, Flushing, Jamaica, Forest Hills & more. Free estimates.',
  alternates: { canonical: '/service-areas/queens' },
};

const neighborhoods = [
  'Astoria', 'Long Island City', 'Flushing', 'Jamaica', 'Forest Hills',
  'Bayside', 'Jackson Heights', 'Woodside', 'Ridgewood', 'Howard Beach',
  'Ozone Park', 'Rego Park', 'Kew Gardens', 'Sunnyside', 'Whitestone',
];

const specialties = [
  {
    title: 'Detached & Semi-Detached Home Renovations',
    desc: 'Queens has more detached homes than any other borough. We specialize in full-house renovations, additions, and modernizations for the colonial, Tudor, and Cape Cod homes that define neighborhoods like Bayside, Forest Hills, and Howard Beach.',
  },
  {
    title: 'Multi-Family Home Conversions',
    desc: 'From two-family to three-family conversions in Astoria and Ridgewood to legal basement apartments in Jamaica and Ozone Park, we handle the DOB filings, structural engineering, and construction to maximize your property value.',
  },
  {
    title: 'New Construction & Ground-Up Builds',
    desc: 'Queens still has buildable lots and teardown opportunities. We construct new single-family, multi-family, and mixed-use buildings from foundation to certificate of occupancy in neighborhoods across the borough.',
  },
  {
    title: 'Home Additions & Extensions',
    desc: 'Rear extensions, second-story additions, and dormer installations are among our most requested Queens services. We navigate zoning setbacks, FAR calculations, and DOB approvals to add the square footage your family needs.',
  },
];

const services = [
  { name: 'Home Renovations', href: '/services/remodeling', desc: 'Kitchen, bathroom, and whole-home renovations for Queens houses and apartments.' },
  { name: 'Home Improvement', href: '/services/home-improvement', desc: 'Upgrades, repairs, and modernizations for detached and semi-detached homes.' },
  { name: 'New Construction', href: '/services/new-construction', desc: 'Ground-up residential and mixed-use construction across Queens.' },
  { name: 'Exterior Work', href: '/services/exterior-work', desc: 'Roofing, siding, masonry, and facade work for Queens properties.' },
  { name: 'Structural Alterations', href: '/services/alterations', desc: 'Load-bearing wall removals, additions, and structural modifications with PE-stamped plans.' },
];

const faqs = [
  {
    question: 'How much does a home renovation cost in Queens?',
    answer: 'Home renovation costs in Queens typically range from $100 to $250 per square foot, depending on the scope of work and level of finish. A full kitchen remodel runs $25,000 to $65,000, bathrooms $15,000 to $40,000, and a whole-house gut renovation of a typical Queens colonial can range from $200,000 to $500,000+. Queens pricing tends to be 15-25% lower than Manhattan for comparable quality work due to easier logistics and more accessible job sites. We provide detailed, itemized estimates during your free consultation.',
  },
  {
    question: 'Do I need permits for a home renovation in Queens?',
    answer: 'Yes, most significant renovations in Queens require DOB permits. Any work involving structural changes, plumbing relocation, electrical panel upgrades, new additions, or changes to the building footprint requires a permit. Simple cosmetic updates like painting, replacing fixtures in the same location, or cabinet refacing typically do not. We handle all permit filings, expediting, and inspection scheduling as part of every project.',
  },
  {
    question: 'Can you build a home addition in Queens?',
    answer: 'Yes, home additions are one of our most requested services in Queens. The feasibility depends on your lot size, existing FAR (Floor Area Ratio), zoning district, and setback requirements. Rear extensions, second-story additions, and dormer conversions are all common in Queens. We work with architects and expediters to determine what is buildable on your specific lot and manage the entire process from DOB filing through construction.',
  },
  {
    question: 'How long does new construction take in Queens?',
    answer: 'A typical ground-up single-family home in Queens takes 10 to 14 months from permit approval to certificate of occupancy. Multi-family buildings (2-4 units) generally take 12 to 18 months. The timeline includes foundation work, framing, mechanical rough-ins, inspections, and finishing. DOB permit approval can add 2 to 4 months before construction begins. Weather, material availability, and inspection scheduling can all impact the timeline.',
  },
  {
    question: 'Do you convert basements into legal apartments in Queens?',
    answer: 'Yes. Legal basement conversions are popular in Queens, especially in neighborhoods like Jamaica, Ozone Park, and Richmond Hill. Requirements include minimum ceiling heights of 7 feet, proper egress windows, separate means of egress, waterproofing, and compliance with fire safety codes. You will also need a Certificate of Occupancy amendment. We manage the full process from DOB filings to final sign-off and have completed dozens of legal conversions across Queens.',
  },
];

export default function QueensPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4" />
            Queens, New York
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Queens Construction Contractor
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Home renovations in Forest Hills. New builds in Flushing. Additions in Bayside. Asif Contracting has been building across Queens for over two decades.
          </p>
        </div>
      </section>

      <TrustBadges />

      {/* Neighborhoods */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-3">Queens Neighborhoods We Serve</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            Queens is the most diverse borough and the largest by area. From the waterfront towers of Long Island City to the tree-lined blocks of Bayside, we know every corner of this borough.
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

      {/* Queens Specialties */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-3">Queens Construction Specialties</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            Queens has a building stock unlike any other borough — detached homes, multi-family houses, and new condo developments all within the same zip code. We handle all of it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialties.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-orange flex-shrink-0 mt-1" />
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
          <h2 className="text-3xl font-bold text-navy mb-3">Our Queens Services</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            Every service is adapted for the homes and properties that make Queens unique — from pre-war Tudors to brand-new multi-family builds.
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
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">What Queens Clients Say</h2>
          <TestimonialCard
            name="Michael & Linda T."
            location="Forest Hills, Queens"
            text="We hired Asif Contracting to add a second story to our Cape Cod in Forest Hills. They handled everything — the architect coordination, the DOB permits, the structural steel, and the finishing. Our neighbors kept stopping by to watch the progress. The addition gave us three new bedrooms and completely transformed our home. Professional, clean, and on budget."
            rating={5}
            project="Second-Story Addition"
          />
        </div>
      </section>

      <FAQSection
        faqs={faqs}
        heading="Queens Construction FAQs"
        subheading="Common questions from Queens homeowners and property investors."
      />

      {/* Other Boroughs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 mb-4">We also serve:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Manhattan', 'Brooklyn', 'Bronx', 'Staten Island'].map((b) => (
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
        heading="Start Your Queens Project Today"
        subheading="Get a free, no-obligation estimate from a contractor who knows Queens construction inside and out."
      />
    </>
  );
}
