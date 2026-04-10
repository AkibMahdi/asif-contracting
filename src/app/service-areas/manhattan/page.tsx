import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, CheckCircle, Building2, Shield } from 'lucide-react';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import TestimonialCard from '@/components/TestimonialCard';
import TrustBadges from '@/components/TrustBadges';

export const metadata: Metadata = {
  title: 'Construction Contractor Manhattan NY | Asif Contracting',
  description:
    'Licensed Manhattan construction contractor with 21+ years of experience. Apartment renovations, brownstone remodeling, commercial fit-outs, and pre-war restoration. Co-op & condo board approved. Free estimates.',
  alternates: { canonical: '/service-areas/manhattan' },
};

const neighborhoods = [
  'Upper East Side', 'Upper West Side', 'Midtown', 'Chelsea', 'SoHo',
  'Tribeca', 'Financial District', 'Harlem', 'East Village', 'West Village',
  'Greenwich Village', 'Murray Hill', 'Gramercy',
];

const challenges = [
  {
    title: 'Pre-War Building Expertise',
    desc: 'Manhattan is full of pre-war co-ops with plaster walls, old plumbing stacks, and original hardwood that deserves careful handling. We know how to open up a 1920s layout without destroying the character buyers pay a premium for.',
  },
  {
    title: 'Co-op & Condo Board Navigation',
    desc: 'We have been through hundreds of board approval packages. Our alteration agreements, insurance certificates, and construction schedules are board-ready before we ever knock on your door.',
  },
  {
    title: 'Landmark Preservation Compliance',
    desc: 'Working in a landmarked district means LPC review on top of DOB permits. From the Upper West Side to Greenwich Village, we handle both approval tracks simultaneously to keep your timeline on track.',
  },
  {
    title: 'Tight-Space Logistics',
    desc: 'No loading dock? Fifth-floor walk-up? Freight elevator with a two-hour window? We have rigged materials through Manhattan buildings of every size and vintage. Logistics are part of the job — not an excuse for delays.',
  },
];

const services = [
  { name: 'Apartment Renovations', href: '/services/remodeling', desc: 'Gut renovations of co-ops and condos, from studio combos to full-floor spreads.' },
  { name: 'Brownstone & Townhouse Work', href: '/services/home-improvement', desc: 'Multi-floor townhouse renovations including garden-level extensions and parlor-floor restorations.' },
  { name: 'Commercial Fit-Outs', href: '/services/interior-work', desc: 'Office build-outs, retail spaces, and restaurant construction in Midtown, SoHo, and beyond.' },
  { name: 'Structural Alterations', href: '/services/alterations', desc: 'Load-bearing wall removals, floor openings, and structural steel work with PE-stamped drawings.' },
  { name: 'New Construction', href: '/services/new-construction', desc: 'Ground-up residential and mixed-use builds on infill lots across Manhattan.' },
];

const faqs = [
  {
    question: 'How long does a typical Manhattan apartment renovation take?',
    answer: 'A full gut renovation of a Manhattan co-op or condo typically takes 3 to 5 months for construction, plus 4 to 8 weeks for board approval and DOB permits beforehand. Studios and one-bedrooms fall on the shorter end, while pre-war apartments with plumbing relocations or structural work take longer. We provide a detailed timeline during your free estimate.',
  },
  {
    question: 'Do you handle co-op and condo board approval packages?',
    answer: 'Yes. We prepare the full alteration agreement package, including scope of work, construction schedule, insurance certificates, contractor references, and financial documentation. We have worked with boards across the Upper East Side, Upper West Side, Chelsea, and beyond — and we know what each management company expects.',
  },
  {
    question: 'Can you work in landmarked Manhattan buildings?',
    answer: 'Absolutely. We regularly work in both individual landmarks and historic districts throughout Manhattan. Our team coordinates LPC applications alongside DOB filings so both approvals move in parallel, not sequentially.',
  },
  {
    question: 'What is the cost range for a Manhattan kitchen remodel?',
    answer: 'Manhattan kitchen remodels typically range from $35,000 for a cosmetic refresh to $120,000+ for a full gut with custom cabinetry, stone countertops, and appliance upgrades. The biggest cost drivers are plumbing relocation, electrical upgrades, and the specific co-op or condo requirements. We provide transparent, itemized estimates so you know exactly where your money goes.',
  },
  {
    question: 'How do you handle construction logistics in Manhattan high-rises?',
    answer: 'We coordinate with building management on freight elevator schedules, material deliveries, and noise restrictions. Our crews are experienced with early-morning material staging, dumpster permits through DOT, and protecting common areas. We carry the insurance coverage that Manhattan buildings require — typically $2M to $3M in general liability.',
  },
];

export default function ManhattanPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4" />
            Manhattan, New York
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Manhattan Construction Contractor
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From pre-war co-ops on the Upper West Side to commercial fit-outs in Midtown — Asif Contracting has been building Manhattan for over two decades.
          </p>
        </div>
      </section>

      <TrustBadges />

      {/* Neighborhoods */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-3">Manhattan Neighborhoods We Serve</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            Our crews are on-site across Manhattan every day. Whether your project is in a walk-up off Avenue A or a doorman building on Park Avenue, we know the building stock and we know the boards.
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

      {/* Manhattan Challenges */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-3">What Makes Manhattan Construction Different</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            Building in Manhattan is not like building anywhere else. The density, the regulations, and the building types demand a contractor who has done it hundreds of times.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((c) => (
              <div key={c.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-2">{c.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services for Manhattan */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-3">Our Manhattan Services</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            Every service is tailored to the realities of working in Manhattan — tight timelines, strict building rules, and clients who expect exceptional quality.
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
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">What Manhattan Clients Say</h2>
          <TestimonialCard
            name="Rachel M."
            location="Upper West Side, Manhattan"
            text="We gutted our pre-war two-bedroom on West 86th and Asif's team handled everything — the board package, the DOB permits, even coordinating with our neighbor when they had to access the shared plumbing wall. They finished on schedule and the quality is incredible. Our building super said it was the cleanest renovation he has seen in 15 years."
            rating={5}
            project="Full Apartment Renovation"
          />
        </div>
      </section>

      <FAQSection
        faqs={faqs}
        heading="Manhattan Construction FAQs"
        subheading="Common questions from Manhattan homeowners and property managers."
      />

      {/* Other Boroughs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 mb-4">We also serve:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Brooklyn', 'Queens', 'Bronx', 'Staten Island'].map((b) => (
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
        heading="Start Your Manhattan Project Today"
        subheading="Get a free, no-obligation estimate from a contractor who knows Manhattan construction inside and out."
      />
    </>
  );
}
