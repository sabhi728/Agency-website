"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { CheckCircle, Clock, Gift, Shield, Zap, HeadphonesIcon } from "lucide-react"

export default function Page() {
  const reasons = [
    {
      icon: <Zap className="h-12 w-12 text-[#673ee5]" />,
      title: "Lightning Fast Transactions",
      description: "Experience instant recharges and bill payments with our optimized platform.",
    },
    {
      icon: <Shield className="h-12 w-12 text-[#673ee5]" />,
      title: "Bank-Grade Security",
      description: "Your data and transactions are protected with the highest security standards.",
    },
    {
      icon: <Gift className="h-12 w-12 text-[#673ee5]" />,
      title: "Exciting Cashback Rewards",
      description: "Earn cashback on every transaction, making your payments more rewarding.",
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-[#673ee5]" />,
      title: "Wide Range of Services",
      description: "From mobile recharges to utility bills, we've got all your payment needs covered.",
    },
    {
      icon: <Clock className="h-12 w-12 text-[#673ee5]" />,
      title: "24/7 Availability",
      description: "Make payments anytime, anywhere with our always-on platform.",
    },
    {
      icon: <HeadphonesIcon className="h-12 w-12 text-[#673ee5]" />,
      title: "Dedicated Customer Support",
      description: "Our support team is always ready to assist you with any queries or issues.",
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
              Why Choose Agency Website?
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Agency Website offers a unique combination of convenience, security, and rewards that sets us apart from the
              competition. Here's why thousands of users choose us for their recharge and bill payment needs:
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="flex items-center mb-4">
                    {reason.icon}
                    <h3 className="text-xl font-semibold ml-4">{reason.title}</h3>
                  </div>
                  <p className="text-gray-600">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-[#673ee5] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience the RechargeZy Difference?</h2>
            <p className="text-xl mb-8">Join thousands of satisfied users and simplify your bill payments today.</p>
            <Button className="bg-white text-[#673ee5] hover:bg-gray-100">Get Started Now</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

