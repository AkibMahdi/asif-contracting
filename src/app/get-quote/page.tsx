import type { Metadata } from 'next';
import { Phone, Shield, Clock, Star, CheckCircle, Users, Award } from 'lucide-react';
import LeadForm from '@/components/LeadForm';
import TestimonialCard from '@/components/TestimonialCard';

export const metadata: Metadata = {
  title: 'Get a Free Estimate | NYC Construction | Asif Contracting',
  description: 'Request your free, no-obligation construction estimate from NYC\'s most trusted contractor. 21+ years experience, licensed & insured. Response within 2 hours.',
  alternates: { canonical: '/get-quote' },
  robots: { index: true, follow: true },
};

const urgencyPoints = [
  'Limited availability — we book 2-3 weeks out',
  'Spring/Summer is peak season — lock in your spot',
  'Material prices are rising — start now to save',
];

export default function GetQuotePage() {
  return (
    <>
      {/* Hero + Form */}
      <section className="gradient-navy py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Value Proposition */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 text-gold px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                Free, No-Obligation Estimate
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Get Your Free Construction Estimate in
                <span className="text-gold"> Under 2 Hours</span>
              </h1>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Tell us about your project and one of our project specialists will contact you with a detailed estimate — no pressure, no obligation, no surprises.
              </p>

              {/* Trust signals */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Clock, text: '21+ Years Experience' },
                  { icon: Shield, text: 'Licensed & Insured' },
                  { icon: Star, text: '4.9/5 Google Rating' },
                  { icon: Users, text: '1,000+ Happy Clients' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                    <item.icon className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* What you get */}
              <div className="bg-white/5 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-lg mb-4">What You Get With Your Free Estimate:</h3>
                <ul className="space-y-3">
                  {[
                    'On-site property assessment by a licensed project manager',
                    'Detailed, itemized cost breakdown — no hidden fees',
                    'Realistic timeline with milestone dates',
                    'Permit requirements and DOB compliance review',
                    'Material recommendations and options at every price point',
                    'Written estimate you can compare with confidence',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Urgency */}
              <div className="bg-orange/20 border border-orange/30 rounded-xl p-5">
                <h4 className="font-bold text-orange mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5" /> Why Request Your Estimate Now:
                </h4>
                <ul className="space-y-2">
                  {urgencyPoints.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-orange">&#8226;</span> {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Phone CTA */}
              <div className="mt-8 flex items-center gap-4">
                <span className="text-gray-400 text-sm">Prefer to talk?</span>
                <a
                  href="tel:+17186866550"
                  className="inline-flex items-center gap-2 bg-white text-navy px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call (718) 686-6550
                </a>
              </div>
            </div>

            {/* Right: Lead Form */}
            <div className="lg:sticky lg:top-28">
              <LeadForm
                heading="Request Your Free Estimate"
                subheading="Fill out the form below. We respond within 2 hours during business hours."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
            <div>
              <div className="text-3xl font-bold text-navy">500+</div>
              <div className="text-sm text-gray-500">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy">4.9/5</div>
              <div className="text-sm text-gray-500">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy">21+</div>
              <div className="text-sm text-gray-500">Years in Business</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy">2 hrs</div>
              <div className="text-sm text-gray-500">Avg Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-10">
            Here&apos;s Why NYC Homeowners Choose Asif Contracting
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Robert K."
              location="Chelsea, Manhattan"
              text="I got estimates from 4 contractors. Asif was the most detailed and transparent — no vague line items, no 'we'll figure it out later.' They came in on budget and the quality was top-notch."
              project="Full Apartment Gut Renovation"
            />
            <TestimonialCard
              name="Maria S."
              location="Bay Ridge, Brooklyn"
              text="From the first phone call to the final walkthrough, Asif's team was professional, responsive, and incredibly skilled. Our kitchen looks like something out of a magazine. Best investment we've made."
              project="Kitchen & Dining Room Remodel"
            />
            <TestimonialCard
              name="James & Patricia W."
              location="Forest Hills, Queens"
              text="We were nervous about a major renovation with our family living in the house. Asif's crew was respectful, clean, and finished each phase on schedule. They made a stressful process easy."
              project="Whole-Home Renovation"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Award className="w-12 h-12 text-gold mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Thinking? No Pressure.
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Our estimates are 100% free, with zero obligation. We believe in earning your business through transparency, not high-pressure sales. Get your estimate and decide on your own terms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#top"
              className="bg-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-hover transition-colors shadow-lg"
            >
              Fill Out the Form Above
            </a>
            <a
              href="tel:+17186866550"
              className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              (718) 686-6550
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
