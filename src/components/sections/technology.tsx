import { motion } from "framer-motion"
import { Drill, FlaskConical, Radiation, ScanLine, type LucideIcon } from "lucide-react"

import consultorioImage from "@/assets/consultorio-sala-atendimento.jpg"
import { Container } from "@/components/container"
import { Reveal } from "@/components/reveal"
import { TECHNOLOGY } from "@/data/site"
import { staggerContainer, staggerItem } from "@/lib/motion"

const ICONS: Record<string, LucideIcon> = { ScanLine, Radiation, FlaskConical, Drill }

export function Technology() {
  return (
    <section id="tecnologia" className="bg-background py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="overflow-hidden rounded-[1.8rem] ring-1 ring-foreground/10">
          <img
            src={consultorioImage}
            alt="Sala de atendimento da Sorriso Vitale"
            className="aspect-[4/3] w-full object-cover"
          />
        </Reveal>

        <div className="flex flex-col gap-8">
          <Reveal className="flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              Tecnologia e equipamentos
            </span>
            <h2 className="font-heading text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl">
              Precisão e conforto em cada procedimento
            </h2>
          </Reveal>

          <motion.ul
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-4"
          >
            {TECHNOLOGY.map((item) => {
              const Icon = ICONS[item.icon]
              return (
                <motion.li
                  key={item.text}
                  variants={staggerItem}
                  className="flex items-center gap-4 rounded-xl bg-muted p-4"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-card ring-1 ring-foreground/10">
                    <Icon className="size-5 text-primary" />
                  </span>
                  <p className="text-sm leading-relaxed font-medium text-foreground/85">
                    {item.text}
                  </p>
                </motion.li>
              )
            })}
          </motion.ul>
        </div>
      </Container>
    </section>
  )
}
