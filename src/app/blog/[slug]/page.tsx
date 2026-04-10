import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Tag, ArrowRight } from 'lucide-react';
import CTASection from '@/components/CTASection';

const posts: Record<string, {
  title: string;
  category: string;
  readTime: string;
  date: string;
  content: string[];
}> = {
  'how-much-does-kitchen-remodel-cost-nyc': {
    title: 'How Much Does a Kitchen Remodel Cost in NYC in 2026?',
    category: 'Cost Guides',
    readTime: '8 min read',
    date: 'March 15, 2026',
    content: [
      'Kitchen remodeling is the single most requested renovation project in New York City, and for good reason. A well-executed kitchen remodel can transform your daily living experience and significantly increase your property value. But the question every NYC homeowner asks first is: how much will it cost?',
      '## Budget Kitchen Refresh: $15,000 - $30,000',
      'A budget-friendly kitchen refresh keeps the existing layout intact while updating the most visible elements. This typically includes cabinet refacing or painting, new countertops (laminate or butcher block), updated hardware, a new backsplash, fresh paint, and possibly new lighting fixtures. You keep your existing appliances and plumbing in place, which eliminates the most expensive trade work.',
      '## Mid-Range Kitchen Remodel: $30,000 - $75,000',
      'The mid-range remodel is where most NYC homeowners land. This includes new semi-custom or custom cabinetry, quartz or granite countertops, tile backsplash, new appliances, updated lighting, and potentially minor layout changes. Plumbing might be adjusted for a new sink location, and electrical is updated for modern appliance requirements. In Manhattan co-ops and condos, this range also covers the cost of board approval packages and building-specific insurance requirements.',
      '## High-End Gut Renovation: $75,000 - $150,000+',
      'A gut renovation means taking the kitchen down to the studs and rebuilding from scratch. This allows for complete layout redesigns, plumbing relocation, new gas lines, electrical panel upgrades, custom cabinetry, premium stone countertops, high-end appliances (Sub-Zero, Wolf, Miele), designer tile work, and custom lighting design. In pre-war Manhattan apartments, this often includes addressing old plumbing stacks, asbestos abatement, and lead paint remediation.',
      '## What Drives Costs Up in NYC?',
      'Several NYC-specific factors can increase your kitchen remodel cost beyond national averages. Building requirements (insurance, alteration agreements, elevator scheduling) add $2,000-$5,000 to most co-op and condo projects. Plumbing relocation in older buildings with cast-iron stacks can cost $5,000-$15,000 more than buildings with modern PVC. Manhattan logistics — limited elevator access, no loading dock, walk-up buildings — add to labor costs. And DOB permit fees, while modest, add processing time that extends the project timeline.',
      '## How to Get an Accurate Estimate',
      'The cost ranges above are guidelines, not guarantees. Your actual cost depends on your specific apartment, building requirements, material selections, and the complexity of the work. The best way to get an accurate number is to schedule an in-home consultation with a licensed contractor who can assess your space, discuss your goals, and provide a detailed, line-item estimate. At Asif Contracting, we provide free estimates for all kitchen remodeling projects across the five boroughs.',
    ],
  },
  'nyc-dob-permits-homeowner-guide': {
    title: "NYC DOB Permits: The Complete Homeowner's Guide",
    category: 'Permits & Regulations',
    readTime: '10 min read',
    date: 'March 8, 2026',
    content: [
      'Navigating the New York City Department of Buildings (DOB) permit process is one of the most confusing aspects of home renovation for NYC homeowners. This guide breaks down when you need a permit, what type you need, how much it costs, and how to avoid the mistakes that delay projects by weeks or months.',
      '## When Do You Need a DOB Permit?',
      'The general rule is: if you are changing the structure, layout, plumbing, electrical, or use of your space, you need a permit. Specific projects that require permits include load-bearing wall removals, plumbing relocation, electrical panel upgrades, new gas lines, building additions, window size changes, and changes to the certificate of occupancy.',
      '## When Do You NOT Need a Permit?',
      'Cosmetic and like-for-like replacements generally do not require permits. This includes painting, replacing fixtures in the same location (swapping one faucet for another), cabinet refacing, installing new flooring over existing subfloor, replacing windows with the same size windows, and minor non-structural repairs.',
      '## Types of DOB Work Permits',
      'NYC uses three types of alteration permits. Alt-1 involves changes to use, egress, or occupancy (like converting a commercial space to residential). Alt-2 covers structural work without use changes (like removing a load-bearing wall or adding an extension). Alt-3 is for minor work like replacing plumbing fixtures, installing new electrical outlets, or non-structural partition changes.',
      '## How Long Does Permit Approval Take?',
      'Permit approval timelines vary significantly. Professional certification (self-certification by a PE or RA) can get Alt-2 and Alt-3 permits approved in 1-2 weeks. DOB plan examination for standard projects takes 4-8 weeks. Complex Alt-1 filings can take 2-4 months. Objections from plan examiners can add weeks to any timeline.',
      '## Common Permit Mistakes That Delay Projects',
      'The most common mistakes we see: filing the wrong permit type, incomplete applications that trigger DOB objections, not including required engineering calculations, missing insurance certificates for co-op/condo buildings, and starting work before permits are approved (which can result in stop-work orders and fines starting at $10,000).',
      '## How Asif Contracting Handles Permits',
      'We manage the entire permit process for every project. Our team prepares applications, coordinates with architects and engineers, works with experienced expediters at the DOB office, responds to any objections, and schedules all required inspections. You never have to visit a city office or decipher DOB regulations yourself.',
    ],
  },
  'bathroom-remodel-nyc-timeline': {
    title: 'NYC Bathroom Remodel: Realistic Timeline & What to Expect',
    category: 'Renovation Guides',
    readTime: '7 min read',
    date: 'February 28, 2026',
    content: [
      'Bathroom remodeling is the second most popular renovation project in NYC, right behind kitchens. But one of the biggest sources of frustration for homeowners is unrealistic timeline expectations. Here is an honest breakdown of how long a bathroom remodel actually takes in New York City, phase by phase.',
      '## Phase 1: Planning & Permits (2-6 weeks)',
      'Before any demolition begins, you need a plan. This phase includes design consultation, material selection, and — if your project involves plumbing relocation or structural changes — DOB permit filing. For co-op and condo buildings, add 2-4 weeks for board approval. Most homeowners underestimate this phase, but proper planning prevents expensive changes mid-construction.',
      '## Phase 2: Demolition (1-3 days)',
      'Demo day is the most dramatic phase. Our crew removes the old tile, fixtures, vanity, and sometimes drywall down to the studs. In older NYC buildings, we often discover outdated plumbing (cast iron or galvanized pipes), deteriorated subfloors, or inadequate waterproofing that needs to be addressed before rebuilding.',
      '## Phase 3: Rough-In Work (3-7 days)',
      'This is the infrastructure phase — plumbing rough-in (new supply lines, drain lines, valve placement), electrical wiring (new circuits, GFCI outlets, lighting), and waterproofing (membrane application on shower walls and floors). Each trade needs to work in sequence, and inspections may be required before closing up walls.',
      '## Phase 4: Tile & Finishing (5-10 days)',
      'Tile installation is the most time-consuming finish phase. Floor tile, wall tile, shower surround tile, and any accent or niche work all take time to set, grout, and seal properly. After tile, we install the vanity, toilet, shower glass, mirrors, lighting fixtures, and accessories.',
      '## Phase 5: Final Details (1-2 days)',
      'Caulking, paint touch-ups, hardware installation, final cleaning, and your walkthrough. We do not consider a bathroom complete until you have inspected every detail and we have addressed any punch list items.',
      '## Total Timeline Summary',
      'Cosmetic bathroom refresh (fixtures, paint, hardware): 1-2 weeks. Standard bathroom remodel (new tile, vanity, fixtures): 2-4 weeks. Full gut renovation with plumbing relocation: 4-8 weeks. Add 2-6 weeks for planning, permits, and board approval if applicable.',
    ],
  },
  'hiring-contractor-nyc-red-flags': {
    title: '7 Red Flags When Hiring a Contractor in NYC (And How to Avoid Them)',
    category: 'Hiring Tips',
    readTime: '6 min read',
    date: 'February 20, 2026',
    content: [
      'Hiring the wrong contractor in NYC can cost you tens of thousands of dollars, months of delays, and enormous stress. After 25+ years in the business, we have seen every mistake homeowners make. Here are the seven biggest red flags to watch for — and what to look for instead.',
      '## 1. No NYC Home Improvement License',
      'In NYC, any contractor performing home improvement work must hold an active NYC Home Improvement Contractor (HIC) license issued by the Department of Consumer and Worker Protection. This is non-negotiable. Verify the license at nyc.gov before signing anything. An unlicensed contractor cannot legally pull permits, which means your project will either skip permits (illegal) or use another entity\'s license (also illegal).',
      '## 2. No Written Contract',
      'NYC law requires a written contract for any home improvement project over $500. The contract must include the total price, payment schedule, start and completion dates, a detailed scope of work, and the contractor\'s HIC license number. If a contractor is reluctant to put the terms in writing, walk away.',
      '## 3. Demands Full Payment Upfront',
      'A legitimate contractor will work with a reasonable payment schedule tied to project milestones. A common structure is 10-20% deposit, 30% at rough-in, 30% at finish stage, and 10-20% at completion. Any contractor who demands 50% or more upfront is either undercapitalized or planning to disappear.',
      '## 4. No Insurance Certificates',
      'At minimum, your contractor should carry general liability insurance ($1M-$2M minimum for NYC) and workers\' compensation insurance. Request a Certificate of Insurance and verify it is current. In co-ops and condos, the building will require being named as additionally insured — if your contractor cannot provide this, they cannot work in most NYC buildings.',
      '## 5. No References or Portfolio',
      'Ask for at least three recent references in NYC and follow up with every one. Ask about timeline accuracy, communication, quality, and whether there were unexpected costs. A contractor with 25+ years of experience should have plenty of happy clients willing to vouch for them.',
      '## 6. Extremely Low Bid',
      'If one bid is 30-40% lower than the others, something is wrong. The contractor may be planning to cut corners on materials, use unlicensed subcontractors, skip permits, or hit you with change orders once the project is underway. In NYC construction, you generally get what you pay for.',
      '## 7. Poor Communication From Day One',
      'If a contractor takes days to return your call, is vague about timelines, or cannot clearly explain the scope of work during the estimate phase, it will only get worse once construction starts. Good communication is the single best predictor of a successful renovation experience.',
    ],
  },
  'brownstone-renovation-guide-brooklyn': {
    title: 'The Ultimate Brooklyn Brownstone Renovation Guide',
    category: 'Renovation Guides',
    readTime: '12 min read',
    date: 'February 12, 2026',
    content: [
      'Brooklyn brownstones are among the most desirable properties in New York City — and among the most complex to renovate. These 100+ year old buildings have unique structural systems, historic preservation requirements, and renovation challenges that demand a contractor with specific brownstone experience. Here is everything you need to know.',
      '## Understanding Your Brownstone',
      'Most Brooklyn brownstones were built between 1860 and 1910. They are typically 3-4 stories, 20 feet wide, with load-bearing masonry walls (brick party walls on the sides, brownstone facade in front). Floor systems are wood joists, often undersized by modern standards. Plumbing is usually original cast iron, and electrical may still include knob-and-tube wiring in the upper floors.',
      '## Common Brownstone Renovation Projects',
      'The most popular brownstone renovations include parlor floor kitchen/living room renovations (often involving removing the wall between the front and back rooms), garden-level conversions (creating a modern kitchen and family room below grade), bathroom additions and renovations, full-floor owner suite creation, and whole-house gut renovations that modernize every system while preserving historic character.',
      '## Structural Considerations',
      'Brownstone renovation almost always involves structural work. Removing the bearing wall between front and back rooms requires a steel beam and proper engineering. Opening up between floors for a new staircase means cutting and reinforcing floor joists. Adding a rear extension requires new foundation work. We work with structural engineers on every brownstone project to ensure the work is safe and code-compliant.',
      '## Historic District & Landmark Regulations',
      'Many Brooklyn brownstone neighborhoods — Park Slope, Brooklyn Heights, Fort Greene, Clinton Hill, Cobble Hill — are designated historic districts. Any visible exterior changes (windows, doors, facade work, rear extensions visible from the street) require Landmarks Preservation Commission (LPC) approval before you can get a DOB permit. Interior work generally does not require LPC review. We coordinate both LPC and DOB approvals to keep your timeline on track.',
      '## Cost Expectations',
      'Brownstone renovation costs in Brooklyn typically range from $200-$350 per square foot for a full gut renovation. A single-floor renovation (like a parlor floor kitchen/living room) generally runs $150,000-$300,000. A full four-story gut can range from $600,000 to over $1.2 million depending on the scope and finish level. These numbers include construction but may not include architectural fees, engineering, and permit costs.',
      '## Choosing the Right Contractor',
      'Not every contractor understands brownstones. You need a team that has experience with masonry bearing walls, pre-war floor systems, brownstone facade restoration, and the specific permitting requirements of historic districts. Ask potential contractors specifically about their brownstone experience and request references from similar projects in your neighborhood.',
    ],
  },
  'best-roi-home-improvements-nyc': {
    title: 'Top 5 Home Improvements With the Best ROI in NYC',
    category: 'Investment',
    readTime: '5 min read',
    date: 'February 5, 2026',
    content: [
      'Not all home improvements deliver equal returns. If you are renovating with resale value in mind — or just want to make smart investments in your property — these five improvements consistently deliver the highest ROI for NYC homeowners.',
      '## 1. Kitchen Remodel (70-85% ROI)',
      'The kitchen sells the home. Even a mid-range kitchen remodel — new countertops, updated cabinetry, modern appliances, and good lighting — can return 70-85% of its cost at resale while making your daily life dramatically better. In competitive NYC neighborhoods, an outdated kitchen can cost you $50,000-$100,000 in lost sale price.',
      '## 2. Bathroom Renovation (65-80% ROI)',
      'Updated bathrooms are the second biggest deal-maker for NYC buyers. A modern bathroom with quality tile, a good vanity, proper lighting, and contemporary fixtures signals that the rest of the home has been maintained. Even a modest $15,000 bathroom refresh can return $10,000-$12,000 at sale.',
      '## 3. Hardwood Floor Refinishing (100%+ ROI)',
      'This is the rare home improvement that can actually return more than it costs. Refinishing existing hardwood floors ($4-$8 per square foot) makes an enormous visual impact and is one of the first things buyers notice. In a 1,000 sq ft apartment, a $5,000-$8,000 floor refinishing can add $10,000+ to the sale price.',
      '## 4. Electrical Panel Upgrade (60-70% ROI)',
      'An outdated electrical panel (60 amps, Federal Pacific, fuses instead of breakers) is a red flag that scares off buyers and can kill deals during inspection. Upgrading to a modern 200-amp panel ($2,500-$5,000) removes this liability, supports modern appliance loads, and signals to buyers that the home\'s infrastructure is sound.',
      '## 5. Window Replacement (60-75% ROI)',
      'New windows improve energy efficiency, reduce noise (critical in NYC), and enhance curb appeal. Energy-efficient windows can save $200-$500 per year on heating and cooling costs, and many buyers specifically ask about window age and condition. Modern double-pane windows with good sound ratings are a strong selling point in any NYC neighborhood.',
      '## The Bottom Line',
      'Focus your renovation budget on improvements that buyers can see and feel. Kitchens, bathrooms, and floors create the strongest emotional reactions. Infrastructure upgrades (electrical, plumbing) remove deal-killing objections. Skip luxury upgrades that reflect personal taste more than broad market appeal — custom built-ins, exotic materials, and over-the-top finishes rarely return their full cost.',
    ],
  },
  'coop-condo-renovation-rules-nyc': {
    title: 'Co-op vs. Condo Renovation Rules in NYC: What You Need to Know',
    category: 'Permits & Regulations',
    readTime: '9 min read',
    date: 'January 28, 2026',
    content: [
      'Renovating in a NYC co-op or condo adds an entire layer of approvals, requirements, and restrictions on top of the standard DOB permit process. Understanding these rules before you start planning can save you weeks of delays and thousands of dollars in unexpected costs.',
      '## Co-op vs. Condo: Key Differences',
      'In a co-op, you own shares in a corporation that owns the building. The board has significant control over what you can do to your apartment. In a condo, you own your unit outright, and the condo board has less authority — but they still have rules. Both require board approval for most renovation work, but co-op boards tend to be more restrictive and have more extensive review processes.',
      '## The Alteration Agreement',
      'Both co-ops and condos require an alteration agreement for renovation work. This is a contract between you and the building that outlines the scope of work, construction schedule, insurance requirements, and your obligations to protect common areas. The agreement is reviewed by the board, often by the building\'s management company, and sometimes by the building\'s architect or engineer.',
      '## Insurance Requirements',
      'This catches many homeowners off guard. Your contractor must carry specific insurance amounts — typically $1M-$3M in general liability — and name the building, management company, and sometimes the co-op corporation as additionally insured on the policy. Workers\' compensation insurance is also required. Your contractor needs to produce Certificates of Insurance (COI) before the board will approve your project.',
      '## Common Restrictions',
      'Most NYC co-ops and condos impose working hour restrictions (typically 8am-5pm weekdays, no weekends or holidays), noise restrictions, elevator reservation requirements for material delivery, floor protection requirements for common areas, and neighbor notification requirements. Some buildings restrict wet work (plumbing changes) or require professional engineering review for any structural modifications.',
      '## Timeline Impact',
      'Board approval typically adds 4-8 weeks to your project timeline for co-ops and 2-4 weeks for condos. This is on top of the DOB permit timeline. Planning for this approval period before you finalize your construction schedule is essential for a realistic project timeline.',
      '## How We Handle Co-op and Condo Renovations',
      'At Asif Contracting, we prepare the complete alteration agreement package, produce all required insurance certificates, create board-ready construction schedules, and coordinate with building management throughout the project. We have worked with hundreds of co-op and condo boards across Manhattan and Brooklyn and understand what each management company expects.',
    ],
  },
  'basement-conversion-nyc-legal-requirements': {
    title: 'Is Your NYC Basement Conversion Legal? Requirements & Costs',
    category: 'Renovation Guides',
    readTime: '8 min read',
    date: 'January 20, 2026',
    content: [
      'Basement conversions have become one of the most popular renovation projects in NYC, especially in Queens, Brooklyn, and the Bronx where homeowners want to create rental income or additional living space. But converting a basement to habitable space in NYC has strict legal requirements that many homeowners (and some contractors) do not fully understand.',
      '## Basement vs. Cellar: It Matters',
      'NYC distinguishes between basements and cellars. A basement has at least half its height above curb level. A cellar has more than half its height below curb level. This distinction matters because basements are generally easier to convert to legal living space, while cellars face additional restrictions, particularly around light and ventilation.',
      '## Minimum Requirements for Legal Occupancy',
      'To legally convert a basement to habitable space, you must meet these requirements: minimum ceiling height of 7 feet (some areas require 7\'6\"), proper egress windows (minimum size specified by code), adequate natural light and ventilation, waterproofing and moisture control, fire-rated separation from the rest of the building, separate means of egress (second exit), and compliance with electrical and plumbing codes.',
      '## The Permit Process',
      'A legal basement conversion requires a DOB alteration permit — typically an Alt-1 if you are creating a new dwelling unit, or an Alt-2 if you are converting to habitable space within an existing unit. You will need architectural plans, possibly structural engineering (if floor or ceiling modifications are required), and the plans must be approved by a DOB plan examiner or professionally certified by a PE or RA.',
      '## Typical Costs',
      'A basic legal basement conversion in NYC typically costs $50,000 to $100,000, depending on the starting condition and the scope of work. This includes waterproofing ($10,000-$20,000), egress window installation ($3,000-$8,000), framing and insulation ($5,000-$15,000), electrical and plumbing ($8,000-$20,000), flooring and finishing ($10,000-$25,000), and permits and engineering ($3,000-$8,000).',
      '## Common Illegal Conversion Mistakes',
      'We regularly see illegal basement conversions that lack proper egress, have ceiling heights below code, lack fire separation, have unpermitted electrical work, or were never inspected. These conversions put occupants at risk and can result in DOB violations, fines, and orders to restore the original condition. If you are buying a property with a finished basement, verify that the work was permitted and has a valid Certificate of Occupancy.',
      '## The Bottom Line',
      'A legal basement conversion is a significant investment, but it adds real value to your property — both as rental income and as square footage that counts toward your home\'s value at resale. The key is doing it right: proper permits, proper construction, and proper inspections.',
    ],
  },
  'winter-vs-summer-construction-nyc': {
    title: 'Winter vs. Summer Construction in NYC: When to Start Your Project',
    category: 'Planning',
    readTime: '6 min read',
    date: 'January 12, 2026',
    content: [
      'One of the most common questions NYC homeowners ask is: when is the best time to start a renovation? The answer depends on your project type, budget priorities, and tolerance for scheduling challenges.',
      '## The Case for Winter Construction',
      'Winter (November-February) is traditionally the slow season for NYC construction. This means contractors often have more availability, may offer competitive pricing, and can start sooner. Interior renovation projects — kitchen remodels, bathroom renovations, flooring, painting — are unaffected by weather and can proceed normally year-round. If your project is entirely interior, winter can be the smartest time to start.',
      '## The Case for Summer Construction',
      'Summer (May-September) is peak construction season in NYC. The advantages: longer daylight hours mean more productive workdays, exterior work (roofing, siding, masonry, facade work) can proceed without weather delays, and material deliveries are generally faster. The disadvantage: contractors are busiest, so booking may require more lead time, and pricing is at its peak.',
      '## Projects That Should Wait for Good Weather',
      'Some projects genuinely need warm, dry conditions. Exterior masonry work requires temperatures above 40°F for mortar to cure properly. Roofing should be done in dry conditions (adhesives and membranes need proper temperature ranges). Concrete work (foundations, stoops, sidewalks) needs to be protected from freezing for at least 48 hours after pouring. Exterior painting requires temperatures above 50°F.',
      '## The Ideal Scheduling Strategy',
      'For a major renovation that includes both interior and exterior work, the ideal approach is to start interior work in late winter (February-March), complete the interior phases while weather improves, and transition to exterior work in late spring. This gives you the cost advantages of the slower season while completing weather-dependent work in optimal conditions.',
      '## Planning Ahead Is More Important Than Timing',
      'Ultimately, the best time to start your renovation is when you are properly prepared — design finalized, budget confirmed, contractor selected, and permits filed. Rushing to start in a particular season without proper planning causes more delays than weather ever will.',
    ],
  },
  'new-construction-vs-renovation-nyc': {
    title: 'New Construction vs. Renovation in NYC: Which Is Right for You?',
    category: 'Planning',
    readTime: '7 min read',
    date: 'January 5, 2026',
    content: [
      'When a property needs significant work, NYC owners face a fundamental question: renovate what is there, or tear it down and start fresh? Both paths have real advantages and significant trade-offs. Here is how to decide.',
      '## When Renovation Makes Sense',
      'Renovation is usually the right choice when the building is structurally sound, the layout is workable with modifications, the property is in a historic district (where demolition may not be permitted), you want to preserve architectural character (brownstone details, pre-war moldings), or the cost of renovation is significantly less than new construction. For most NYC properties, renovation costs $100-$350 per square foot, compared to $200-$400+ for new construction.',
      '## When New Construction Makes Sense',
      'New construction becomes the better option when structural deficiencies make renovation cost-prohibitive, the existing building does not meet your space requirements and cannot be expanded, code compliance issues (foundation, fire safety, energy code) would require rebuilding most of the structure anyway, or you are building on a vacant lot. New construction also gives you the advantage of modern building systems, energy efficiency, and layouts designed for contemporary living from day one.',
      '## Cost Comparison',
      'A gut renovation of a typical Brooklyn brownstone costs $200-$350 per square foot. New construction of a comparable-sized home costs $250-$400 per square foot. The gap narrows when renovation reveals extensive structural issues, deteriorated foundations, or code violations that require costly remediation. In some cases, renovation costs can exceed new construction when the existing building has too many hidden problems.',
      '## Timeline Comparison',
      'A full gut renovation typically takes 6-12 months for construction. New construction takes 10-18 months. However, renovation timelines are more unpredictable because hidden conditions (deteriorated framing, asbestos, old plumbing) are only discovered during demolition. New construction timelines are more predictable because you are building from a clean slate with known conditions.',
      '## The Hybrid Approach',
      'Some NYC projects use a hybrid approach — keeping the foundation and structural shell while gutting and rebuilding everything inside. This can offer the cost savings of renovation with many of the benefits of new construction. It is particularly common with brownstones and row houses where the masonry shell is sound but the interior systems are beyond repair.',
      '## Making the Decision',
      'The right choice depends on a thorough assessment of the existing building, your budget, your space requirements, and local regulations. We recommend starting with a professional assessment of the existing structure before committing to either path. At Asif Contracting, we provide honest evaluations of renovation feasibility and will tell you upfront if new construction makes more sense for your situation.',
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) {
    return { title: 'Post Not Found | Asif Contracting' };
  }
  return {
    title: `${post.title} | Asif Contracting Blog`,
    description: post.content[0].substring(0, 160),
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you are looking for does not exist.</p>
          <Link href="/blog" className="text-orange font-semibold hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const slugs = Object.keys(posts);
  const currentIndex = slugs.indexOf(slug);
  const relatedSlugs = slugs.filter((_, i) => i !== currentIndex).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="gradient-navy py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-orange/20 text-orange text-xs font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-gray-400 text-sm flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span>{post.date}</span>
            <span className="flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" /> {post.category}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            {post.content.map((block, i) => {
              if (block.startsWith('## ')) {
                return (
                  <h2 key={i} className="text-2xl font-bold text-navy mt-10 mb-4">
                    {block.replace('## ', '')}
                  </h2>
                );
              }
              return (
                <p key={i} className="text-gray-700 leading-relaxed mb-6">
                  {block}
                </p>
              );
            })}
          </div>

          {/* Author CTA */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-navy mb-2">About Asif Contracting</h3>
            <p className="text-gray-600 mb-4">
              Asif Contracting Corp is a licensed NYC general contractor with 25+ years of
              experience in residential and commercial construction across all five boroughs.
              We specialize in renovations, new construction, and structural alterations.
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-hover transition-colors"
            >
              Get a Free Estimate <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedSlugs.map((slug) => {
              const related = posts[slug];
              return (
                <Link
                  key={slug}
                  href={`/blog/${slug}`}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow group"
                >
                  <span className="text-xs text-orange font-semibold">{related.category}</span>
                  <h3 className="text-lg font-bold text-navy mt-2 mb-2 group-hover:text-orange transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{related.content[0]}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        heading="Have a Project in Mind?"
        subheading="Skip the research — talk to an expert. Get a free estimate from NYC's most trusted contractor."
      />
    </>
  );
}
