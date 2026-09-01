import { MapPin, Phone } from "lucide-react"

import logoClinica from "@/assets/logo-clinica.png"
import { FacebookIcon, InstagramIcon } from "@/components/icons/social-icons"
import { Container } from "@/components/container"
import { Separator } from "@/components/ui/separator"
import { CLINIC } from "@/data/site"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#173838] text-white/70">
      <Container className="flex flex-col gap-10 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <img
              src={logoClinica}
              alt="Sorriso Vitale"
              className="h-9 w-auto brightness-0 invert"
            />
            <p className="max-w-xs text-sm leading-relaxed">
              Atendimento odontológico completo em Cascavel, com tecnologia moderna e cuidado
              humano em cada etapa.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 hover:text-white"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 hover:text-white"
              >
                <FacebookIcon className="size-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-white">Navegação</h3>
            <a href="#servicos" className="text-sm transition-colors hover:text-white">
              Serviços
            </a>
            <a href="#sobre" className="text-sm transition-colors hover:text-white">
              Sobre
            </a>
            <a href="#depoimentos" className="text-sm transition-colors hover:text-white">
              Depoimentos
            </a>
            <a href="#agendamento" className="text-sm transition-colors hover:text-white">
              Agendar consulta
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-white">Institucional</h3>
            <a href="#" className="text-sm transition-colors hover:text-white">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm transition-colors hover:text-white">
              Termos de Uso
            </a>
            <p className="text-sm">CNPJ: {CLINIC.cnpj}</p>
            <p className="text-sm">{CLINIC.cro}</p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-white">Contato</h3>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>{CLINIC.address}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="size-4 shrink-0" />
              <span>{CLINIC.whatsappDisplay}</span>
            </div>
            <p className="text-sm">{CLINIC.hours}</p>
          </div>
        </div>

        <Separator className="bg-white/10" />

        <div className="flex flex-col-reverse items-center justify-between gap-4 text-xs sm:flex-row">
          <p>
            © {year} {CLINIC.name}. Todos os direitos reservados.
          </p>
          <p>
            {CLINIC.instagram} · {CLINIC.facebook}
          </p>
        </div>
      </Container>
    </footer>
  )
}
