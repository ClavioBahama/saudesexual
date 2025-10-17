import { CheckCircle2, Target, Heart, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Target,
    title: "Plano de Ação Prático",
    description: "Exercícios diários, treinos e rotina estruturada para resultados consistentes.",
  },
  {
    icon: Heart,
    title: "Orientação Médica e Nutricional",
    description: "Dicas seguras e baseadas em saúde para maximizar seu bem-estar.",
  },
  {
    icon: Brain,
    title: "Confiança e Mindset",
    description: "Técnicas comportamentais para melhorar intimidade e autoestima.",
  },
];

export const Features = () => {
  const scrollToPlans = () => {
    document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Veja O Que Você Vai Aprender Nesse Passo a Passo
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-medium hover:shadow-strong transition-smooth border border-border"
              >
                <div className="w-16 h-16 gradient-accent rounded-xl flex items-center justify-center mb-6 shadow-glow-accent">
                  <feature.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              variant="accent"
              onClick={scrollToPlans}
            >
              Ver programa completo →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
