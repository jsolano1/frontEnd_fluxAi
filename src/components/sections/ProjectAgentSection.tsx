import { motion } from "framer-motion";
import { ListChecks, CheckCircle, PlusCircle } from "lucide-react";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProjectAgentSection = () => {
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
            <ListChecks className="w-5 h-5" />
            <span>Agente de Proyectos</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-6">De la Conversación a la Acción, sin Esfuerzo.</motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
            Flux.ia se integra con tus herramientas de gestión de proyectos como Asana. Una simple solicitud en el chat, como "crea una tarea para que el equipo de diseño revise el nuevo mockup", se convierte automáticamente en una tarea asignada en el proyecto correcto, con la descripción y el responsable adecuados.
          </motion.p>
        </motion.div>

        {/* Columna Visual (Simulación de Asana) */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-strong p-6 rounded-2xl border border-glass-border"
        >
            <div className="flex items-center gap-3 mb-4">
                <img src="https://logo.clearbit.com/asana.com" alt="Asana Logo" className="w-8 h-8 rounded-lg"/>
                <h4 className="font-bold text-lg">Proyecto: Rediseño Web Q4</h4>
            </div>
            <div className="space-y-3">
                <div className="bg-muted p-3 rounded-lg flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success"/>
                    <span className="line-through text-muted-foreground">Diseñar Wireframes del Homepage</span>
                </div>
                <div className="bg-muted p-3 rounded-lg flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success"/>
                    <span className="line-through text-muted-foreground">Aprobar paleta de colores</span>
                </div>
                <div className="bg-primary/20 p-3 rounded-lg flex items-center gap-3 ring-2 ring-primary animate-pulse">
                    <PlusCircle className="w-5 h-5 text-primary"/>
                    <span className="font-semibold text-foreground">Revisar nuevo mockup del Hero Section</span>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectAgentSection;