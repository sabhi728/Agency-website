import type React from "react"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, PlayCircle } from "lucide-react"
import Logo from "./logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex justify-start">
              <Logo className="h-12 w-auto mb-6" width={200} height={50} />
            </div>
            <p className="text-gray-400 mb-6">
              The fastest and most secure way to recharge your mobile, pay bills, and get amazing cashback rewards.
            </p>
            <div className="mb-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#673ee5] hover:bg-[#5933c0]"
              >
                <PlayCircle className="h-5 w-5 mr-2" />
                Download on Google Play
              </a>
            </div>
            <div className="flex space-x-4 mt-4">
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
              <FooterLink href="#" label="Terms and Conditions" />
              <FooterLink href="#" label="Privacy Policy" />
              <FooterLink href="#" label="Return & Refund Policy" />
              <FooterLink href="#" label="Grievance Policy" />
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
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
              <Link href="/terms-and-conditions" className="hover:text-white mb-2 md:mb-0">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white mb-2 md:mb-0">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white mb-2 md:mb-0">
                Refund Policy
              </Link>
              <Link href="#" className="hover:text-white">
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

