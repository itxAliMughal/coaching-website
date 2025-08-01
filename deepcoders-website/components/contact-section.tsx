"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from 'lucide-react'

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    gsap.fromTo(
      ".contact-form",
      { opacity: 0, x: -80, scale: 0.95 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    gsap.fromTo(
      ".contact-info",
      { opacity: 0, x: 80, scale: 0.95 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" })
    setIsSubmitting(false)

    // Show success animation
    gsap.fromTo(
      ".success-message",
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black dark:text-white">
            Get In <span className="text-green-600 dark:text-green-400 glow-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-200 font-semibold max-w-2xl mx-auto">
            <strong>
              Ready to start your coding journey? Contact us today and take the first step towards your dream career
            </strong>
          </p>
        </div>

        <div className="contact-container grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="contact-form bg-white/90 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-black dark:text-white font-bold">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-100 dark:bg-gray-800 border-gray-400 dark:border-gray-600 text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:border-green-600 dark:focus:border-green-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-600/20 dark:hover:shadow-green-400/20"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-100 dark:bg-gray-800 border-gray-400 dark:border-gray-600 text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:border-green-600 dark:focus:border-green-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-600/20 dark:hover:shadow-green-400/20"
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-gray-100 dark:bg-gray-800 border-gray-400 dark:border-gray-600 text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:border-green-600 dark:focus:border-green-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-600/20 dark:hover:shadow-green-400/20"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-gray-100 dark:bg-gray-800 border-gray-400 dark:border-gray-600 text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:border-green-600 dark:focus:border-green-400 resize-none transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-600/20 dark:hover:shadow-green-400/20"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-bold py-4 rounded-full transition-all duration-500 transform hover:scale-115 hover:-translate-y-3 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-2xl hover:shadow-green-600/60 dark:hover:shadow-green-400/50 hover:rotate-2 group relative overflow-hidden animate-pulse hover:animate-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      <span className="text-lg">Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center relative z-10">
                      <Send className="w-6 h-6 mr-3 group-hover:rotate-45 group-hover:scale-125 transition-all duration-300" />
                      <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                        Send Message
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 scale-0 group-hover:scale-110 transition-transform duration-500 rounded-full"></div>
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="contact-info space-y-8">
            <Card className="bg-white/90 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700 backdrop-blur-sm hover:border-green-600/50 dark:hover:border-green-400/30 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-600/30 dark:hover:shadow-green-400/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600/20 dark:bg-green-400/20 rounded-full flex items-center justify-center mr-4 hover:scale-125 hover:rotate-180 transition-all duration-500 hover:shadow-lg hover:shadow-green-600/40 dark:hover:shadow-green-400/40">
                    <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-black dark:text-white font-semibold">Email</h3>
                    <p className="text-gray-700 dark:text-gray-300">info@deepcoders.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700 backdrop-blur-sm hover:border-green-600/50 dark:hover:border-green-400/30 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-600/30 dark:hover:shadow-green-400/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600/20 dark:bg-green-400/20 rounded-full flex items-center justify-center mr-4 hover:scale-125 hover:rotate-180 transition-all duration-500 hover:shadow-lg hover:shadow-green-600/40 dark:hover:shadow-green-400/40">
                    <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-black dark:text-white font-semibold">Phone</h3>
                    <p className="text-gray-700 dark:text-gray-300">+20 123 456 7890</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700 backdrop-blur-sm hover:border-green-600/50 dark:hover:border-green-400/30 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-600/30 dark:hover:shadow-green-400/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600/20 dark:bg-green-400/20 rounded-full flex items-center justify-center mr-4 hover:scale-125 hover:rotate-180 transition-all duration-500 hover:shadow-lg hover:shadow-green-600/40 dark:hover:shadow-green-400/40">
                    <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-black dark:text-white font-semibold">Location</h3>
                    <p className="text-gray-700 dark:text-gray-300">Cairo, Egypt</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-500 p-6 rounded-lg text-white hover:scale-105 hover:shadow-2xl hover:shadow-green-600/60 dark:hover:shadow-green-400/50 transition-all duration-500 cursor-pointer hover:rotate-1">
              <h3 className="text-xl font-bold mb-2">Ready to Start?</h3>
              <p className="mb-4 font-semibold">Join our next cohort starting soon!</p>
              <Button className="bg-white text-green-700 dark:text-green-600 hover:bg-gray-100 dark:hover:bg-gray-200 border-2 border-white font-bold transition-all duration-500 hover:scale-125 hover:-translate-y-2 hover:shadow-xl hover:shadow-white/40 group relative overflow-hidden hover:rotate-3">
                <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                  Enroll Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white scale-0 group-hover:scale-110 transition-transform duration-500 rounded"></div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
