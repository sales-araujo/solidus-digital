"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Partners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="parceiros" className="py-20 px-4 sm:px-6 lg:px-8 bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Parceiros</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabalho com as melhores tecnologias e parceiros estratégicos para entregar soluções de e-commerce de alta
            qualidade
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-4xl mx-auto">
          <motion.a
            href="https://vtex.com/pt-br/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background/50 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-primary/10 flex flex-col items-center hover:border-primary/30 transition-all duration-200"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)", transition: { duration: 0.2 } }}
          >
            <div className="h-20 md:h-24 flex items-center justify-center mb-6">
              <img
                src="/logo-vtex.png"
                alt="VTEX Logo"
                className="h-16 md:h-20"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Plataforma VTEX</h3>
            <p className="text-muted-foreground text-center">
              Especialista certificado em desenvolvimento de soluções de e-commerce utilizando a plataforma VTEX em
              todas as suas versões.
            </p>
          </motion.a>

          <motion.a
            href="https://evision.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-background/50 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-primary/10 flex flex-col items-center hover:border-primary/30 transition-all duration-200"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)", transition: { duration: 0.2 } }}
          >
            <div className="h-20 md:h-24 flex items-center justify-center mb-6">
              <div className="relative">
                <img src="/logo-evision.png" alt="Logo da eVision" className="h-16 md:h-20" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Parceiro eVision</h3>
            <p className="text-muted-foreground text-center">
              Parceria estratégica com a eVision para desenvolvimento de soluções completas de e-commerce e marketing
              digital.
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
