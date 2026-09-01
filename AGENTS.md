PROMPT

Desenvolva uma landing page de teste para uma clínica odontológica fictícia chamada Sorriso Vitale, usando a stack já configurada neste projeto: React + TypeScript + Vite + Tailwind CSS v4 + shadcn/ui + Framer Motion.

Antes de codar, verifique o AGENTS.md e as skills disponíveis neste template e utilize a(s) skill(s) de base já configuradas para o desenvolvimento — este projeto é um template neutro usado para testar diferentes skills, então não assuma nomes específicos de skill: leia o que está disponível no ambiente e siga rigorosamente as diretrizes de estilização que a skill definir. Tipografia e cores finas de UI (variações, hovers, elevação) ficam a seu critério dentro da identidade visual abaixo, mas sempre respeitando o que a skill orientar.

Prioridades desta build (nessa ordem de importância):

Uso correto e extensivo do shadcn/ui — não crie componentes do zero quando já existir um equivalente em shadcn (Card, Accordion, Input, Select, Button, Badge, Dialog, Separator, etc). Use variantes do shadcn (variant, size) em vez de estilização manual repetida. Instale via CLI os componentes shadcn necessários que ainda não estiverem no projeto.
Framer Motion bem aplicado — cada seção deve ter uma animação de entrada no viewport (whileInView + initial/animate), stagger em listas/grids (cards de serviços, diferenciais, depoimentos), e microinterações em hover/tap nos elementos clicáveis (botões, cards). Sem exagero: transições curtas (200-400ms), easing suave, nada que trave scroll ou pareça exagerado.
Estilização é o foco principal deste teste — capriche muito mais em execução visual (espaçamento, hierarquia tipográfica, contraste, consistência entre seções) do que em completude funcional. Esta é uma landing de teste pra avaliar qualidade de estilização da skill, não um MVP funcional completo.

Não entregue um layout genérico de template — o resultado precisa parecer produto premium de clínica, não um boilerplate.

Identidade visual (obrigatório seguir)
Cor primária: azul petróleo 
#2C7A7B
Cor neutra/fundo: branco gelo 
#F7FAFA
Cor de apoio/quente: bege areia 
#E8DCC8
Texto: cinza-chumbo 
#2B2B2B
Tom visual: clínico moderno, porém acolhedor — evite estética "hospital frio". Use bastante respiro (whitespace), cantos arredondados suaves, sombras leves.
Tipografia: escolha uma sans-serif moderna e legível, adequada a clínica de saúde (ex: Inter, Manrope ou similar já disponível via Tailwind/Google Fonts).
Sem vídeo — apenas imagens estáticas.
Imagens

Todas as imagens já foram geradas e estão em src/assets/. Use os arquivos exatamente com estes nomes — não invente outros nomes nem tente gerar/buscar imagens:

src/assets/logo-clinica.png
src/assets/foto-dentista-hero.jpg
src/assets/foto-dentista-sobre.jpg
src/assets/logo-convenio-amil.png
src/assets/logo-convenio-bradesco.png
src/assets/logo-convenio-odontoprev.png
src/assets/antes-caso1.jpg
src/assets/depois-caso1.jpg
src/assets/antes-caso2.jpg
src/assets/depois-caso2.jpg
src/assets/antes-caso3.jpg
src/assets/depois-caso3.jpg
src/assets/consultorio-recepcao.jpg
src/assets/consultorio-sala-atendimento.jpg
src/assets/favicon.png

Ícones de serviços e de "tecnologia e equipamentos" devem usar a biblioteca lucide-react (já disponível) — não são imagens.

Estrutura da página (nesta ordem, de cima pra baixo)

1. Navbar

Logo (logo-clinica.png)
Menu: Serviços, Sobre, Depoimentos, Contato
CTA fixo no canto direito: "Agendar Consulta" (ancora até a seção de formulário)

2. Hero Section

Headline: "Seu sorriso merece o melhor cuidado"
Subheadline: "Atendimento odontológico completo em Cascavel, com tecnologia moderna e uma equipe que cuida de você como família."
CTA principal: "Agendar minha avaliação gratuita" (ancora até formulário)
Imagem: foto-dentista-hero.jpg

3. Barra de credibilidade

Logos: logo-convenio-amil.png, logo-convenio-bradesco.png, logo-convenio-odontoprev.png
Selos em texto/badge: "CRO-PR ativo", "Biossegurança ANVISA", "4.9★ no Google — +180 avaliações"

4. Sobre o dentista/clínica

Imagem: foto-dentista-sobre.jpg
Nome: Dr. Rafael Antunes — CRO-PR 24.581
Formação: Graduado em Odontologia pela UNIOESTE, especialização em Implantodontia pelo CFO, 12 anos de atuação
História: clínica fundada em 2014, hoje com equipe de 4 profissionais

5. Diferenciais (grid de cards com ícone lucide-react)

Atendimento humanizado, sem pressa
Tecnologia de ponta (scanner intraoral, raio-x digital)
Ambiente climatizado e confortável
Flexibilidade de horários (inclusive sábado)
Protocolo rígido de biossegurança

6. Depoimentos (cards com nome, estrelas, texto)

Maria Eduarda S. — ★★★★★ — "Sempre tive medo de dentista, mas aqui o atendimento é tão tranquilo que virei paciente fiel."
Carlos Henrique T. — ★★★★★ — "Fiz implante e o resultado ficou perfeito. Equipe muito atenciosa."
Juliana P. — ★★★★★ — "Clareamento rápido e sem dor. Recomendo demais."

7. Antes e depois (galeria com slider/toggle antes-depois ou lado a lado)

