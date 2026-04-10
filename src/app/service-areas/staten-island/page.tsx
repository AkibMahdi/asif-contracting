import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Shield } from 'lucide-react';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import TestimonialCard from '@/components/TestimonialCard';
import TrustBadges from '@/components/TrustBadges';

export const metadata: Metadata = {
  title: 'Construction Contractor Staten Island NY | Asif Contracting',
  description:
    'Licensed Staten Island construction contractor with 25+ years of experience. Home renovations, new construction, additions, roofing & exterior work in Tottenville, Great Kills, St. George & more. Free estimates.',
  alternates: { canonical: '/service-areas/staten-island' },
};

const neighborhoods = [
  'Tottenville', 'Great Kills', 'St. George', 'New Dorp', 'Stapleton',
  'Todt Hill', 'Eltingville', 'Annadale', 'Huguenot', 'Travis',
  'Richmond', 'Grasmere', 'Dongan Hills', 'South Beach',
];

const specialties = [
  {
    title: 'Custom Home Construction',
    desc: 'Staten Island has more single-family homes and available lots than any other borough. We build custom homes from the ground up — from foundation and framing to finishing — designed to match your family\'s needs and the character of your neighborhood.',
  },
  {
    title: 'Home Additions & Expansions',
    desc: 'Growing families need more space. We build rear extensions, second-story additions, garage conversions, and bonus rooms for Staten Island homes. Our team handles zoning analysis, DOB permits, and construction so you can stay in the neighborhood you love.',
  },
  {
    title: 'Storm Damage Restoration',
    desc: 'Staten Island was hit hard by Hurricane Sandy and continues to face flooding and storm risks. We provide storm damage repairs, flood-proofing, foundation elevation, and resilient rebuilds that meet current FEMA flood zone requirements.',
  },
  {
    title: 'Roofing & Exterior Work',
    desc: 'With more exposed rooflines and facades than the denser boroughs, Staten Island homes need reliable exterior work. We handle roof replacements, siding, gutter systems, masonry repair, and weatherproofing to protect your investment.',
  },
];

const services = [
  { name: 'Home Renovations', href: '/services/remodeling', desc: 'Kitchen, bathroom, and whole-home renovations for Staten Island houses.' },
  { name: 'New Construction', href: '/services/new-construction', desc: 'Custom homes and new residential builds across Staten Island.' },
  { name: 'Home Improvement', href: '/services/home-improvement', desc: 'Upgrades, repairs, and modernizations for existing Staten Island homes.' },
  { name: 'Exterior Work', href: '/services/exterior-work', desc: 'Roofing, siding, masonry, and weatherproofing for Staten Island properties.' },
  { name: 'Structural Alterations', href: '/services/alterations', desc: 'Additions, wall removals, and structural changes with full DOB permitting.' },
];

const faqs = [
  {
    question: 'How much does it cost to build a new home on Staten Island?',
    answer: 'New home construction on Staten Island typically costs $200 to $350 per square foot, depending on the level of finish, site conditions, and complexity. A 2,000 square foot colonial-style home generally runs $400,000 to $700,000 for construction (not including land). Costs vary based on foundation type, lot grading, utility connections, and interior specifications. We provide detailed construction estimates after reviewing your plans and lot.',
  },
  {
    question: 'Do you handle storm damage repairs on Staten Island?',
    answer: 'Yes. We have been repairing and rebuilding Staten Island homes since Hurricane Sandy. Our storm damage services include structural repairs, foundation work, flood-proofing, mold remediation coordination, electrical and plumbing replacement, and full interior rebuilds. We work with insurance adjusters and understand FEMA flood zone requirements for elevated and resilient construction.',
  },
  {
    question: 'Can you add a second story to my Staten Island home?',
    answer: 'In many cases, yes. A second-story addition depends on your existing foundation capacity, zoning district FAR limits, and lot coverage. We work with structural engineers to assess your foundation and with architects to design an addition that meets DOB requirements. A typical second-story addition on Staten Island takes 4 to 6 months for construction after permits are approved.',
  },
  {
    question: 'What roofing services do you offer for Staten Island homes?',
    answer: 'We handle complete roof replacements (asphalt shingle, architectural shingle, flat roofing), roof repairs, gutter installation, soffit and fascia work, skylight installation, and attic ventilation. Staten Island homes are more exposed to wind and weather than those in denser boroughs, so we use high-wind-rated materials and proper flashing details. Every roofing project includes a written warranty.',
  },
  {
    question: 'How long does a home renovation take on Staten Island?',
    answer: 'A full kitchen remodel takes 4 to 8 weeks, a bathroom renovation 2 to 4 weeks, and a whole-house gut renovation 3 to 6 months. Additions and new construction take longer, typically 4 to 8 months after permits. Staten Island projects often move faster than Manhattan or Brooklyn work because of easier material access, on-site parking for crews, and fewer building management restrictions. We provide a detailed schedule during your free estimate.',
  },
];

export default function StatenIslandPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4" />
            Staten Island, New York
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Staten Island Construction Contractor
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Custom homes in Todt Hill. Renovations in Great Kills. Additions in Tottenville. Asif Contracting has been building Staten Island for over two decades.
          </p>
        </div>
      </section>

      <TrustBadges />

      {/* Neighborhoods */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-3">Staten Island Neighborhoods We Serve</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            Staten Island is NYC&apos;s most suburban borough — and that means different construction needs. More single-family homes, bigger lots, and projects that range from custom builds to storm-resilient rebuilds.
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

      {/* Staten Island Specialties */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-3">Staten Island Construction Specialties</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            Staten Island construction is more like suburban building than the rest of NYC — bigger projects, more land, and unique challenges like flood zones and storm resilience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialties.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-2">{s.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-3">Our Staten Island Services</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            Every service is designed for Staten Island properties — from sprawling single-family homes to waterfront builds that need to meet flood zone requirements.
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
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">What Staten Island Clients Say</h2>
          <TestimonialCard
            name="James & Patricia D."
            location="Great Kills, Staten Island"
            text="After Sandy damaged our home, we went through two contractors who couldn't get the job done right. Asif Contracting came in, assessed the damage properly, and rebuilt our first floor from the ground up — new foundation elevation, flood-proofing, and a completely redesigned layout. They dealt with our insurance company and the city permits. Our home is now safer and more beautiful than it was before the storm."
            rating={5}
            project="Storm Damage Restoration & Rebuild"
          />
        </div>
      </section>

      <FAQSection
        faqs={faqs}
        heading="Staten Island Construction FAQs"
        subheading="Common questions from Staten Island homeowners and property owners."
      />

      {/* Other Boroughs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 mb-4">We also serve:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Manhattan', 'Brooklyn', 'Queens', 'Bronx'].map((b) => (
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
        heading="Plan Your Staten Island Project"
        subheading="Get a free estimate from a contractor who builds custom homes, handles renovations, and delivers storm-resilient construction across Staten Island."
      />
    </>
  );
}
