import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Award, Users, Building2, ArrowRight, Star, Clock } from 'lucide-react';
import TrustBadges from '@/components/TrustBadges';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'About Asif Contracting Corp | 25+ Years Building NYC',
  description:
    'Learn about Asif Contracting Corp — a family-founded NYC construction company with 25+ years of experience, 500+ completed projects, and a reputation for honest work across all 5 boroughs.',
  alternates: { canonical: '/about' },
};

const stats = [
  { value: '21+', label: 'Years in Business', icon: Clock },
  { value: '500+', label: 'Projects Completed', icon: Building2 },
  { value: '1,000+', label: 'Happy Clients', icon: Users },
  { value: '5', label: 'Boroughs Served', icon: Star },
];

const values = [
  { title: 'Honest Pricing', desc: 'We quote what it costs — no padding, no surprise change orders. You see every line item before work starts.' },
  { title: 'Craftsmanship Over Shortcuts', desc: 'We build it right the first time. No corner-cutting, no cheap materials, no unlicensed subcontractors.' },
  { title: 'Respect for Your Property', desc: 'Daily cleanup, drop cloths on every floor, furniture protection. Your home is treated like our own.' },
  { title: 'Clear Communication', desc: 'You get a dedicated project manager, daily progress updates, and direct access to decision-makers — not a call center.' },
];

const certifications = [
  'NYC Department of Buildings Licensed',
  'General Liability Insurance ($2M+)',
  'Workers Compensation Coverage',
  'EPA Lead-Safe Certified Firm',
  'OSHA Safety Trained Crews',
  'NYC SBS Certified',
];

export default function AboutPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">
            25+ Years Building<br className="hidden md:block" /> New York City
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            From a small crew in 2000 to one of NYC&apos;s most trusted general contractors. We built this company the same way we build your projects — with honesty, hard work, and zero shortcuts.
          </p>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-6">
              Started With a Hammer.<br />Built With Integrity.
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Asif Contracting Corp was founded by Mohammad Mohsin, a contractor who spent years learning the trade on NYC job sites before deciding to do things his own way — the right way. He started with a small crew and a simple promise: deliver quality work at a fair price, and never leave a job unfinished.
              </p>
              <p>
                That promise hasn&apos;t changed. What has changed is our capacity. Today, we&apos;re a full-service general contractor handling everything from kitchen remodels in Queens walkups to ground-up construction in Brooklyn. We&apos;ve completed over 500 projects across all five boroughs.
              </p>
              <p>
                We&apos;re still a family-run operation at heart. Mohammad is on-site regularly, and every project gets the same attention to detail — whether it&apos;s a $20K bathroom renovation or a $500K brownstone gut job. That&apos;s not a marketing line. That&apos;s how we&apos;ve stayed in business for over two decades in the most competitive construction market in the country.
              </p>
            </div>
          </div>
          <div className="bg-navy/5 rounded-2xl h-80 lg:h-[420px] flex items-center justify-center">
            <div className="text-center px-8">
              <div className="w-20 h-20 gradient-navy rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-3xl">AC</span>
              </div>
              <p className="text-navy font-bold text-xl">Asif Contracting Corp</p>
              <p className="text-gray-500 mt-2">Brooklyn, NY — Serving NYC & Nassau County</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <s.icon className="w-8 h-8 text-orange mx-auto mb-3" />
                <div className="text-4xl font-bold text-navy mb-1">{s.value}</div>
                <div className="text-sm text-gray-500 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MISSION & VALUES ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">Our Values Are Non-Negotiable</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              NYC has no shortage of contractors. What separates the good ones from the rest is how they operate when things get difficult. Here&apos;s what you can expect from us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-orange/10 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-orange" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">{v.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">The People Behind the Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Licensed professionals, skilled tradespeople, and dedicated project managers — all committed to delivering your project on time and on budget.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Mohammad Mohsin — Founder & Lead Contractor', 'Project Management', 'Master Carpenters', 'Licensed Electricians & Plumbers'].map((role) => (
              <div key={role} className="text-center">
                <div className="bg-gray-200 rounded-2xl h-56 mb-4 flex items-center justify-center text-gray-400 text-sm">Photo</div>
                <div className="font-semibold text-navy text-sm">{role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Credentials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">Licensed, Insured, and Fully Compliant</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We carry every license, permit, and insurance policy required to operate legally in New York City. No exceptions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-200">
                <Shield className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-navy font-medium text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBadges variant="dark" />

      {/* ===== BOTTOM CTA ===== */}
      <CTASection
        heading="Ready to Work With a Contractor You Can Trust?"
        subheading="Get a free, no-obligation estimate and see why 1,000+ NYC homeowners chose Asif Contracting."
        variant="navy"
      />
    </>
  );
}
