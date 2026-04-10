import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Shield } from 'lucide-react';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import TestimonialCard from '@/components/TestimonialCard';
import TrustBadges from '@/components/TrustBadges';

export const metadata: Metadata = {
  title: 'Construction Contractor Bronx NY | Asif Contracting',
  description:
    'Licensed Bronx construction contractor with 25+ years of experience. Home renovations, multi-family construction, gut rehabs, and new builds in Riverdale, Pelham Bay, Fordham & more. Free estimates.',
  alternates: { canonical: '/service-areas/bronx' },
};

const neighborhoods = [
  'Riverdale', 'Pelham Bay', 'Throggs Neck', 'Morris Park', 'Fordham',
  'Kingsbridge', 'Wakefield', 'City Island', 'Mott Haven', 'Hunts Point',
  'Parkchester', 'Co-op City', 'Belmont', 'University Heights',
];

const specialties = [
  {
    title: 'Multi-Family Gut Rehabs',
    desc: 'The Bronx has thousands of two-family, three-family, and small multi-family buildings that need modernization. We gut and rebuild these properties from the studs out — new plumbing, electrical, kitchens, bathrooms, and finishes that meet current code and maximize rental income.',
  },
  {
    title: 'Single-Family Home Renovations',
    desc: 'From brick colonials in Pelham Bay to detached homes in Riverdale, we renovate single-family homes throughout the Bronx. Full kitchen and bathroom remodels, basement finishing, additions, and whole-house modernizations are all in our wheelhouse.',
  },
  {
    title: 'New Construction & Infill Development',
    desc: 'The Bronx is experiencing significant new development, especially in Mott Haven and along the waterfront. We build ground-up residential and mixed-use buildings, managing every phase from foundation to certificate of occupancy.',
  },
  {
    title: 'Exterior Restoration & Masonry',
    desc: 'Bronx buildings take a beating from weather and age. We handle brick re-pointing, facade restoration, stoop rebuilds, roofing, and waterproofing to protect your property and meet DOB facade inspection requirements.',
  },
];

const services = [
  { name: 'Home Renovations', href: '/services/remodeling', desc: 'Kitchen, bathroom, and whole-home renovations for Bronx houses and apartments.' },
  { name: 'Home Improvement', href: '/services/home-improvement', desc: 'Upgrades, modernizations, and repairs for single and multi-family Bronx homes.' },
  { name: 'New Construction', href: '/services/new-construction', desc: 'Ground-up residential and mixed-use development across the Bronx.' },
  { name: 'Exterior Work', href: '/services/exterior-work', desc: 'Roofing, siding, masonry, and facade restoration for Bronx properties.' },
  { name: 'Structural Alterations', href: '/services/alterations', desc: 'Load-bearing wall removals, floor openings, and structural modifications.' },
];

const faqs = [
  {
    question: 'How much does a home renovation cost in the Bronx?',
    answer: 'Home renovation costs in the Bronx typically range from $80 to $200 per square foot, depending on the scope. Kitchen remodels run $20,000 to $55,000, bathrooms $12,000 to $35,000, and a full gut renovation of a two-family house can range from $250,000 to $600,000+. The Bronx generally offers the most competitive pricing among the five boroughs while still requiring the same DOB permits and code compliance. We provide transparent, line-item estimates at every consultation.',
  },
  {
    question: 'Do you renovate multi-family homes in the Bronx?',
    answer: 'Multi-family renovations are one of our core specialties in the Bronx. We renovate two-family, three-family, and small apartment buildings, handling everything from gut rehabs to unit-by-unit upgrades. Our work includes full DOB permit filings, plumbing and electrical upgrades, new kitchens and bathrooms, and fire safety compliance. Many Bronx property owners hire us to modernize older buildings and increase rental income.',
  },
  {
    question: 'Can you build a new house in the Bronx?',
    answer: 'Yes. We construct new single-family and multi-family homes on vacant and teardown lots across the Bronx. The process includes site surveys, architectural plans, DOB permits, foundation work, framing, mechanical systems, and finishing. A typical single-family new build takes 10 to 14 months from permit approval to completion. We handle the full scope from pre-construction planning to final certificate of occupancy.',
  },
  {
    question: 'What exterior work do you do for Bronx buildings?',
    answer: 'We handle all exterior construction including roofing (flat and pitched), siding installation and replacement, brick re-pointing and masonry repair, stoop and step rebuilds, waterproofing, and window replacement. For buildings subject to Local Law 11 facade inspections, we provide the repairs needed to achieve a safe status. Our crews work year-round on Bronx exteriors.',
  },
  {
    question: 'How do Bronx construction permits work?',
    answer: 'Bronx construction projects follow the same NYC DOB permit process as the other boroughs. You need permits for structural work, plumbing changes, electrical upgrades, additions, and new construction. We file all applications through the Bronx borough office, coordinate with DOB examiners, schedule inspections, and ensure every project receives proper sign-off. Our familiarity with the Bronx DOB office helps keep the process moving efficiently.',
  },
];

export default function BronxPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4" />
            Bronx, New York
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Bronx Construction Contractor
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Multi-family rehabs in Fordham. Home renovations in Pelham Bay. New builds in Mott Haven. Asif Contracting has been building the Bronx for over two decades.
          </p>
        </div>
      </section>

      <TrustBadges />

      {/* Neighborhoods */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-3">Bronx Neighborhoods We Serve</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            From the grand homes of Riverdale to the growing waterfront of Mott Haven, our crews are working across the Bronx every day. We know the building stock, the zoning, and the community.
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

      {/* Bronx Specialties */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-3">Bronx Construction Specialties</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            The Bronx has its own construction challenges and opportunities — from aging multi-family buildings that need gut rehabs to new development sites with real potential.
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
          <h2 className="text-3xl font-bold text-navy mb-3">Our Bronx Services</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            Every service is tailored for Bronx properties — from pre-war brick multi-families to new residential developments.
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
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">What Bronx Clients Say</h2>
          <TestimonialCard
            name="Carlos R."
            location="Morris Park, Bronx"
            text="We bought a two-family fixer-upper in Morris Park and Asif Contracting turned it into a completely renovated, modern building. New kitchens, new bathrooms, new electrical, new plumbing — the whole works. Both units are now rented at top-of-market rates. They handled all the permits and inspections without a single issue. Could not recommend them more."
            rating={5}
            project="Two-Family Gut Renovation"
          />
        </div>
      </section>

      <FAQSection
        faqs={faqs}
        heading="Bronx Construction FAQs"
        subheading="Common questions from Bronx homeowners and property investors."
      />

      {/* Other Boroughs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 mb-4">We also serve:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Manhattan', 'Brooklyn', 'Queens', 'Staten Island'].map((b) => (
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
        heading="Start Your Bronx Project Today"
        subheading="Get a free, no-obligation estimate from a contractor who knows Bronx construction inside and out."
      />
    </>
  );
}
