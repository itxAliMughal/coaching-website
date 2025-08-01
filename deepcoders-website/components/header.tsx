"use client"

import { useState, useEffect } from "react"
import { gsap } from "gsap"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Animate logo on load
    gsap.fromTo(".logo", { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" })

    // Animate navigation items
    gsap.fromTo(".nav-item", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, delay: 0.5 })
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-green-600/20 dark:border-green-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <h1 className="text-2xl md:text-3xl font-extrabold text-green-600 dark:text-green-400 glow-text cursor-pointer flex flex-col items-start leading-tight">
              <span className="text-black dark:text-white">{"<Deep"}</span>
              <span className="text-green-600 dark:text-green-400 -mt-1">{"Coders />"}</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "Courses", "Teachers", "Projects", "Contact"].map((item, index) => (
              <button
                key={item}
                className="nav-item text-black dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-all duration-500 relative group transform hover:scale-125 hover:-translate-y-2 hover:rotate-3"
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 dark:bg-green-400 transition-all duration-500 group-hover:w-full"></span>
                <div className="absolute inset-0 bg-green-600/10 dark:bg-green-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-500 -z-10"></div>
              </button>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-green-600 dark:text-green-400 transition-all duration-500 hover:scale-125 hover:rotate-180 hover:shadow-lg hover:shadow-green-400/50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {["Home", "Courses", "Teachers", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  className="text-black dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-all duration-500 text-left transform hover:scale-110 hover:translate-x-4"
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
