'use client';

import { useState } from 'react';
import { Phone, CheckCircle, Loader2 } from 'lucide-react';

interface LeadFormProps {
  variant?: 'default' | 'compact' | 'landing';
  heading?: string;
  subheading?: string;
}

export default function LeadForm({ variant = 'default', heading, subheading }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: (formData.get('email') as string) || undefined,
      service: (formData.get('service') as string) || undefined,
      borough: (formData.get('borough') as string) || undefined,
      message: (formData.get('message') as string) || undefined,
    };

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-navy mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-4">We&apos;ve received your request. A project specialist will contact you within 2 hours during business hours.</p>
        <p className="text-sm text-gray-500">Need immediate help? Call us at <a href="tel:+17186866550" className="text-orange font-bold">(718) 686-6550</a></p>
      </div>
    );
  }

  return (
    <div className={variant === 'landing' ? '' : 'bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100'}>
      {heading && <h3 className="text-xl md:text-2xl font-bold text-navy mb-1">{heading}</h3>}
      {subheading && <p className="text-gray-600 text-sm mb-6">{subheading}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-colors text-gray-900"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-colors text-gray-900"
              placeholder="(212) 555-0000"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-colors text-gray-900"
            placeholder="john@example.com"
          />
        </div>

        {variant !== 'compact' && (
          <>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed *</label>
              <select
                id="service"
                name="service"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-colors text-gray-900 bg-white"
              >
                <option value="">Select a service...</option>
                <option value="remodeling">Kitchen & Bath Remodeling</option>
                <option value="home-improvement">Full Home Renovation</option>
                <option value="new-construction">New Construction</option>
                <option value="alterations">Structural Alterations</option>
                <option value="interior">Interior Work (Drywall, Flooring, etc.)</option>
                <option value="exterior">Exterior Work (Roofing, Siding, Masonry)</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="borough" className="block text-sm font-medium text-gray-700 mb-1">Borough / Location *</label>
              <select
                id="borough"
                name="borough"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-colors text-gray-900 bg-white"
              >
                <option value="">Select your borough...</option>
                <option value="manhattan">Manhattan</option>
                <option value="brooklyn">Brooklyn</option>
                <option value="queens">Queens</option>
                <option value="bronx">The Bronx</option>
                <option value="staten-island">Staten Island</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-colors text-gray-900 resize-none"
                placeholder="Tell us about your project (size, timeline, budget range)..."
              />
            </div>
          </>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-orange text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-hover transition-colors shadow-lg shadow-orange/25 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </span>
          ) : (
            'Get My Free Estimate'
          )}
        </button>

        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <Phone className="w-4 h-4" />
          <span>Or call us now: <a href="tel:+17186866550" className="text-navy font-semibold">(718) 686-6550</a></span>
        </div>

        <p className="text-xs text-center text-gray-400">
          No spam. No obligation. We respond within 2 hours.
        </p>
      </form>
    </div>
  );
}
