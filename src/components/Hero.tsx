import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const chaosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create animated chaos dots
    if (chaosRef.current) {
      const container = chaosRef.current;
      
      // Create multiple floating dots
      for (let i = 0; i < 20; i++) {
        const dot = document.createElement("div");
        dot.className = "absolute w-2 h-2 bg-primary/30 rounded-full animate-chaos";
        dot.style.left = Math.random() * 100 + "%";
        dot.style.top = Math.random() * 100 + "%";
        dot.style.animationDelay = Math.random() * 2 + "s";
        container.appendChild(dot);
      }

      // Create connecting lines
      for (let i = 0; i < 15; i++) {
        const line = document.createElement("div");
        line.className = "absolute bg-gradient-to-r from-primary/20 to-transparent h-px animate-chaos";
        line.style.width = Math.random() * 100 + 100 + "px";
        line.style.left = Math.random() * 80 + "%";
        line.style.top = Math.random() * 80 + "%";
        line.style.transform = `rotate(${Math.random() * 360}deg)`;
        line.style.animationDelay = Math.random() * 3 + "s";
        container.appendChild(line);
      }
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Chaos Animation Background */}
      <div ref={chaosRef} className="absolute inset-0 opacity-60" />
      
      {/* Glass Orbs */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full glass animate-float" />
      <div className="absolute bottom-32 left-16 w-24 h-24 rounded-full glass-strong animate-float" style={{ animationDelay: "2s" }} />
      
      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Tu equipo es{" "}
            <span className="text-gradient">brillante</span>
            <br />
            Su tiempo, un{" "}
            <span className="text-accent-gradient">caos</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada email, mensaje y solicitud interrumpe el trabajo que realmente genera valor. 
            Flux.ia es el copiloto de IA que pone orden, liberando el potencial de tus equipos técnicos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="glass-strong hover:shadow-glow transition-all duration-300 bg-gradient-primary border-0 px-8 py-6 text-lg font-semibold"
            >
              Ver Demo Interactiva
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass border-glass-border hover:glass-strong transition-all duration-300 px-8 py-6 text-lg"
            >
              Ver Planes
            </Button>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
    </section>
  );
};

export default Hero;