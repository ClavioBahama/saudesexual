import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Star } from "lucide-react";

const plans = [
  {
    name: "Básico",
    subtitle: "Ideal para começar",
    priceMZN: "1.500",
    priceUSD: "25",
    features: [
      "Acesso completo ao curso",
      "8 módulos de conteúdo",
      "PDFs para download",
      "Checklists práticos",
      "Exercícios semanais",
    ],
    variant: "outline" as const,
    popular: false,
    link: "https://pay.hotmart.com/H102419252N?checkoutMode=10",
  },
  {
    name: "Completo",
    subtitle: "Mais escolhido",
    priceMZN: "3.000",
    priceUSD: "55",
    features: [
      "Tudo do plano Básico",
      "Acesso à comunidade privada",
      "Suporte por e-mail",
      "2 consultas rápidas",
      "Atualizações gratuitas",
    ],
    variant: "accent" as const,
    popular: true,
    link: "https://pay.hotmart.com/H102419252N?off=3vsp1grd&checkoutMode=10",
  },
  {
    name: "Premium",
    subtitle: "Acompanhamento personalizado",
    priceMZN: "6.000",
    priceUSD: "110",
    features: [
      "Tudo do plano Completo",
      "1 consulta personalizada",
      "Plano individual customizado",
      "Suporte prioritário",
      "Acesso vitalício",
    ],
    variant: "premium" as const,
    popular: false,
    link: "https://pay.hotmart.com/H102419252N?off=cjpijfrn&checkoutMode=10",
  },
];

export const Pricing = () => {
  return (
    <section id="plans" className="py-16 md:py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Escolha o Seu Plano
            </h2>
            <p className="text-lg text-muted-foreground">
              Invista na sua saúde e bem-estar com garantia total de satisfação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`p-8 relative transition-smooth ${
                  plan.popular
                    ? "border-2 border-accent shadow-strong scale-105"
                    : "shadow-medium hover:shadow-strong"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="gradient-accent px-6 py-2 rounded-full shadow-glow-accent flex items-center gap-2">
                      <Star className="w-4 h-4 fill-accent-foreground text-accent-foreground" />
                      <span className="text-sm font-bold text-accent-foreground">
                        Mais Escolhido
                      </span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-card-foreground">
                      MZN {plan.priceMZN}
                    </span>
                  </div>
                  <div className="text-muted-foreground">
                    <span className="text-lg">USD ${plan.priceUSD}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-card-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={plan.variant} 
                  size="lg" 
                  className="w-full"
                  asChild
                >
                  <a href={plan.link} target="_blank" rel="noopener noreferrer">
                    Inscrever — Pagar agora
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
