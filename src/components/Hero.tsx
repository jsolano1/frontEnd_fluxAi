import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// --- Animación ---
// Variante para el contenedor principal: orquesta la aparición de sus hijos
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Cada elemento hijo aparecerá con 0.2s de retraso
    },
  },
};

// Variante para cada elemento hijo: define cómo aparece individualmente
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
// --- Fin Animación ---


const Hero = () => {
  const chaosRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating chaos orbs
    if (chaosRef.current) {
      const container = chaosRef.current;
      
      // Create chaotic network orbs
      for (let i = 0; i < 12; i++) {
        const orb = document.createElement("div");
        orb.className = "absolute w-3 h-3 orb animate-chaos";
        orb.style.left = Math.random() * 100 + "%";
        orb.style.top = Math.random() * 100 + "%";
        orb.style.animationDelay = Math.random() * 4 + "s";
        container.appendChild(orb);
      }

      // Create connecting chaos lines
      for (let i = 0; i < 20; i++) {
        const line = document.createElement("div");
        line.className = "absolute bg-gradient-to-r from-primary/20 via-accent/15 to-transparent h-px animate-chaos";
        line.style.width = Math.random() * 150 + 80 + "px";
        line.style.left = Math.random() * 90 + "%";
        line.style.top = Math.random() * 90 + "%";
        line.style.transform = `rotate(${Math.random() * 360}deg)`;
        line.style.animationDelay = Math.random() * 5 + "s";
        container.appendChild(line);
      }
    }

    // Create ambient floating orbs
    if (orbsRef.current) {
      const container = orbsRef.current;
      
      for (let i = 0; i < 8; i++) {
        const orb = document.createElement("div");
        const size = 80 + Math.random() * 120;
        orb.className = "absolute orb-glow animate-float";
        orb.style.width = size + "px";
        orb.style.height = size + "px";
        orb.style.left = Math.random() * 100 + "%";
        orb.style.top = Math.random() * 100 + "%";
        orb.style.animationDelay = Math.random() * 6 + "s";
        orb.style.opacity = "0.1";
        container.appendChild(orb);
      }
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      
      {/* Chaos Animation Background */}
      <div ref={chaosRef} className="absolute inset-0 opacity-70" />
      
      {/* Ambient Floating Orbs */}
      <div ref={orbsRef} className="absolute inset-0 opacity-50" />
      
      {/* Large Glass Sphere Decorations */}
      <div className="absolute top-20 right-20 w-40 h-40 glass-ultra rounded-full animate-float" 
           style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 left-16 w-32 h-32 glass-strong rounded-full animate-morph" 
           style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 right-1/3 w-24 h-24 orb-glow animate-pulse-orb" 
           style={{ animationDelay: "2s" }} />
      
      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div 
            className="max-w-5xl mx-auto space-y-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
          <div className="space-y-6">
            <motion.h1 
                className="text-6xl md:text-8xl font-bold leading-tight tracking-tight"
                variants={itemVariants}
            >
              Tu equipo es{" "}
              <span className="text-gradient animate-glow">brillante</span>
              <br />
              Su tiempo, un{" "}
              <span className="text-accent-gradient">caos</span>
            </motion.h1>
            
            <motion.p 
                className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light"
                variants={itemVariants}
            >
              Cada email, mensaje y solicitud interrumpe el trabajo que realmente genera valor. 
              <br className="hidden md:block" />
              Flux.ia es el cerebro orquestador de IA que pone orden, liberando el potencial de tus equipos técnicos.
            </motion.p>
            
            {/* INICIO: Slogan integrado */}
            <motion.p 
              className="text-lg text-accent font-semibold tracking-wider pt-4"
              variants={itemVariants}
            >
              Powering Your Data-Driven Future
            </motion.p>
            {/* FIN: Slogan integrado */}

          </div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12"
            variants={itemVariants}
          >
            <Button 
              size="lg" 
              className="glass-strong hover:glass-ultra hover:shadow-glow transition-all duration-500 bg-gradient-primary border-0 px-10 py-7 text-lg font-semibold rounded-2xl group"
            >
              <span className="group-hover:scale-105 transition-transform duration-300">
                Ver Demo Interactiva
              </span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass border-glass-border hover:glass-strong hover:shadow-accent-glow transition-all duration-500 px-10 py-7 text-lg rounded-2xl"
            >
              Ver Planes
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Overlay for smooth transition */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  );
};

export default Hero;