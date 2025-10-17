import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const modules = [
  {
    number: "1",
    title: "Avaliação e metas",
    description: "Checklist e diário pessoal",
  },
  {
    number: "2",
    title: "Anatomia, mitos e verdades",
    description: "Base científica e educação",
  },
  {
    number: "3",
    title: "Exercícios práticos",
    description: "Pelvianos, Kegels e alongamentos",
  },
  {
    number: "4",
    title: "Nutrição para desempenho",
    description: "Alimentação estratégica",
  },
  {
    number: "5",
    title: "Técnicas de respiração",
    description: "Controlo da ansiedade",
  },
  {
    number: "6",
    title: "Comunicação íntima",
    description: "Relacionamentos saudáveis",
  },
  {
    number: "7",
    title: "Casos reais e estudos",
    description: "Depoimentos anônimos",
  },
  {
    number: "8",
    title: "Plano personalizado",
    description: "Manutenção de longo prazo",
  },
];

export const Modules = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Conteúdo do curso — 8 módulos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Em cada módulo: vídeo + PDF para download + checklist prático + exercícios semanais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module) => (
              <Card
                key={module.number}
                className="p-6 hover:shadow-medium transition-smooth border-2 hover:border-accent group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:shadow-glow-accent transition-smooth">
                    <span className="text-xl font-bold text-accent group-hover:text-accent-foreground">
                      {module.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-card-foreground mb-2 leading-tight">
                      {module.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {module.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
