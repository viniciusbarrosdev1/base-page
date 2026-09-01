import { motion } from "framer-motion"

import { WhatsappIcon } from "@/components/icons/whatsapp-icon"
import { buildWhatsappUrl } from "@/data/site"

export function FloatingWhatsapp() {
  return (
    <motion.a
      href={buildWhatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar no WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 sm:right-7 sm:bottom-7"
    >
      <WhatsappIcon className="size-7" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/50 [animation-duration:2.4s]" />
    </motion.a>
  )
}
