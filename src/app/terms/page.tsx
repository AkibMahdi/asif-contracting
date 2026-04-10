import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Asif Contracting Corp',
  description: 'Terms of service for Asif Contracting Corp website and services.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <>
      <section className="gradient-navy py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-gray-300">Last updated: April 1, 2026</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Agreement to Terms</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            By accessing or using the Asif Contracting Corp website at asifcontracting.com, you
            agree to be bound by these Terms of Service. If you do not agree with any part of these
            terms, please do not use our website.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Use of Website</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            This website is provided for informational purposes about Asif Contracting Corp and our
            construction services. You may browse the website, submit inquiries through our contact
            forms, and request estimates for construction projects. You agree not to use the website
            for any unlawful purpose or in any way that could damage or impair the website.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Estimates & Pricing</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Cost estimates, price ranges, and project timelines mentioned on this website are
            provided for general informational purposes only. They do not constitute a binding quote
            or contract. Actual project costs and timelines depend on the specific scope of work,
            site conditions, material selections, and other factors that can only be determined
            through an in-person consultation. A binding agreement for construction services is
            established only through a signed written contract between you and Asif Contracting Corp.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Construction Services</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            All construction services provided by Asif Contracting Corp are governed by the specific
            written contract agreed upon between the parties for each project. These Terms of Service
            apply to website use only and do not modify or supersede any construction contract terms.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            All content on this website — including text, images, logos, design elements, and
            graphics — is the property of Asif Contracting Corp and is protected by applicable
            intellectual property laws. You may not reproduce, distribute, or use any content from
            this website without our prior written consent.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Text Messaging (SMS) Terms</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            By submitting a form on our website with your phone number, you agree to receive
            text messages from Asif Contracting Corp related to your inquiry. The following
            terms apply to our text messaging program:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li><strong>Program Name:</strong> Asif Contracting Lead Notifications</li>
            <li><strong>Program Description:</strong> One-time confirmation and follow-up messages related to your construction estimate request.</li>
            <li><strong>Message Frequency:</strong> 1-2 messages per form submission. This is not a recurring subscription.</li>
            <li><strong>Message and Data Rates:</strong> Message and data rates may apply. Check with your wireless carrier for details.</li>
            <li><strong>Opt-Out:</strong> You may opt out at any time by replying <strong>STOP</strong> to any message. You will receive a confirmation message and no further texts will be sent.</li>
            <li><strong>Help:</strong> For assistance, reply <strong>HELP</strong> to any message or call us at (917) 353-8999.</li>
            <li><strong>Support Contact:</strong> mohsin1997@yahoo.com or (917) 353-8999</li>
            <li>Your consent to receive text messages is not a condition of purchasing any services.</li>
            <li>Your phone number will not be shared with third parties for marketing purposes.</li>
            <li>Compatible carriers include but are not limited to AT&amp;T, T-Mobile, Verizon, and Sprint. Carriers are not liable for delayed or undelivered messages.</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Disclaimer of Warranties</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            This website is provided &quot;as is&quot; without warranties of any kind, express or
            implied. We do not warrant that the website will be uninterrupted, error-free, or free
            of viruses or other harmful components. The information on this website, including blog
            posts and cost guides, is for general informational purposes and should not be relied
            upon as professional advice for your specific situation.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Asif Contracting Corp shall not be liable for any indirect, incidental, special, or
            consequential damages arising from your use of this website. Our total liability for any
            claim related to the website shall not exceed the amount you paid to access the website
            (which is zero, as the website is free to use).
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Third-Party Links</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our website may contain links to third-party websites. We are not responsible for the
            content, privacy practices, or terms of service of any third-party websites. Accessing
            third-party links is at your own risk.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Governing Law</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            These Terms of Service are governed by and construed in accordance with the laws of the
            State of New York. Any disputes arising from these terms or your use of the website shall
            be resolved in the courts of New York County, New York.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Changes to These Terms</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We may update these Terms of Service from time to time. We will post the updated terms
            on this page with a revised &quot;Last updated&quot; date. Your continued use of the
            website after any changes constitutes acceptance of the updated terms.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you have any questions about these Terms of Service, please contact us at:<br />
            <strong>Asif Contracting Corp</strong><br />
            Phone: (917) 353-8999<br />
            Email: mohsin1997@yahoo.com<br />
            75 Harden St, Brooklyn, NY 11234
          </p>
        </div>
      </section>
    </>
  );
}
