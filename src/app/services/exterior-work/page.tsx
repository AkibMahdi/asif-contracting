import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Shield, Cloud, Hammer, Droplets, Thermometer, Layers } from 'lucide-react';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import TrustBadges from '@/components/TrustBadges';

export const metadata: Metadata = {
  title: 'Exterior Contractor NYC | Roofing, Siding, Masonry & Facades',
  description:
    'Expert exterior construction in NYC — roofing, siding, masonry, facade restoration, waterproofing, and stoop rebuilds. Licensed NYC contractor with 21+ years experience. Free estimates across all 5 boroughs.',
  alternates: { canonical: '/services/exterior-work' },
  keywords: [
    'exterior contractor NYC',
    'roofing contractor NYC',
    'siding contractor New York',
    'masonry contractor NYC',
    'facade restoration NYC',
    'brownstone facade repair Brooklyn',
    'waterproofing NYC',
  ],
};

const services = [
  {
    icon: Cloud,
    title: 'Roofing',
    description:
      'Complete roof replacements, repairs, and maintenance for flat roofs (EPDM, TPO, modified bitumen) and pitched roofs (asphalt shingle, architectural shingle, slate). We address leaks, ponding water, flashing failures, and end-of-life roof systems across all NYC building types.',
  },
  {
    icon: Layers,
    title: 'Siding & Cladding',
    description:
      'Vinyl siding, fiber cement (HardiePlank), wood clapboard, and metal panel installation. We remove old siding, install proper weather barriers, and deliver a finished exterior that protects your home and transforms curb appeal.',
  },
  {
    icon: Hammer,
    title: 'Masonry & Brick Work',
    description:
      'Brick re-pointing, brownstone repair, limestone restoration, stucco application, and block wall construction. NYC masonry takes a beating from freeze-thaw cycles and salt exposure — we restore it properly with compatible mortars and materials.',
  },
  {
    icon: Droplets,
    title: 'Waterproofing',
    description:
      'Foundation waterproofing, below-grade membrane installation, French drain systems, and exterior drainage solutions. We stop water infiltration at the source to protect your foundation, basement, and structural integrity.',
  },
  {
    icon: Shield,
    title: 'Facade Restoration',
    description:
      'Full facade restoration for brownstones, limestone buildings, and brick structures. Dutchman repairs, cornice restoration, lintel replacement, and decorative detail preservation. We work in landmarked and historic districts with LPC coordination.',
  },
  {
    icon: Thermometer,
    title: 'Stoop, Steps & Railings',
    description:
      'Concrete stoop pours, brownstone stoop rebuilds, bluestone step installation, and metal railing fabrication. NYC stoops are both a functional entrance and an architectural feature — we build them to look great and last decades.',
  },
];

const includedItems = [
  'Exterior inspection and condition assessment',
  'Detailed scope of work and material specifications',
  'DOB permit filing where required',
  'LPC coordination for landmarked properties',
  'Professional demolition and old material removal',
  'Weather barrier and flashing installation',
  'Material installation by experienced tradesmen',
  'Proper drainage and water management details',
  'Scaffold or lift setup and safety compliance',
  'Job site protection and neighbor notification',
  'Final inspection and quality walkthrough',
  'Written warranty on materials and workmanship',
];

