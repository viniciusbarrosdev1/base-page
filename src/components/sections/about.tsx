import { GraduationCap, Users } from "lucide-react"

import aboutImage from "@/assets/foto-dentista-sobre.jpg"
import { Reveal } from "@/components/reveal"
import { Container } from "@/components/container"
import { Separator } from "@/components/ui/separator"
import { ABOUT } from "@/data/site"

export function About() {
  return (
    <section id="sobre" className="bg-background py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 mx-auto w-full max-w-md lg:order-1 lg:max-w-none">
          <div className="overflow-hidden rounded-[1.8rem] ring-1 ring-foreground/10">
            <img
              src={aboutImage}
              alt={ABOUT.name}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 flex items-center gap-3 rounded-2xl bg-card px-5 py-4 shadow-lg shadow-foreground/10 ring-1 ring-foreground/10 sm:-right-8">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent">
              <Users className="size-5 text-accent-foreground" />
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">4 profissionais</p>
              <p className="text-xs text-muted-foreground">cuidando de você desde 2014</p>
            </div>
          </div>
        </Reveal>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <Reveal className="flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              Quem cuida do seu sorriso
            </span>
            <h2 className="font-heading text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl">
              {ABOUT.name}
            </h2>
            <p className="text-sm font-medium text-primary">{ABOUT.cro}</p>
          </Reveal>

          <Reveal delay={0.08} className="flex items-start gap-3 rounded-2xl bg-muted p-4">
            <GraduationCap className="mt-0.5 size-5 shrink-0 text-primary" />
            <p className="text-sm leading-relaxed text-foreground/80">{ABOUT.education}</p>
          </Reveal>

          <Reveal delay={0.14}>
            <Separator />
          </Reveal>

          <Reveal delay={0.18}>
            <p className="text-base leading-relaxed text-muted-foreground">{ABOUT.story}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
