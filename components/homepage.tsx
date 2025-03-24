import Header from "./header"
import HeroSection from "./hero-section"
import ServicesSection from "./services-section"
import CashbackSection from "./cashback-section"
import SafetySection from "./safety-section"
import TestimonialsSection from "./testimonials-section"
import CTASection from "./cta-section"
import Footer from "./footer"

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <CashbackSection />
        <SafetySection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

