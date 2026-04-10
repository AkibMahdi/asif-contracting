import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Shield, Building2, HardHat, ClipboardCheck, Ruler } from 'lucide-react';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import TrustBadges from '@/components/TrustBadges';

export const metadata: Metadata = {
  title: 'New Construction Contractor NYC | Ground-Up Builds & Development',
  description:
    'Licensed NYC new construction contractor. Ground-up residential, multi-family, and mixed-use builds across all 5 boroughs. From foundation to certificate of occupancy. 25+ years experience. Free estimates.',
  alternates: { canonical: '/services/new-construction' },
  keywords: [
    'new construction NYC',
    'ground-up construction New York',
    'new home construction NYC',
    'multi-family construction NYC',
    'residential construction contractor NYC',
    'new build contractor Brooklyn',
    'NYC construction company',
  ],
};

const phases = [
  {
    icon: ClipboardCheck,
    title: 'Pre-Construction Planning',
    description:
      'Site surveys, zoning analysis, architectural plans, structural engineering, and DOB permit filing. We coordinate with architects and expediters to get your project approved and shovel-ready.',
  },
  {
    icon: HardHat,
    title: 'Foundation & Structure',
    description:
      'Excavation, foundation work (spread footings, slab-on-grade, or pile foundations), structural steel or wood framing, and roof framing. Every structural element is inspected and approved before we move forward.',
  },
  {
    icon: Ruler,
    title: 'Mechanical & Rough-Ins',
    description:
      'Plumbing rough-in, electrical wiring, HVAC installation, fire suppression systems, and insulation. All mechanical work is coordinated to avoid conflicts and inspected at every stage.',
  },
  {
    icon: Building2,
    title: 'Finishing & Certificate of Occupancy',
    description:
      'Interior finishing (drywall, flooring, trim, paint), fixture installation, final inspections, punch list completion, and certificate of occupancy from DOB. We do not consider a project done until you have your CO in hand.',
  },
];

const buildTypes = [
  {
    title: 'Single-Family Homes',
    description:
      'Custom single-family homes on vacant lots and teardown sites across Queens, Staten Island, the Bronx, and Brooklyn. We build to your plans or work with our architect partners to design your dream home from scratch.',
  },
  {
    title: 'Multi-Family Residential',
    description:
      'Two-family, three-family, and small multi-family buildings (up to 6 units) designed for owner-occupants and investors. We optimize layouts for rental income while meeting all NYC housing and fire code requirements.',
  },
  {
    title: 'Mixed-Use Buildings',
    description:
      'Ground-floor commercial with residential above — a proven model across NYC. We build mixed-use structures that meet both commercial and residential code requirements and maximize the property value of your lot.',
  },
  {
    title: 'Townhouse & Row House Construction',
    description:
      'New townhouse and row house construction on infill lots, particularly in Brooklyn and the Bronx. Modern floor plans with brownstone-compatible facades that respect neighborhood character while delivering contemporary interiors.',
  },
];

const includedItems = [
  'Pre-construction consultation and feasibility analysis',
  'Architect and engineer coordination',
  'Full DOB permit filing and approval management',
  'Site preparation and excavation',
  'Foundation construction and waterproofing',
  'Structural framing — wood, steel, or masonry',
  'Roofing and exterior envelope',
  'Complete plumbing, electrical, and HVAC systems',
  'Fire suppression and safety systems',
  'Interior finishing — drywall, flooring, trim, paint',
  'Kitchen and bathroom installation',
  'All DOB inspections and final sign-off',
  'Certificate of Occupancy acquisition',
  'Post-construction warranty',
];

