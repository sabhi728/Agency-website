import type React from "react"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Logo from "./logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo className="h-10 w-auto mb-6 text-white" />
            <p className="text-gray-400 mb-6">
              The fastest and most secure way to recharge your mobile, pay bills, and get amazing cashback rewards.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} label="Facebook" />
              <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
              <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} label="Instagram" />
              <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
              <SocialLink href="#" icon={<Youtube className="h-5 w-5" />} label="YouTube" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/" label="Home" />
              <FooterLink href="#" label="Services" />
              <FooterLink href="#" label="About Us" />
              <FooterLink href="#" label="Why Choose Us" />
              <FooterLink href="#" label="Safety First" />
              <FooterLink href="#" label="Contact Us" />
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <FooterLink href="#" label="Mobile Recharge" />
              <FooterLink href="#" label="DTH Recharge" />
              <FooterLink href="#" label="Electricity Bills" />
              <FooterLink href="#" label="Gas Bills" />
              <FooterLink href="#" label="Broadband Bills" />
              <FooterLink href="#" label="Data Card Recharge" />
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-[#673ee5] mr-3 flex-shrink-0" />
                <span className="text-gray-400">adress </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-[#673ee5] mr-3 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-[#673ee5] mr-3 flex-shrink-0" />
                <span className="text-gray-400">support@xyz.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; {currentYear} Agency Website. All rights reserved.</p>
            <div className="flex flex-wrap justify-center space-x-4 text-sm text-gray-400">
              <Link href="/terms" className="hover:text-white mb-2 md:mb-0">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-white mb-2 md:mb-0">
                Privacy Policy
              </Link>
              <Link href="/refund" className="hover:text-white mb-2 md:mb-0">
                Refund Policy
              </Link>
              <Link href="/faq" className="hover:text-white">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="bg-gray-800 p-2 rounded-full hover:bg-[#673ee5] transition-colors duration-300"
    >
      {icon}
    </Link>
  )
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-white transition-colors duration-300">
        {label}
      </Link>
    </li>
  )
}

