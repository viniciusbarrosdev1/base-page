import { useEffect, useRef, useState } from "react"
import { animate, motion, useInView } from "framer-motion"

import { Container } from "@/components/container"
import { STATS } from "@/data/site"
import { staggerContainer, staggerItem } from "@/lib/motion"

function Counter({
  value,
  prefix,
  suffix,
}: {
  value: number
  prefix: string
  suffix: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [isInView, value])

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString("pt-BR")}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <Container>
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-6"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="flex flex-col items-center gap-1.5 text-center"
            >
              <p className="font-heading text-4xl font-semibold tracking-tight text-primary-foreground sm:text-5xl">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <p className="max-w-[14ch] text-sm leading-snug text-primary-foreground/75">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
