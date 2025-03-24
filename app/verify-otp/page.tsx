"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"
import Logo from "@/components/logo"
import { useRouter } from "next/navigation"

export default function VerifyOTPPage() {
  const [otp, setOtp] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("OTP verification attempted with:", otp)
    // Here you would typically verify the OTP
    // For now, let's just redirect to a hypothetical dashboard
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center"
      >
        <div className="w-64">
          <Logo className="w-full h-auto" width={220} height={55} />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Verify OTP</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
      >
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="otp">Enter OTP</Label>
              <div className="mt-1">
                <Input
                  id="otp"
                  name="otp"
                  type="text"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#673ee5] focus:border-[#673ee5] sm:text-sm"
                  placeholder="Enter the OTP sent to your mobile"
                />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#673ee5] hover:bg-[#5933c0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#673ee5]"
              >
                Verify OTP
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

