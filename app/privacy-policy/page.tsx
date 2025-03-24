import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p>
            At RechargeZy, we are committed to protecting your privacy and ensuring the security of your personal
            information. This Privacy Policy outlines how we collect, use, and safeguard your data:
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as your name, email address, phone number, and
            payment information when you use our services.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, process transactions, send
            you technical notices, and respond to your customer service requests.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">3. Information Sharing and Disclosure</h2>
          <p>
            We do not sell or rent your personal information to third parties. We may share your information with
            service providers who perform services on our behalf, or when required by law.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against
            unauthorized or unlawful processing, accidental loss, destruction, or damage.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. You may also have the right to
            restrict or object to certain processing of your data.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">6. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">7. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at privacy@rechargezy.com.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

