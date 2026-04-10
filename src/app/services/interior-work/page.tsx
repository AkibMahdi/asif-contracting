import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Shield, Layers, Paintbrush, Ruler, Hammer, Sparkles } from 'lucide-react';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import TrustBadges from '@/components/TrustBadges';

export const metadata: Metadata = {
  title: 'Interior Construction NYC | Drywall, Flooring & Finishing Experts',
  description:
    'Expert interior construction in NYC — drywall installation, plastering, hardwood & tile flooring, trim work, and professional painting. Licensed NYC contractor with 25+ years experience. Free estimates across all 5 boroughs.',
  alternates: { canonical: '/services/interior-work' },
  keywords: [
    'drywall contractor NYC',
    'flooring installation NYC',
    'plastering NYC',
    'interior finishing NYC',
    'drywall installation Manhattan',
    'hardwood flooring Brooklyn',
    'skim coating NYC',
    'interior construction New York',
  ],
};

const specialties = [
  {
    icon: Layers,
    title: 'Drywall & Partitions',
    description:
      'New drywall installation, metal stud framing, soundproofing assemblies, fire-rated partitions, and Level 5 finishing for flawless walls. We build and finish walls that meet NYC fire code and STC ratings for multi-family buildings.',
  },
  {
    icon: Sparkles,
    title: 'Plastering & Skim Coating',
    description:
      'Traditional three-coat plaster, skim coating over existing surfaces, Venetian plaster finishes, and plaster repair for pre-war buildings. We match existing textures in landmarked and historic NYC properties.',
  },
  {
    icon: Hammer,
    title: 'Flooring Installation',
    description:
      'Hardwood installation and refinishing, porcelain and ceramic tile, luxury vinyl plank, natural stone, and heated floor systems. We handle subfloor prep, leveling, and moisture barriers for long-lasting results.',
  },
  {
    icon: Ruler,
    title: 'Trim, Molding & Millwork',
    description:
      'Crown molding, baseboards, wainscoting, chair rails, coffered ceilings, and custom built-ins. From classic pre-war profiles to clean modern lines, we mill and install trim that defines your space.',
  },
  {
    icon: Paintbrush,
    title: 'Painting & Wall Treatments',
    description:
      'Interior painting with premium paints (Benjamin Moore, Farrow & Ball), accent walls, wallpaper installation, decorative finishes, and cabinet painting. Proper prep, primer, and application for a finish that lasts.',
  },
  {
    icon: Shield,
    title: 'Soundproofing & Insulation',
    description:
      'Acoustic insulation, resilient channel systems, double-layer drywall assemblies, and acoustic sealant details. Critical for NYC apartments where noise transmission between units is a constant concern.',
  },
];

const benefits = [
  {
    title: 'Skilled Tradesmen, Not Day Laborers',
    description:
      'Our drywall finishers, plasterers, and floor installers are experienced craftsmen with years of NYC project experience. You get precision work, not patch jobs.',
  },
  {
    title: 'Dust Containment & Clean Sites',
    description:
      'We use zip walls, negative air machines, and floor protection on every interior job. Your furniture and HVAC system stay clean while we work.',
  },
  {
    title: 'Material Expertise',
    description:
      'We guide you through material selection — explaining the real-world differences between LVP and hardwood, Level 4 vs. Level 5 drywall finish, and latex vs. oil-based primers.',
  },
  {
    title: 'Building-Compliant Work',
    description:
      'All interior work meets NYC building code, fire code, and co-op/condo alteration agreement requirements. We carry the insurance certificates your building management needs.',
  },
];

const includedItems = [
  'Site assessment and detailed scope of work',
  'Material selection guidance and supplier coordination',
  'Surface preparation — demolition, patching, leveling',
  'Dust containment barriers and floor protection',
  'Professional installation by experienced tradesmen',
  'Subfloor inspection, repair, and moisture testing',
  'Proper priming and multi-coat application (painting)',
  'Trim and transition detailing at every junction',
  'Job site cleanup at the end of every workday',
  'Final walkthrough and punch list completion',
  'Quality warranty on all workmanship',
  'Post-project touch-up visit (30 days after completion)',
];

