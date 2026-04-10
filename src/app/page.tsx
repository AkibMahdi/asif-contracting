import Link from 'next/link';
import {
  Phone, ArrowRight, Home, Building2, Wrench, PencilRuler,
  Paintbrush, HardHat, Star, Shield, CheckCircle, MapPin
} from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import TrustBadges from '@/components/TrustBadges';
import ProcessSteps from '@/components/ProcessSteps';
import CTASection from '@/components/CTASection';
import LeadForm from '@/components/LeadForm';

const services = [
  {
    title: 'Home Improvement',
    description: 'Full-scale home renovations that transform your living space. From concept to completion, we handle every detail.',
    href: '/services/home-improvement',
    icon: Home,
  },
  {
    title: 'New Construction',
    description: 'Ground-up residential and commercial builds. We manage permits, plans, and construction from foundation to finish.',
    href: '/services/new-construction',
    icon: Building2,
  },
  {
    title: 'Remodeling',
    description: 'Kitchen, bathroom, basement, and multi-room remodels that add value and functionality to your NYC property.',
    href: '/services/remodeling',
    icon: Wrench,
  },
  {
    title: 'Alterations',
    description: 'Structural and non-structural alterations with full DOB compliance. Expert engineering and seamless execution.',
    href: '/services/alterations',
    icon: PencilRuler,
  },
  {
    title: 'Interior Work',
    description: 'Premium drywall, plastering, flooring, and finishing work. The details that make your space truly exceptional.',
    href: '/services/interior-work',
    icon: Paintbrush,
  },
  {
    title: 'Exterior Work',
    description: 'Roofing, siding, masonry, and facade work that protects your investment and boosts curb appeal across NYC.',
    href: '/services/exterior-work',
    icon: HardHat,
  },
];

const testimonials = [
  {
    name: 'Michael & Sarah T.',
    location: 'Upper West Side, Manhattan',
    text: 'Asif Contracting completely transformed our pre-war apartment. They handled the DOB permits, managed the co-op board requirements, and delivered a stunning renovation on time. The attention to detail was incredible.',
    project: 'Full Apartment Renovation',
  },
  {
    name: 'David R.',
    location: 'Park Slope, Brooklyn',
    text: 'We interviewed 6 contractors for our brownstone renovation. Asif was the only one who gave us a detailed, transparent estimate with no hidden costs. The final result exceeded our expectations. Worth every penny.',
    project: 'Brownstone Remodeling',
  },
  {
    name: 'Jennifer L.',
    location: 'Astoria, Queens',
    text: 'Our kitchen and bathroom remodel was completed in 5 weeks — faster than any other contractor quoted. The crew was professional, clean, and respectful of our home. We\'ve already referred them to three neighbors.',
    project: 'Kitchen & Bath Remodel',
  },
];

