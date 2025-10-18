import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./CountdownTimer";
import { useState } from "react";
import { Play } from "lucide-react";
import videoThumbnail from "@/assets/video-thumbnail.jpeg";

export const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
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

          <div className="max-w-md mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-strong aspect-[9/16] bg-card group cursor-pointer" onClick={() => setIsPlaying(true)}>
              {!isPlaying && (
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <img 
                    src={videoThumbnail} 
                    alt="Video thumbnail" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity group-hover:bg-black/40">
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-strong transition-transform group-hover:scale-110">
                      <Play className="w-10 h-10 text-primary ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              )}
              <iframe
                src={`https://drive.google.com/file/d/1nq2fxPSEl5a8ZVBm_fsi5AunNGZ3aXYg/preview${isPlaying ? '?autoplay=1' : ''}`}
                className="w-full h-full"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </div>
          </div>

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
