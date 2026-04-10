import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, Building2, Wrench, PencilRuler, Paintbrush, HardHat, ArrowRight } from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Construction Services in NYC',
  description: 'Full-service construction company in NYC. Home improvement, new construction, remodeling, alterations, interior & exterior work. Licensed & insured. Free estimates across all 5 boroughs.',
  alternates: { canonical: '/services' },
};

const services = [
  {
    title: 'Home Improvement',
    description: 'Complete home renovations that transform your NYC property from outdated to outstanding. We handle everything — design consultation, permits, demolition, construction, and finishing — so you get a turnkey result without the hassle.',
    features: ['Custom home builds & renovations', 'Backsplash & countertops', 'Wood fences & garage construction', 'Paving, driveways & sidewalks', 'Fire damage restoration'],
    href: '/services/home-improvement',
    icon: Home,
  },
  {
    title: 'New Construction',
    description: 'Ground-up residential and commercial construction across NYC. From foundation to final inspection, we manage every phase of your new build with precision engineering and premium materials.',
    features: ['Custom home builds', 'Medium multi-family new construction', 'Other residential new construction', 'Full DOB permit management', 'Foundations & excavation'],
    href: '/services/new-construction',
    icon: Building2,
  },
  {
    title: 'Remodeling',
    description: 'Kitchen, bathroom, basement, and multi-room remodeling that adds real value to your NYC property. We combine smart design with expert craftsmanship to create spaces that work for your lifestyle.',
    features: ['Kitchen remodeling', 'Bathroom renovations', 'Basement remodeling', 'Multi-room remodels', 'Medium multi-family remodel'],
    href: '/services/remodeling',
    icon: Wrench,
  },
  {
    title: 'Alterations',
    description: 'Structural and non-structural building alterations with full NYC DOB compliance. Whether you\'re reconfiguring your layout or making major structural changes, we handle engineering, permits, and construction seamlessly.',
    features: ['Structural alterations (Type I)', 'Non-structural alterations (Type II)', 'Load-bearing wall removal', 'Floor plan reconfiguration', 'Egress modifications'],
    href: '/services/alterations',
    icon: PencilRuler,
  },
  {
    title: 'Interior Work',
    description: 'Premium interior finishing that elevates every surface of your space. From smooth-as-glass drywall to stunning hardwood floors, our skilled tradesmen deliver the quality details that define a well-built home.',
    features: ['Drywall & interior plaster', 'Hardwood, laminate & tile flooring', 'Carpets & other flooring', 'Framing & demolition', 'Stonework & other stone/tile'],
    href: '/services/interior-work',
    icon: Paintbrush,
  },
  {
    title: 'Exterior Work',
    description: 'Protect your investment with expert exterior construction across NYC. From new roofs to restored facades, we deliver durable, code-compliant exterior work that stands up to New York weather.',
    features: ['Roofing', 'Brick, blockwork & other masonry', 'Gutters & flashing', 'Skylights', 'Excavation, grading & site work'],
    href: '/services/exterior-work',
    icon: HardHat,
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="gradient-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            NYC Construction Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From kitchen remodels to ground-up builds — Asif Contracting delivers full-service construction across all 5 boroughs with 25+ years of proven excellence.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {services.map((service, index) => (
            <div
              key={service.href}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}
            >
              <div className={index % 2 !== 0 ? 'lg:col-start-2' : ''}>
                <div className="w-16 h-16 gradient-navy rounded-2xl flex items-center justify-center mb-5">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-navy mb-4">{service.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-gray-700">
                      <span className="w-5 h-5 bg-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-orange text-xs font-bold">&#10003;</span>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 bg-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-hover transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className={`bg-gray-100 rounded-2xl h-72 md:h-96 flex items-center justify-center text-gray-400 font-medium ${index % 2 !== 0 ? 'lg:col-start-1' : ''}`}>
                {service.title} Photo
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
