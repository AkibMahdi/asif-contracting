import { Phone, ClipboardList, HardHat, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    step: '01',
    title: 'Free Consultation',
    description: 'Call us or fill out our form. We\'ll discuss your project goals, timeline, and budget within 24 hours.',
  },
  {
    icon: ClipboardList,
    step: '02',
    title: 'Detailed Estimate',
    description: 'We visit your property, assess the scope, and provide a transparent, no-obligation written estimate.',
  },
  {
    icon: HardHat,
    step: '03',
    title: 'Expert Construction',
    description: 'Our licensed crew handles everything — permits, materials, and construction — with daily progress updates.',
  },
  {
    icon: CheckCircle,
    step: '04',
    title: 'Final Walkthrough',
    description: 'We do a thorough inspection together. You don\'t pay the final balance until you\'re 100% satisfied.',
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-orange font-semibold text-sm uppercase tracking-wider">Simple Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">How It Works</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From your first call to the final walkthrough, we make construction stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.step} className="relative text-center">
              <div className="w-20 h-20 mx-auto gradient-navy rounded-2xl flex items-center justify-center mb-5 relative">
                <step.icon className="w-9 h-9 text-white" />
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-orange text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {step.step}
                </span>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
