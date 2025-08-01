"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function ScrollToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!show) return null

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Button
      size="icon"
      aria-label="Scroll to top"
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white shadow-2xl hover:shadow-green-400/50 transition-all duration-500 transform hover:scale-125 hover:-translate-y-2 hover:rotate-12 animate-bounce hover:animate-none"
    >
      <ArrowUp className="w-6 h-6 group-hover:rotate-180 group-hover:scale-125 transition-all duration-300" />
    </Button>
  )
}
