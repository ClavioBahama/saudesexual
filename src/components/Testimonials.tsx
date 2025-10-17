import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    age: 42,
    text: "Depois de anos lutando com a confiança, finalmente encontrei algo que funciona. Minha vida mudou completamente!",
    rating: 5,
  },
  {
    name: "Ricardo P.",
    age: 38,
    text: "O programa é muito completo e discreto. Consegui resultados em poucas semanas. Recomendo!",
    rating: 5,
  },
  {
    name: "André S.",
    age: 45,
    text: "Estava cético no início, mas os exercícios e a orientação nutricional fizeram toda a diferença. Valeu cada centavo!",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              DEPOIMENTOS
            </h2>
            <p className="text-lg text-muted-foreground">
              Esses relatos são a prova de que o método funciona — descubra por si mesmo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 shadow-medium hover:shadow-strong transition-smooth"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-card-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.age} anos</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
