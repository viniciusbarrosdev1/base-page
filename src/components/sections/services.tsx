import { motion } from "framer-motion"
import {
  Anchor,
  CircleDashed,
  Gem,
  Palette,
  Pipette,
  Smile,
  Sparkles,
  Sun,
  type LucideIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import { SERVICES } from "@/data/site"
import { staggerContainer, staggerItem } from "@/lib/motion"

const ICONS: Record<string, LucideIcon> = {
  Sparkles,
  Sun,
  Palette,
  Pipette,
  Smile,
  Anchor,
  Gem,
  CircleDashed,
}

export function Services() {
  return (
    <section id="servicos" className="bg-background py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Serviços"
          title="Tratamentos para todas as etapas do seu sorriso"
          description="Preços a partir de, sujeitos a avaliação clínica gratuita antes de qualquer procedimento."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon]
            return (
              <motion.div
                key={service.name}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <Card className="h-full gap-4 rounded-2xl border-none py-6 shadow-sm shadow-foreground/[0.03]">
                  <CardContent className="flex h-full flex-col gap-4 px-6">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent">
                      <Icon className="size-5 text-accent-foreground" />
                    </span>
                    <h3 className="grow font-heading text-base leading-snug font-semibold text-foreground">
                      {service.name}
                    </h3>
                    <div className="flex items-baseline justify-between border-t border-border/70 pt-3">
                      <span className="text-xs text-muted-foreground">a partir de</span>
                      <span className="text-lg font-semibold text-primary">{service.price}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="flex justify-center"
        >
          <Button
            render={<a href="#agendamento" />}
            nativeButton={false}
            size="lg"
            variant="outline"
            className="h-11 rounded-xl px-6"
          >
            Ver disponibilidade e agendar
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
