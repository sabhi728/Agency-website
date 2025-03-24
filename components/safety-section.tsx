"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ShieldCheck, Lock, Eye, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SafetySection() {
  return (
    <section className="py-12 sm:py-20 bg-[#673ee5]/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Your Safety is Our Priority</h2>
          <p className="text-lg text-gray-600">
            At Agency Website, we implement the highest security standards to protect your transactions and personal
            information at all times.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <SecurityFeatureCard
            icon={<ShieldCheck className="h-12 w-12 text-[#673ee5]" />}
            title="Secure Transactions"
            description="Every transaction is encrypted and processed through secure payment gateways"
            delay={0}
          />
          <SecurityFeatureCard
            icon={<Lock className="h-12 w-12 text-[#673ee5]" />}
            title="Data Encryption"
            description="Your personal and financial information is encrypted with advanced algorithms"
            delay={0.2}
          />
          <SecurityFeatureCard
            icon={<Eye className="h-12 w-12 text-[#673ee5]" />}
            title="24/7 Monitoring"
            description="Continuous security monitoring to detect and prevent suspicious activities"
            delay={0.4}
          />
          <SecurityFeatureCard
            icon={<BarChart className="h-12 w-12 text-[#673ee5]" />}
            title="Fraud Prevention"
            description="Advanced systems to prevent fraudulent transactions and protect your account"
            delay={0.6}
          />
        </div>

        <motion.div
          className="mt-10 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button className="bg-[#673ee5] hover:bg-[#5933c0] text-white px-6 py-3 text-sm sm:text-base sm:px-8 sm:py-4 rounded-lg">
            Learn More About Our Security Measures
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function SecurityFeatureCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}) {
  return (
    <motion.div
      className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="mb-5">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

