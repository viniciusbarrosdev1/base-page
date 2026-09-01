import { Clock, MapPin, Navigation } from "lucide-react"

import consultorioImage from "@/assets/consultorio-recepcao.jpg"
import { Container } from "@/components/container"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { CLINIC } from "@/data/site"

export function Location() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    CLINIC.address
  )}&output=embed`

  return (
    <section id="localizacao" className="bg-secondary/25 py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow="Localização" title="Venha nos conhecer" align="left" />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="overflow-hidden rounded-[1.75rem] ring-1 ring-foreground/10">
            <iframe
              title="Mapa da Sorriso Vitale"
              src={mapSrc}
              className="h-80 w-full lg:h-full lg:min-h-[26rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal delay={0.06} className="overflow-hidden rounded-[1.75rem] ring-1 ring-foreground/10">
              <img
                src={consultorioImage}
                alt="Recepção da Sorriso Vitale"
                className="aspect-[16/10] w-full object-cover"
              />
            </Reveal>

            <Reveal delay={0.12} className="flex flex-col gap-4 rounded-[1.75rem] bg-card p-6 shadow-sm shadow-foreground/[0.03] ring-1 ring-foreground/10">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">{CLINIC.address}</p>
                  <p className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Navigation className="size-3" />
                    {CLINIC.addressReference}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 border-t border-border/70 pt-4">
                <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
                <p className="text-sm text-foreground/80">{CLINIC.hours}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
