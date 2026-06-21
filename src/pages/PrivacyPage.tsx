export default function PrivacyPage() {
  return (
    <main className="pt-24 pb-28 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
          <p className="text-slate-500 text-sm">Effective Date: January 2026 | Last Updated: January 7, 2026</p>
        </div>

        <div className="space-y-8 text-slate-300">
          <section className="glass-card p-6 space-y-3">
            <h2 className="text-xl font-semibold text-white">1. Introduction</h2>
            <p>Selby Pulse Radio is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your data in accordance with UK GDPR and applicable data protection legislation.</p>
          </section>

          <section className="glass-card p-6 space-y-3">
            <h2 className="text-xl font-semibold text-white">2. Information We Collect</h2>
            <p><strong className="text-white">Information you provide:</strong> When you contact us via our website, request a song, apply to volunteer, or submit a sponsorship enquiry, we may collect your name, email address, phone number, and message content.</p>
            <p><strong className="text-white">Automatically collected information:</strong> When you visit our website, we may automatically collect your IP address, device type, pages visited, and browsing behaviour through cookies and analytics tools including Google Analytics and Squarespace Analytics.</p>
          </section>

          <section className="glass-card p-6 space-y-3">
            <h2 className="text-xl font-semibold text-white">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1 text-slate-400">
              <li>To respond to your enquiries and messages</li>
              <li>To improve our website and services</li>
              <li>To manage on-air shows, competitions, and segments</li>
              <li>To send station updates and newsletters (only if you opt in)</li>
              <li>To maintain the security and integrity of our platforms</li>
            </ul>
          </section>

          <section className="glass-card p-6 space-y-3">
            <h2 className="text-xl font-semibold text-white">4. Cookies</h2>
            <p>We use cookies to enhance your browsing experience and to collect anonymous analytics data. You can control cookie settings through your browser. Disabling cookies may affect some features of our website.</p>
          </section>

          <section className="glass-card p-6 space-y-3">
            <h2 className="text-xl font-semibold text-white">5. Data Storage & Security</h2>
            <p>We take reasonable technical and organisational measures to protect your personal data from unauthorised access, loss, or misuse. However, no method of transmission over the internet is 100% secure.</p>
          </section>

          <section className="glass-card p-6 space-y-3">
            <h2 className="text-xl font-semibold text-white">6. Third-Party Services</h2>
            <p>Our website may link to third-party websites and services. We are not responsible for the privacy practices of those external sites. We encourage you to review their privacy policies before providing any personal information.</p>
          </section>

          <section className="glass-card p-6 space-y-3">
            <h2 className="text-xl font-semibold text-white">7. Your Rights Under UK GDPR</h2>
            <p>You have the following rights regarding your personal data:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-400">
              <li>The right to access your personal data</li>
              <li>The right to correction of inaccurate data</li>
              <li>The right to deletion of your data</li>
              <li>The right to object to processing</li>
              <li>The right to withdraw consent at any time</li>
            </ul>
            <p>To exercise any of these rights, please contact us at <a href="mailto:selbypulseradio@gmail.com" className="text-accent hover:underline">selbypulseradio@gmail.com</a>.</p>
          </section>

          <section className="glass-card p-6 space-y-3">
            <h2 className="text-xl font-semibold text-white">8. Data Retention</h2>
            <p>We retain your personal data only for as long as necessary to fulfil the purposes described in this policy, unless a longer retention period is required by law.</p>
          </section>

          <section className="glass-card p-6 space-y-3">
            <h2 className="text-xl font-semibold text-white">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.</p>
          </section>

          <section className="glass-card p-6 space-y-3">
            <h2 className="text-xl font-semibold text-white">10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or how we handle your data, please contact us:</p>
            <address className="not-italic text-slate-400">
              <p>Selby Pulse Radio</p>
              <p>Selby Pulse Studio, Our Space</p>
              <p>58 Flaxley Road, Selby, YO8 4BW</p>
              <p><a href="mailto:selbypulseradio@gmail.com" className="text-accent hover:underline">selbypulseradio@gmail.com</a></p>
            </address>
          </section>
        </div>
      </div>
    </main>
  )
}
