import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Shield, Home, Wrench, Lightbulb, Droplets } from 'lucide-react';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import TrustBadges from '@/components/TrustBadges';

export const metadata: Metadata = {
  title: 'Home Improvement Contractor NYC | Renovations & Upgrades',
  description:
    'Full-service home improvement contractor in NYC. Kitchen upgrades, bathroom renovations, window replacement, plumbing, electrical, and whole-home modernization. Licensed, insured, 21+ years experience. Free estimates.',
  alternates: { canonical: '/services/home-improvement' },
  keywords: [
    'home improvement NYC',
    'home renovation contractor NYC',
    'home upgrades New York',
    'NYC home improvement company',
    'house renovation Brooklyn',
    'home repair Queens',
  ],
};

const services = [
  {
    icon: Home,
    title: 'Whole-Home Renovations',
    description:
      'Complete home modernization from top to bottom — updated layouts, new kitchens and bathrooms, flooring throughout, fresh paint, and modern fixtures. We transform outdated NYC homes into contemporary living spaces.',
  },
  {
    icon: Wrench,
    title: 'Kitchen & Bathroom Upgrades',
    description:
      'Not every kitchen or bathroom needs a gut renovation. We handle targeted upgrades — new countertops, cabinet refacing, fixture replacements, tile updates, and layout tweaks that make a big impact without a full demo.',
  },
  {
    icon: Lightbulb,
    title: 'Electrical & Lighting Upgrades',
    description:
      'Panel upgrades, new circuits, recessed lighting, under-cabinet lighting, smart switches, and outlet additions. Many NYC homes are running on outdated electrical — we bring them up to code and up to date.',
  },
  {
    icon: Droplets,
    title: 'Plumbing Modernization',
    description:
      'Replace old galvanized or lead pipes, install new fixtures, add washing machine hookups, upgrade water heaters, and address low water pressure. We solve the plumbing problems that plague older NYC buildings.',
  },
  {
    icon: Shield,
    title: 'Window & Door Replacement',
    description:
      'Energy-efficient window installation, entry door upgrades, sliding door replacements, and storm door additions. Proper window installation in NYC means meeting energy code, noise reduction, and building-specific requirements.',
  },
  {
    icon: Home,
    title: 'Basement & Attic Finishing',
    description:
      'Convert underused space into legal living areas, home offices, gyms, or entertainment rooms. We handle egress requirements, waterproofing, insulation, and all finishing work to maximize your home\'s usable square footage.',
  },
];

const benefits = [
  {
    title: 'One Contractor, Every Trade',
    description:
      'Home improvement projects touch multiple trades — plumbing, electrical, carpentry, painting. We coordinate all of them under one project manager, so you deal with one company, one schedule, and one point of contact.',
  },
  {
    title: 'Permit-Ready From Day One',
    description:
      'We know which home improvements require DOB permits and which do not. When permits are needed, we handle the filing, expediting, and inspections. No surprises, no stop-work orders.',
  },
  {
    title: 'Budget-Conscious Options',
    description:
      'Not every improvement needs to be a gut renovation. We offer tiered options for every project — from budget-friendly refreshes to premium upgrades — so you can improve your home without overbuilding.',
  },
  {
    title: 'Minimal Disruption',
    description:
      'We phase work to minimize impact on your daily life. When possible, we complete one area before moving to the next, keep work areas sealed off, and clean up every day.',
  },
];

const includedItems = [
  'Free in-home consultation and assessment',
  'Written scope of work and detailed estimate',
  'Permit filing where required',
  'Material sourcing and supplier coordination',
  'Professional demolition and debris removal',
  'All trade work — plumbing, electrical, carpentry',
  'Fixture and hardware installation',
  'Painting, trim, and finishing details',
  'Daily cleanup and final deep clean',
  'Post-project walkthrough and punch list',
  'Written workmanship warranty',
  'Follow-up visit within 30 days',
];

