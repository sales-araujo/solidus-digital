"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Cookie, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasConsent = localStorage.getItem("cookie-consent")

    if (!hasConsent) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all")
    setIsVisible(false)
  }

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential")
    setIsVisible(false)
  }

  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-background/95 backdrop-blur-md border border-primary/20 rounded-xl shadow-lg p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <Cookie className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-xl font-bold text-foreground">Política de Privacidade</h3>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mb-6">
                <p className="text-muted-foreground mb-4">
                  Este site utiliza cookies para melhorar sua experiência de navegação, personalizar conteúdo e analisar
                  nosso tráfego. Ao continuar navegando, você concorda com nossa política de privacidade.
                </p>
                <div className="flex items-center text-sm text-primary/80 mb-2">
                  <ShieldCheck className="h-4 w-4 mr-1" />
                  <span>Seus dados estão seguros conosco</span>
                </div>
                <Link href="/privacy-policy" className="text-sm text-primary hover:underline">
                  Saiba mais sobre nossa política de privacidade
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <Button
                  variant="outline"
                  onClick={acceptEssential}
                  className="border-primary/20 hover:bg-primary/10 hover:text-foreground"
                >
                  Aceitar Essenciais
                </Button>
                <Button onClick={acceptAll} className="bg-primary hover:bg-primary/90">
                  Aceitar Todos
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
