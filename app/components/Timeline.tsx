"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"

const timelineEvents = [
  {
    year: 2022,
    title: "Fundação da Solidus Digital",
    description: "Início da jornada como especialista em desenvolvimento VTEX.",
    details:
      "Fundei a Solidus Digital com o objetivo de oferecer serviços especializados em desenvolvimento de e-commerce na plataforma VTEX, atendendo a uma demanda crescente do mercado por profissionais qualificados nesta tecnologia.",
  },
  {
    year: 2022,
    title: "Primeiro Projeto VTEX IO",
    description: "Implementação completa de loja utilizando VTEX IO e React.",
    details:
      "Desenvolvimento do primeiro projeto utilizando a tecnologia VTEX IO, com componentes personalizados em React e TypeScript, estabelecendo as bases para futuros projetos na plataforma.",
  },
  {
    year: 2023,
    title: "Certificação VTEX",
    description: "Obtenção de certificações oficiais VTEX como desenvolvedor.",
    details:
      "Conquista de certificações oficiais VTEX em desenvolvimento Frontend, Backend e Arquitetura de Soluções, consolidando o conhecimento técnico e a credibilidade no mercado.",
  },
  {
    year: 2023,
    title: "Expansão para VTEX FastStore",
    description: "Primeiros projetos utilizando a tecnologia VTEX FastStore.",
    details:
      "Implementação de projetos utilizando VTEX FastStore com Next.js e Gatsby, oferecendo aos clientes soluções de e-commerce com performance superior e melhor experiência do usuário.",
  },
  {
    year: 2024,
    title: "Portfólio Consolidado",
    description: "Consolidação de portfólio com grandes marcas do varejo.",
    details:
      "Expansão do portfólio com projetos para grandes marcas do varejo nacional e internacional, estabelecendo a Solidus Digital como referência em desenvolvimento VTEX.",
  },
  {
    year: 2025,
    title: "Parceria com eVision",
    description: "Estabelecimento de parceria estratégica com a eVision.",
    details:
      "Formação de parceria estratégica com a eVision para oferecer soluções completas de e-commerce, combinando expertise técnica com estratégias de marketing digital.",
  },
]

const TimelineIcon = ({ progress }: { progress: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    style={{ transform: `scale(${progress})` }}
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M12 8C12 8 14 10 14 12C14 14 12 16 12 16C12 16 10 14 10 12C10 10 12 8 12 8Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
)

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section ref={containerRef} className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nossa Jornada</h2>
          <p className="mt-4 text-lg text-muted-foreground">A evolução da Solidus Digital desde sua fundação</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line - visível apenas em telas maiores */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20 hidden sm:block"
            style={{ scaleY: scaleX }}
          />

          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={`${event.year}-${index}`}
              event={event}
              index={index}
              isExpanded={expandedEvent === index}
              onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineEvent({
  event,
  index,
  isExpanded,
  onToggle,
}: {
  event: (typeof timelineEvents)[0]
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      className={`mb-12 flex justify-between items-center w-full ${
        index % 2 === 0 ? "sm:flex-row-reverse" : ""
      } flex-col sm:flex-row`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Em telas pequenas, mostramos apenas o card em largura total */}
      <div className="w-full sm:w-5/12 cursor-pointer mb-4 sm:mb-0">
        <motion.div
          className="p-4 sm:p-6 bg-background rounded-lg shadow-md border border-primary/10 hover:border-primary/30 transition-all duration-200"
          whileHover={{
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
            y: -5,
            transition: { duration: 0.2 },
          }}
          onClick={onToggle}
        >
          <motion.span
            className="font-bold text-primary"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          >
            {event.year}
          </motion.span>
          <motion.h3
            className="text-lg font-semibold mb-1"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
          >
            {event.title}
          </motion.h3>
          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
          >
            {event.description}
          </motion.p>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-sm text-muted-foreground">{event.details}</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Círculo do timeline - visível apenas em telas maiores */}
      <div className="hidden sm:block w-0 sm:w-auto z-20">
        <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
          <div className="w-3 h-3 bg-background rounded-full" />
        </div>
      </div>

      {/* Espaço vazio para o layout alternado - visível apenas em telas maiores */}
      <div className="hidden sm:block w-5/12" />
    </motion.div>
  )
}
