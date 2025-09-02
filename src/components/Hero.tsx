import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import MultiAgentVisual from "@/components/MultiAgentVisual";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

// Nueva variante de item con más impacto
const itemVariants = {
  hidden: { y: 20, opacity: 0, filter: "blur(5px)" },
  visible: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] } },
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-60" />
      <MultiAgentVisual />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          className="max-w-5xl mx-auto space-y-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-6">
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-8xl font-bold leading-tight tracking-tight"
            >
              Tu equipo es{" "}
              <span className="text-gradient animate-glow">brillante</span>
              <br />
              Su tiempo, un{" "}
              <span className="text-accent-gradient">caos</span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light"
            >
              Cada email, mensaje y solicitud interrumpe el trabajo que realmente genera valor. 
              <br className="hidden md:block" />
              Flux.ia es el cerebro orquestador de IA que pone orden, liberando el potencial de tus equipos técnicos.
            </motion.p>
          </div>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12"
          >
            <Button size="lg" className="glass-strong hover:glass-ultra transition-all duration-500 bg-gradient-primary border-0 px-10 py-7 text-lg font-semibold rounded-2xl group shadow-glow-primary hover:shadow-2xl">
              <span className="group-hover:scale-105 transition-transform duration-300">
                Ver Demo Interactiva
              </span>
            </Button>
            <Button size="lg" variant="outline" className="relative glass border-glass-border hover:glass-strong transition-all duration-500 px-10 py-7 text-lg rounded-2xl group shimmer-border">
              <span className="group-hover:text-primary transition-colors duration-300">
                Ver Planes
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;