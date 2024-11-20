'use client'

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  const projects = [
    {
      title: "AI Hair Analysis",
      description: "Full Stack MERN web application with AI-powered hair analysis using TensorFlow and Google Teachable Machine to detect conditions like dandruff, thinning, and greasiness.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-COYygRZx2VnKwyKYJMyAjeTJE63RWj.png",
      tags: ["TypeScript", "React", "Node.js", "Tensorflow"],
      link: "https://github.com/rohankhatri7/hair-analysis"
    },
    {
      title: "WiFi Heatmap",
      description: "Full-stack application for data processing and visualization of campus WiFi strength using Raspberry Pis for automated data collection.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ifWNEUc707SB997hS5WuY5M4OW1KEN.png",
      tags: ["Python", "Flask", "TypeScript", "React", "PostgreSQL", "Docker"],
      link: "https://github.com/mynameisdevinchau/WifiHeatMap"
    },
    {
      title: "Algorithm-Sort Visualizer",
      description: "Interactive algorithm-sort visualizer that illustrates the workings of various sorting algorithms with adjustable controls.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xHvgNdNIdjirs1liLzBKNuVYWxjZJO.png",
      tags: ["JavaScript", "HTML", "CSS", "Git"],
      link: "https://github.com/rohankhatri7/sortviz"
    },
    {
      title: "DataGlacier Internship",
      description: "Data-driven analysis pipeline for cab industry databases, with Linear Regression model integrated into Flask API.",
      tags: ["Python", "Flask", "Machine Learning", "Data Analysis"], // No image property
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="font-bold">Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About Me
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/rohan_khatri_resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    My name is Rohan Khatri
                  </h1>
                  <p className="text-gray-500 md:text-xl dark:text-gray-400">
                    cs major @ sjsu & software engineer
                  </p>
                  <TypingAnimation />
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="flex gap-2" asChild>
                    <Link href="/rohan_khatri_resume.pdf" target="_blank" rel="noopener noreferrer">
                      Resume
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex gap-2" asChild>
                    <Link href="https://github.com/rohankhatri7" target="_blank">
                      <Github className="h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex gap-2" asChild>
                    <Link href="https://www.linkedin.com/in/khatri-rohan/" target="_blank">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                  alt="AI Brain Visualization"
                  className="mx-auto overflow-hidden rounded-lg object-cover object-center"
                  height={600}
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Jy6KQNZQlK6Kec5gzCWOaMAn3SFzq5.png"
                  width={600}
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">personal & team projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <AnimatedCard key={project.title}>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{project.description}</p>
                  </CardHeader>
                  <CardContent>
                    {project.image ? (
                      <Image
                        alt={project.title}
                        className="aspect-video overflow-hidden rounded-lg object-cover"
                        height={400}
                        src={project.image}
                        width={600}
                      />
                    ) : (
                      <div className="aspect-video rounded-lg bg-gray-200 flex items-center justify-center">
                        <span className="text-sm text-gray-500">No Image Available</span>
                      </div>
                    )}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {project.link && (
                      <Button className="mt-4" variant="outline" asChild>
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project →
                        </Link>
                      </Button>
                    )}
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12" id="contact">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-center">
              <Link
                href="mailto:rohankhatri0507@gmail.com"
                className="inline-flex items-center gap-2 text-lg hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
                rohankhatri0507@gmail.com
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function AnimatedCard({ children }) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    if (!ref.current) return

    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5

    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const cardVariants = {
    rest: { 
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)" 
    },
    hover: ({ x, y }) => ({ 
      transform: `
        perspective(1000px)
        rotateX(${y * 20}deg)
        rotateY(${x * -20}deg)
        translateZ(50px)
      `,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    })
  }

  return (
    <motion.div
      ref={ref}
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardVariants}
      custom={position}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative cursor-pointer"
      style={{ transformStyle: "preserve-3d" }}
    >
      <Card className="transition-shadow duration-300 hover:shadow-xl">
        {children}
      </Card>
    </motion.div>
  )
}

function TypingAnimation() {
  const phrases = ["I build.", "I analyze.", "I innovate."]
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length)
    }, 3000)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    setCurrentPhrase(phrases[currentIndex])
  }, [currentIndex])

  return (
    <div className="h-8 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentPhrase}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-500 md:text-xl dark:text-gray-400"
        >
          {currentPhrase}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}
