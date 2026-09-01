import logoAmil from "@/assets/logo-convenio-amil.png"
import logoBradesco from "@/assets/logo-convenio-bradesco.png"
import logoOdontoprev from "@/assets/logo-convenio-odontoprev.png"
import antesCaso1 from "@/assets/antes-caso1.jpg"
import depoisCaso1 from "@/assets/depois-caso1.jpg"
import antesCaso2 from "@/assets/antes-caso2.jpg"
import depoisCaso2 from "@/assets/depois-caso2.jpg"
import antesCaso3 from "@/assets/antes-caso3.jpg"
import depoisCaso3 from "@/assets/depois-caso3.jpg"

export const CLINIC = {
  name: "Sorriso Vitale",
  city: "Cascavel",
  whatsappNumber: "5545991234567",
  whatsappDisplay: "(45) 99123-4567",
  address: "Rua Paraná, 1420 — Centro, Cascavel - PR",
  addressReference: "Próximo à Catedral de Cascavel",
  cnpj: "42.118.907/0001-56",
  cro: "CRO-PR 24.581",
  instagram: "@sorrisovitale",
  facebook: "/sorrisovitale",
  hours: "Seg-Sex 08h-19h | Sáb 08h-12h",
}

export function buildWhatsappUrl(message?: string) {
  const base = `https://wa.me/${CLINIC.whatsappNumber}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
]

export const CREDENTIAL_BADGES = [
  "CRO-PR ativo",
  "Biossegurança ANVISA",
  "4.9★ no Google — +180 avaliações",
]

export const INSURANCE_LOGOS = [
  { name: "Amil Dental", src: logoAmil },
  { name: "Bradesco Dental", src: logoBradesco },
  { name: "Odontoprev", src: logoOdontoprev },
]

export const DIFFERENTIALS = [
  {
    icon: "HeartHandshake",
    title: "Atendimento humanizado",
    description: "Consultas sem pressa, com escuta atenta e cuidado individual em cada etapa do tratamento.",
  },
  {
    icon: "ScanLine",
    title: "Tecnologia de ponta",
    description: "Scanner intraoral e raio-x digital para diagnósticos precisos e mais conforto.",
  },
  {
    icon: "Wind",
    title: "Ambiente climatizado",
    description: "Espaço confortável e acolhedor, pensado para reduzir a ansiedade da visita ao dentista.",
  },
  {
    icon: "CalendarClock",
    title: "Horários flexíveis",
    description: "Agenda estendida durante a semana e atendimento aos sábados para caber na sua rotina.",
  },
  {
    icon: "ShieldCheck",
    title: "Biossegurança rígida",
    description: "Protocolos de esterilização e higiene seguindo as normas mais atuais da ANVISA.",
  },
]

export const TESTIMONIALS = [
  {
    name: "Maria Eduarda S.",
    rating: 5,
    text: "Sempre tive medo de dentista, mas aqui o atendimento é tão tranquilo que virei paciente fiel.",
  },
  {
    name: "Carlos Henrique T.",
    rating: 5,
    text: "Fiz implante e o resultado ficou perfeito. Equipe muito atenciosa.",
  },
  {
    name: "Juliana P.",
    rating: 5,
    text: "Clareamento rápido e sem dor. Recomendo demais.",
  },
]

export const BEFORE_AFTER_CASES = [
  {
    label: "Clareamento dental",
    before: antesCaso1,
    after: depoisCaso1,
  },
  {
    label: "Lentes de resina",
    before: antesCaso2,
    after: depoisCaso2,
  },
  {
    label: "Reabilitação com implante",
    before: antesCaso3,
    after: depoisCaso3,
  },
]

export const STATS = [
  { value: 11, prefix: "", suffix: "", label: "anos de mercado" },
  { value: 3200, prefix: "+", suffix: "", label: "pacientes atendidos" },
  { value: 180, prefix: "+", suffix: "", label: "avaliações no Google (nota 4.9)" },
  { value: 98, prefix: "", suffix: "%", label: "de satisfação em pesquisa interna" },
]

export const SERVICES = [
  { icon: "Sparkles", name: "Limpeza e profilaxia", price: "R$ 120" },
  { icon: "Sun", name: "Clareamento dental", price: "R$ 450" },
  { icon: "Palette", name: "Restauração (resina)", price: "R$ 180" },
  { icon: "Pipette", name: "Extração simples", price: "R$ 150" },
  { icon: "Smile", name: "Aparelho ortodôntico", price: "R$ 199/mês" },
  { icon: "Anchor", name: "Implante dentário (unitário)", price: "R$ 1.890" },
  { icon: "Gem", name: "Lentes de resina (unidade)", price: "R$ 590" },
  { icon: "CircleDashed", name: "Prótese dentária", price: "R$ 850" },
]

export const SPECIALTIES = [
  {
    icon: "Anchor",
    title: "Implantodontia",
    description: "Especialidade do Dr. Rafael, com foco em reabilitação de dentes ausentes e devolução da função mastigatória.",
  },
  {
    icon: "Sun",
    title: "Estética dental",
    description: "Clareamento e lentes de resina para um sorriso mais harmonioso e natural.",
  },
  {
    icon: "Smile",
    title: "Ortodontia",
    description: "Aparelhos fixos e alinhadores para alinhar e corrigir a mordida com acompanhamento próximo.",
  },
]

export const HOW_IT_WORKS = [
  {
    icon: "CalendarCheck",
    title: "Agendamento",
    description: "Pelo site ou WhatsApp, no horário que for melhor pra você.",
  },
  {
    icon: "Stethoscope",
    title: "Avaliação inicial gratuita",
    description: "Exame clínico completo e raio-x se necessário, sem custo.",
  },
  {
    icon: "ClipboardList",
    title: "Plano personalizado",
    description: "Orçamento detalhado e transparente, sem surpresas no caminho.",
  },
  {
    icon: "Activity",
    title: "Procedimento",
    description: "Realizado com tecnologia moderna, conforto e segurança.",
  },
  {
    icon: "CalendarHeart",
    title: "Acompanhamento",
    description: "Retorno agendado para garantir o resultado a longo prazo.",
  },
]

export const TECHNOLOGY = [
  { icon: "ScanLine", text: "Scanner intraoral 3D (moldagem digital sem massinha)" },
  { icon: "Radiation", text: "Raio-x digital (menor exposição à radiação)" },
  { icon: "FlaskConical", text: "Esterilização em autoclave classe B" },
  { icon: "Drill", text: "Motor de implante de última geração" },
]

export const PAYMENT_METHODS = [
  { icon: "QrCode", title: "PIX", description: "5% de desconto à vista" },
  { icon: "CreditCard", title: "Cartão de crédito", description: "Em até 6x sem juros" },
  { icon: "Banknote", title: "Dinheiro", description: "Pagamento em espécie" },
]

export const SERVICE_OPTIONS = [
  { value: "avaliacao", label: "Avaliação gratuita" },
  { value: "clareamento", label: "Clareamento" },
  { value: "implante", label: "Implante" },
  { value: "ortodontia", label: "Ortodontia" },
  { value: "outro", label: "Outro" },
]

export const FAQ_ITEMS = [
  {
    question: "O tratamento dói?",
    answer: "Utilizamos anestesia e técnicas modernas para garantir conforto total durante o procedimento.",
  },
  {
    question: "Vocês atendem convênio?",
    answer: "Sim, atendemos Amil Dental, Bradesco Dental e Odontoprev.",
  },
  {
    question: "Quanto tempo dura um clareamento?",
    answer: "Em média 2 a 3 sessões, com resultado visível já na primeira.",
  },
  {
    question: "Tem estacionamento?",
    answer: "Sim, contamos com vagas próprias em frente à clínica.",
  },
  {
    question: "Posso parcelar o tratamento?",
    answer: "Sim, em até 6x sem juros no cartão.",
  },
  {
    question: "Atendem em caso de urgência/dor?",
    answer: "Sim, reservamos horários no mesmo dia para emergências.",
  },
]

export const ABOUT = {
  name: "Dr. Rafael Antunes",
  cro: "CRO-PR 24.581",
  education: "Graduado em Odontologia pela UNIOESTE, especialização em Implantodontia pelo CFO, 12 anos de atuação.",
  story: "A clínica foi fundada em 2014 e, hoje, conta com uma equipe de 4 profissionais dedicados a cuidar do sorriso de cada paciente com atenção e tecnologia.",
}
