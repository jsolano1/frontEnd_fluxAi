import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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

const Hero = () => {
  const chaosRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chaosRef.current) {
      const container = chaosRef.current;
      if (container.children.length > 0) return;
      for (let i = 0; i < 12; i++) {
        const orb = document.createElement("div");
        orb.className = "absolute w-3 h-3 orb animate-chaos";
        orb.style.left = Math.random() * 100 + "%";
        orb.style.top = Math.random() * 100 + "%";
        orb.style.animationDelay = Math.random() * 4 + "s";
        container.appendChild(orb);
      }
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

    if (orbsRef.current) {
      const container = orbsRef.current;
      if (container.children.length > 0) return;
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <div ref={chaosRef} className="absolute inset-0 opacity-70" />
      <div ref={orbsRef} className="absolute inset-0 opacity-50" />
      <div className="absolute top-20 right-20 w-40 h-40 glass-ultra rounded-full animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 left-16 w-32 h-32 glass-strong rounded-full animate-morph" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 right-1/3 w-24 h-24 orb-glow animate-pulse-orb" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          className="max-w-5xl mx-auto space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-8xl font-bold leading-tight tracking-tight"
            >
              De tus Datos al Valor.
              <br />
              <span className="text-gradient animate-glow">Aceleramos tu Futuro.</span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light"
            >
              Somos tu partner estratégico en Data y AI. Transformamos tus datos en una ventaja competitiva a través de consultoría experta, diagnósticos precisos y soluciones multicloud (GCP, AWS, Azure).
            </motion.p>

            <motion.p 
              className="text-lg text-green-400 font-semibold tracking-wider"
              variants={itemVariants}
            >
              Powering Your Data-Driven Future
            </motion.p>
          
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            >
              <Button 
                size="lg" 
                className="glass-strong hover:glass-ultra hover:shadow-glow transition-all duration-500 bg-gradient-primary border-0 px-10 py-7 text-lg font-semibold rounded-2xl group"
              >
                <span className="group-hover:scale-105 transition-transform duration-300">Nuestros Servicios</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glass border-glass-border hover:glass-strong hover:shadow-accent-glow transition-all duration-500 px-10 py-7 text-lg rounded-2xl"
              >
                Conoce Flux.ia
              </Button>
            </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  );
};

export default Hero;