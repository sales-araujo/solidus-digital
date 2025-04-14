"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuItems = [
    { name: "Cases", href: "#cases" },
    { name: "Sobre", href: "#sobre" },
    { name: "Parceiros", href: "#parceiros" },
    { name: "Contato", href: "#contato" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex flex-col overflow-y-auto"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
    >
      <div className="flex items-center justify-between p-6">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Solidus Digital</span>
          <img
            className="h-14 w-auto"
            src="/sdigital-logo.png"
            alt="Solidus Digital Logo"
          />
        </a>
        <button type="button" className="-m-2.5 rounded-md p-2.5 text-foreground" onClick={onClose}>
          <span className="sr-only">Fechar menu</span>
          <X className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="py-6 px-8">
          <motion.div
            className="flex flex-col space-y-8 items-center justify-center h-[70vh]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                onClick={onClose}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
