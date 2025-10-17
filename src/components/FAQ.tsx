import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Isso é médico?",
    answer: "Não, este não é um atendimento médico. É um programa educacional com orientações baseadas em práticas saudáveis e estudos científicos. Sempre consulte um médico para diagnósticos e tratamentos específicos.",
  },
  {
    question: "Preciso expor minha identidade?",
    answer: "Não! Todo o conteúdo é totalmente discreto e anônimo. Você pode fazer o curso no seu ritmo e privacidade, sem precisar compartilhar informações pessoais com outras pessoas.",
  },
  {
    question: "Quanto tempo por dia preciso dedicar?",
    answer: "Recomendamos de 15 a 30 minutos por dia para ver resultados consistentes. O programa é flexível e pode ser adaptado à sua rotina.",
  },
  {
    question: "Existe suporte disponível?",
    answer: "Sim! Dependendo do plano escolhido, você terá acesso a suporte por e-mail, comunidade privada e até consultas personalizadas.",
  },
  {
    question: "Como funciona a garantia?",
    answer: "Oferecemos garantia de satisfação. Se você não estiver satisfeito com o programa, pode solicitar reembolso dentro do período estipulado nos termos de compra.",
  },
  {
    question: "O conteúdo é atualizado?",
    answer: "Sim! Estamos constantemente atualizando o material com base nas últimas pesquisas e feedback dos alunos. Nos planos Completo e Premium, você recebe todas as atualizações gratuitamente.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Dúvidas comuns
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-2 border-border rounded-xl px-6 shadow-soft hover:shadow-medium transition-smooth"
              >
                <AccordionTrigger className="text-left font-bold text-card-foreground hover:text-accent hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
