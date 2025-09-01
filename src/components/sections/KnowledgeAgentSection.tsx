import { motion } from "framer-motion";
import { BrainCircuit, MessageSquare, User } from "lucide-react";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const KnowledgeAgentSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Columna de Texto */}
        <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.5 }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full mb-4">
            <BrainCircuit className="w-5 h-5" />
            <span>Agente de Conocimiento</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-6">Respuestas Instantáneas, Cero Interrupciones.</motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
            Olvida las preguntas repetitivas que consumen el tiempo de tus expertos. Flux.ia se conecta a tu base de conocimiento (Confluence, Notion, o documentos internos) para dar respuestas precisas al instante, liberando a tu equipo para que se enfoque en lo que realmente importa.
          </motion.p>
        </motion.div>
        
        {/* Columna Visual (Simulación de Chat) */}
        <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.5 }}
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            className="glass-strong p-6 rounded-2xl border border-glass-border"
        >
            {/* Pregunta del Usuario */}
            <motion.div variants={itemVariants} className="flex justify-end items-start gap-3 mb-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm">¿Cuál es el procedimiento para solicitar acceso a la VPN?</p>
                </div>
                <div className="w-10 h-10 bg-muted rounded-full flex-shrink-0 flex items-center justify-center"><User className="w-5 h-5"/></div>
            </motion.div>
            
            {/* Respuesta del Bot */}
            <motion.div variants={itemVariants} className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex-shrink-0 flex items-center justify-center"><MessageSquare className="w-5 h-5"/></div>
                <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm font-bold mb-2 text-foreground">Claro, aquí está el procedimiento:</p>
                    <p className="text-sm text-muted-foreground">1. Ve al portal de IT: [link]</p>
                    <p className="text-sm text-muted-foreground">2. Llena el formulario "Acceso Remoto".</p>
                    <p className="text-sm text-muted-foreground">3. Requiere aprobación de tu manager.</p>
                    <p className="text-sm text-muted-foreground mt-2">Extraído de: "Manual de onboarding v2.3"</p>
                </div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default KnowledgeAgentSection;