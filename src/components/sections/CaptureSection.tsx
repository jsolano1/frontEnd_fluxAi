import { motion } from "framer-motion";

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
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={containerVariants}
          className="flex flex-col items-center" // Centramos el contenido
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-4">
            Deja que la IA reciba el primer golpe
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Flux.ia analiza, prioriza y enruta cada solicitud al instante. Transforma el triaje manual en un flujo de trabajo inteligente y automático.
          </motion.p>
          
          {/* AQUÍ REEMPLAZAMOS LA ANIMACIÓN CON UNA IMAGEN CONCEPTUAL */}
          <motion.div 
            variants={itemVariants} 
            className="w-full max-w-4xl mx-auto" // Ajustamos el tamaño
          >
            {/* Se recomienda usar una imagen o un SVG que represente el concepto de triaje o captura de datos */}
            <img 
              src="/placeholder.svg" // Puedes reemplazar esto con la ruta a tu nueva imagen
              alt="Visualización del proceso de captura de solicitudes" 
              className="w-full h-auto rounded-2xl glass-strong border border-glass-border" 
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default CaptureSection;