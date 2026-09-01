import { motion } from "framer-motion"
import { Banknote, CreditCard, QrCode, type LucideIcon } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Container } from "@/components/container"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { INSURANCE_LOGOS, PAYMENT_METHODS } from "@/data/site"
import { staggerContainer, staggerItem } from "@/lib/motion"

const ICONS: Record<string, LucideIcon> = { QrCode, CreditCard, Banknote }

export function Insurance() {
  return (
    <section id="convenios" className="bg-secondary/25 py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Convênios e pagamento"
          title="Facilidade na hora de cuidar do seu sorriso"
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-6">
            <h3 className="font-heading text-sm font-semibold tracking-wide text-foreground uppercase">
              Convênios aceitos
            </h3>
            <div className="flex flex-wrap items-center gap-8 rounded-2xl bg-card p-8 ring-1 ring-foreground/10">
              {INSURANCE_LOGOS.map((logo) => (
                <img
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 w-auto object-contain"
                />
              ))}
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal>
              <h3 className="font-heading text-sm font-semibold tracking-wide text-foreground uppercase">
                Particular
              </h3>
            </Reveal>
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="grid gap-4 sm:grid-cols-3"
            >
              {PAYMENT_METHODS.map((method) => {
                const Icon = ICONS[method.icon]
                return (
                  <motion.div key={method.title} variants={staggerItem}>
                    <Card className="h-full gap-2 rounded-2xl border-none py-5 text-center shadow-sm shadow-foreground/[0.03]">
                      <CardContent className="flex flex-col items-center gap-2 px-4">
                        <Icon className="size-5 text-primary" />
                        <p className="text-sm font-semibold text-foreground">{method.title}</p>
                        <p className="text-xs text-muted-foreground">{method.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