const interiorFaqs = [
  {
    question: 'How much does drywall installation cost in NYC?',
    answer:
      'Drywall installation in NYC typically costs $3.50 to $6.00 per square foot for standard 1/2-inch drywall, including material, hanging, taping, and finishing. For fire-rated (Type X) drywall required in many NYC multi-family buildings, expect $4.50 to $7.00 per square foot. Level 5 finishing, which provides the smoothest possible surface for high-gloss paint or critical lighting conditions, adds $1.50 to $2.50 per square foot. Soundproofing assemblies with resilient channels and double-layer drywall run $8 to $14 per square foot. These prices reflect Manhattan and Brooklyn rates; outer borough pricing may be 10-15% lower.',
  },
  {
    question: 'What is the difference between skim coating and plastering?',
    answer:
      'Skim coating is a thin layer (1/16 to 1/8 inch) of joint compound applied over existing drywall or plaster to create a smooth, uniform surface. It is ideal for covering minor imperfections, textured walls, or damaged surfaces. Traditional plastering involves applying a thicker coat (1/4 to 3/4 inch) of lime or gypsum plaster, usually in two or three coats, to create a hard, durable wall surface. In NYC pre-war buildings, we frequently skim coat over original plaster to preserve the solid feel while eliminating cracks and unevenness. For new walls in renovations, we typically use drywall with a skim coat rather than traditional plaster because it is faster and more cost-effective while delivering a comparable finish.',
  },
  {
    question: 'What type of flooring is best for NYC apartments?',
    answer:
      'The best flooring depends on your lifestyle, budget, and building requirements. Engineered hardwood is the top choice for most NYC apartments because it handles humidity fluctuations from steam heat systems better than solid hardwood, is compatible with radiant heat, and satisfies the 80% floor coverage rules many co-ops enforce. Porcelain tile is ideal for bathrooms, kitchens, and entryways due to its water resistance and durability. Luxury vinyl plank (LVP) has surged in popularity for its affordability, water resistance, and realistic wood-look options. Many NYC co-ops and condos require specific STC and IIC sound ratings for flooring, so we always verify your building requirements before recommending a material.',
  },
  {
    question: 'How long does it take to install hardwood floors in a NYC apartment?',
    answer:
      'For a standard 800-square-foot NYC apartment, engineered hardwood installation takes 2 to 4 days, including subfloor prep, underlayment, and installation. If you are refinishing existing hardwood (sanding, staining, and polyurethane), expect 4 to 6 days because each coat of finish needs 24 hours to cure, and most floors require 2-3 coats. The timeline extends if the subfloor needs leveling or moisture issues need to be addressed. In co-ops and condos, factor in elevator booking for material delivery and restricted working hours (most buildings limit work to 8am-5pm on weekdays). We coordinate all logistics with your building management.',
  },
  {
    question: 'Do you handle soundproofing between apartments in NYC?',
    answer:
      'Yes, soundproofing is one of the most requested interior services we provide in NYC. We install complete sound attenuation systems including resilient channel or sound isolation clips, double-layer 5/8-inch drywall, acoustic insulation (mineral wool or fiberglass batts), acoustic sealant at all perimeters, and putty pads around electrical boxes. For floors, we install acoustic underlayment and floating floor assemblies that meet NYC co-op STC/IIC requirements (typically STC 50+ and IIC 50+). Ceiling assemblies can achieve STC ratings of 55-65 depending on the construction method. We assess your specific noise issues and design a targeted solution rather than applying a one-size-fits-all approach.',
  },
  {
    question: 'Can you match existing trim and molding profiles in older NYC buildings?',
    answer:
      'Absolutely. We frequently work in pre-war buildings throughout Manhattan, Brooklyn Heights, and Park Slope where original crown molding, baseboards, and door casings have distinctive profiles that are no longer available off the shelf. We use a profile gauge to capture the exact shape of your existing molding, then have custom knives made to mill matching profiles. This ensures seamless transitions between original and new trim. We work with local millwork shops in the NYC metro area who specialize in custom profiles and can produce small runs cost-effectively.',
  },
  {
    question: 'What paint finish should I use for NYC apartment walls?',
    answer:
      'For most NYC apartment walls, we recommend eggshell or satin finish because they are washable, hide minor imperfections, and reflect light well in the often-limited natural light of New York apartments. Flat/matte finishes look elegant but show scuffs and are harder to clean, so we reserve them for ceilings and low-traffic rooms. Semi-gloss is the standard for bathrooms, kitchens, and trim because it resists moisture and cleans easily. For ceilings, flat white is the standard. We use Benjamin Moore Regal Select or Aura for most residential projects because they offer excellent coverage, low-VOC formulas (important in occupied NYC apartments), and outstanding durability.',
  },
];

