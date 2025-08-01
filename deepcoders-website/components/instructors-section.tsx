"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const instructors = [
  {
    name: "Ahmed Hassan",
    role: "Lead Full Stack Developer",
    experience: "3+ Years",
    image: "/placeholder.svg?height=300&width=300",
    skills: ["React", "Node.js", "MongoDB", "Next.js", "TypeScript"],
    bio: "Passionate full-stack developer with expertise in modern web technologies. Specialized in building scalable applications and mentoring aspiring developers.",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Omar Hassan",
    role: "Mobile App Developer",
    experience: "2+ Years",
    image: "/placeholder.svg?height=300&width=300",
    skills: ["React Native", "Expo", "Firebase", "JavaScript", "Mobile UI/UX"],
    bio: "Expert mobile developer focused on creating beautiful, performant cross-platform applications. Passionate about user experience and modern mobile technologies.",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
]

export default function InstructorsSection() {
  useEffect(() => {
    gsap.fromTo(
      ".instructor-card",
      { opacity: 0, y: 100, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".instructors-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  return (
    <section id="teachers" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black dark:text-white">
            Meet Your <span className="text-green-600 dark:text-green-400 glow-text">Instructors</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-200 font-semibold max-w-2xl mx-auto">
            <strong>Learn from experienced developers who are passionate about teaching and helping you succeed</strong>
          </p>
        </div>

        <div className="instructors-container grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {instructors.map((instructor, index) => (
            <Card
              key={index}
              className="instructor-card bg-green-400/20 dark:bg-green-400/20 border-green-600/40 dark:border-green-400/40 hover:border-green-600 dark:hover:border-green-400 transition-all duration-500 group backdrop-blur-sm overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-green-600/30 dark:hover:shadow-green-400/20 hover:bg-green-400/30 dark:hover:bg-green-400/30"
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green-600/30 dark:border-green-400/30 group-hover:border-green-600 dark:group-hover:border-green-400 transition-all duration-300 group-hover:scale-110">
                    <img
                      src={instructor.image || "/placeholder.svg"}
                      alt={instructor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 dark:from-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <h3 className="text-2xl font-extrabold text-black dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                    {instructor.name}
                  </h3>
                  <p className="text-green-600 dark:text-green-400 font-semibold">{instructor.role}</p>
                  <Badge
                    variant="outline"
                    className="mt-2 border-green-600/50 dark:border-green-400/50 text-green-600 dark:text-green-400 bg-green-400/10"
                  >
                    {instructor.experience} Experience
                  </Badge>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-center mb-6 leading-relaxed font-semibold">
                  {instructor.bio}
                </p>

                <div className="mb-6">
                  <h4 className="text-black dark:text-white font-semibold mb-3 text-center">Expertise</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {instructor.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-green-600/20 dark:bg-green-400/20 text-green-600 dark:text-green-400 text-sm rounded-full border border-green-600/30 dark:border-green-400/30 hover:bg-green-600/30 dark:hover:bg-green-400/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-600/30 dark:hover:shadow-green-400/30 cursor-pointer"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <a
                    href={instructor.social.github}
                    className="p-3 rounded-full hover:bg-green-600 dark:hover:bg-green-400 hover:text-white dark:hover:text-black transition-all duration-500 group/icon bg-white text-black hover:scale-125 hover:rotate-12 hover:shadow-lg hover:shadow-green-600/30 dark:hover:shadow-green-400/30"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={instructor.social.linkedin}
                    className="p-3 rounded-full hover:bg-green-600 dark:hover:bg-green-400 hover:text-white dark:hover:text-black transition-all duration-500 group/icon bg-white text-black hover:scale-125 hover:rotate-12 hover:shadow-lg hover:shadow-green-600/30 dark:hover:shadow-green-400/30"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={instructor.social.twitter}
                    className="p-3 rounded-full hover:bg-green-600 dark:hover:bg-green-400 hover:text-white dark:hover:text-black transition-all duration-500 group/icon bg-white text-black hover:scale-125 hover:rotate-12 hover:shadow-lg hover:shadow-green-600/30 dark:hover:shadow-green-400/30"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
