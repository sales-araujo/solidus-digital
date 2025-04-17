import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react"
import FloatingActionButton from "./components/FloatingActionButton"
import CookieConsent from "./components/CookieConsent"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Solidus Digital | Especialista em VTEX",
  description: "Desenvolvimento especializado em VTEX CMS, VTEX IO e VTEX FastStore"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta property="og:title" content="Solidus Digital" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Solidus Digital",
            "url": "https://www.solidus-digital.com/",
            "logo": "https://www.solidus-digital.com/sdigital-logo.png",
            "sameAs": [
              "https://www.linkedin.com/company/solidus-digital"
            ]
          })
        }} />
      </head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingActionButton />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'