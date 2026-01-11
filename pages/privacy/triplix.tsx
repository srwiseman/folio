import Head from 'next/head'

export default function TriplixPrivacy() {
  return (
    <>
      <Head>
        <title>Triplix Privacy Policy</title>
        <meta name="description" content="Privacy policy for the Triplix game." />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto prose prose-lg">
          <h1>Triplix Privacy Policy</h1>

          <p>Last updated: January 11, 2026</p>

          <p>
            This Privacy Policy explains how Triplix (the “Game”, “we”, “us”, or “our”)
            collects, uses, and discloses information when you use the Game or visit
            pages related to Triplix on our website.
          </p>

          <h2>1. Information We Collect</h2>

          <h3>a) Information you provide</h3>
          <ul>
            <li>Contact information you choose to submit (for example, email address when you contact us).</li>
            <li>Any content you submit directly (feedback, support requests).</li>
          </ul>

          <h3>b) Information collected automatically</h3>
          <ul>
            <li>Usage data such as pages viewed, time spent, interaction events, and device/browser characteristics.</li>
            <li>Technical data necessary to operate and improve the Game (crash reports, performance metrics).</li>
          </ul>

          <h3>c) Third-party data</h3>
          <p>We may receive aggregated or anonymized data from third-party analytics providers.</p>

          <h2>2. How We Use Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain the Game and related website content.</li>
            <li>Diagnose and fix technical issues, improve performance, and develop new features.</li>
            <li>Respond to your inquiries and provide support.</li>
            <li>Analyze usage patterns for analytics and product improvement.</li>
          </ul>

          <h2>3. Legal Basis for Processing (if applicable)</h2>
          <p>
            Where required by applicable law, we rely on your consent, the performance of a contract,
            or our legitimate interests (for example, to maintain and improve the Game).
          </p>

          <h2>4. Sharing and Disclosure</h2>
          <p>We do not sell personal data. We may share information with:</p>
          <ul>
            <li>Service providers who perform services on our behalf (hosting, analytics, crash reporting).</li>
            <li>Law enforcement or regulators if required by law or to protect legal rights.</li>
          </ul>

          <p>
            When we use third-party services (for example, analytics providers), those services may collect
            information according to their own policies.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain personal data only for as long as necessary to fulfill the purposes described here, or as
            required by law. Aggregated or anonymized data may be retained indefinitely.
          </p>

          <h2>6. Security</h2>
          <p>
            We implement reasonable technical and organizational measures to protect information from unauthorized
            access, alteration, disclosure, or destruction. No system is completely secure; we cannot guarantee absolute security.
          </p>

          <h2>7. International Transfers</h2>
          <p>
            Information may be stored and processed in countries other than your own. When transfers occur, we use
            appropriate safeguards required by law.
          </p>

          <h2>8. Children’s Privacy</h2>
          <p>
            The Game is not intended for children under 13. We do not knowingly collect personal information from children under 13.
            If you believe we have collected data from a child under 13, contact us to request deletion.
          </p>

          <h2>9. Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have rights including access, correction, deletion, restriction,
            objection to processing, and data portability. To exercise these rights, contact us using the details below.
          </p>

          <h2>10. Contact</h2>
          <p>
            If you have questions, requests, or concerns about this Privacy Policy or data practices related to Triplix, contact:
          </p>
          <p>
            Email: <a href="mailto:swiseman@gmail.com">swiseman@gmail.com</a>
          </p>

          <p className="text-sm text-slate-500">This Privacy Policy is a developer-friendly summary and does not constitute legal advice.</p>
        </article>
      </main>
    </>
  )
}