const faqs = [
  {
    question: 'What counts as home improvement vs. remodeling in NYC?',
    answer:
      'In NYC, home improvement generally refers to upgrades, repairs, and modernizations that improve your home without fundamentally changing the layout or structure — think new windows, updated plumbing, electrical upgrades, or a kitchen refresh. Remodeling involves more significant changes like gut renovations, wall removals, or complete redesigns. The distinction matters for permitting: some home improvements can be done with just an HIC license, while remodeling projects typically require DOB permits. We handle both and will advise you on exactly what your project requires.',
  },
  {
    question: 'How much do common home improvements cost in NYC?',
    answer:
      'Common NYC home improvement costs: window replacement $800-$2,000 per window installed, electrical panel upgrade $2,500-$5,000, bathroom refresh (new fixtures, tile, vanity) $8,000-$20,000, kitchen upgrade (countertops, backsplash, hardware) $10,000-$30,000, hardwood floor refinishing $4-$8 per square foot, interior painting $3-$6 per square foot. These are typical ranges across the five boroughs; Manhattan pricing tends to run higher due to logistics. We provide exact quotes after an in-home assessment.',
  },
  {
    question: 'Do I need permits for home improvement work in NYC?',
    answer:
      'It depends on the scope. You generally do NOT need permits for: painting, replacing fixtures in the same location, cosmetic updates, cabinet refacing, or flooring installation. You DO need permits for: electrical panel upgrades, new plumbing lines, structural changes, window size changes, adding rooms, or converting spaces. We assess every project and handle all necessary permits. Working without required permits can result in fines and complications when you sell.',
  },
  {
    question: 'Can you work in occupied homes during improvements?',
    answer:
      'Yes, most of our home improvement projects are completed while families continue living in their homes. We phase the work strategically, seal off work areas with zip walls, use dust containment systems, and clean up at the end of every workday. For projects that affect essential systems (like a full plumbing replacement), we coordinate with you to minimize disruption and ensure you always have access to at least one functional bathroom and kitchen.',
  },
  {
    question: 'What is the best home improvement for resale value in NYC?',
    answer:
      'The highest-ROI home improvements in NYC are: (1) kitchen upgrades — even a mid-range refresh returns 70-80% of cost, (2) bathroom modernization — updated bathrooms are deal-makers for NYC buyers, (3) hardwood floor refinishing — one of the cheapest improvements with the biggest visual impact, (4) electrical panel upgrade — removes a major red flag for buyers and inspectors, and (5) window replacement — energy savings and noise reduction are huge selling points in NYC. We help prioritize improvements based on your budget and goals.',
  },
  {
    question: 'How long do typical home improvement projects take?',
    answer:
      'Timeline varies by scope: window replacement (2-5 days), electrical panel upgrade (1-2 days), bathroom refresh (1-2 weeks), kitchen upgrade without layout changes (2-3 weeks), whole-home modernization (4-8 weeks), basement finishing (3-6 weeks). These timelines assume permits are already in place. Permit approval can add 2-4 weeks for projects that require DOB filings. We provide a detailed schedule during your estimate so you can plan accordingly.',
  },
];

export default function HomeImprovementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">
              NYC Home Improvement Experts
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Home Improvement That Actually Improves Your Home
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From a single room upgrade to a whole-home modernization, Asif Contracting delivers
              practical, high-quality home improvements across all five boroughs. Licensed, insured,
              and trusted by NYC homeowners for 21+ years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center gap-2 bg-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-hover transition-colors shadow-lg shadow-orange/25"
              >
                Get a Free Estimate
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

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Complete Home Improvement Services for NYC Properties
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you need a targeted upgrade or a comprehensive modernization, we bring the right
              trades, the right materials, and the right project management to every home improvement job.
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

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Why NYC Homeowners Trust Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Home improvement should make your life better, not harder. Here is how we deliver
              on that promise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-navy mb-2">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
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
              What&apos;s Included in Every Project
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No hidden fees. No surprise bills. Every home improvement project includes these essentials.
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
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Home Improvement Done Right the First Time
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                After 21+ years of improving homes across Manhattan, Brooklyn, Queens, the Bronx,
                and Staten Island, we have seen every type of home and every type of challenge.
                That experience means fewer surprises and better results.
              </p>
              <ul className="space-y-4">
                {[
                  'Licensed NYC Home Improvement Contractor (HIC)',
                  'In-house plumbing, electrical, and carpentry crews',
                  'Transparent pricing with written contracts',
                  'Full DOB permit handling when required',
                  'Clean, respectful work in occupied homes',
                  'Workmanship warranty on every project',
                  'References from homeowners across all five boroughs',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-200 rounded-2xl h-80 md:h-[28rem] flex items-center justify-center text-gray-400 font-medium">
              Home Improvement Project Photo
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={faqs}
        heading="Home Improvement FAQs for NYC Homeowners"
        subheading="Answers to the most common questions about home improvement projects in New York City."
      />

      {/* Related Services */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-10">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Remodeling',
                description: 'Full kitchen, bathroom, and basement remodels for bigger transformations.',
                href: '/services/remodeling',
              },
              {
                title: 'Interior Work',
                description: 'Drywall, flooring, trim, and painting for the finishing details.',
                href: '/services/interior-work',
              },
              {
                title: 'Exterior Work',
                description: 'Roofing, siding, and masonry to improve curb appeal and protect your home.',
                href: '/services/exterior-work',
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
        heading="Ready to Improve Your NYC Home?"
        subheading="Get a free, no-obligation estimate for your home improvement project. We respond within 24 hours."
        variant="navy"
      />
    </>
  );
}
