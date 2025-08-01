"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Frontend Developer at TechCorp",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "DeepCoders transformed my career completely. The hands-on approach and real-world projects prepared me for the industry. I landed my dream job within 2 months of graduation!",
  },
  {
    name: "Mohamed Ali",
    role: "Full Stack Developer at StartupXYZ",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The instructors are amazing! They provide personalized attention and make complex concepts easy to understand. The 4-month program is intensive but totally worth it.",
  },
  {
    name: "Fatima Hassan",
    role: "Mobile App Developer",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "I went from zero coding knowledge to building full-stack applications. The React Native module helped me create my first mobile app that now has 10k+ downloads!",
  },
  {
    name: "Youssef Omar",
    role: "Freelance Developer",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The freelancing and CMS modules were game-changers. I now run my own web development agency and earn 3x more than my previous job. Thank you DeepCoders!",
  },
]

export default function TestimonialsSection() {
  useEffect(() => {
    gsap.fromTo(
      ".testimonial-card",
      { opacity: 0, x: -80, scale: 0.95 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonials-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  return (
    <section className="py-20 bg-white dark:bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-green-600 dark:border-green-400 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-green-600 dark:border-green-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-green-600/20 dark:border-green-400/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black dark:text-white">
            What Our <span className="text-green-600 dark:text-green-400 glow-text">Students</span> Say
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-200 font-semibold max-w-2xl mx-auto">
            <strong>Real success stories from our graduates who are now thriving in their tech careers</strong>
          </p>
        </div>

        <div className="testimonials-container grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="testimonial-card bg-white/90 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700 hover:border-green-600/50 dark:hover:border-green-400/50 transition-all duration-500 group backdrop-blur-sm hover:scale-105 hover:shadow-xl hover:shadow-green-600/30 dark:hover:shadow-green-400/20"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-green-600/20 dark:border-green-400/20 group-hover:border-green-600 dark:group-hover:border-green-400 transition-colors duration-300"
                  />
                  <div className="ml-4">
                    <h4 className="text-black dark:text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-green-600 dark:text-green-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-green-500 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gray-100 dark:bg-gray-900/50 px-8 py-4 rounded-full border border-green-600/20 dark:border-green-400/20">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-green-500 fill-current" />
              <span className="ml-2 text-black dark:text-white font-semibold">4.9/5</span>
            </div>
            <div className="w-px h-6 bg-gray-400 dark:bg-gray-600"></div>
            <span className="text-gray-700 dark:text-gray-300">Based on 200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
