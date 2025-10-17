import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.jpeg";
import testimonial3 from "@/assets/testimonial-3.jpeg";
import testimonial4 from "@/assets/testimonial-4.jpeg";
import testimonial5 from "@/assets/testimonial-5.jpeg";
import testimonial6 from "@/assets/testimonial-6.jpeg";
import testimonial7 from "@/assets/testimonial-7.jpeg";
import testimonial8 from "@/assets/testimonial-8.jpeg";

const testimonials = [
  { image: testimonial1 },
  { image: testimonial2 },
  { image: testimonial3 },
  { image: testimonial4 },
  { image: testimonial5 },
  { image: testimonial6 },
  { image: testimonial7 },
  { image: testimonial8 },
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-smooth hover:scale-105"
              >
                <img
                  src={testimonial.image}
                  alt={`Depoimento ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
