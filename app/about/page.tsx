"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Page() {
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
              About RechargeZy
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  At Agency Website, our mission is to simplify the lives of millions by providing a seamless, secure, and
                  rewarding platform for all their recharge and bill payment needs. We strive to be the go-to solution
                  for busy individuals and businesses alike, offering unparalleled convenience and value.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                <p className="text-gray-600 mb-6">
                Agency Website was born out of a simple idea: to make bill payments and recharges as easy
                  as a few taps on your phone. What started as a small startup has now grown into a trusted platform
                  used by thousands of satisfied customers across the country.
                </p>
                <Button className="bg-[#673ee5] hover:bg-[#5933c0] text-white">Join Our Team</Button>
              </motion.div>
              <motion.div
                className="relative h-[400px]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="RechargeZy Team"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Customer First",
                  description:
                    "We prioritize our customers' needs and continuously strive to exceed their expectations.",
                },
                {
                  title: "Innovation",
                  description:
                    "We embrace new technologies and ideas to stay ahead in the ever-evolving digital landscape.",
                },
                {
                  title: "Integrity",
                  description:
                    "We conduct our business with the highest standards of honesty, transparency, and ethical behavior.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