Caso 1: antes-caso1.jpg → depois-caso1.jpg (Clareamento dental)
Caso 2: antes-caso2.jpg → depois-caso2.jpg (Lentes de resina)
Caso 3: antes-caso3.jpg → depois-caso3.jpg (Reabilitação com implante)

8. Números e estatísticas (contadores animados com Framer Motion)

11 anos de mercado
+3.200 pacientes atendidos
+180 avaliações no Google (nota 4.9)
98% de satisfação em pesquisa interna

9. Serviços oferecidos (grid de cards com ícone lucide-react + preço)

Serviço	Preço a partir de
Limpeza e profilaxia	R$ 120
Clareamento dental	R$ 450
Restauração (resina)	R$ 180
Extração simples	R$ 150
Aparelho ortodôntico	R$ 199/mês
Implante dentário (unitário)	R$ 1.890
Lentes de resina (unidade)	R$ 590
Prótese dentária	R$ 850

10. Especialidades em destaque

Implantodontia — especialidade do Dr. Rafael, foco em reabilitação de dentes ausentes
Estética dental — clareamento e lentes de resina
Ortodontia — aparelhos fixos e alinhadores

11. Como funciona o atendimento (stepper visual, 5 passos)

Agendamento — pelo site ou WhatsApp
Avaliação inicial gratuita — exame clínico + raio-x se necessário
Plano de tratamento personalizado — orçamento detalhado, sem surpresas
Procedimento — realizado com tecnologia moderna e conforto
Acompanhamento — retorno agendado para garantir o resultado

12. Tecnologia e equipamentos (lista com ícones lucide-react, sem foto)

Scanner intraoral 3D (moldagem digital sem massinha)
Raio-x digital (menor exposição à radiação)
Esterilização em autoclave classe B
Motor de implante de última geração
Pode usar consultorio-sala-atendimento.jpg como imagem de apoio ao lado da lista

13. Convênios e formas de pagamento

Convênios: Amil Dental, Bradesco Dental, Odontoprev (reaproveitar logos já usados)
Particular: PIX (5% de desconto), cartão de crédito em até 6x sem juros, dinheiro

14. Oferta especial de conversão

Bloco de destaque (background na cor primária ou bege areia): "Avaliação + Raio-x gratuitos para quem agendar pelo site esta semana"
Selo "vaga limitada" (visual, decorativo)

15. Formulário simples de agendamento Campos:

Nome (input texto)
WhatsApp (input texto)
Serviço de interesse (select: Avaliação gratuita / Clareamento / Implante / Ortodontia / Outro)
Botão "Agendar pelo WhatsApp" — ao clicar, redireciona (via window.open) para:
  https://wa.me/5545991234567?text=Olá! Me chamo {nome} e tenho interesse em {serviço}. Vim pelo site.

(interpolando os valores preenchidos no formulário)

16. Informações básicas + WhatsApp direto

Texto: "Prefere falar direto com a gente?"
Número exibido: (45) 99123-4567
Botão: "Chamar no WhatsApp" → https://wa.me/5545991234567

17. Localização

Mapa incorporado (iframe do Google Maps, endereço fictício serve de placeholder)
Endereço: Rua Paraná, 1420 — Centro, Cascavel - PR
Referência: "Próximo à Catedral de Cascavel"
Pode usar consultorio-recepcao.jpg como imagem de apoio nesta seção

18. Botão flutuante do WhatsApp

Elemento fixo (position: fixed), canto inferior direito, visível em todas as seções durante o scroll
Ícone de WhatsApp, cor de fundo verde padrão do WhatsApp (não usar a cor primária aqui, pra manter reconhecimento da marca WhatsApp)
Link: https://wa.me/5545991234567

19. FAQ (accordion)

O tratamento dói? — Utilizamos anestesia e técnicas modernas para garantir conforto total durante o procedimento.
Vocês atendem convênio? — Sim, atendemos Amil Dental, Bradesco Dental e Odontoprev.
Quanto tempo dura um clareamento? — Em média 2 a 3 sessões, com resultado visível já na primeira.
Tem estacionamento? — Sim, contamos com vagas próprias em frente à clínica.
Posso parcelar o tratamento? — Sim, em até 6x sem juros no cartão.
Atendem em caso de urgência/dor? — Sim, reservamos horários no mesmo dia para emergências.

20. Contato de suporte

WhatsApp: (45) 99123-4567
Endereço: Rua Paraná, 1420 — Centro, Cascavel - PR

21. Footer completo

Redes sociais: Instagram @sorrisovitale, Facebook /sorrisovitale
CNPJ: 42.118.907/0001-56 | CRO-PR 24.581
Links: Política de Privacidade, Termos de Uso (podem ser âncoras vazias/placeholder nesta versão de teste)
Endereço/zap: Rua Paraná, 1420 — Centro, Cascavel - PR | (45) 99123-4567
Horário: Seg-Sex 08h-19h | Sáb 08h-12h
Favicon: favicon.png
Requisitos técnicos gerais
Totalmente responsivo (mobile-first).
Framer Motion em todas as seções: fade/slide ao entrar no viewport (whileInView), stagger nos grids/listas (serviços, diferenciais, depoimentos, especialidades), microinteração de hover/tap em cards e botões. Transições curtas e suaves.
shadcn/ui como base de todo componente de UI: Accordion (FAQ), Card (serviços, diferenciais, depoimentos, especialidades), Input/Select/Button (formulário), Badge (selos de credibilidade, "vaga limitada"), Separator (divisões entre seções se fizer sentido). Rode o CLI do shadcn pra adicionar os componentes que faltarem no projeto.
Componentização clara: cada seção numerada acima deve ser um componente próprio em src/components/sections/.
Código limpo, tipado (TypeScript), sem any.
Não é necessário backend real — formulário apenas monta a URL do WhatsApp e redireciona.