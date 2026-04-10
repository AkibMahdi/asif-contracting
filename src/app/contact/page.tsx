import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ArrowRight, AlertCircle } from 'lucide-react';
import LeadForm from '@/components/LeadForm';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Contact Us | Asif Contracting Corp NYC',
  description:
    'Contact Asif Contracting Corp for a free construction estimate in NYC. Call (917) 353-8999 or fill out our form. We respond within 2 hours during business hours.',
  alternates: { canonical: '/contact' },
};

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '(917) 353-8999',
    href: 'tel:+19173538999',
    note: 'Mon-Sat, 7 AM - 7 PM',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'mohsin1997@yahoo.com',
    href: 'mailto:mohsin1997@yahoo.com',
    note: 'We respond within 2 hours',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: '75 Harden St, Brooklyn, NY 11234',
    href: null,
    note: 'Serving all 5 boroughs + Nassau County',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon - Sat: 7 AM - 7 PM',
    href: null,
    note: 'Sunday: By appointment',
  },
];

const quickLinks = [
  { name: 'Home Improvement', href: '/services/home-improvement' },
  { name: 'New Construction', href: '/services/new-construction' },
  { name: 'Remodeling', href: '/services/remodeling' },
  { name: 'Alterations', href: '/services/alterations' },
  { name: 'Interior Work', href: '/services/interior-work' },
  { name: 'Exterior Work', href: '/services/exterior-work' },
];

export default function ContactPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">
            Let&apos;s Talk About Your Project
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Whether you need a quick estimate or want to discuss a complex build, we&apos;re here. Fill out the form or call us directly — we respond within 2 hours during business hours.
          </p>
        </div>
      </section>

      {/* ===== FORM + CONTACT INFO ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Lead Form — Left Column */}
          <div className="lg:col-span-3">
            <LeadForm
              heading="Request Your Free Estimate"
              subheading="Tell us about your project and a project specialist will get back to you within 2 hours."
            />
          </div>

          {/* Contact Info — Right Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Details */}
            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-orange/10 rounded-xl flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-orange" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-navy font-bold hover:text-orange transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-navy font-bold">{item.value}</div>
                    )}
                    <div className="text-sm text-gray-500">{item.note}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Notice */}
            <div className="bg-orange/5 border border-orange/20 rounded-xl p-5">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-navy text-sm mb-1">Emergency / After-Hours?</div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    For urgent construction issues — water damage, structural concerns, or safety hazards — call us directly at{' '}
                    <a href="tel:+19173538999" className="text-orange font-bold">(917) 353-8999</a>.
                    We will get back to you as soon as possible.
                  </p>
                </div>
              </div>
            </div>

            {/* Live Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 h-48">
              <iframe
                title="Asif Contracting Corp Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.1!2d-73.927!3d40.618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c244e3e0c8c6f7%3A0x0!2s75+Harden+St%2C+Brooklyn%2C+NY+11234!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-navy mb-3">Quick Links to Our Services</h3>
              <div className="grid grid-cols-1 gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <CTASection
        heading="Prefer to Talk? We Pick Up the Phone."
        subheading="No automated menus. No voicemail runaround. Call us and speak directly to someone who can help."
        variant="gold"
      />
    </>
  );
}
