import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Shield, Hammer, AlertTriangle, FileText, Ruler } from 'lucide-react';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import TrustBadges from '@/components/TrustBadges';

export const metadata: Metadata = {
  title: 'Structural Alterations NYC | Wall Removals, Additions & DOB Permits',
  description:
    'Licensed NYC contractor for structural alterations — load-bearing wall removals, building additions, floor openings, and DOB alteration permits. PE-stamped plans, full permit management. 25+ years experience. Free estimates.',
  alternates: { canonical: '/services/alterations' },
  keywords: [
    'structural alterations NYC',
    'load-bearing wall removal NYC',
    'building alterations New York',
    'DOB alteration permit NYC',
    'structural contractor Manhattan',
    'wall removal Brooklyn',
    'home addition NYC',
  ],
};

const alterationTypes = [
  {
    icon: Hammer,
    title: 'Load-Bearing Wall Removals',
    description:
      'Opening up floor plans by removing load-bearing walls is one of the most requested alterations in NYC. We install steel beams, LVL headers, or post-and-beam systems to safely transfer loads. Every removal includes PE-stamped structural drawings and DOB-approved plans.',
  },
  {
    icon: Ruler,
    title: 'Building Additions & Extensions',
    description:
      'Rear extensions, side additions, second-story additions, and dormer installations that add usable square footage to your property. We handle zoning analysis, FAR calculations, structural engineering, and full DOB permit filing.',
  },
  {
    icon: AlertTriangle,
    title: 'Floor Openings & Stair Installations',
    description:
      'Creating floor openings for new staircases, dumbwaiters, or multi-level connections requires careful structural engineering. We cut and reinforce floor joists and install new structural framing to support the opening safely.',
  },
  {
    icon: FileText,
    title: 'Building Use Conversions',
    description:
      'Converting a building from one use to another — commercial to residential, single-family to multi-family, or cellar to habitable space — requires DOB alteration permits, updated certificates of occupancy, and often significant structural work. We manage the full process.',
  },
  {
    icon: Shield,
    title: 'Structural Reinforcement',
    description:
      'Strengthening foundations, reinforcing floor systems, adding structural steel, and repairing deteriorated structural elements. Essential for aging NYC buildings that need to support modern loads or meet current code requirements.',
  },
  {
    icon: Hammer,
    title: 'Facade Alterations',
    description:
      'New window openings, door relocations, facade modifications, and storefront installations. Exterior alterations often require both DOB approval and, in historic districts, Landmarks Preservation Commission review.',
  },
];

const includedItems = [
  'On-site structural assessment',
  'Professional Engineer (PE) structural analysis',
  'PE-stamped structural drawings',
  'DOB alteration permit filing (Type I or Type II)',
  'Expediter coordination and plan examination',
  'Temporary shoring and load management during work',
  'Structural steel fabrication and installation',
  'Concrete and masonry work as required',
  'DOB inspection scheduling and coordination',
  'Post-alteration structural sign-off',
  'Letter of completion from PE',
  'All debris removal and site cleanup',
];

