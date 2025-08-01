"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import ThreeScene from "@/components/three-scene"

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 1 })

    tl.fromTo(".hero-title", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" })
      .fromTo(".hero-subtitle", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.5")
      .fromTo(
        ".hero-buttons",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.3",
      )

    // Floating animation for the hero section
    gsap.to(".floating", {
      y: -20,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    })
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black"
    >
      {/* Background Three.js Scene - moved much further down */}
      <div className="absolute inset-0 z-0 top-96">
        <ThreeScene />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/80 dark:from-black/30 dark:via-transparent dark:to-black/80 z-10"></div>

      <div className="container mx-auto px-4 relative z-30">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-none text-black dark:text-white">
            Become a <span className="text-green-600 dark:text-green-400 glow-text">Full Stack Developer</span> with
            DeepCoders
          </h1>

          <p className="hero-subtitle text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-semibold mb-8 max-w-2xl mx-auto">
            Master MERN Stack, React Native, Shopify, Firebase, and more in just 4 months. Transform your career with
            hands-on projects and expert mentorship.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-bold px-10 py-4 rounded-full transition-all duration-500 transform hover:scale-125 hover:-translate-y-3 hover:rotate-3 hover:shadow-2xl hover:shadow-green-500/60 group relative overflow-hidden animate-pulse hover:animate-none"
            >
              <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">Join Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 scale-0 group-hover:scale-110 transition-transform duration-500 rounded-full"></div>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-green-600 dark:border-green-400 text-green-600 dark:text-green-400 hover:bg-green-600 dark:hover:bg-green-400 hover:text-white dark:hover:text-black px-10 py-4 rounded-full transition-all duration-500 transform hover:scale-125 hover:-translate-y-3 hover:-rotate-3 bg-transparent hover:shadow-2xl hover:shadow-green-500/60 group relative overflow-hidden"
            >
              <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">Contact Us</span>
              <div className="absolute inset-0 bg-green-600 dark:bg-green-400 scale-0 group-hover:scale-110 transition-transform duration-500 rounded-full"></div>
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="floating absolute top-20 left-10 w-16 h-16 border border-green-600/30 dark:border-green-400/30 rounded-full hidden lg:block"></div>
        <div
          className="floating absolute bottom-20 right-10 w-12 h-12 border border-green-600/30 dark:border-green-400/30 rounded-full hidden lg:block"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </section>
  )
}
