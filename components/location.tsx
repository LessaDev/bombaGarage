import { MapPin, Clock, Phone } from "lucide-react"

export function Location() {
  return (
    <section id="localizacao" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-sm font-semibold tracking-wider text-primary uppercase">
            Onde estamos
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl font-[var(--font-oswald)]">
            Nossa Localização
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Info cards */}
          <div className="flex flex-col gap-6 lg:col-span-1">

            <a
                  href="https://share.google/wfXViFd5ptZDZjTtR"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="mb-1 text-sm font-semibold text-foreground">Endereço</p>
                <p
                  className="text-sm leading-relaxed text-primary hover:underline"
                >
                  Clique aqui para ver no Google Maps
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="mb-1 text-sm font-semibold text-foreground">Horário</p>
                <p className="text-sm text-muted-foreground">Seg - Sab: 8h às 18h</p>
                <p className="text-sm font-semibold text-primary">Socorro: 24 horas</p>
              </div>
            </div>

            <a href="https://wa.me/5521969919172" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="mb-1 text-sm font-semibold text-foreground">Telefone / WhatsApp</p>
                <p
                  className="text-sm text-primary hover:underline"
                >
                  (21) 96991-9172
                </p>
              </div>
            </a>

          </div>

          {/* Map embed */}
          <div className="overflow-hidden rounded-lg border border-border lg:col-span-2">
            <iframe
              title="Localização Bomba Garage"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.8021591608767!2d-42.93951094150545!3d-22.772722266426893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99959326f376a1%3A0x98df378a295406ed!2sBomba%20garage%20oficina%20mec%C3%A2nica!5e0!3m2!1spt-BR!2sbr!4v1771812849641!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