const faqs = [
  {
    question: 'What is the difference between a Type I and Type II alteration in NYC?',
    answer:
      'In NYC, a Type I alteration (Alt-1) involves a change in use, egress, or occupancy of a building — for example, converting a commercial space to residential or changing from a two-family to a three-family home. A Type II alteration (Alt-2) covers work that does not change the use or egress but involves structural modifications, such as load-bearing wall removals or building additions. Type II is the most common permit type for residential structural work. Type III (Alt-3) covers minor work like cosmetic renovations. We determine the correct filing type during our initial assessment.',
  },
  {
    question: 'How much does it cost to remove a load-bearing wall in NYC?',
    answer:
      'Removing a load-bearing wall in NYC typically costs $5,000 to $20,000, depending on the wall length, what it supports, and the type of building. A simple wall removal with a steel beam in a frame house might cost $5,000-$8,000. In a pre-war Manhattan co-op where you need to support multiple floors above, costs can run $12,000-$20,000+. These costs include structural engineering, PE-stamped drawings, DOB permit fees, shoring, steel fabrication, installation, and finishing. We provide a detailed estimate after our engineer assesses your specific situation.',
  },
  {
    question: 'Do I need a structural engineer for alterations in NYC?',
    answer:
      'Yes, any structural alteration in NYC requires a Professional Engineer (PE) or Registered Architect (RA) to prepare and stamp the plans filed with DOB. The engineer analyzes existing conditions, calculates loads, designs the new structural system, and provides drawings that DOB plan examiners review. We work with experienced structural engineers who specialize in NYC residential and commercial buildings. Their fees are typically included in our project estimates.',
  },
  {
    question: 'How long does it take to get a DOB alteration permit?',
    answer:
      'DOB alteration permit timelines vary by filing type and complexity. A straightforward Alt-2 filing (like a wall removal) can be approved in 2 to 6 weeks if plans are clean and there are no objections. More complex Alt-1 filings can take 2 to 4 months. Professional certification (self-certification by a PE or RA) can speed up the process significantly. We use experienced expediters who know the DOB system and can resolve objections quickly.',
  },
  {
    question: 'Can you remove a load-bearing wall in a co-op or condo?',
    answer:
      'Yes, but co-op and condo alterations add extra steps. In addition to DOB permits, you need board approval through an alteration agreement. The board will want to see the structural engineer\'s report, your contractor\'s insurance certificates, and a detailed construction plan. Many boards also require a pre-construction survey of neighboring apartments. We prepare the complete package for board submission and have experience with buildings across Manhattan and Brooklyn.',
  },
  {
    question: 'What happens if I do structural work without a permit in NYC?',
    answer:
      'Unpermitted structural work in NYC can result in DOB violations, fines (starting at $10,000+), stop-work orders, and requirements to restore the original condition at your expense. When you sell, unpermitted work will show up during the buyer\'s due diligence and can kill a deal or reduce your sale price. If structural work was done improperly, it can also be a serious safety hazard. We strongly advise against any structural modifications without proper permits and engineering.',
  },
];

export default function AlterationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">
              Structural Alteration Specialists
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Structural Alterations With Engineering Precision & Full DOB Permitting
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Load-bearing wall removals, building additions, floor openings, and structural
              modifications — done right with PE-stamped plans, proper permits, and experienced
              crews. Asif Contracting has been altering NYC buildings for for 25+ years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center gap-2 bg-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-hover transition-colors shadow-lg shadow-orange/25"
              >
                Get a Free Structural Assessment
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

      {/* Alteration Types */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Structural Alteration Services for NYC Buildings
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Structural work is the foundation of any major renovation. Whether you are opening up
              a floor plan, adding square footage, or converting a building, we bring the engineering
              expertise and construction skill to do it safely and legally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alterationTypes.map((type) => (
              <div
                key={type.title}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 gradient-navy rounded-xl flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{type.title}</h3>
                <p className="text-gray-600 leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              What&apos;s Included in Every Structural Alteration
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Structural work demands precision at every step. Here is exactly what you get when you
              hire Asif Contracting for your alteration project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {includedItems.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
                <CheckCircle className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Why NYC Property Owners Trust Us With Structural Work
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Structural alterations are the highest-stakes work in construction. A mistake
                can compromise building safety, trigger DOB violations, or create liability
                issues. We eliminate that risk.
              </p>
              <ul className="space-y-4">
                {[
                  'In-house relationship with experienced NYC structural engineers',
                  'PE-stamped drawings included with every structural project',
                  'Full DOB alteration permit filing and management',
                  'Experienced crews trained in shoring and temporary support',
                  'Steel fabrication coordination with certified welders',
                  'Co-op and condo board package preparation',
                  'Post-alteration sign-off and letter of completion',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 rounded-2xl h-80 md:h-[28rem] flex items-center justify-center text-gray-400 font-medium">
              Structural Alteration Photo
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={faqs}
        heading="Structural Alteration FAQs for NYC Properties"
        subheading="Common questions about load-bearing wall removals, building additions, and DOB alteration permits in New York City."
      />

      {/* Related Services */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-10">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Remodeling',
                description: 'Kitchen, bathroom, and full-home remodels that often pair with structural changes.',
                href: '/services/remodeling',
              },
              {
                title: 'New Construction',
                description: 'Ground-up builds for when alterations are not enough.',
                href: '/services/new-construction',
              },
              {
                title: 'Interior Work',
                description: 'Drywall, flooring, and finishing to complete your alteration project.',
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
        heading="Need Structural Work in NYC?"
        subheading="Get a free structural assessment and estimate. We will evaluate your project, outline the engineering requirements, and provide transparent pricing."
        variant="navy"
      />
    </>
  );
}
