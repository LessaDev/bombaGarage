"use client"

import { useState, type FormEvent } from "react"
import { Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const WHATSAPP_NUMBER = "5521969919172"

function buildWhatsAppURL(name: string, phone: string, problem: string) {
  const message = [
    `*Olá, gostaria de agendar um atendimento*`,
    ``,
    `*Nome:* ${name}`,
    `*Telefone:* ${phone}`,
    `*Problema:* ${problem}`,
  ].join("\n")

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function ContactForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [problem, setProblem] = useState("")

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!name.trim() || !phone.trim() || !problem.trim()) return
    const url = buildWhatsAppURL(name, phone, problem)
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="contato" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left – copy */}
          <div>
            <span className="mb-3 inline-block text-sm font-semibold tracking-wider text-primary uppercase">
              Fale conosco
            </span>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl font-[var(--font-oswald)]">
              Precisa de ajuda com seu veículo?
            </h2>
            <p className="mb-8 max-w-md leading-relaxed text-muted-foreground">
              Preencha o formulário ao lado com seu nome, telefone e uma breve
              descrição do problema. Entraremos em contato rapidamente pelo
              WhatsApp.
            </p>

            <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">WhatsApp direto</p>
                <a
                  href="https://wa.me/5521969919172"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  (21) 96991-9172
                </a>
              </div>
            </div>
          </div>

          {/* Right – form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-lg border border-border bg-card p-6 lg:p-8"
          >
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="text-sm font-medium text-foreground">
                Nome
              </Label>
              <Input
                id="name"
                placeholder="Seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-input text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                Telefone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(21) 99999-9999"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="bg-input text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="problem" className="text-sm font-medium text-foreground">
                Descreva o problema
              </Label>
              <Textarea
                id="problem"
                placeholder="Descreva brevemente o que está acontecendo com seu veículo..."
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                required
                rows={3}
                className="resize-none bg-input text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="mt-2 gap-2 bg-primary text-white hover:bg-primary/90 text-base"
            >
              <Send className="h-4 w-4" />
              Enviar via WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
