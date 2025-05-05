import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      </main>
      <Footer />
    </div>
  )
}

