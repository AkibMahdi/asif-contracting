'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

const services = [
  { name: 'Home Improvement', href: '/services/home-improvement' },
  { name: 'New Construction', href: '/services/new-construction' },
  { name: 'Remodeling', href: '/services/remodeling' },
  { name: 'Alterations', href: '/services/alterations' },
  { name: 'Interior Work', href: '/services/interior-work' },
  { name: 'Exterior Work', href: '/services/exterior-work' },
];

const serviceAreas = [
  { name: 'Manhattan', href: '/service-areas/manhattan' },
  { name: 'Brooklyn', href: '/service-areas/brooklyn' },
  { name: 'Queens', href: '/service-areas/queens' },
  { name: 'Bronx', href: '/service-areas/bronx' },
  { name: 'Staten Island', href: '/service-areas/staten-island' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span>Licensed & Insured | NYC & Nassau County</span>
            <span>Serving All 5 Boroughs + Nassau County</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+17186866550" className="flex items-center gap-1 hover:text-gold-light transition-colors">
              <Phone className="w-3.5 h-3.5" />
              (718) 686-6550
            </a>
            <span>Mon-Sat: 7AM - 7PM</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="bg-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Asif Contracting Corp"
                width={300}
                height={200}
                className="h-32 md:h-40 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link href="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-navy transition-colors">
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-navy transition-colors flex items-center gap-1">
                  Services <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-2">
                  <Link href="/services" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy font-medium border-b border-gray-100">
                    All Services
                  </Link>
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-navy transition-colors">
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-navy transition-colors">
                About Us
              </Link>
              <Link href="/portfolio" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-navy transition-colors">
                Portfolio
              </Link>
              <Link href="/testimonials" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-navy transition-colors">
                Reviews
              </Link>

              {/* Service Areas Dropdown */}
              <div className="relative group">
                <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-navy transition-colors flex items-center gap-1">
                  Service Areas <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-2">
                  <Link href="/service-areas" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy font-medium border-b border-gray-100">
                    All Areas
                  </Link>
                  {serviceAreas.map((a) => (
                    <Link key={a.href} href={a.href} className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-navy transition-colors">
                      {a.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/blog" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-navy transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-navy transition-colors">
                Contact
              </Link>
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a href="tel:+17186866550" className="hidden sm:flex items-center gap-2 text-navy font-bold">
                <Phone className="w-5 h-5" />
                (718) 686-6550
              </a>
              <Link
                href="/get-quote"
                className="hidden sm:inline-flex bg-orange text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-orange-hover transition-colors shadow-lg shadow-orange/25"
              >
                Get Free Estimate
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-gray-700"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              <Link href="/" className="block px-3 py-2.5 text-gray-700 font-medium rounded-lg hover:bg-gray-50" onClick={() => setMobileOpen(false)}>
                Home
              </Link>

              {/* Mobile Services */}
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-6 space-y-1">
                  <Link href="/services" className="block px-3 py-2 text-sm text-gray-600 hover:text-navy" onClick={() => setMobileOpen(false)}>All Services</Link>
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} className="block px-3 py-2 text-sm text-gray-600 hover:text-navy" onClick={() => setMobileOpen(false)}>
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}

              <Link href="/about" className="block px-3 py-2.5 text-gray-700 font-medium rounded-lg hover:bg-gray-50" onClick={() => setMobileOpen(false)}>About Us</Link>
              <Link href="/portfolio" className="block px-3 py-2.5 text-gray-700 font-medium rounded-lg hover:bg-gray-50" onClick={() => setMobileOpen(false)}>Portfolio</Link>
              <Link href="/testimonials" className="block px-3 py-2.5 text-gray-700 font-medium rounded-lg hover:bg-gray-50" onClick={() => setMobileOpen(false)}>Reviews</Link>

              {/* Mobile Service Areas */}
              <button
                onClick={() => setAreasOpen(!areasOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
              >
                Service Areas <ChevronDown className={`w-4 h-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`} />
              </button>
              {areasOpen && (
                <div className="pl-6 space-y-1">
                  {serviceAreas.map((a) => (
                    <Link key={a.href} href={a.href} className="block px-3 py-2 text-sm text-gray-600 hover:text-navy" onClick={() => setMobileOpen(false)}>
                      {a.name}
                    </Link>
                  ))}
                </div>
              )}

              <Link href="/blog" className="block px-3 py-2.5 text-gray-700 font-medium rounded-lg hover:bg-gray-50" onClick={() => setMobileOpen(false)}>Blog</Link>
              <Link href="/contact" className="block px-3 py-2.5 text-gray-700 font-medium rounded-lg hover:bg-gray-50" onClick={() => setMobileOpen(false)}>Contact</Link>

              <div className="pt-3 border-t border-gray-100 space-y-3">
                <a href="tel:+17186866550" className="flex items-center gap-2 px-3 py-2 text-navy font-bold">
                  <Phone className="w-5 h-5" /> (718) 686-6550
                </a>
                <Link
                  href="/get-quote"
                  className="block text-center bg-orange text-white px-5 py-3 rounded-lg font-semibold hover:bg-orange-hover transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
