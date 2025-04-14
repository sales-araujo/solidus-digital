"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code, ShoppingCart, Zap } from "lucide-react"

export default function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const specialties = [
    {
      icon: <Code className="w-12 h-12 mb-4 text-primary" />,
      title: "VTEX CMS",
      description: "Desenvolvimento de lojas com HTML, CSS, JavaScript e jQuery, utilizando o legado VTEX CMS.",
    },
    {
      icon: <ShoppingCart className="w-12 h-12 mb-4 text-primary" />,
      title: "VTEX IO",
      description: "Criação de componentes personalizados e lojas completas utilizando React e TypeScript no VTEX IO.",
    },
    {
      icon: <Zap className="w-12 h-12 mb-4 text-primary" />,
      title: "VTEX FastStore",
      description: "Implementação de e-commerces de alta performance com Gatsby e Next.js através do VTEX FastStore.",
    },
  ]

  return (
    <section
      id="sobre"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/90"
      ref={ref}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Sobre
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Especialista em VTEX</h3>
            <p className="text-muted-foreground mb-6">
              Sou um desenvolvedor autônomo especializado em criar experiências de e-commerce excepcionais utilizando a
              plataforma VTEX. Com profundo conhecimento em todas as tecnologias VTEX, ofereço soluções completas para
              empresas que desejam implementar, migrar ou evoluir suas lojas online.
            </p>
            <p className="text-muted-foreground mb-6">
              Minha expertise abrange desde o desenvolvimento em VTEX CMS, passando pelo VTEX IO, até as implementações
              mais modernas com VTEX FastStore. Trabalho com implementações de novos sites, migrações de plataformas
              para a VTEX e evolução contínua de produtos digitais.
            </p>
            <p className="text-muted-foreground">
              Como especialista certificado, garanto que cada projeto seja entregue com os mais altos padrões de
              qualidade, performance e usabilidade, sempre alinhado às melhores práticas do mercado.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 gap-6"
          >
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                className="bg-background/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)", transition: { duration: 0.2 } }}
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {specialty.icon}
                </motion.div>
                <h4 className="text-xl font-bold mb-2 text-foreground">{specialty.title}</h4>
                <p className="text-muted-foreground">{specialty.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
