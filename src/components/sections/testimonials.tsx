import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import { TESTIMONIALS } from "@/data/site"
import { staggerContainer, staggerItem } from "@/lib/motion"

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-background py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem já passou por aqui, recomenda"
          description="A confiança dos nossos pacientes é o que mais nos orgulha."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Card className="h-full gap-4 rounded-2xl border-none py-7 shadow-sm shadow-foreground/[0.03]">
                <CardContent className="flex h-full flex-col gap-4 px-7">
                  <Quote className="size-7 text-secondary" fill="currentColor" strokeWidth={0} />
                  <p className="grow text-sm leading-relaxed text-foreground/85">
                    "{t.text}"
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-3.5 text-primary"
                          fill="currentColor"
                          strokeWidth={0}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
