import { motion } from "framer-motion"
import { Gift, Sparkle } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/container"
import { Reveal } from "@/components/reveal"

export function SpecialOffer() {
  return (
    <section className="bg-background px-6 py-16 sm:py-20">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-center sm:px-16 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-16 -left-16 size-56 rounded-full bg-white/10 blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -bottom-20 size-64 rounded-full bg-secondary/20 blur-3xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-6 right-6 hidden sm:block"
          >
            <Badge className="gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-secondary-foreground shadow-md">
              <Sparkle className="size-3.5" />
              Vaga limitada
            </Badge>
          </motion.div>

          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
            <span className="inline-flex size-14 items-center justify-center rounded-full bg-white/15">
              <Gift className="size-6 text-primary-foreground" />
            </span>
            <h2 className="font-heading text-2xl leading-tight font-semibold text-balance text-primary-foreground sm:text-3xl">
              Avaliação + Raio-x gratuitos para quem agendar pelo site esta semana
            </h2>
            <p className="text-sm text-primary-foreground/80 sm:text-base">
              Oferta por tempo limitado, sujeita à disponibilidade de agenda.
            </p>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="pt-2">
              <Button
                render={<a href="#agendamento" />}
                nativeButton={false}
                size="lg"
                variant="secondary"
                className="h-12 rounded-xl px-7 text-base shadow-md"
              >
                Garantir minha vaga
              </Button>
            </motion.div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
