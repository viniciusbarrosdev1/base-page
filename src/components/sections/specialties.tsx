import { motion } from "framer-motion"
import { Anchor, Smile, Sun, type LucideIcon } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import { SPECIALTIES } from "@/data/site"
import { staggerContainer, staggerItem } from "@/lib/motion"

const ICONS: Record<string, LucideIcon> = { Anchor, Sun, Smile }

export function Specialties() {
  return (
    <section id="especialidades" className="bg-secondary/25 py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Especialidades"
          title="Onde a Sorriso Vitale mais se destaca"
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-5 sm:grid-cols-3"
        >
          {SPECIALTIES.map((item, i) => {
            const Icon = ICONS[item.icon]
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <Card className="h-full gap-5 rounded-2xl border-none bg-card py-8 shadow-sm shadow-foreground/[0.03]">
                  <CardContent className="flex flex-col gap-4 px-7">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="size-5.5 text-primary" />
                      </span>
                      <span className="font-heading text-2xl font-semibold text-primary/20">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
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
