"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import CoursesSection from "@/components/courses-section"
import TechStackSection from "@/components/tech-stack-section"
import InstructorsSection from "@/components/instructors-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  useEffect(() => {
    // Initialize GSAP animations
    gsap.fromTo(
      ".fade-in",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".fade-in",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <CoursesSection />
      <TechStackSection />
      <InstructorsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />

      {/* Scroll-to-top floating button */}
      <ScrollToTop />
    </div>
  )
}
