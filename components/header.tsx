"use client"

import { useState } from "react"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Home", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
  { label: "Localização", href: "#localizacao" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          {/* <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground font-[var(--font-oswald)]">B</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground font-[var(--font-oswald)]">
            BOMBA GARAGE
          </span> */}
          <img src="/images/logo.png" alt="Logo BOMBA GARAGE" className="h-10 w-10" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/5521969919172"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="gap-2 bg-primary text-white hover:bg-primary/90">
              <Phone className="h-4 w-4" />
              Socorro 24h
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="flex flex-col gap-4 border-t border-border bg-background px-4 py-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5521975927293"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2"
          >
            <Button className="w-full gap-2 bg-primary text-white hover:bg-primary/90">
              <Phone className="h-4 w-4" />
              Socorro 24h
            </Button>
          </a>
        </nav>
      )}
    </header>
  )
}
