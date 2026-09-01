import { motion } from "framer-motion"
import {
  Activity,
  CalendarCheck,
  CalendarHeart,
  ClipboardList,
  Stethoscope,
  type LucideIcon,
} from "lucide-react"

import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import { HOW_IT_WORKS } from "@/data/site"
import { staggerContainer, staggerItem } from "@/lib/motion"

const ICONS: Record<string, LucideIcon> = {
  CalendarCheck,
  Stethoscope,
  ClipboardList,
  Activity,
  CalendarHeart,
}

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-background py-20 sm:py-28">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Como funciona"
          title="Do primeiro contato ao sorriso pronto"
          description="Um processo simples e transparente, em 5 passos."
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6"
        >
          <div
            aria-hidden
            className="absolute top-6 right-[10%] left-[10%] hidden h-px bg-border lg:block"
          />

          {HOW_IT_WORKS.map((step, i) => {
            const Icon = ICONS[step.icon]
            return (
              <motion.div
                key={step.title}
                variants={staggerItem}
                className="relative flex flex-col items-start gap-3 lg:items-center lg:text-center"
              >
                <div className="relative z-10 flex items-center gap-3 lg:flex-col lg:gap-3">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md shadow-primary/25">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-heading text-xs font-semibold tracking-widest text-muted-foreground">
                    PASSO {i + 1}
                  </span>
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground lg:max-w-[20ch]">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
