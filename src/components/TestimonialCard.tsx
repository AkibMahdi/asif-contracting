interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  rating?: number;
  project?: string;
}

export default function TestimonialCard({ name, location, text, rating = 5, project }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 flex flex-col">
      <div className="flex gap-0.5 mb-4 text-gold text-lg">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i}>&#9733;</span>
        ))}
      </div>
      <blockquote className="text-gray-700 leading-relaxed mb-6 flex-1">
        &ldquo;{text}&rdquo;
      </blockquote>
      <div className="border-t border-gray-100 pt-4">
        <div className="font-semibold text-navy">{name}</div>
        <div className="text-sm text-gray-500">{location}</div>
        {project && <div className="text-xs text-orange font-medium mt-1">{project}</div>}
      </div>
    </div>
  );
}
