import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Building2, CheckCircle } from 'lucide-react';
import CTASection from '@/components/CTASection';
import TrustBadges from '@/components/TrustBadges';

export const metadata: Metadata = {
  title: 'NYC Service Areas | All 5 Boroughs',
  description:
    'Asif Contracting Corp serves all 5 NYC boroughs — Manhattan, Brooklyn, Queens, Bronx & Staten Island. 21+ years of trusted construction, remodeling, and renovation work across New York City.',
  alternates: { canonical: '/service-areas' },
};

const boroughs = [
  {
    name: 'Manhattan',
    slug: 'manhattan',
    projects: 180,
    description: 'Pre-war renovations, luxury apartment remodels, and commercial fit-outs in the heart of NYC.',
    neighborhoods: ['Upper East Side', 'Midtown', 'Chelsea', 'SoHo', 'Tribeca', 'Harlem'],
  },
  {
    name: 'Brooklyn',
    slug: 'brooklyn',
    projects: 150,
    description: 'Brownstone restorations, townhouse gut-renovations, and new development across Kings County.',
    neighborhoods: ['Park Slope', 'Williamsburg', 'DUMBO', 'Brooklyn Heights', 'Bay Ridge', 'Bed-Stuy'],
  },
  {
    name: 'Queens',
    slug: 'queens',
    projects: 120,
    description: 'Single-family renovations, home additions, and multi-family builds in the most diverse borough.',
    neighborhoods: ['Astoria', 'Flushing', 'Long Island City', 'Forest Hills', 'Bayside', 'Jackson Heights'],
  },
  {
    name: 'Bronx',
    slug: 'bronx',
    projects: 75,
    description: 'Residential renovations, new construction, and multi-family property upgrades across the Bronx.',
    neighborhoods: ['Riverdale', 'Pelham Bay', 'Throgs Neck', 'Morris Park', 'Mott Haven', 'City Island'],
  },
  {
    name: 'Staten Island',
    slug: 'staten-island',
    projects: 60,
    description: 'Custom homes, additions, and full-scale renovations on the borough with the biggest lots.',
    neighborhoods: ['Tottenville', 'Great Kills', 'Todt Hill', 'St. George', 'New Dorp', 'Annadale'],
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4" />
            Serving All 5 NYC Boroughs
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            NYC Construction — Every Borough, Every Block
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From Riverdale to Tottenville, Asif Contracting has spent 21+ years building, renovating, and remodeling across every corner of New York City.
          </p>
        </div>
      </section>

      <TrustBadges />

      {/* Borough Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Choose Your Borough</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every borough has its own building codes, construction challenges, and architectural character. We know them all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boroughs.map((borough) => (
              <Link
                key={borough.slug}
                href={`/service-areas/${borough.slug}`}
                className="group bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-orange/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-navy group-hover:text-orange transition-colors">
                    {borough.name}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-gray-600 mb-5">{borough.description}</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-orange mb-4">
                  <Building2 className="w-4 h-4" />
                  {borough.projects}+ Projects Completed
                </div>
                <div className="flex flex-wrap gap-2">
                  {borough.neighborhoods.map((n) => (
                    <span key={n} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                      {n}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Live Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-3">We Cover All of NYC & Nassau County</h2>
            <p className="text-gray-600 text-lg">Our crews are dispatched daily across every borough and into Nassau County.</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 h-80 md:h-[28rem]">
            <iframe
              title="Asif Contracting Service Areas — NYC & Nassau County"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d193595.15830869428!2d-73.97968099999999!3d40.6976701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Why a Local Contractor Matters in NYC</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Borough-Specific Codes', desc: 'DOB requirements vary by borough and building type. We know the rules before we start.' },
              { title: 'Neighborhood Relationships', desc: 'We maintain relationships with local inspectors, suppliers, and subcontractors across every borough.' },
              { title: 'Faster Response Times', desc: 'Our crews are already in your neighborhood. Shorter commutes mean more time on your project.' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <CheckCircle className="w-10 h-10 text-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Need a Contractor in Your Borough?"
        subheading="Tell us where you are and what you need. We will have a project manager in your neighborhood within 24 hours."
      />
    </>
  );
}
