import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Asif Contracting Corp',
  description: 'Privacy policy for Asif Contracting Corp. Learn how we collect, use, and protect your personal information.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="gradient-navy py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-300">Last updated: April 1, 2026</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Asif Contracting Corp (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your
            privacy and is committed to protecting your personal information. This Privacy Policy
            describes how we collect, use, and share information when you visit our website at
            asifcontracting.com or contact us for construction services.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address when you submit a contact form, request a quote, or call us.</li>
            <li><strong>Project Information:</strong> Details about your construction project, property address, service needs, and project preferences.</li>
            <li><strong>Website Usage Data:</strong> Pages visited, time spent on pages, browser type, device type, and IP address collected through standard web analytics.</li>
            <li><strong>Communication Records:</strong> Records of emails, phone calls, and messages exchanged between you and our team.</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use your information to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Respond to your inquiries and provide estimates for construction projects</li>
            <li>Communicate with you about your project, schedule, and progress</li>
            <li>Improve our website and services</li>
            <li>Send you relevant information about our services (with your consent)</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Information Sharing</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We do not sell, rent, or trade your personal information to third parties. We may share
            your information with trusted service providers who assist us in operating our website
            and conducting our business (such as web hosting providers and analytics services),
            provided they agree to keep your information confidential. We may also disclose your
            information when required by law or to protect our rights.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Data Security</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We implement reasonable security measures to protect your personal information from
            unauthorized access, alteration, disclosure, or destruction. However, no method of
            transmission over the Internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Cookies</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our website may use cookies and similar tracking technologies to improve your browsing
            experience and analyze website traffic. You can control cookie preferences through your
            browser settings.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Text Messaging (SMS) Policy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When you submit a form on our website and provide your phone number, you consent to
            receive a one-time text message confirming your submission. We may also send you a
            follow-up message related to your project inquiry. Message frequency is limited to
            1-2 messages per form submission.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Message and data rates may apply depending on your carrier and plan.</li>
            <li>You can opt out of text messages at any time by replying <strong>STOP</strong> to any message you receive from us.</li>
            <li>For help, reply <strong>HELP</strong> or contact us at (718) 686-6550.</li>
            <li>Your phone number will not be shared with third parties for marketing purposes.</li>
            <li>Carriers are not liable for delayed or undelivered messages.</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Your Rights</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            You have the right to request access to, correction of, or deletion of your personal
            information. You may also opt out of receiving marketing communications from us at any
            time, including text messages by replying STOP. To exercise these rights, please contact
            us using the information below.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Changes to This Policy</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We may update this Privacy Policy from time to time. We will post the updated policy on
            this page with a revised &quot;Last updated&quot; date.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you have any questions about this Privacy Policy, please contact us at:<br />
            <strong>Asif Contracting Corp</strong><br />
            Phone: (718) 686-6550<br />
            Email: mohsin1997@yahoo.com<br />
            63 Church Avenue, Brooklyn, NY 11218
          </p>
        </div>
      </section>
    </>
  );
}
