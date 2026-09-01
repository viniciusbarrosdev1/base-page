import { motion } from "framer-motion"
import {
  CalendarClock,
  HeartHandshake,
  ScanLine,
  ShieldCheck,
  Wind,
  type LucideIcon,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import { DIFFERENTIALS } from "@/data/site"
import { staggerContainer, staggerItem } from "@/lib/motion"

const ICONS: Record<string, LucideIcon> = {
  HeartHandshake,
  ScanLine,
  Wind,
  CalendarClock,
  ShieldCheck,
}

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-secondary/25 py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Por que a Sorriso Vitale"
          title="Cuidado que faz diferença em cada detalhe"
          description="Combinamos tecnologia, conforto e atenção humana para tornar sua visita ao dentista uma experiência tranquila."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
        >
          {DIFFERENTIALS.map((item) => {
            const Icon = ICONS[item.icon]
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="lg:[&:nth-child(4)]:col-start-2 lg:[&:nth-child(5)]:col-start-4"
              >
                <Card className="h-full gap-4 rounded-2xl border-none px-1 py-6 text-center shadow-sm shadow-foreground/[0.03] transition-shadow hover:shadow-md hover:shadow-primary/10">
                  <CardContent className="flex flex-col items-center gap-3 px-5">
                    <span className="inline-flex size-12 items-center justify-center rounded-full bg-accent">
                      <Icon className="size-5.5 text-accent-foreground" />
                    </span>
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
