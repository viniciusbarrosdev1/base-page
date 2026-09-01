import { motion, type HTMLMotionProps } from "framer-motion"

import { fadeUp, viewport } from "@/lib/motion"
import { cn } from "@/lib/utils"

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number
}

export function Reveal({ delay = 0, className, children, ...props }: RevealProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={{ delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