const faqs = [
  {
    question: 'How much does new construction cost per square foot in NYC?',
    answer:
      'New construction costs in NYC typically range from $200 to $400 per square foot for residential buildings, depending on the borough, building type, and level of finish. A standard single-family home runs $200-$300/sq ft, while a high-end custom home can exceed $400/sq ft. Multi-family construction generally falls in the $180-$280/sq ft range. Manhattan and brownstone Brooklyn tend to be on the higher end due to site constraints and logistics. These numbers include construction costs but not land, soft costs (architect, engineer, permits), or site work, which can add 15-25% to the total budget.',
  },
  {
    question: 'How long does it take to build a new home in NYC?',
    answer:
      'A typical ground-up single-family home takes 10 to 14 months from permit approval to certificate of occupancy. Multi-family buildings (2-6 units) generally take 12 to 18 months. The pre-construction phase (design, engineering, DOB approval) adds 3 to 6 months before construction begins. Key factors that affect timeline include foundation type, weather, material lead times, inspection scheduling, and utility connections. We create a detailed construction schedule before breaking ground and update it weekly throughout the project.',
  },
  {
    question: 'What permits are needed for new construction in NYC?',
    answer:
      'New construction in NYC requires a New Building (NB) permit from the DOB, which is the most comprehensive permit type. The application includes architectural plans, structural engineering, zoning analysis, environmental review (if applicable), and utility coordination. You will also need separate permits for plumbing, electrical, and fire suppression work. During construction, DOB inspectors visit at multiple stages — foundation, framing, mechanical rough-ins, and final inspection. We manage the entire permit process from initial filing through certificate of occupancy.',
  },
  {
    question: 'Can you build on a vacant lot in NYC?',
    answer:
      'Yes, provided the lot is zoned for the type of building you want to construct. We start every project with a zoning analysis to determine what is buildable — maximum building height, floor area ratio (FAR), lot coverage, setbacks, and parking requirements. Some lots may have additional restrictions (landmark districts, flood zones, environmental conditions) that affect what can be built. We work with architects and zoning consultants to maximize the buildable envelope on your specific lot.',
  },
  {
    question: 'Do you handle the full process from design to certificate of occupancy?',
    answer:
      'Yes. We offer full-scope new construction services from pre-construction through CO. This includes site evaluation, architect and engineer coordination, DOB permit filing, all construction trades (foundation, framing, mechanical, finishing), inspection management, and final certificate of occupancy acquisition. Having one contractor manage the entire process eliminates the communication gaps and finger-pointing that happen when owners try to coordinate multiple contractors independently.',
  },
  {
    question: 'What is the difference between wood frame and steel frame construction in NYC?',
    answer:
      'Wood frame construction is standard for 1-3 story residential buildings in NYC and is the most cost-effective option. It is faster to build and works well for single-family and small multi-family homes. Steel frame construction is required for buildings over 3 stories or when large open spans are needed (like ground-floor commercial spaces). Steel is stronger, more fire-resistant, and allows for more flexible floor plans, but costs 20-40% more than wood framing. We recommend the appropriate structural system based on your building type, height, and design requirements.',
  },
];

export default function NewConstructionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">
              NYC New Construction
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ground-Up Construction From Foundation to Certificate of Occupancy
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Building from scratch demands a contractor who can manage every phase — permits,
              foundation, framing, mechanical systems, finishing, and final inspections. Asif
              Contracting has been delivering new construction across NYC for for 25+ years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center gap-2 bg-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-hover transition-colors shadow-lg shadow-orange/25"
              >
                Get a Free Construction Estimate
              </Link>
              <a
                href="tel:+17186866550"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg border-2 border-white text-white hover:bg-white/10 transition-colors"
              >
                (718) 686-6550
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges variant="light" columns={6} />

      {/* Construction Phases */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our New Construction Process
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              New construction is a marathon, not a sprint. Here is how we manage every phase to
              deliver your building on time, on budget, and built to last.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, i) => (
              <div
                key={phase.title}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow relative"
              >
                <div className="absolute top-4 right-4 text-4xl font-bold text-gray-100">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="w-12 h-12 gradient-navy rounded-xl flex items-center justify-center mb-4">
                  <phase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{phase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Types */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              What We Build
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From custom single-family homes to multi-family investment properties, we have the
              experience and capability to build it right.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {buildTypes.map((type) => (
              <div key={type.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-navy mb-2">{type.title}</h3>
                <p className="text-gray-600 leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Full-Scope Construction Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              One contractor from first shovel to final CO. Here is everything included in our
              new construction service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {includedItems.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                <CheckCircle className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-2xl h-80 md:h-[28rem] flex items-center justify-center text-gray-400 font-medium">
              New Construction Photo
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Why Developers and Homeowners Choose Asif Contracting
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                New construction is the most complex type of building project. It requires a
                contractor who can manage dozens of moving parts without dropping the ball. That
                has been our job for over two decades.
              </p>
              <ul className="space-y-4">
                {[
                  '25+ years of new construction experience across all five boroughs',
                  'In-house crews for foundation, framing, mechanical, and finishing',
                  'DOB permit management from NB filing through CO',
                  'Weekly progress updates with photo documentation',
                  'Fixed-price contracts with clear payment milestones',
                  'Full insurance coverage and bonding capability',
                  'Post-construction warranty on all workmanship',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={faqs}
        heading="New Construction FAQs"
        subheading="Common questions about building new homes and multi-family properties in New York City."
      />

      {/* Related Services */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-10">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Structural Alterations',
                description: 'Additions, structural modifications, and building expansions.',
                href: '/services/alterations',
              },
              {
                title: 'Exterior Work',
                description: 'Facade construction, roofing, siding, and masonry for new buildings.',
                href: '/services/exterior-work',
              },
              {
                title: 'Interior Work',
                description: 'Drywall, flooring, trim, and finishing for new construction interiors.',
                href: '/services/interior-work',
              },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-orange/30 transition-all"
              >
                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-orange font-semibold text-sm">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Build From the Ground Up?"
        subheading="Get a free consultation for your new construction project. We will assess your lot, discuss your vision, and provide a detailed estimate."
        variant="navy"
      />
    </>
  );
}
