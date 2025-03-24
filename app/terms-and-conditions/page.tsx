import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <div className="prose max-w-none">
          <p>
            Welcome to RechargeZy. By using our services, you agree to comply with and be bound by the following terms
            and conditions:
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the RechargeZy platform, you agree to be bound by these Terms and Conditions and all
            applicable laws and regulations. If you do not agree with any part of these terms, you may not use our
            services.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. Use of Services</h2>
          <p>
            RechargeZy provides mobile recharge and bill payment services. You agree to use these services only for
            lawful purposes and in accordance with these Terms and Conditions.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">3. User Accounts</h2>
          <p>
            To access certain features of our platform, you may be required to create an account. You are responsible
            for maintaining the confidentiality of your account information and for all activities that occur under your
            account.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Payment and Refunds</h2>
          <p>
            All payments made through RechargeZy are subject to our Payment and Refund Policy. Please refer to our
            separate Refund Policy for more details.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">5. Privacy</h2>
          <p>
            Your use of RechargeZy is also governed by our Privacy Policy. Please review our Privacy Policy, which also
            governs the site and informs users of our data collection practices.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">6. Modifications to Terms</h2>
          <p>
            RechargeZy reserves the right to modify these terms at any time. We will notify users of any changes by
            posting the new Terms and Conditions on this page.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">7. Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at support@rechargezy.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