const faqs = [
  {
    question: 'How much does a roof replacement cost in NYC?',
    answer:
      'Roof replacement costs in NYC depend on the roof type and size. Flat roof replacement (most common in NYC) typically costs $8 to $15 per square foot for EPDM rubber, $10 to $18 per square foot for TPO, and $12 to $20 per square foot for modified bitumen with a full tear-off. For a typical 1,500 sq ft flat roof, expect $12,000 to $30,000. Pitched roofs with asphalt shingles run $8 to $14 per square foot. Prices include material, labor, tear-off, disposal, and flashing. We provide exact quotes after an on-roof inspection.',
  },
  {
    question: 'How often should a NYC building roof be replaced?',
    answer:
      'Roof lifespan depends on the material: EPDM rubber roofs last 20-25 years, TPO 20-30 years, modified bitumen 15-20 years, and asphalt shingles 20-30 years (architectural shingles on the longer end). NYC roofs face harsh conditions — UV exposure, freeze-thaw cycles, ponding water, and foot traffic from HVAC maintenance. We recommend annual inspections after year 15 for flat roofs and after year 20 for pitched roofs. Catching deterioration early can extend roof life with targeted repairs rather than a full replacement.',
  },
  {
    question: 'What is brownstone facade restoration and do I need it?',
    answer:
      'Brownstone facade restoration involves repairing and preserving the exterior brownstone (a type of sandstone) that clads many Brooklyn, Manhattan, and Bronx buildings. Over time, brownstone deteriorates through spalling, cracking, and erosion. Restoration includes Dutchman repairs (cutting out damaged sections and replacing with new stone), re-pointing mortar joints with compatible lime-based mortar, cornice repair, and protective coating application. If your brownstone facade shows visible deterioration, missing chunks, or efflorescence (white mineral deposits), it needs attention before water infiltration causes structural damage.',
  },
  {
    question: 'Do I need a permit for exterior work in NYC?',
    answer:
      'Many exterior projects in NYC require DOB permits. Roof replacements generally need a permit if the work involves structural changes to the roof deck. Facade work on buildings over 6 stories requires compliance with Local Law 11. Siding replacement may need a permit depending on the scope. Stoop rebuilds and new exterior stairs typically require permits. Masonry re-pointing alone usually does not. In landmarked districts, you may also need LPC approval. We assess permit requirements during your estimate and handle all filings.',
  },
  {
    question: 'What is Local Law 11 and does it affect my building?',
    answer:
      'Local Law 11 (also known as FISP — Facade Inspection & Safety Program) requires buildings over 6 stories in NYC to have their facades inspected every 5 years by a licensed engineer or architect. The inspection classifies the facade as Safe, Safe With a Repair and Maintenance Program (SWARMP), or Unsafe. If your building receives a SWARMP or Unsafe classification, repairs are required within a specified timeframe. We perform the facade repairs needed to bring buildings into compliance and achieve a Safe status.',
  },
  {
    question: 'Can you waterproof my basement from the outside?',
    answer:
      'Yes, exterior waterproofing is the most effective long-term solution for basement water problems. The process involves excavating along the foundation wall, cleaning and repairing the wall surface, applying a waterproof membrane (typically rubberized asphalt or spray-applied), installing a drainage board, and backfilling with gravel and proper drainage. We also install or repair French drain systems and ensure proper grading away from the foundation. Exterior waterproofing is more disruptive and expensive than interior solutions, but it stops water before it reaches the wall rather than managing it after it enters.',
  },
];

export default function ExteriorWorkPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">
              Exterior Construction Specialists
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Roofing, Siding, Masonry & Facade Work That Protects NYC Properties
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Your building&apos;s exterior is its first line of defense against NYC weather and its
              first impression on everyone who walks by. Asif Contracting delivers exterior
              construction that looks great and lasts — 21+ years across all five boroughs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center gap-2 bg-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-hover transition-colors shadow-lg shadow-orange/25"
              >
                Get a Free Exterior Estimate
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

      <TrustBadges variant="light" columns={6} />

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Complete Exterior Construction Services for NYC Buildings
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From roof to foundation, we handle every aspect of your building&apos;s exterior
              envelope. Proper exterior work prevents costly interior damage and maintains
              property value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 gradient-navy rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
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
              What&apos;s Included in Our Exterior Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every exterior project is managed with the same thoroughness — from initial assessment
              through final warranty documentation.
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
            <div className="bg-gray-200 rounded-2xl h-80 md:h-[28rem] flex items-center justify-center text-gray-400 font-medium">
              Exterior Work Photo
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Why NYC Building Owners Choose Asif Contracting for Exterior Work
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Exterior work has zero margin for error. A poorly installed roof leaks. Bad
                pointing lets water into the wall cavity. Cut-rate waterproofing fails within
                a year. We do not cut corners.
              </p>
              <ul className="space-y-4">
                {[
                  'Experienced roofing, masonry, and siding crews on staff',
                  'Full DOB permit handling and inspection management',
                  'LPC coordination for landmarked buildings',
                  'Local Law 11 facade repair compliance',
                  'Proper scaffold and safety equipment on every job',
                  'Manufacturer-certified material installation',
                  'Written warranty on all workmanship and materials',
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
        heading="Exterior Work FAQs for NYC Properties"
        subheading="Common questions about roofing, siding, masonry, facade restoration, and waterproofing in New York City."
      />

      {/* Related Services */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-10">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Structural Alterations',
                description: 'Additions and structural changes that affect your building envelope.',
                href: '/services/alterations',
              },
              {
                title: 'Home Improvement',
                description: 'Full-home upgrades that complement your exterior renovation.',
                href: '/services/home-improvement',
              },
              {
                title: 'New Construction',
                description: 'Ground-up builds with exterior construction included.',
                href: '/services/new-construction',
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
        heading="Need Exterior Work for Your NYC Property?"
        subheading="Get a free exterior assessment and estimate. We will inspect your building, identify issues, and provide transparent pricing."
        variant="navy"
      />
    </>
  );
}