export default function InteriorWorkPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">
              Interior Construction Specialists
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Drywall, Flooring & Interior Finishing That Defines NYC Spaces
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              The details make the difference. From perfectly smooth walls to stunning hardwood
              floors, Asif Contracting&apos;s skilled tradesmen deliver the interior craftsmanship
              that turns a construction project into a finished home. 25+ years serving all five
              boroughs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center gap-2 bg-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-hover transition-colors shadow-lg shadow-orange/25"
              >
                Get a Free Interior Work Estimate
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

      {/* Trust Badges */}
      <TrustBadges variant="light" columns={6} />

      {/* Service Specialties */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Complete Interior Construction Services for NYC Properties
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every surface in your space tells a story. Our interior work services cover
              everything from framing and drywall to the final coat of paint, delivered by
              craftsmen who understand the unique demands of NYC construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty) => (
              <div
                key={specialty.title}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 gradient-navy rounded-xl flex items-center justify-center mb-4">
                  <specialty.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{specialty.title}</h3>
                <p className="text-gray-600 leading-relaxed">{specialty.description}</p>
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
              The Asif Contracting Difference
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Interior work requires patience, precision, and expertise. Here is why property
              owners across NYC trust us with their interiors.
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
              What&apos;s Included in Our Interior Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A clear scope, quality execution, and a clean result. Every interior project
              includes these essentials.
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
              Interior Finishing Photo
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Why NYC Property Owners Trust Our Interior Crews
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Interior finishing is where good construction becomes great. A poorly taped joint,
                a floor that squeaks after six months, or paint that peels within a year ruins the
                entire investment. We prevent that.
              </p>
              <ul className="space-y-4">
                {[
                  'Level 5 drywall finishing capability for flawless surfaces',
                  'NWFA-certified hardwood flooring installers on staff',
                  'Dust containment systems on every occupied-space project',
                  'Experience in pre-war, post-war, and new construction buildings',
                  'STC/IIC-compliant soundproofing assemblies for co-ops and condos',
                  'All work backed by our written craftsmanship warranty',
                  'References available from buildings across all five boroughs',
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

      {/* FAQ Section */}
      <FAQSection
        faqs={interiorFaqs}
        heading="Interior Work FAQs for NYC Properties"
        subheading="Common questions about drywall, flooring, plastering, painting, and interior finishing in New York City."
      />

      {/* Related Services */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-10">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Remodeling',
                description:
                  'Kitchen, bathroom, and basement remodels that pair perfectly with our interior finishing.',
                href: '/services/remodeling',
              },
              {
                title: 'Home Improvement',
                description:
                  'Full-home renovations where interior work is one piece of a larger transformation.',
                href: '/services/home-improvement',
              },
              {
                title: 'Exterior Work',
                description:
                  'Roofing, siding, and masonry to complement your interior upgrades.',
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

      {/* CTA */}
      <CTASection
        heading="Need Expert Interior Work in NYC?"
        subheading="From smooth walls to stunning floors, get a free estimate for your interior project. We respond within 24 hours."
        variant="navy"
      />
    </>
  );
}
