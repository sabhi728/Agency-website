"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Shield, Lock, Eye, Server, CreditCard, Fingerprint } from "lucide-react"

export default function Page() {
  const safetyFeatures = [
    {
      icon: <Shield className="h-12 w-12 text-[#673ee5]" />,
      title: "End-to-End Encryption",
      description: "All your data and transactions are encrypted using industry-standard protocols.",
    },
    {
      icon: <Lock className="h-12 w-12 text-[#673ee5]" />,
      title: "Secure Payment Gateways",
      description: "We partner with trusted payment gateways to ensure the security of your financial information.",
    },
    {
      icon: <Eye className="h-12 w-12 text-[#673ee5]" />,
      title: "24/7 Fraud Monitoring",
      description: "Our advanced systems continuously monitor for any suspicious activities.",
    },
    {
      icon: <Server className="h-12 w-12 text-[#673ee5]" />,
      title: "Regular Security Audits",
      description: "We conduct regular security audits to identify and address potential vulnerabilities.",
    },
    {
      icon: <CreditCard className="h-12 w-12 text-[#673ee5]" />,
      title: "PCI DSS Compliant",
      description: "We adhere to the Payment Card Industry Data Security Standard for handling card information.",
    },
    {
      icon: <Fingerprint className="h-12 w-12 text-[#673ee5]" />,
      title: "Two-Factor Authentication",
      description: "Add an extra layer of security to your account with two-factor authentication.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h1
              className="text-4xl font-bold text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Safety First
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              At , we prioritize the security of your data and transactions above all else. Our comprehensive
              security measures ensure that you can use our platform with complete peace of mind.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {safetyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold ml-4">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our Commitment to Your Safety</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-6">
               is committed to maintaining the highest standards of security in the industry. We
                continuously invest in cutting-edge technologies and best practices to ensure that your personal and
                financial information remains protected at all times.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of security experts works tirelessly to stay ahead of potential threats and implement proactive
                measures to safeguard your data. We also collaborate with leading cybersecurity firms to conduct regular
                security assessments and penetration testing.
              </p>
              <p className="text-gray-600 mb-8">
                Your trust is our most valuable asset, and we strive every day to earn and maintain it through our
                unwavering commitment to your safety and privacy.
              </p>
              <div className="text-center">
                <Button className="bg-[#673ee5] hover:bg-[#5933c0] text-white">Learn More About Our Security</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

