"use client"

import { useRef } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    title: "Wepink",
    description: "Implementação completa de e-commerce na plataforma VTEX IO",
    imageUrl: "/logo-wepink.jpg",
    linkWebSite: 'https://www.wepink.com.br/',
    category: "E-commerce",
  },
  {
    id: 2,
    title: "Porto Seguro",
    description: "Implementação de um sistema de leilão, utilizando serviços Back-end em VTEX IO",
    imageUrl: "/logo-porto-2.png",
    linkWebSite: "http://portoarremate.com.br/",
    category: "E-commerce",
  },
  {
    id: 3,
    title: "Electrolux",
    description: "Otimização de performance e experiência do usuário em VTEX IO",
    imageUrl: "/logo-electrolux-2.png",
    linkWebSite: 'https://projeta.electrolux.com.br/login-user',
    category: "E-commerce",
  },
  {
    id: 4,
    title: "Hugo Boss",
    description: "Evolução do produto, e novas features implementadas em VTEX IO",
    imageUrl: "/logo-hugoboss.jpg",
    linkWebSite: 'https://www.hugoboss.com.br/boss',
    category: "E-commerce",
  },
  {
    id: 5,
    title: "Ciclo Assunção",
    description: "Implementação completa de e-commerce na plataforma VTEX IO",
    imageUrl: "/logo-cicloassuncao.jpg",
    linkWebSite: "https://www.cicloassuncao.com.br/",
    category: "E-commerce",
  },
  {
    id: 6,
    title: "Emilio Atacado",
    description: "Desenvolvimento de B2B com catálogo personalizado em VTEX",
    imageUrl: "/logo-emilio.jpg",
    linkWebSite: "https://www.emilio.com.br/",
    category: "E-commerce",
  },
  {
    id: 7,
    title: "Ferracini",
    description: "Migração de plataforma e redesign completo em VTEX IO",
    imageUrl: "/logo-ferracini.png",
    linkWebSite: 'https://www.ferracini.com.br/',
    category: "E-commerce",
  },
  {
    id: 8,
    title: "Trousseau",
    description: "Implementação de PWA e melhorias de SEO em VTEX IO",
    imageUrl: "/logo-trousseau.png",
    linkWebSite: "https://www.trousseau.com.br/",
    category: "E-commerce",
  },
  {
    id: 9,
    title: "Sephora",
    description: "Desenvolvimento de componentes personalizados em VTEX CMS",
    imageUrl: "/logo-sephora.png",
    linkWebSite: "https://www.sephora.com.br/",
    category: "E-commerce",
  },
]

interface NumberTickerProps {
  value: number
  startValue?: number
  direction?: "up" | "down"
  delay?: number
  decimalPlaces?: number
  className?: string
}

function NumberTicker({
  value,
  startValue = 0,
  direction = "up",
  delay = 0,
  decimalPlaces = 0,
  className,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(startValue)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: false, margin: "0px" })

  if (isInView) {
    setTimeout(() => {
      motionValue.set(direction === "down" ? startValue : value)
    }, delay * 1000)
  } else {
    motionValue.set(startValue)
  }

  springValue.on("change", (latest) => {
    if (ref.current) {
      ref.current.textContent = Intl.NumberFormat("en-US", {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
      }).format(Number(latest.toFixed(decimalPlaces)))
    }
  })

  return (
    <span
      ref={ref}
      className={cn("inline-block tabular-nums tracking-wider text-black dark:text-white", className)}
    >
      {startValue}
    </span>
  )
}

export default function Cases() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="cases" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Cases</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Projetos de e-commerce desenvolvidos com excelência em VTEX
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <CaseCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div>
            <div className="flex justify-center items-center gap-2">
              <span className="text-5xl font-bold text-white">+</span>
              <NumberTicker value={30} className="text-5xl font-bold text-white" />
            </div>
            <p className="mt-2 text-muted-foreground">Projetos entregues</p>
          </div>
          <div>
            <div className="flex justify-center items-center gap-2">
              <span className="text-5xl font-bold text-white">+</span>
              <NumberTicker value={4} className="text-5xl font-bold text-white" />
            </div>
            <p className="mt-2 text-muted-foreground">Anos de experiência</p>
          </div>
          <div>
            <div className="flex justify-center items-center gap-2">
              <span className="text-5xl font-bold text-white">+</span>
              <NumberTicker value={40} className="text-5xl font-bold text-white" />
            </div>
            <p className="mt-2 text-muted-foreground">Clientes atendidos</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CaseCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-background rounded-2xl shadow-lg overflow-hidden border border-primary/10 group"
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <a 
          href={project.linkWebSite || "#"}             
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end">
            <div className="p-4 sm:p-6 transform transition-transform duration-200 group-hover:translate-y-0">
              <div className="text-sm font-medium text-primary mb-1">{project.category}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>
          </div>
        </a>
      </div>
    </motion.div>
  )
}
