import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { CalendarCheck2, MessageCircle, ShieldCheck, Sparkles } from "lucide-react"

import { WhatsappIcon } from "@/components/icons/whatsapp-icon"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Container } from "@/components/container"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Reveal } from "@/components/reveal"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { buildWhatsappUrl, SERVICE_OPTIONS } from "@/data/site"

const PERKS = [
  { icon: Sparkles, text: "Avaliação inicial gratuita" },
  { icon: ShieldCheck, text: "Sem compromisso, sem letras miúdas" },
  { icon: MessageCircle, text: "Resposta rápida pelo WhatsApp" },
]

export function BookingForm() {
  const [name, setName] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [service, setService] = useState<string>(SERVICE_OPTIONS[0].value)

  const isValid = name.trim().length > 1 && whatsapp.trim().length >= 8

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!isValid) return

    const serviceLabel =
      SERVICE_OPTIONS.find((option) => option.value === service)?.label ?? service

    const message = `Olá! Me chamo ${name.trim()} e tenho interesse em ${serviceLabel}. Vim pelo site.`
    window.open(buildWhatsappUrl(message), "_blank", "noopener,noreferrer")
  }

  return (
    <section id="agendamento" className="bg-muted/60 py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-wide text-accent-foreground uppercase">
            <CalendarCheck2 className="size-3.5" />
            Agende em minutos
          </span>
          <h2 className="font-heading text-3xl leading-tight font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
            Vamos cuidar do seu sorriso?
          </h2>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Preencha seus dados e continue a conversa direto no WhatsApp com nossa equipe.
          </p>

          <ul className="flex flex-col gap-3 pt-2">
            {PERKS.map((perk) => (
              <li key={perk.text} className="flex items-center gap-3 text-sm text-foreground/80">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-card ring-1 ring-foreground/10">
                  <perk.icon className="size-4 text-primary" />
                </span>
                {perk.text}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="gap-0 rounded-[1.75rem] border-none py-8 shadow-lg shadow-foreground/[0.06] sm:py-10">
            <CardContent className="px-7 sm:px-10">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="nome">Nome</Label>
                  <Input
                    id="nome"
                    placeholder="Seu nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-11 rounded-xl"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="whatsapp">WhatsApp</Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    placeholder="(45) 99999-9999"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="h-11 rounded-xl"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="servico">Serviço de interesse</Label>
                  <Select
                    value={service}
                    onValueChange={(value) => {
                      if (value) setService(value)
                    }}
                  >
                    <SelectTrigger id="servico" className="h-11 w-full rounded-xl">
                      <SelectValue>
                        {(value: string | null) =>
                          SERVICE_OPTIONS.find((option) => option.value === value)?.label ??
                          "Selecione um serviço"
                        }
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICE_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={!isValid}
                    className="h-12 w-full gap-2 rounded-xl text-base shadow-md shadow-primary/25"
                  >
                    <WhatsappIcon className="size-4.5" />
                    Agendar pelo WhatsApp
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </Reveal>
      </Container>
    </section>
  )
}
