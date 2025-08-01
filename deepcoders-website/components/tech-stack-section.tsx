"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const technologies = [
  {
    name: "HTML",
    level: 95,
    color: "#E34F26",
    icon: "https://play-lh.googleusercontent.com/KEFfQFs-hlpj5BgcRFsAUhJyuVUzqtNgDLjKsmpi603a57JQUmP1P6i1aDjIS86X=w480-h960-rw",
  },
  {
    name: "CSS",
    level: 92,
    color: "#1572B6",
    icon: "https://play-lh.googleusercontent.com/8VWbaIQzYRPjCPVjuHbmSvbMNZOtLPENvZMYqHNl1I4Fmh9_OPti6gVjHOg_h7ck-Rk=w480-h960-rw",
  },
  {
    name: "JavaScript",
    level: 90,
    color: "#F7DF1E",
    icon: "https://play-lh.googleusercontent.com/GaSvgYEOzVN-KziLMDQUot6UjF7k8-F3oIGf90U-WrdP8Z2Ak8SqKUvkxIBtV8kIGNvf=w480-h960-rw",
  },
  {
    name: "Tailwind CSS",
    level: 88,
    color: "#06B6D4",
    icon: "https://play-lh.googleusercontent.com/YN4OEsoWsU1QrZFcwWlI8uuGhDKc4RAlP56FFyL03VFegD5tWjZ5cNWHocC_QRE_TvA=w480-h960-rw",
  },
  {
    name: "Bootstrap",
    level: 85,
    color: "#7952B3",
    icon: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow@2x.png",
  },
  {
    name: "React.js",
    level: 95,
    color: "#61DAFB",
    icon: "https://play-lh.googleusercontent.com/dXqgrfyOf20RKiqZ24r0fzK2pBflv6YU9jLARcm8T-6eEmeoU-GH6jd5K351hVyrVA=w480-h960-rw",
  },
  { name: "Next.js", level: 90, color: "#ffffff", icon: "▲" },
  { name: "Firebase", level: 85, color: "#FFCA28", icon: "🔥" },
  { name: "MongoDB", level: 88, color: "#47A248", icon: "🍃" },
  { name: "Express.js", level: 87, color: "#68A063", icon: "🚀" },
  { name: "Node.js", level: 89, color: "#339933", icon: "🟢" },
  { name: "WordPress", level: 82, color: "#21759B", icon: "📝" },
  { name: "Shopify", level: 80, color: "#7AB55C", icon: "🛍️" },
  {
    name: "GSAP",
    level: 85,
    color: "#88CE02",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSInFjxy3drRgcA_K3nW7pTsERWNv9O57P8fA&s",
  },
  { name: "Shadcn/ui", level: 88, color: "#ffffff", icon: "🎨" },
  { name: "GitHub", level: 92, color: "#ffffff", icon: "🐙" },
  { name: "VS Code", level: 95, color: "#007ACC", icon: "💻" },
  {
    name: "Cursor AI",
    level: 85,
    color: "#ffffff",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5EMeZ80VYrStAMOsZRReIYVGFaPZj-Gb_UA&s",
  },
  {
    name: "React Native",
    level: 90,
    color: "#61DAFB",
    icon: "https://play-lh.googleusercontent.com/2-2PgHYiuJP9QRZe5cJ4NxEh37Pn-ZMbkBMq2Vdtu9Z9PiYlk2gNcpl0OTZJFtmeiw=w480-h960-rw",
  },
  {
    name: "Expo",
    level: 88,
    color: "#ffffff",
    icon: "https://play-lh.googleusercontent.com/algsmuhitlyCU_Yy3IU7-7KYIhCBwx5UJG4Bln-hygBjjlUVCiGo1y8W5JNqYm9WW3s=w480-h960-rw",
  },
  { name: "TypeScript", level: 92, color: "#3178C6", icon: "🔷" },
]

export default function TechStackSection() {
  useEffect(() => {
    // Animate tech icons on scroll
    gsap.fromTo(
      ".tech-icon",
      { opacity: 0, scale: 0, rotation: -180 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".tech-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Smooth hover glow animation
    gsap.set(".tech-icon", {
      transformOrigin: "center center",
    })
  }, [])

  return (
    <section className="py-20 bg-white dark:bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            <span className="text-green-600 dark:text-green-400 glow-text">Technologies</span> We Teach
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-bold">
            <strong>Master the most in-demand technologies in the industry</strong>
          </p>
        </div>

        <div className="tech-grid grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-7xl mx-auto">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-icon flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-green-400/30 dark:bg-green-400/30 rounded-2xl flex items-center justify-center border border-green-600/40 dark:border-green-400/40 group-hover:border-green-600 dark:group-hover:border-green-400 transition-all duration-500 group-hover:bg-green-400/50 dark:group-hover:bg-green-400/50 group-hover:scale-125 group-hover:shadow-2xl group-hover:shadow-green-600/30 dark:group-hover:shadow-green-400/30 hover:animate-pulse group-hover:rotate-12 overflow-hidden">
                {tech.icon.startsWith("http") ? (
                  <img
                    src={tech.icon || "/placeholder.svg"}
                    alt={tech.name}
                    className="w-12 h-12 md:w-14 md:h-14 object-contain group-hover:scale-110 transition-transform duration-300"
                    crossOrigin="anonymous"
                  />
                ) : (
                  <span className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </span>
                )}
              </div>
              <span className="mt-3 text-xs md:text-sm text-gray-700 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-all duration-300 text-center group-hover:scale-110 group-hover:font-bold">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 font-bold">
            <strong>And many more cutting-edge technologies to keep you ahead of the curve!</strong>
          </p>
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-500 text-white font-semibold rounded-full hover:scale-110 hover:shadow-xl hover:shadow-green-600/50 dark:hover:shadow-green-400/50 transition-all duration-300 cursor-pointer">
            4 Months • 20+ Technologies • Job Ready
          </div>
        </div>
      </div>
    </section>
  )
}
