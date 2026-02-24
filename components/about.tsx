import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Mais de 10 anos de experiência no mercado",
  "Equipe de mecânicos qualificados e certificados",
  "Peças e lubrificantes de alta qualidade",
  "Atendimento rápido e transparente",
  "Garantia nos serviços realizados",
  "Socorro 24h para emergências",
]

export function About() {
  return (
    <section id="sobre" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/images/tow-truck.jpg"
              alt="Guincho Bomba Garage em atendimento"
              width={640}
              height={420}
              className="h-auto w-full rounded-lg object-cover"
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-border" />
          </div>

          {/* Content */}
          <div>
            <span className="mb-3 inline-block text-sm font-semibold tracking-wider text-primary uppercase">
              Quem somos
            </span>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl font-[var(--font-oswald)]">
              Confiança e qualidade para o seu veículo
            </h2>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              A Bomba Garage é uma oficina automotiva completa, dedicada a oferecer
              serviços de mecânica geral com excelência. Nossa missão é garantir
              que você dirija com segurança e tranquilidade, sempre com o melhor
              custo-benefício.
            </p>

            <ul className="grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
