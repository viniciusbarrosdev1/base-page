import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Container } from "@/components/container"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { FAQ_ITEMS } from "@/data/site"

export function Faq() {
  return (
    <section id="faq" className="bg-background py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Perguntas que a gente sempre ouve"
        />

        <Reveal delay={0.05} className="w-full max-w-2xl rounded-[1.75rem] bg-card p-3 shadow-sm shadow-foreground/[0.03] ring-1 ring-foreground/10 sm:p-6">
          <Accordion className="gap-1">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem key={item.question} value={item.question} className="px-2">
                <AccordionTrigger className="py-4 text-base">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </section>
  )
}
