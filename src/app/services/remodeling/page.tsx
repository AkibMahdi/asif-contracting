import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Shield, Star, Clock, Ruler, Hammer, Gem } from 'lucide-react';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import TrustBadges from '@/components/TrustBadges';

export const metadata: Metadata = {
  title: 'Kitchen & Bathroom Remodeling NYC | Expert Remodeling Contractor',
  description:
    'Top-rated kitchen, bathroom & basement remodeling in NYC. Asif Contracting Corp delivers stunning remodels across Manhattan, Brooklyn, Queens & all 5 boroughs. Licensed, insured, 21+ years experience. Free estimates.',
  alternates: { canonical: '/services/remodeling' },
  keywords: [
    'kitchen remodeling NYC',
    'bathroom remodeling NYC',
    'basement remodeling NYC',
    'remodeling contractor New York',
    'kitchen renovation Manhattan',
    'bathroom renovation Brooklyn',
    'NYC remodeling company',
  ],
};

const benefits = [
  {
    icon: Ruler,
    title: 'Custom Design',
    description:
      'Every remodel starts with a layout tailored to your space, your lifestyle, and NYC building requirements. No cookie-cutter templates.',
  },
  {
    icon: Gem,
    title: 'Premium Materials',
    description:
      'We source quartz countertops, porcelain tile, solid wood cabinetry, and commercial-grade fixtures from trusted NYC suppliers.',
  },
  {
    icon: Shield,
    title: 'Full Permit Handling',
    description:
      'We pull all DOB permits, schedule inspections, and ensure every remodel meets NYC building code. Zero headaches for you.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description:
      'We lock in a schedule before demo day and stick to it. Average kitchen remodel: 4-6 weeks. Average bathroom: 2-4 weeks.',
  },
];

const includedItems = [
  'Initial consultation and space measurement',
  'Custom design layout and material selection',
  'DOB permit filing and inspection coordination',
  'Full demolition and debris removal (dumpster included)',
  'Plumbing rough-in and fixture installation',
  'Electrical rewiring and new lighting circuits',
  'Custom cabinetry fabrication and installation',
  'Countertop templating, fabrication, and install',
  'Tile work — floors, walls, backsplash, shower surrounds',
  'Finish carpentry, trim, and molding',
  'Final painting and touch-ups',
  'Post-construction deep clean and walkthrough',
];

const remodelingFaqs = [
  {
    question: 'How much does a kitchen remodel cost in NYC?',
    answer:
      'Kitchen remodeling costs in NYC typically range from $25,000 to $75,000 for a mid-range renovation, and $75,000 to $150,000+ for a high-end gut renovation. The wide range depends on your kitchen size, layout complexity, material selections (stock vs. custom cabinetry, laminate vs. quartz countertops), appliance upgrades, and whether plumbing or gas lines need to be relocated. In Manhattan, costs tend to run 15-25% higher than the outer boroughs due to logistics and building requirements. At Asif Contracting, we provide a detailed, itemized estimate before any work begins so there are no surprises.',
  },
  {
    question: 'How long does a bathroom remodel take in New York City?',
    answer:
      'A standard bathroom remodel in NYC takes 2 to 4 weeks for a cosmetic refresh (new tile, vanity, fixtures) and 4 to 8 weeks for a full gut renovation that involves moving plumbing, waterproofing, and reconfiguring the layout. If your building is a co-op or condo, add 2-4 weeks for board approval and alteration agreement processing. We create a detailed project timeline during the planning phase and coordinate deliveries to minimize delays, which is especially important in buildings with elevator reservation requirements and limited loading dock access.',
  },
  {
    question: 'Do I need permits for a remodel in NYC?',
    answer:
      'Yes, most remodeling work in NYC requires permits from the Department of Buildings (DOB). Any project that involves moving or adding plumbing, relocating electrical panels, altering gas lines, or changing the layout of walls requires a work permit. Cosmetic upgrades like painting, replacing fixtures in the same location, or swapping out cabinet fronts typically do not require permits. Asif Contracting handles the entire permit process, including filing applications, coordinating with expediters, and scheduling DOB inspections, so you never have to visit a city office.',
  },
  {
    question: 'Can you remodel my basement into a livable space in NYC?',
    answer:
      'Absolutely. Basement remodeling is one of our specialties. We convert unfinished basements into legal living spaces, home offices, gyms, media rooms, and rental units. In NYC, converting a basement to habitable space requires compliance with egress requirements (window size, ceiling height minimums of 7 feet), waterproofing, proper ventilation, and fire safety measures. If you are creating a legal dwelling unit, you will also need a Certificate of Occupancy amendment. We manage every step, from DOB filings to waterproofing to final finishing.',
  },
  {
    question: 'What is the best countertop material for a NYC kitchen remodel?',
    answer:
      'For NYC kitchens, quartz is the most popular choice because it is non-porous, scratch-resistant, and requires zero sealing. It handles the heavy daily use that New York kitchens demand. Granite remains a solid option for homeowners who prefer natural stone, though it requires periodic sealing. Marble is beautiful but high-maintenance, best suited for bathrooms or bar areas with lighter use. Butcher block works well for secondary prep areas. We walk every client through material samples at our supplier showrooms so you can see, touch, and compare options before making a decision.',
  },
  {
    question: 'Do you work in co-ops and condos in Manhattan and Brooklyn?',
    answer:
      'Yes, we have extensive experience working in co-op and condo buildings throughout Manhattan, Brooklyn, Park Slope, Williamsburg, the Upper West Side, and beyond. We understand alteration agreement requirements, insurance certificate specifications (often requiring $1M-$2M in general liability naming the building as additionally insured), working hour restrictions (typically 8am-5pm weekdays), elevator reservations for material deliveries, and floor protection protocols. We prepare all required documentation for your building management and maintain clean, professional job sites that keep your neighbors and board happy.',
  },
  {
    question: 'Can you handle a multi-room remodel in one project?',
    answer:
      'Multi-room remodels are one of the best ways to maximize value and minimize disruption. When we remodel your kitchen and bathrooms together, or renovate an entire floor, we coordinate all trades in a single project timeline, which is more efficient and often costs 10-15% less than doing each room separately. We phase the work strategically so you can continue living in your home during the renovation when possible, completing one area before opening up the next.',
  },
];

