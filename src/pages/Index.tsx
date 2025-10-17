import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Modules } from "@/components/Modules";
import { Testimonials } from "@/components/Testimonials";
import { Bonuses } from "@/components/Bonuses";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Modules />
      <Testimonials />
      <Bonuses />
      <Pricing />
      <FAQ />
    </main>
  );
};

export default Index;
