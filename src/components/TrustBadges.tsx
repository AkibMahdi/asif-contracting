import { Shield, Award, Clock, Users, Star, Building2 } from 'lucide-react';

const badges = [
  { icon: Clock, label: '21+ Years', sublabel: 'Serving NYC' },
  { icon: Building2, label: '500+', sublabel: 'Projects Done' },
  { icon: Star, label: '4.9/5', sublabel: 'Google Rating' },
  { icon: Shield, label: 'Licensed', sublabel: 'NYC & Nassau' },
  { icon: Award, label: 'DOB', sublabel: 'Approved' },
  { icon: Users, label: '1,000+', sublabel: 'Happy Clients' },
];

interface TrustBadgesProps {
  variant?: 'light' | 'dark';
  columns?: 3 | 6;
}

export default function TrustBadges({ variant = 'light', columns = 6 }: TrustBadgesProps) {
  const displayBadges = columns === 3 ? badges.slice(0, 3) : badges;
  const bgClass = variant === 'dark' ? 'bg-navy' : 'bg-gray-50';
  const textClass = variant === 'dark' ? 'text-white' : 'text-navy';
  const subClass = variant === 'dark' ? 'text-gray-300' : 'text-gray-500';
  const iconBg = variant === 'dark' ? 'bg-white/10' : 'bg-white';

  return (
    <section className={`${bgClass} py-10 md:py-14`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className={`grid grid-cols-2 md:grid-cols-3 ${columns === 6 ? 'lg:grid-cols-6' : 'lg:grid-cols-3'} gap-6 md:gap-8`}>
          {displayBadges.map((badge) => (
            <div key={badge.label} className="text-center">
              <div className={`w-14 h-14 mx-auto ${iconBg} rounded-xl flex items-center justify-center mb-3 shadow-sm`}>
                <badge.icon className={`w-7 h-7 ${variant === 'dark' ? 'text-gold' : 'text-navy'}`} />
              </div>
              <div className={`text-xl font-bold ${textClass}`}>{badge.label}</div>
              <div className={`text-sm ${subClass}`}>{badge.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
