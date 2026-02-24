import Image from "next/image"
import { Phone, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-mechanic.jpg"
          alt="Mecanico trabalhando em oficina"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80" />
        {/* Accent line */}
        <div className="absolute bottom-0 left-0 h-1 w-full bg-primary" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 lg:px-8">
        <div className="max-w-2xl">
          <span className="mb-4 inline-block rounded-sm bg-primary/15 px-3 py-1 text-sm font-semibold tracking-wider text-primary uppercase">
            Socorro 24 Horas
          </span>

          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl font-[var(--font-oswald)]">
            Sua oficina de{" "}
            <span className="text-primary">confiança</span> no Rio
          </h1>

          <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Especialistas em mecânica geral, manutenção preventiva e corretiva. Atendimento rápido e profissional para manter seu veículo sempre em dia.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/5521969919172"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 text-white">
                <Phone className="h-5 w-5" />
                Chamar no WhatsApp
              </Button>
            </a>

            <a href="#servicos">
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-border text-foreground hover:bg-secondary hover:text-foreground text-base"
              >
                Nossos Serviços
                <ArrowDown className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
