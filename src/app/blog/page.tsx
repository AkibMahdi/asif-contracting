import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'NYC Construction Blog | Tips, Guides & Expert Advice',
  description: 'Expert construction tips, renovation guides, and NYC building insights from Asif Contracting Corp. Learn about permits, costs, timelines, and more for your next NYC project.',
  alternates: { canonical: '/blog' },
};

const posts = [
  {
    slug: 'how-much-does-kitchen-remodel-cost-nyc',
    title: 'How Much Does a Kitchen Remodel Cost in NYC in 2026?',
    excerpt: 'A detailed breakdown of kitchen remodeling costs in New York City — from budget-friendly refreshes to high-end gut renovations. Real numbers from real NYC projects.',
    category: 'Cost Guides',
    readTime: '8 min read',
    date: 'March 15, 2026',
  },
  {
    slug: 'nyc-dob-permits-homeowner-guide',
    title: 'NYC DOB Permits: The Complete Homeowner\'s Guide',
    excerpt: 'Everything you need to know about NYC Department of Buildings permits — when you need one, how to apply, costs, timelines, and common mistakes that delay your project.',
    category: 'Permits & Regulations',
    readTime: '10 min read',
    date: 'March 8, 2026',
  },
  {
    slug: 'bathroom-remodel-nyc-timeline',
    title: 'NYC Bathroom Remodel: Realistic Timeline & What to Expect',
    excerpt: 'How long does a bathroom renovation actually take in NYC? We break down each phase — from demolition to final inspection — with tips to avoid delays.',
    category: 'Renovation Guides',
    readTime: '7 min read',
    date: 'February 28, 2026',
  },
  {
    slug: 'hiring-contractor-nyc-red-flags',
    title: '7 Red Flags When Hiring a Contractor in NYC (And How to Avoid Them)',
    excerpt: 'Protect yourself from bad contractors. Learn the warning signs NYC homeowners miss — and the questions you should always ask before signing a contract.',
    category: 'Hiring Tips',
    readTime: '6 min read',
    date: 'February 20, 2026',
  },
  {
    slug: 'brownstone-renovation-guide-brooklyn',
    title: 'The Ultimate Brooklyn Brownstone Renovation Guide',
    excerpt: 'Renovating a Brooklyn brownstone? From landmark regulations to structural considerations, here\'s everything you need to know before breaking ground.',
    category: 'Renovation Guides',
    readTime: '12 min read',
    date: 'February 12, 2026',
  },
  {
    slug: 'best-roi-home-improvements-nyc',
    title: 'Top 5 Home Improvements With the Best ROI in NYC',
    excerpt: 'Not all renovations are created equal. These are the five upgrades that consistently deliver the highest return on investment for NYC homeowners.',
    category: 'Investment',
    readTime: '5 min read',
    date: 'February 5, 2026',
  },
  {
    slug: 'coop-condo-renovation-rules-nyc',
    title: 'Co-op vs. Condo Renovation Rules in NYC: What You Need to Know',
    excerpt: 'Alteration agreements, board approvals, insurance requirements — navigating co-op and condo renovations in NYC is complex. Here\'s your roadmap.',
    category: 'Permits & Regulations',
    readTime: '9 min read',
    date: 'January 28, 2026',
  },
  {
    slug: 'basement-conversion-nyc-legal-requirements',
    title: 'Is Your NYC Basement Conversion Legal? Requirements & Costs',
    excerpt: 'NYC basement conversions have strict requirements around ceiling height, egress, waterproofing, and permits. Learn what\'s legal and what it costs.',
    category: 'Renovation Guides',
    readTime: '8 min read',
    date: 'January 20, 2026',
  },
  {
    slug: 'winter-vs-summer-construction-nyc',
    title: 'Winter vs. Summer Construction in NYC: When to Start Your Project',
    excerpt: 'Is there a best time of year to renovate in NYC? We compare costs, contractor availability, and weather impacts to help you pick the right season.',
    category: 'Planning',
    readTime: '6 min read',
    date: 'January 12, 2026',
  },
  {
    slug: 'new-construction-vs-renovation-nyc',
    title: 'New Construction vs. Renovation in NYC: Which Is Right for You?',
    excerpt: 'Tear it down or fix it up? We break down the costs, timelines, and trade-offs of new construction versus renovation for NYC property owners.',
    category: 'Planning',
    readTime: '7 min read',
    date: 'January 5, 2026',
  },
];

const categories = ['All', 'Cost Guides', 'Renovation Guides', 'Permits & Regulations', 'Hiring Tips', 'Planning', 'Investment'];

export default function BlogPage() {
  return (
    <>
      <section className="gradient-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            NYC Construction Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Expert tips, cost guides, and insider knowledge to help you navigate your next construction project in New York City.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-gray-200 bg-white sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 py-4 overflow-x-auto">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer transition-colors ${
                  cat === 'All'
                    ? 'bg-navy text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Featured Post */}
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gray-100 min-h-[300px] flex items-center justify-center text-gray-400 font-medium">
                Featured Image
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-orange/10 text-orange text-xs font-semibold px-3 py-1 rounded-full">{posts[0].category}</span>
                  <span className="text-gray-400 text-sm flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {posts[0].readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
                  <Link href={`/blog/${posts[0].slug}`} className="hover:text-orange transition-colors">
                    {posts[0].title}
                  </Link>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">{posts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{posts[0].date}</span>
                  <Link href={`/blog/${posts[0].slug}`} className="inline-flex items-center gap-1 text-orange font-semibold text-sm hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <article key={post.slug} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="bg-gray-100 h-48 flex items-center justify-center text-gray-400 text-sm font-medium">
                  Article Image
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center gap-1 text-xs text-gray-500"><Tag className="w-3 h-3" /> {post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-gray-400"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-orange transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <Link href={`/blog/${post.slug}`} className="text-orange font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Lead Magnet */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Get Our Free NYC Renovation Cost Guide
          </h2>
          <p className="text-gray-600 mb-8">
            Download our comprehensive guide with average costs for every type of renovation in NYC — from kitchen remodels to full gut renovations. Updated for 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto justify-center">
            <Link
              href="/get-quote"
              className="bg-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-hover transition-colors whitespace-nowrap text-center"
            >
              Get a Free Estimate
            </Link>
            <a
              href="tel:+19173538999"
              className="border-2 border-navy text-navy px-8 py-3 rounded-lg font-semibold hover:bg-navy hover:text-white transition-colors whitespace-nowrap text-center"
            >
              Call (917) 353-8999
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-3">Free estimates. No obligation.</p>
        </div>
      </section>

      <CTASection
        heading="Have a Project in Mind?"
        subheading="Skip the research — talk to an expert. Get a free estimate from NYC's most trusted contractor."
      />
    </>
  );
}
