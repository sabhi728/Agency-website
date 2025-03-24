"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 bg-[#673ee5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Simplify Your Bill Payments?
          </motion.h2>

          <motion.p
            className="text-xl mb-8 text-white/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join thousands of satisfied users who have transformed their bill payment experience with Agency Website. Sign
            up today and get a welcome bonus!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button className="bg-white text-[#673ee5] hover:bg-white/90 px-6 py-3 text-sm sm:text-base sm:px-8 sm:py-4 rounded-lg">
              Sign Up Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button className="bg-white text-[#673ee5] hover:bg-white/90 px-6 py-3 text-sm sm:text-base sm:px-8 sm:py-4 rounded-lg">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

