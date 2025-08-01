"use client"

import { useState, useEffect } from "react"
import { Sun, Moon } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme === "light") {
      setIsDark(false)
      document.documentElement.classList.remove("dark")
    } else {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      setIsDark(false)
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      setIsDark(true)
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
  }

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      className="relative overflow-hidden group transition-all duration-500 hover:scale-125 hover:rotate-180 hover:shadow-xl hover:shadow-green-400/50"
    >
      <div className="relative">
        {isDark ? (
          <Sun className="w-5 h-5 text-green-400 transition-all duration-500 group-hover:rotate-180 group-hover:scale-150" />
        ) : (
          <Moon className="w-5 h-5 text-green-600 transition-all duration-500 group-hover:rotate-180 group-hover:scale-150" />
        )}
      </div>
      <div className="absolute inset-0 bg-green-400/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
    </Button>
  )
}
