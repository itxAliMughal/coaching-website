"use client"

import { Github, Linkedin, Twitter, Instagram, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-black border-t border-gray-300 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 glow-text mb-4">{"<DeepCoders />"}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-md font-semibold">
              Empowering the next generation of developers with cutting-edge skills and real-world experience. Transform
              your career in just 4 months.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-green-600 dark:hover:bg-green-400 hover:text-white dark:hover:text-black transition-all duration-500 hover:scale-125 hover:rotate-12"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-green-600 dark:hover:bg-green-400 hover:text-white dark:hover:text-black transition-all duration-500 hover:scale-125 hover:rotate-12"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-green-600 dark:hover:bg-green-400 hover:text-white dark:hover:text-black transition-all duration-500 hover:scale-125 hover:rotate-12"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-green-600 dark:hover:bg-green-400 hover:text-white dark:hover:text-black transition-all duration-500 hover:scale-125 hover:rotate-12"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-black dark:text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Courses", "Teachers", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 hover:scale-110 hover:translate-x-2 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-black dark:text-white font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Mail className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />
                <span className="text-sm">info@deepcoders.com</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Phone className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />
                <span className="text-sm">+20 123 456 7890</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} DeepCoders. All rights reserved. Built with ❤️ and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  )
}
