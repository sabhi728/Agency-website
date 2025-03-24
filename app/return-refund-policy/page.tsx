import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ReturnRefundPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Return & Refund Policy</h1>
        <div className="prose max-w-none">
          <p>
            At RechargeZy, we strive to ensure customer satisfaction with all our services. This Return & Refund Policy
            outlines our guidelines for refunds and returns:
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Refund Eligibility</h2>
          <p>
            Refunds may be issued in cases where a recharge or bill payment was unsuccessful due to technical errors on
            our platform. Refunds are not available for successful transactions.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. Refund Process</h2>
          <p>
            If you believe you are eligible for a refund, please contact our customer support team within 48 hours of
            the transaction. We will investigate your claim and process eligible refunds within 5-7 business days.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">3. Cancellation of Services</h2>
          <p>
            Once a recharge or bill payment is successfully processed, it cannot be cancelled or reversed. Please ensure
            all details are correct before confirming a transaction.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Refund Method</h2>
          <p>
            Refunds will be credited to the original payment method used for the transaction. In some cases, we may
            offer store credit or other compensation at our discretion.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">5. Exceptions</h2>
          <p>
            RechargeZy reserves the right to handle refund requests on a case-by-case basis. We may refuse a refund if
            we suspect fraudulent activity or violation of our terms of service.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">6. Changes to This Policy</h2>
          <p>We may update this Return & Refund Policy from time to time. Any changes will be posted on this page.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">7. Contact Us</h2>
          <p>
            If you have any questions about this Return & Refund Policy, please contact our customer support team at
            support@rechargezy.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

