import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export default function ServiceCard({ title, description, href, icon: Icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 hover:shadow-xl hover:border-orange/20 transition-all duration-300"
    >
      <div className="w-14 h-14 gradient-navy rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-orange transition-colors">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-orange group-hover:gap-2 transition-all">
        Learn More <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
}
