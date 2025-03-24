"use client"

import { motion } from "framer-motion"
import { Smartphone, Tv, Zap, Droplet, Wifi, Database } from "lucide-react"
import Link from "next/link"

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Mobile Recharge",
      description: "Quick recharge for all mobile operators with instant confirmation",
      icon: <Smartphone className="h-10 w-10 text-[#673ee5]" />,
      href: "/services/mobile-recharge",
    },
    {
      id: 2,
      title: "DTH Recharge",
      description: "Recharge your DTH services and enjoy uninterrupted entertainment",
      icon: <Tv className="h-10 w-10 text-[#673ee5]" />,
      href: "/services/dth-recharge",
    },
    {
      id: 3,
      title: "Electricity Bill",
      description: "Pay your electricity bills with ease and avoid late payment penalties",
      icon: <Zap className="h-10 w-10 text-[#673ee5]" />,
      href: "/services/electricity-bill",
    },
    {
      id: 4,
      title: "Gas Bill",
      description: "Make gas bill payments simple and hassle-free with RechargeZy",
      icon: <Droplet className="h-10 w-10 text-[#673ee5]" />,
      href: "/services/gas-bill",
    },
    {
      id: 5,
      title: "Broadband Bill",
      description: "Pay your broadband bills and stay connected without interruptions",
      icon: <Wifi className="h-10 w-10 text-[#673ee5]" />,
      href: "/services/broadband-bill",
    },
    {
      id: 6,
      title: "Data Card Recharge",
      description: "Recharge your data cards instantly for seamless connectivity",
      icon: <Database className="h-10 w-10 text-[#673ee5]" />,
      href: "/services/data-card",
    },
  ]

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Simplify your bill payments and recharges with our comprehensive range of services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Link href={service.href}>
                <div className="p-8">
                  <div className="mb-5 inline-block p-3 bg-purple-50 rounded-lg">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

