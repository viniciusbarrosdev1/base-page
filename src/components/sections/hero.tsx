import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

import heroImage from "@/assets/foto-dentista-hero.jpg"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/container"
import { staggerContainer, staggerItem } from "@/lib/motion"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-background pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[140%] bg-[radial-gradient(60%_50%_at_50%_0%,var(--accent)_0%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-24 -z-10 size-[26rem] rounded-full bg-secondary/40 blur-3xl"
      />

      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            variants={staggerItem}
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-wide text-accent-foreground uppercase"
          >
            <Sparkles className="size-3.5" />
            Clínica em Cascavel - PR
          </motion.span>

          <motion.h1
            variants={staggerItem}
            className="font-heading text-4xl leading-[1.1] font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-[3.4rem]"
          >
            Seu sorriso merece o melhor cuidado
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="max-w-xl text-lg leading-relaxed text-balance text-muted-foreground"
          >
            Atendimento odontológico completo em Cascavel, com tecnologia moderna e uma
            equipe que cuida de você como família.
          </motion.p>

          <motion.div variants={staggerItem} className="flex flex-col gap-3 pt-2 sm:flex-row">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Button
                render={<a href="#agendamento" />}
                nativeButton={false}
                size="lg"
                className="h-12 gap-2 rounded-xl px-6 text-base shadow-md shadow-primary/25"
              >
                Agendar minha avaliação gratuita
                <ArrowRight className="size-4" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute -inset-3 -z-10 rounded-[2.2rem] bg-gradient-to-br from-secondary/60 via-transparent to-primary/10" />
          <div className="overflow-hidden rounded-[1.8rem] ring-1 ring-foreground/10">
            <img
              src={heroImage}
              alt="Dentista da Sorriso Vitale atendendo com atenção"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
