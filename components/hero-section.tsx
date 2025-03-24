"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ArrowRight, Zap, ShieldCheck, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="sm:text-center lg:text-left">
              <motion.h1
                className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="block xl:inline">Recharge & Pay Bills</span>{" "}
                <span className="block text-[#673ee5] xl:inline">With Exciting Cashback</span>
              </motion.h1>
              <motion.p
                className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0 text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                The fastest and most secure way to recharge your mobile, pay bills, and get amazing cashback rewards.
                Join thousands of happy users today!
              </motion.p>
              <motion.div
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="rounded-md shadow w-full sm:w-auto">
                  <Button
                    asChild
                    className="w-full sm:w-auto flex items-center justify-center bg-[#673ee5] hover:bg-[#5933c0] px-8 py-3 text-base font-medium text-white"
                  >
                    <Link href="/login">
                      Login Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto">
                  <Link
                    href="/services"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-[#673ee5] hover:bg-gray-50"
                  >
                    Explore Services
                  </Link>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <motion.div
          className="h-auto sm:h-56 w-full bg-[#673ee5] sm:h-72 md:h-96 lg:h-full lg:w-full p-6 sm:p-8 flex flex-col justify-center items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-white">
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="Fast & Secure"
              description="Instant recharge and bill payments with bank-grade security"
            />
            <FeatureCard
              icon={<ShieldCheck className="h-8 w-8" />}
              title="100% Safe"
              description="Your transactions and data are always protected"
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8" />}
              title="Exciting Cashback"
              description="Get rewarded with every transaction you make"
            />
            <FeatureCard
              icon={<ShieldCheck className="h-8 w-8" />}
              title="24/7 Support"
              description="Our team is always ready to assist you anytime"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center sm:flex-col sm:items-center text-left sm:text-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="mr-4 sm:mr-0 sm:mb-2">{icon}</div>
      <div>
        <h3 className="text-lg font-medium mb-1">{title}</h3>
        <p className="text-sm opacity-80">{description}</p>
      </div>
    </motion.div>
  )
}

