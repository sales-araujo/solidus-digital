"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  const scrollAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0"
        >
          <motion.h1
            variants={scrollAnimation}
            className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
          >
            <span className="text-gradient">Solidus Digital</span>
          </motion.h1>
          <motion.p variants={scrollAnimation} className="mt-6 text-lg leading-8 text-muted-foreground">
            Especialista em desenvolvimento de e-commerce com <span className="font-semibold text-primary">VTEX</span>.
            Transformando ideias em experiências digitais de alta performance.
          </motion.p>
          <motion.div variants={scrollAnimation} className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#cases" className="apple-button">
              Ver Cases
            </a>
            <a href="#sobre" className="text-sm font-semibold leading-6 text-foreground">
              Saiba mais <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-30 blur-xl"
              animate={{
                opacity: [0.2, 0.3, 0.2],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <div className="relative rounded-2xl bg-background/80 p-6 sm:p-8 shadow-xl ring-1 ring-gray-900/10">
              <div className="flex items-center justify-center">
                <img
                  src="/logo-vtex.png"
                  alt="VTEX Logo"
                  className="h-12 sm:h-16 mx-4"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-lg font-semibold text-foreground">Especialista Certificado</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Desenvolvimento em VTEX CMS, VTEX IO e VTEX FastStore
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
