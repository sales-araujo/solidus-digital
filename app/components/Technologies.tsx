"use client"

import { motion, useInView, useAnimation } from "framer-motion"
import { useRef, useEffect } from "react"

export default function Technologies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const controlsRow1 = useAnimation()
  const controlsRow2 = useAnimation()

  useEffect(() => {
    if (isInView) {
      controlsRow1.start({
        x: [0, -1000],
        transition: {
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      })
      controlsRow2.start({
        x: [-1000, 0],
        transition: {
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        },
      })
    }
  }, [isInView, controlsRow1, controlsRow2])

  const techStack = [
    {
      name: "Jest",
      icon: "https://skillicons.dev/icons?i=jest",
      color: "#F71963"
    },
    {
      name: "Next.js",
      icon: "https://skillicons.dev/icons?i=nextjs",
      color: "#000000"
    },
    {
      name: "React",
      icon: "https://skillicons.dev/icons?i=react",
      color: "#61DAFB"
    },
    {
      name: "JavaScript",
      icon: "https://skillicons.dev/icons?i=javascript",
      color: "#F7DF1E"
    },
    {
      name: "TypeScript",
      icon: "https://skillicons.dev/icons?i=typescript",
      color: "#3178C6"
    },
    {
      name: "HTML",
      icon: "https://skillicons.dev/icons?i=html",
      color: "#E34F26"
    },
    {
      name: "CSS",
      icon: "https://skillicons.dev/icons?i=css",
      color: "#1572B6"
    },
    {
      name: "SASS",
      icon: "https://skillicons.dev/icons?i=sass",
      color: "#CC6699"
    },
    {
      name: "Tailwind",
      icon: "https://skillicons.dev/icons?i=tailwind",
      color: "#06B6D4"
    },
    {
      name: "Node.js",
      icon: "https://skillicons.dev/icons?i=nodejs",
      color: "#339933"
    },
    {
      name: "GraphQL",
      icon: "https://skillicons.dev/icons?i=graphql",
      color: "#E10098"
    }
  ]

  const techRow1 = [...techStack, ...techStack]
  const techRow2 = [...techStack, ...techStack]

  return (
    <section id="tecnologias" className="py-20 bg-background overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tecnologias</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Domínio completo das principais tecnologias para desenvolvimento de e-commerce e aplicações web modernas
          </p>
        </motion.div>

        <motion.div
          className="mb-16 p-6 md:p-8 bg-gradient-to-r from-purple-900/20 via-primary/20 to-purple-900/20 rounded-2xl shadow-lg border border-primary/20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <motion.div
                className="relative w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-purple-900/20 p-4"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-purple-600 opacity-20 blur-xl" />
                <img src="/logo-vtex.png" alt="VTEX" className="w-24 h-24 object-contain" />
              </motion.div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-foreground mb-4">Especialista em VTEX</h3>
              <p className="text-muted-foreground mb-4">
                Desenvolvimento avançado em todas as versões da plataforma VTEX, incluindo VTEX CMS, VTEX IO e VTEX
                FastStore. Implementação de lojas completas, componentes personalizados e integrações.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">VTEX CMS</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">VTEX IO</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">VTEX FastStore</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Store Framework</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <motion.div className="flex py-6" animate={controlsRow1} initial={{ x: 0 }}>
            {techRow1.map((tech, index) => (
              <div key={`${tech.name}-${index}`} className="mx-4 pt-4 pb-2 px-2">
                <motion.div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl flex items-center justify-center relative group overflow-visible"
                  whileHover={{
                    scale: 1.1,
                    y: 0,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className={`absolute inset-0 rounded-xl ${tech.color} opacity-80`} />
                  <img
                    src={tech.icon || "/placeholder.svg"}
                    alt={tech.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 relative z-10"
                  />
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-md shadow-lg border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <motion.div className="flex py-6" animate={controlsRow2} initial={{ x: -1000 }}>
            {techRow2.map((tech, index) => (
              <div key={`${tech.name}-row2-${index}`} className="mx-4 pt-4 pb-2 px-2">
                <motion.div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl flex items-center justify-center relative group overflow-visible"
                  whileHover={{
                    scale: 1.1,
                    y: 0,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className={`absolute inset-0 rounded-xl ${tech.color} opacity-80`} />
                  <img
                    src={tech.icon || "/placeholder.svg"}
                    alt={tech.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 relative z-10"
                  />
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-md shadow-lg border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </div>
    </section>
  )
}
