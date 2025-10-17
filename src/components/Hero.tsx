import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./CountdownTimer";

export const Hero = () => {
  const scrollToPlans = () => {
    document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative gradient-hero text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMm0tNCAwYzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p className="text-warning text-lg md:text-xl font-bold animate-pulse">
              ⚡ Restam apenas algumas horas para garantir o acesso com bônus!
            </p>
            <CountdownTimer />
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight">
            Ela Pensou em Me Deixar… Até Que Descobri Essa Planta Secreta da Holanda – 
            <span className="text-accent"> Hoje Ela Me Chama de Leão!</span>
          </h1>

          <Button 
            size="xl" 
            variant="accent" 
            onClick={scrollToPlans}
            className="text-lg font-bold"
          >
            Quero Transformar Minha Vida Agora
          </Button>
        </div>
      </div>
    </section>
  );
};
