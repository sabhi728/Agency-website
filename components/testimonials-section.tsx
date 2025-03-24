"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Regular User",
    quote:
      "Agency Website has made paying bills so much easier! The interface is intuitive, and I love the cashback rewards. It's become my go-to app for all bill payments.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Business Owner",
    quote:
      "Managing multiple phone lines for my business used to be a hassle, but Agency Website simplified everything. The bulk recharge feature saves me so much time each month.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Sharma",
    title: "Student",
    quote:
      "As a student, I'm always looking for ways to save money. The cashback offers on Agency Website have helped me save significantly on my monthly expenses!",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 4,
  },
  {
    id: 4,
    name: "David Wilson",
    title: "Tech Enthusiast",
    quote:
      "The security features on Agency Website are impressive. I feel confident making transactions knowing my data is protected. Plus, the app is lightning fast!",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const showNextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const showPreviousTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it - hear from our satisfied users who've transformed their bill payment
            experience with RechargeZy.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden py-10">
              <motion.div
                className="flex"
                initial={{ opacity: 1 }}
                animate={{ x: `-${currentIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">
                      <div className="flex items-center mb-6">
                        <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4 bg-gray-200">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={80}
                            height={80}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-gray-600">{testimonial.title}</p>
                          <div className="flex mt-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <blockquote className="text-xl text-gray-700 italic">"{testimonial.quote}"</blockquote>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <button
              onClick={showPreviousTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#673ee5] focus:ring-opacity-50 z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>

            <button
              onClick={showNextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#673ee5] focus:ring-opacity-50 z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 w-2.5 rounded-full ${index === currentIndex ? "bg-[#673ee5]" : "bg-gray-300"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

