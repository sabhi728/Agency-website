import Header from "@/components/header"
import Footer from "@/components/footer"

export default function GrievancePolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Grievance Policy</h1>
        <div className="prose max-w-none">
          <p>
            At RechargeZy, we are committed to providing the best possible service to our customers. This Grievance
            Policy outlines how we handle and resolve customer complaints:
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Filing a Complaint</h2>
          <p>
            If you have any grievances or complaints regarding our services, you can reach out to our customer support
            team through the following channels:
          </p>
          <ul className="list-disc pl-6">
            <li>Email: grievance@rechargezy.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>In-app support chat</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. Complaint Resolution Process</h2>
          <p>
            We aim to acknowledge all complaints within 24 hours of receipt. Our team will investigate your complaint
            and provide a resolution or update within 7 business days.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">3. Escalation</h2>
          <p>
            If you are not satisfied with the initial resolution, you can request to escalate your complaint to a senior
            member of our support team. Escalated complaints will be reviewed within 3 business days.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Complaint Tracking</h2>
          <p>
            You will be provided with a unique reference number for your complaint. You can use this number to track the
            status of your complaint through our customer support channels.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">5. Resolution Time</h2>
          <p>
            While we strive to resolve all complaints as quickly as possible, some complex issues may require more time.
            In such cases, we will keep you informed of the progress at regular intervals.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">6. Feedback</h2>
          <p>
            We value your feedback on our complaint resolution process. After your complaint is resolved, you may
            receive a survey to rate your experience and provide suggestions for improvement.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">7. Privacy</h2>
          <p>All complaints will be handled with strict confidentiality in accordance with our Privacy Policy.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">8. Contact Us</h2>
          <p>If you have any questions about this Grievance Policy, please contact us at support@rechargezy.com.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

