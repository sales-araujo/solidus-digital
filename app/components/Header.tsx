"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { Menu } from "lucide-react"
import MobileMenu from "./MobileMenu"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 backdrop-blur-md transition-colors duration-300 ${
          scrolled ? "bg-background/90 shadow-md" : "bg-background/50"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Solidus Digital</span>
              <img
                className="h-14 w-auto"
                src="/sdigital-logo.png"
                alt="Solidus Digital Logo"
              />
            </a>
          </div>
          <div className="hidden md:flex md:gap-x-8">
            <a
              href="#cases"
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              Cases
            </a>
            <a
              href="#sobre"
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </a>
            <a
              href="#parceiros"
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              Parceiros
            </a>
            <a
              href="#contato"
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              Contato
            </a>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Abrir menu principal</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
