import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* CTA Banner */}
      <div className="bg-orange">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white">Ready to Start Your Project?</h3>
            <p className="text-white/90 mt-1">Get a free, no-obligation estimate from NYC&apos;s most trusted contractor.</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+17186866550"
              className="bg-white text-orange px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Call (718) 686-6550
            </a>
            <Link
              href="/get-quote"
              className="bg-navy text-white px-6 py-3 rounded-lg font-bold hover:bg-navy-light transition-colors"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Asif Contracting Corp"
                width={400}
                height={267}
                className="h-24 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              NYC&apos;s premier construction company with 25+ years of experience delivering exceptional results. Licensed, insured, and trusted by thousands of New Yorkers.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:+17186866550" className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors">
                <Phone className="w-4 h-4" /> (718) 686-6550
              </a>
              <a href="mailto:mohsin1997@yahoo.com" className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors">
                <Mail className="w-4 h-4" /> mohsin1997@yahoo.com
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 flex-shrink-0" /> 63 Church Avenue, Brooklyn, NY 11218
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="w-4 h-4" /> Mon-Sat: 7AM - 7PM
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/home-improvement" className="text-gray-300 hover:text-gold transition-colors">Home Improvement</Link></li>
              <li><Link href="/services/new-construction" className="text-gray-300 hover:text-gold transition-colors">New Construction</Link></li>
              <li><Link href="/services/remodeling" className="text-gray-300 hover:text-gold transition-colors">Remodeling</Link></li>
              <li><Link href="/services/alterations" className="text-gray-300 hover:text-gold transition-colors">Alterations</Link></li>
              <li><Link href="/services/interior-work" className="text-gray-300 hover:text-gold transition-colors">Interior Work</Link></li>
              <li><Link href="/services/exterior-work" className="text-gray-300 hover:text-gold transition-colors">Exterior Work</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bold text-lg mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/service-areas/manhattan" className="text-gray-300 hover:text-gold transition-colors">Manhattan</Link></li>
              <li><Link href="/service-areas/brooklyn" className="text-gray-300 hover:text-gold transition-colors">Brooklyn</Link></li>
              <li><Link href="/service-areas/queens" className="text-gray-300 hover:text-gold transition-colors">Queens</Link></li>
              <li><Link href="/service-areas/bronx" className="text-gray-300 hover:text-gold transition-colors">The Bronx</Link></li>
              <li><Link href="/service-areas/staten-island" className="text-gray-300 hover:text-gold transition-colors">Staten Island</Link></li>
            </ul>

            <h4 className="font-bold text-lg mb-4 mt-8">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-gold transition-colors">Our Projects</Link></li>
              <li><Link href="/testimonials" className="text-gray-300 hover:text-gold transition-colors">Reviews</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-gold transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Trust / Certifications */}
          <div>
            <h4 className="font-bold text-lg mb-4">Why Asif Contracting?</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-gold font-bold mt-0.5">&#10003;</span>
                25+ Years Serving NYC
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-gold font-bold mt-0.5">&#10003;</span>
                Licensed in NYC & Nassau County
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-gold font-bold mt-0.5">&#10003;</span>
                NYC DOB Approved Contractor
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-gold font-bold mt-0.5">&#10003;</span>
                500+ Projects Completed
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-gold font-bold mt-0.5">&#10003;</span>
                Free Estimates, No Obligation
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-gold font-bold mt-0.5">&#10003;</span>
                Satisfaction Guaranteed
              </li>
            </ul>

            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="text-gold font-bold text-2xl">4.9/5</div>
              <div className="text-sm text-gray-300 mt-1">Average Rating on Google</div>
              <div className="flex gap-0.5 mt-2 text-gold">
                {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Asif Contracting Corp. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
