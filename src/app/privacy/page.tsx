export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white/80 py-32 px-6">
      <div className="max-w-3xl mx-auto prose prose-invert prose-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
        <p className="text-xl text-white/60 mb-12">Last updated: November 2025</p>

        <h3>1. Introduction</h3>
        <p>
          Welcome to <strong>BodhaBodha</strong>. We respect your privacy and are committed to protecting your personal data. 
          This privacy policy will inform you as to how we look after your personal data when you visit our website 
          and tell you about your privacy rights.
        </p>

        <h3>2. Data We Collect</h3>
        <p>
          We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
        </p>
        <ul>
          <li><strong>Identity Data:</strong> includes email address (when you sign up for results).</li>
          <li><strong>Assessment Data:</strong> includes your quiz responses and calculated consciousness lens.</li>
          <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version.</li>
        </ul>

        <h3>3. How We Use Your Data</h3>
        <p>
          We will only use your personal data when the law allows us to. Most commonly, we use your personal data:
        </p>
        <ul>
          <li>To deliver your assessment results.</li>
          <li>To manage our relationship with you.</li>
          <li>To improve our website, products/services, marketing or customer relationships.</li>
        </ul>

        <h3>4. Data Security</h3>
        <p>
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way.
        </p>

        <div className="mt-16 pt-8 border-t border-white/10 text-sm opacity-50">
          <p>For any privacy-specific concerns, please contact us.</p>
        </div>
      </div>
    </main>
  )
}