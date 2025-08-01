"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Database, Smartphone } from 'lucide-react'

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const courses = [
  {
    title: "Frontend Development",
    description: "Master modern web development with React, Next.js, and Tailwind CSS",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    icon: Code,
    duration: "6 weeks",
    color: "from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-500",
  },
  {
    title: "Backend Development",
    description: "Build robust server-side applications with Node.js and databases",
    technologies: ["Node.js", "Express", "MongoDB", "Firebase", "REST APIs"],
    icon: Database,
    duration: "6 weeks",
    color: "from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-500",
  },
  {
    title: "Mobile App Development",
    description: "Create cross-platform mobile apps with React Native and Expo",
    technologies: ["React Native", "Expo", "Mobile UI/UX", "App Store Deployment"],
    icon: Smartphone,
    duration: "4 weeks",
    color: "from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-500",
  },
]

export default function CoursesSection() {
  useEffect(() => {
    gsap.fromTo(
      ".course-card",
      { opacity: 0, y: 80, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".courses-container",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            Our <span className="text-green-600 dark:text-green-400 glow-text">Courses</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-bold">
            <strong>Comprehensive curriculum designed to make you job-ready in just 4 months</strong>
          </p>
        </div>

        <div className="courses-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const IconComponent = course.icon
            return (
              <Card
                key={index}
                className="course-card bg-white/90 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700 hover:border-green-600/50 dark:hover:border-green-400/50 transition-all duration-500 group hover:scale-110 hover:-translate-y-2 backdrop-blur-sm hover:shadow-2xl hover:shadow-green-600/30 dark:hover:shadow-green-400/20 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:rotate-1"
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${course.color} flex items-center justify-center group-hover:scale-125 group-hover:rotate-180 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}
                  >
                    <IconComponent className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-xl text-black dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300 font-extrabold">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm text-green-600 dark:text-green-400 font-semibold mb-2">
                      Duration: {course.duration}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {course.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-green-600/10 dark:bg-green-400/10 text-green-600 dark:text-green-400 text-xs rounded-full border border-green-600/20 dark:border-green-400/20 hover:bg-green-600/20 dark:hover:bg-green-400/20 hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button
                    className="w-full bg-transparent border-2 border-green-600 dark:border-green-400 text-green-600 dark:text-green-400 hover:bg-green-600 dark:hover:bg-green-400 hover:text-white dark:hover:text-black transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-600/40 dark:hover:shadow-green-400/30 group relative overflow-hidden hover:rotate-1"
                    variant="outline"
                  >
                    <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                      Learn More
                    </span>
                    <div className="absolute inset-0 bg-green-600 dark:bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
