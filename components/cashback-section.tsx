"use client"

import type React from "react"

import { motion } from "framer-motion"
import { GiftIcon, TrendingUp, Clock, GiftIcon as GiftIconSolid } from "lucide-react"
import { Button } from "@/components/ui/button"

function CashbackFeature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 p-2 bg-purple-50 rounded-lg mr-4">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

function CashbackCoin({ top, left, delay }: { top: string; left: string; delay: number }) {
  return (
    <motion.div
      className="absolute w-12 h-12 rounded-full bg-yellow-400 shadow-md flex items-center justify-center text-yellow-800 font-bold"
      style={{ top, left }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        $
      </motion.div>
    </motion.div>
  )
}

export default function CashbackSection() {
  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#673ee5]/5 p-2 rounded-lg inline-block mb-4 text-center sm:text-left">
              <span className="text-[#673ee5] font-semibold text-sm">EXCLUSIVE REWARDS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center sm:text-left">
              Earn Cashback on Every Transaction
            </h2>
            <p className="text-lg text-gray-600 mb-6 sm:mb-8 text-center sm:text-left">
              Make your everyday payments and get rewarded! With Agency Website, you earn cashback on every transaction -
              from mobile recharges to utility bill payments.
            </p>

            <div className="space-y-6 mb-8">
              <CashbackFeature
                icon={<GiftIcon className="h-5 w-5 text-[#673ee5]" />}
                title="Up to 5% Cashback"
                description="Get up to 5% cashback on all your recharges and bill payments"
              />
              <CashbackFeature
                icon={<TrendingUp className="h-5 w-5 text-[#673ee5]" />}
                title="Special Offers"
                description="Enjoy exclusive deals and offers on special occasions and festivals"
              />
              <CashbackFeature
                icon={<Clock className="h-5 w-5 text-[#673ee5]" />}
                title="Instant Credit"
                description="Cashback is instantly credited to your RechargeZy wallet"
              />
            </div>

            <div className="text-center sm:text-left">
              <Button className="bg-[#673ee5] hover:bg-[#5933c0] text-white px-8 py-3">Start Earning Now</Button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-purple-50">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-[#673ee5] rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute inset-4 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <div className="text-center">
                        <GiftIconSolid className="h-16 w-16 text-[#673ee5] mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900">5%</h3>
                        <p className="text-[#673ee5] font-medium">CASHBACK</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Animated coins */}
                <CashbackCoin top="10%" left="20%" delay={0} />
                <CashbackCoin top="15%" left="70%" delay={1.5} />
                <CashbackCoin top="70%" left="15%" delay={1} />
                <CashbackCoin top="75%" left="75%" delay={0.5} />
                <CashbackCoin top="40%" left="85%" delay={2} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

