import { Card } from "@/components/ui/card";
import { Gift, BookOpen, Apple, Dumbbell, Brain } from "lucide-react";

const bonuses = [
  {
    icon: BookOpen,
    title: "Mitos e Verdades da Ereção",
    subtitle: "Desvende a Saúde Sexual Masculina.",
    description: "Chega de dúvidas! Este guia separa mitos de verdades sobre a ereção, oferecendo informações claras para sua confiança e desempenho.",
  },
  {
    icon: Brain,
    title: "Guia de Hábitos Saudáveis",
    subtitle: "Pilares da Saúde: Sono e Hidratação.",
    description: "Dicas essenciais para um sono reparador e hidratação ideal. Comece hoje!",
  },
  {
    icon: Apple,
    title: "Nutrição, Estresse e Testosterona",
    subtitle: "Otimize sua Testosterona!",
    description: "Explore a tríade vital: Nutrição, Estresse e Testosterona. Saiba como seus hábitos afetam seus hormônios e descubra o caminho para mais energia e vitalidade.",
  },
  {
    icon: Dumbbell,
    title: "Exercícios Pélvicos para Homens",
    subtitle: "Fortaleça Seu Assoalho Pélvico!",
    description: "Descubra os Exercícios Pélvicos para homens. Melhore a performance sexual, controle e vitalidade. Guia prático com benefícios surpreendentes!",
  },
  {
    icon: Brain,
    title: "O Impacto do Estresse na Performance Masculina",
    subtitle: "Recupere o controle!",
    description: "Estresse afetando sua performance? Descubra como o estresse crônico impacta sua saúde masculina e aprenda estratégias eficazes para proteger seu desempenho.",
  },
];

export const Bonuses = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-warning/10 text-warning px-6 py-3 rounded-full mb-6">
              <Gift className="w-6 h-6" />
              <span className="font-bold text-lg">Bônus Exclusivos Somente Hoje!</span>
            </div>
            <p className="text-3xl md:text-4xl font-bold gradient-premium inline-block text-transparent bg-clip-text">
              $159 USD Agora Grátis!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bonuses.map((bonus, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-medium transition-smooth border-2 hover:border-warning group"
              >
                <div className="w-14 h-14 rounded-xl gradient-premium flex items-center justify-center mb-4 shadow-glow-warning">
                  <bonus.icon className="w-7 h-7 text-warning-foreground" />
                </div>
                <h3 className="font-bold text-lg text-card-foreground mb-2">
                  {bonus.title}
                </h3>
                <p className="text-sm font-semibold text-accent mb-3">
                  {bonus.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {bonus.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
