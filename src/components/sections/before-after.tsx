import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/container"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { BEFORE_AFTER_CASES } from "@/data/site"
import { staggerContainer, staggerItem } from "@/lib/motion"

function BeforeAfterCard({
  label,
  before,
  after,
}: {
  label: string
  before: string
  after: string
}) {
  const [showAfter, setShowAfter] = useState(false)

  return (
    <motion.div variants={staggerItem} className="flex flex-col gap-4">
      <button
        type="button"
        onClick={() => setShowAfter((v) => !v)}
        className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl ring-1 ring-foreground/10"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={showAfter ? "after" : "before"}
            src={showAfter ? after : before}
            alt={`${label} — ${showAfter ? "depois" : "antes"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 size-full object-cover"
          />
        </AnimatePresence>

        <Badge
          className="absolute top-3 left-3 pointer-events-none"
          variant={showAfter ? "default" : "secondary"}
        >
          {showAfter ? "Depois" : "Antes"}
        </Badge>

        <span className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-gradient-to-t from-foreground/60 to-transparent px-4 pt-10 pb-3 text-xs font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          Toque para ver o {showAfter ? "antes" : "depois"}
        </span>
      </button>

      <div className="flex items-center justify-between px-1">
        <p className="text-sm font-medium text-foreground">{label}</p>
        <div className="flex gap-1.5">
          <span
            className={`size-1.5 rounded-full transition-colors ${!showAfter ? "bg-primary" : "bg-border"}`}
          />
          <span
            className={`size-1.5 rounded-full transition-colors ${showAfter ? "bg-primary" : "bg-border"}`}
          />
        </div>
      </div>
    </motion.div>
  )
}

export function BeforeAfter() {
  return (
    <section id="antes-depois" className="bg-background py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Resultados reais"
          title="Antes e depois"
          description="Clique nas imagens para comparar o resultado dos tratamentos realizados na clínica."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-3"
        >
          {BEFORE_AFTER_CASES.map((c) => (
            <BeforeAfterCard key={c.label} label={c.label} before={c.before} after={c.after} />
          ))}
        </motion.div>

        <Reveal className="text-center text-xs text-muted-foreground">
          Imagens ilustrativas de casos reais de pacientes da clínica.
        </Reveal>
      </Container>
    </section>
  )
}
