import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"

import logoClinica from "@/assets/logo-clinica.png"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/container"
import { NAV_LINKS } from "@/data/site"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 shadow-sm shadow-foreground/5 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <a href="#hero" className="flex items-center gap-2">
          <img src={logoClinica} alt="Sorriso Vitale" className="h-9 w-auto sm:h-10" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            render={<a href="#agendamento" />}
            nativeButton={false}
            size="lg"
            className="shadow-sm shadow-primary/20"
          >
            Agendar Consulta
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-foreground md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border/80 bg-background md:hidden"
          >
            <Container className="flex flex-col gap-4 py-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <Button
                render={<a href="#agendamento" />}
                nativeButton={false}
                size="lg"
                onClick={() => setOpen(false)}
              >
                Agendar Consulta
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
