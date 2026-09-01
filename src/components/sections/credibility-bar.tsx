import { motion } from "framer-motion"
import { Award, ShieldCheck, Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/container"
import { CREDENTIAL_BADGES, INSURANCE_LOGOS } from "@/data/site"
import { staggerContainer, staggerItem } from "@/lib/motion"

const BADGE_ICONS = [ShieldCheck, Award, Star]

export function CredibilityBar() {
  return (
    <section className="border-y border-border/70 bg-white py-10">
      <Container className="flex flex-col items-center gap-8">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="flex flex-wrap items-center justify-center gap-8 opacity-90 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
        >
          {INSURANCE_LOGOS.map((logo) => (
            <motion.img
              key={logo.name}
              variants={staggerItem}
              src={logo.src}
              alt={logo.name}
              className="h-8 w-auto object-contain sm:h-9"
            />
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {CREDENTIAL_BADGES.map((label, i) => {
            const Icon = BADGE_ICONS[i % BADGE_ICONS.length]
            return (
              <motion.div key={label} variants={staggerItem}>
                <Badge
                  variant="secondary"
                  className="h-auto gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium"
                >
                  <Icon className="size-3.5 text-primary" />
                  {label}
                </Badge>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
