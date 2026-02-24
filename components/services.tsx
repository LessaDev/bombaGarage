import { Wrench, ShieldCheck, Clock, Car, Settings, AlertTriangle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Wrench,
    title: "Mecânica Geral",
    description:
      "Reparos completos no motor, suspensão, freios, direção e sistema elétrico do seu veículo.",
  },
  {
    icon: ShieldCheck,
    title: "Manutenção Preventiva",
    description:
      "Revisões periódicas para evitar problemas futuros e prolongar a vida útil do seu carro.",
  },
  {
    icon: Settings,
    title: "Manutenção Corretiva",
    description:
      "Diagnóstico preciso e correção de falhas para devolver a performance do seu veículo.",
  },
  {
    icon: Clock,
    title: "Socorro 24 Horas",
    description:
      "Assistência a qualquer hora do dia ou da noite. Basta ligar e nosso guincho vai até você.",
  },
  {
    icon: Car,
    title: "Troca de Óleo e Filtros",
    description:
      "Utilizamos produtos de qualidade para garantir o melhor desempenho do seu motor.",
  },
  {
    icon: AlertTriangle,
    title: "Diagnóstico Eletrônico",
    description:
      "Scanner automotivo para identificar com precisão qualquer problema eletrônico.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-sm font-semibold tracking-wider text-primary uppercase">
            O que fazemos
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl font-[var(--font-oswald)]">
            Nossos Serviços
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-border bg-card transition-all hover:border-primary/50"
            >
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground font-[var(--font-oswald)]">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
