'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Calendar, FileText } from 'lucide-react';
import CTASection from '@/components/CTASection';

const categories = ['All', 'Alteration', 'Interior', 'Exterior', 'Fire Restoration'] as const;
type Category = (typeof categories)[number];

const projects = [
  {
    name: 'Interior Renovation — 4th Floor Apartment',
    type: 'Interior',
    location: '220 Cumberland St, Brooklyn, NY 11205',
    date: 'May 2022',
    permit: 'B00527124-I1-GC',
    description: 'Interior renovation on 4th floor apt. #4R — minor sheetrock, floor tiles as per plan. No change in use, egress, or occupancy.',
    color: 'bg-navy/80',
  },
  {
    name: 'Alteration Type 2 — Lincoln Rd',
    type: 'Alteration',
    location: '64 Lincoln Rd, Brooklyn, NY 11225',
    date: 'Nov 2020',
    permit: '340731998-02-EW-OT',
    description: 'DOB-permitted alteration work on a Brooklyn residential property. Full permit compliance and inspection coordination.',
    color: 'bg-orange/80',
  },
  {
    name: 'Alteration Type 2 — Lincoln Rd',
    type: 'Alteration',
    location: '57 Lincoln Rd, Brooklyn, NY 11225',
    date: 'Nov 2020',
    permit: '340727066-02-EW-OT',
    description: 'DOB-permitted alteration work on a Brooklyn residential property. Full permit compliance and inspection coordination.',
    color: 'bg-gold/80',
  },
  {
    name: 'Alteration Type 2 — Cumberland St',
    type: 'Alteration',
    location: '220 Cumberland St, Brooklyn, NY 11205',
    date: 'Mar 2020',
    permit: '321737545-01-EW-OT',
    description: 'Alteration work on a multi-unit residential building in Fort Greene, Brooklyn. DOB-approved plans and full permit management.',
    color: 'bg-emerald-700/80',
  },
  {
    name: 'Parapet Wall & Stucco Restoration',
    type: 'Exterior',
    location: '127 McKinley Ave, Brooklyn, NY 11208',
    date: 'Sep 2015',
    permit: '321241508',
    description: 'Remove and replace coping stone on the parapet wall and stucco inside the parapet wall as per plan. No change in use, occupancy, or egress.',
    color: 'bg-navy/80',
  },
  {
    name: 'Alteration Type 2 — Waverly Ave',
    type: 'Alteration',
    location: '25 Waverly Ave, Brooklyn, NY 11205',
    date: 'May 2015',
    permit: '321116403-01-EW-OT',
    description: 'DOB-permitted alteration work in Clinton Hill, Brooklyn. Coordinated multiple phases of construction with full inspection compliance.',
    color: 'bg-orange/80',
  },
  {
    name: 'Alteration Type 2 — Linden Blvd',
    type: 'Alteration',
    location: '427 Linden Blvd, Brooklyn, NY 11203',
    date: 'Apr 2015',
    permit: '321108378-01-EW-OT',
    description: 'DOB-permitted alteration work on a Brooklyn residential property. Full scope management from permit filing to completion.',
    color: 'bg-gold/80',
  },
  {
    name: 'Fire Damage Restoration — Basement',
    type: 'Fire Restoration',
    location: '526 52nd St, Brooklyn, NY 11220',
    date: 'Oct 2013',
    permit: '340070915',
    description: 'Interior renovation at basement — replace wall, ceiling sheetrock, floor tiles, door and other necessary work. House was damaged by fire. No change in use, egress, or occupancy.',
    color: 'bg-red-700/80',
  },
  {
    name: 'Alteration Type 2 — Harlem',
    type: 'Alteration',
    location: '117 W 141st St, New York, NY 10030',
    date: 'Aug 2013',
    permit: '140103723-01-EW-OT',
    description: 'DOB-permitted alteration work in Harlem, Manhattan. One of our many projects across the five boroughs.',
    color: 'bg-emerald-700/80',
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState<Category>('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.type === active);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">
            NYC Construction Portfolio
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A selection of our DOB-permitted projects across NYC. From interior renovations and alterations to exterior restoration and fire damage recovery.
          </p>
        </div>
      </section>

      {/* ===== FILTER + GRID ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  active === cat
                    ? 'bg-navy text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <div
                key={`${project.permit}-${i}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                {/* Placeholder Image */}
                <div className={`${project.color} h-52 flex items-center justify-center`}>
                  <span className="text-white/70 text-sm font-medium tracking-wide uppercase">
                    {project.type} Project
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {project.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      {project.permit}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{project.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
                  <span className="inline-block bg-orange/10 text-orange text-xs font-semibold px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 py-12">No projects found in this category yet.</p>
          )}

          {/* View more prompt */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-2">These are just a sample of our permitted projects across NYC.</p>
            <p className="text-gray-500 text-sm mb-6">Want to see work similar to your project?</p>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-orange text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-hover transition-colors shadow-lg shadow-orange/25"
            >
              Request a Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <CTASection
        heading="Your Project Could Be Next"
        subheading="Tell us what you're building and we'll show you exactly how we can help. Free estimates, no obligation."
        variant="navy"
      />
    </>
  );
}
