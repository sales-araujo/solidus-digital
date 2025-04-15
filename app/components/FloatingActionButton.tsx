"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"
import Image from "next/image"

export default function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/5581996422079"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-8 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-[#e91e63] to-[#6a11cb] shadow-lg z-50"
        animate={{
          bottom: isVisible ? 100 : 30,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Contato via WhatsApp"
      >
        <motion.div
          className="absolute w-full h-full rounded-full"
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(233, 30, 99, 0)",
              "0 0 0 15px rgba(233, 30, 99, 0.3)",
              "0 0 0 0 rgba(233, 30, 99, 0)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          animate={{
            x: [0, -1, 1, -1, 0],
            y: [0, 1, -1, 1, 0],
          }}
          transition={{
            duration: 0.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "mirror",
            ease: "easeInOut",
            repeatDelay: 3,
          }}
          className="relative z-10 flex items-center justify-center w-8 h-8"
        >
          <Image
            src="/icon-whatsapp.png"
            alt="WhatsApp"
            width={28}
            height={28}
            className="object-contain brightness-0 invert"
          />
        </motion.div>
      </motion.a>

      {/* Back to Top Button */}
      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-8 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-50"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </>
  )
}
