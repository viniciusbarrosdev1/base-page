import { motion } from "framer-motion"
import { Phone } from "lucide-react"

import { WhatsappIcon } from "@/components/icons/whatsapp-icon"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/container"
import { Reveal } from "@/components/reveal"
import { buildWhatsappUrl, CLINIC } from "@/data/site"

export function WhatsappDirect() {
  return (
    <section id="contato" className="bg-background py-16 sm:py-20">
      <Container>
        <Reveal className="flex flex-col items-center gap-5 rounded-[1.75rem] bg-card px-6 py-12 text-center shadow-sm shadow-foreground/[0.03] ring-1 ring-foreground/10 sm:px-10">
          <span className="inline-flex size-14 items-center justify-center rounded-full bg-[#25D366]/12">
            <Phone className="size-6 text-[#25D366]" />
          </span>
          <div className="flex flex-col gap-1.5">
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              Prefere falar direto com a gente?
            </h2>
            <p className="text-lg font-medium text-muted-foreground">{CLINIC.whatsappDisplay}</p>
          </div>
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <Button
              render={<a href={buildWhatsappUrl()} target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
              size="lg"
              className="h-12 gap-2 rounded-xl bg-[#25D366] px-6 text-base text-white shadow-md shadow-[#25D366]/25 hover:bg-[#1fbd5a]"
            >
              <WhatsappIcon className="size-4.5" />
              Chamar no WhatsApp
            </Button>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  )
}
