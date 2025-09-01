import { motion } from "framer-motion";
import { DatabaseZap, BarChart } from "lucide-react";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const DataAgentSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Columna Visual (Simulación de Dashboard) */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-strong p-6 rounded-2xl border border-glass-border"
        >
          <div className="text-center bg-muted p-4 rounded-lg mb-4">
            <p className="text-sm text-muted-foreground">Preguntaste: <span className="text-foreground font-semibold">"¿cuál fue el MRR de Q2 por producto?"</span></p>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <p className="font-bold mb-2">MRR Q2 - por Producto</p>
            {/* Simulación de gráfico de barras */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-24 text-sm text-muted-foreground">Producto A</span>
                <div className="h-6 bg-primary rounded w-full animate-glow" style={{width: '85%'}} />
                <span className="text-sm font-bold">$120k</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-24 text-sm text-muted-foreground">Producto B</span>
                <div className="h-6 bg-primary rounded w-full" style={{width: '60%'}} />
                <span className="text-sm font-bold">$85k</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-24 text-sm text-muted-foreground">Producto C</span>
                <div className="h-6 bg-primary rounded w-full" style={{width: '40%'}} />
                <span className="text-sm font-bold">$55k</span>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Columna de Texto */}
        <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.5 }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full mb-4">
            <DatabaseZap className="w-5 h-5" />
            <span>Agente de Datos</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-6">Democratiza tus Datos, en Español.</motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
            Tu equipo ya no necesita esperar a los analistas. Flux.ia entiende preguntas de negocio en lenguaje natural, las traduce a consultas SQL, y devuelve respuestas visuales desde tu DWH o Data Lake, permitiendo a todos tomar decisiones basadas en datos.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default DataAgentSection;