const boroughs = [
  { name: 'Manhattan', href: '/service-areas/manhattan' },
  { name: 'Brooklyn', href: '/service-areas/brooklyn' },
  { name: 'Queens', href: '/service-areas/queens' },
  { name: 'The Bronx', href: '/service-areas/bronx' },
  { name: 'Staten Island', href: '/service-areas/staten-island' },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-navy min-h-[600px] md:min-h-[700px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-gold px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Rated 4.9/5 by NYC Homeowners
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              NYC&apos;s Most Trusted
              <span className="text-gold block">Construction Company</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
              21+ years of building, renovating, and transforming properties across all 5 boroughs. Licensed, insured, and backed by hundreds of 5-star reviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center gap-2 bg-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-hover transition-colors shadow-lg shadow-orange/30"
              >
                Get Your Free Estimate <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+17186866550"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (718) 686-6550
              </a>
            </div>
            <div className="flex items-center gap-6 mt-8 text-sm text-gray-400">
              <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-gold" /> Licensed & Insured</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-gold" /> Free Estimates</span>
            </div>
          </div>

          <div className="hidden lg:block">
            <LeadForm
              heading="Get Your Free Estimate Today"
              subheading="Tell us about your project and we'll get back to you within 2 hours."
            />
          </div>
        </div>
      </section>

      {/* ===== TRUST BADGES ===== */}
      <TrustBadges />

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
              Full-Service Construction for Every NYC Project
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From single-room remodels to ground-up construction, Asif Contracting delivers quality craftsmanship and reliable project management across New York City.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-navy font-semibold hover:text-orange transition-colors"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange font-semibold text-sm uppercase tracking-wider">Why Asif Contracting</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-6">
                Why 1,000+ NYC Homeowners Trust Us With Their Biggest Investment
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Hiring a contractor in New York City is one of the most stressful decisions you&apos;ll make. Bad contractors waste your money, miss deadlines, and leave you with unfinished work. That&apos;s not us.
              </p>

              <div className="space-y-5">
                {[
                  { title: 'Transparent Pricing, No Surprises', desc: 'We give you a detailed, written estimate before work begins. The price we quote is the price you pay — period.' },
                  { title: 'On-Time, Every Time', desc: 'We set realistic timelines and stick to them. You\'ll get daily progress updates so you\'re never left guessing.' },
                  { title: 'Licensed, Insured, DOB Compliant', desc: 'Full NYC Department of Buildings compliance. We handle all permits, inspections, and paperwork so you don\'t have to.' },
                  { title: '21+ Years, Zero Shortcuts', desc: 'We\'ve been doing this since 2004. Every project gets the same attention to detail — whether it\'s a bathroom remodel or a full build.' },
                  { title: 'Your Satisfaction, Guaranteed', desc: 'We don\'t consider a project done until you do. Final walkthrough and sign-off before your last payment.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-orange/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-orange" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-navy p-6">
                  <h3 className="text-white font-bold text-lg">Featured Project</h3>
                  <p className="text-gray-300 text-sm">Full Brownstone Renovation — Park Slope, Brooklyn</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 rounded-xl h-40 flex items-center justify-center text-gray-400 text-sm font-medium">Before</div>
                    <div className="bg-gray-100 rounded-xl h-40 flex items-center justify-center text-gray-400 text-sm font-medium">After</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-navy">8</div>
                      <div className="text-xs text-gray-500">Weeks</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-navy">3</div>
                      <div className="text-xs text-gray-500">Floors</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-navy">5</div>
                      <div className="text-xs text-gray-500">Star Review</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex gap-0.5 text-gold mb-3">
                  {'★★★★★'.split('').map((s, i) => <span key={i} className="text-lg">{s}</span>)}
                </div>
                <p className="text-gray-700 italic mb-4">
                  &ldquo;The best contractor experience we&apos;ve ever had in NYC. Asif and his team turned our outdated brownstone into a modern masterpiece. On budget, on time, zero drama.&rdquo;
                </p>
                <div className="font-semibold text-navy">— Mark & Lisa P.</div>
                <div className="text-sm text-gray-500">Park Slope, Brooklyn</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MID-PAGE CTA ===== */}
      <CTASection
        heading="Don't Wait — Your Dream Space Starts With a Free Estimate"
        subheading="Join 1,000+ satisfied NYC homeowners. Call now or request your free, no-obligation estimate online."
        variant="orange"
      />

      {/* ===== HOW IT WORKS ===== */}
      <ProcessSteps />

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Real Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
              What Our NYC Clients Say
            </h2>
            <p className="text-gray-600 text-lg">
              Don&apos;t take our word for it — hear from homeowners across the 5 boroughs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-navy font-semibold hover:text-orange transition-colors"
            >
              Read More Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICE AREAS ===== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Where We Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
              Serving All 5 Boroughs of New York City
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From Manhattan penthouses to Queens family homes — we bring the same quality craftsmanship everywhere in NYC.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {boroughs.map((b) => (
              <Link
                key={b.name}
                href={b.href}
                className="group flex flex-col items-center gap-3 p-6 bg-gray-50 rounded-xl hover:bg-navy hover:text-white transition-all duration-300 border border-gray-200 hover:border-navy"
              >
                <MapPin className="w-8 h-8 text-orange group-hover:text-gold transition-colors" />
                <span className="font-bold text-navy group-hover:text-white transition-colors">{b.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MOBILE LEAD FORM ===== */}
      <section className="py-16 bg-gray-50 lg:hidden">
        <div className="max-w-lg mx-auto px-4">
          <LeadForm
            heading="Get Your Free Estimate"
            subheading="Tell us about your project and we'll respond within 2 hours."
          />
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <CTASection
        heading="Let's Build Something Great Together"
        subheading="21+ years. 500+ projects. 1,000+ happy clients. Your project could be next."
        variant="navy"
      />
    </>
  );
}