export default function RemodelingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">
              NYC Remodeling Experts
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Kitchen & Bathroom Remodeling That Transforms NYC Homes
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From cramped galley kitchens to spa-worthy bathrooms, Asif Contracting has been
              delivering stunning remodels across all five boroughs for for 21+ years. Licensed,
              insured, and DOB-approved — we handle design, permits, and construction so you get
              a flawless result without the stress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center gap-2 bg-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-hover transition-colors shadow-lg shadow-orange/25"
              >
                Get a Free Remodeling Estimate
              </Link>
              <a
                href="tel:+19173538999"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg border-2 border-white text-white hover:bg-white/10 transition-colors"
              >
                (917) 353-8999
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges variant="light" columns={6} />

      {/* Service Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Full-Service Remodeling for Every Room in Your NYC Home
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you are gutting a pre-war kitchen in a Manhattan brownstone or creating a
              spa bathroom in your Brooklyn townhouse, we bring the same level of precision,
              quality materials, and project management to every remodel.
            </p>
          </div>

          {/* Service Specialties */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                title: 'Kitchen Remodeling',
                description:
                  'Custom cabinetry, quartz countertops, tile backsplashes, new appliance installation, plumbing relocation, and lighting design. We turn outdated NYC kitchens into the heart of your home.',
                icon: Hammer,
              },
              {
                title: 'Bathroom Remodeling',
                description:
                  'Walk-in showers, freestanding tubs, heated floors, custom vanities, and waterproofing systems built to last. From half-baths to master suites.',
                icon: Gem,
              },
              {
                title: 'Basement Remodeling',
                description:
                  'Legal conversions with proper egress, waterproofing, insulation, and finishing. Create a rental unit, home office, gym, or entertainment space below grade.',
                icon: Ruler,
              },
              {
                title: 'Multi-Room Remodels',
                description:
                  'Whole-floor and multi-room renovations coordinated under one timeline. Save 10-15% versus doing each room separately with our bundled project approach.',
                icon: Star,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 gradient-navy rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-5">
                <div className="w-14 h-14 bg-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
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
              What&apos;s Included in Every Remodel
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No hidden fees, no surprise change orders. Here is exactly what you get when you hire
              Asif Contracting for your NYC remodel.
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
                Why NYC Homeowners Choose Asif Contracting for Remodeling
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                After 21+ years and hundreds of completed remodels across Manhattan, Brooklyn,
                Queens, the Bronx, and Staten Island, we have earned a reputation as one of
                NYC&apos;s most reliable remodeling contractors. Here is what sets us apart.
              </p>
              <ul className="space-y-4">
                {[
                  'One dedicated project manager from estimate to final walkthrough',
                  'In-house crews — no random subcontractor surprises',
                  'Transparent pricing with written contracts and payment milestones',
                  'Full DOB permit management and inspection scheduling',
                  'Co-op and condo board package preparation included',
                  'Workmanship warranty on every project we complete',
                  'Daily job site cleanup and neighbor-friendly work practices',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 rounded-2xl h-80 md:h-[28rem] flex items-center justify-center text-gray-400 font-medium">
              Remodeling Project Photo
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={remodelingFaqs}
        heading="Remodeling FAQs for NYC Homeowners"
        subheading="Answers to the most common questions about kitchen, bathroom, and basement remodeling in New York City."
      />

      {/* Related Services */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-10">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Interior Work',
                description: 'Drywall, flooring, trim, and painting to complement your remodel.',
                href: '/services/interior-work',
              },
              {
                title: 'Home Improvement',
                description: 'Full-home renovations that go beyond a single room.',
                href: '/services/home-improvement',
              },
              {
                title: 'Alterations',
                description: 'Need walls moved or structural changes? We handle DOB approvals.',
                href: '/services/alterations',
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

      {/* CTA */}
      <CTASection
        heading="Ready to Remodel Your NYC Home?"
        subheading="Get a free, detailed estimate for your kitchen, bathroom, or basement remodel. We respond within 24 hours."
        variant="navy"
      />
    </>
  );
}
