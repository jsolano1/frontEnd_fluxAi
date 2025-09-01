// src/components/sections/CaptureSection.tsx

import { motion } from "framer-motion";

// Reutilizamos las mismas variantes para consistencia
const containerVariants = {
  hidden: {},
  visible: {
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

const CaptureSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          // La animación se activa cuando el componente es visible en la pantalla
          initial="hidden"
          whileInView="visible"
          // Se activa una vez, cuando al menos el 25% del componente es visible
          viewport={{ once: true, amount: 0.25 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-4">
            Deja que la IA reciba el primer golpe
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Flux.ia analiza, prioriza y enruta cada solicitud al instante. Transforma el triaje manual en un flujo de trabajo inteligente y automático.
          </motion.p>
          <motion.div variants={itemVariants}>
            {/* El contenido visual (imagen o simulación) también se animará */}
            <div className="glass-strong rounded-3xl p-8 border border-glass-border">
              <img
                src="/placeholder.svg" // Reemplaza con tu imagen o componente de simulación
                alt="Simulación de la captura de tiquetes por la IA"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaptureSection;