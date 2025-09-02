import { motion } from "framer-motion";
import { BrainCircuit, DatabaseZap, Cloud, CloudCog } from "lucide-react";

// ... (el array 'services' y las variantes 'containerVariants' se mantienen igual)
const services = [
  { icon: BrainCircuit, title: "Consultoría en IA y Data Science", description: "Diseñamos e implementamos estrategias y modelos de IA que generan un impacto medible en tu negocio." },
  { icon: DatabaseZap, title: "Ingeniería de Datos", description: "Construimos el ecosistema de datos sólido y escalable que necesitas para el futuro." },
  { icon: Cloud, title: "Migraciones Multicloud", description: "Llevamos tus datos a GCP, AWS o Azure de forma segura y optimizada." },
  { icon: CloudCog, title: "Diagnóstico y Optimización", description: "Analizamos tu entorno actual para identificar oportunidades de mejora." },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } } };


const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-4">
            Un Partner Estratégico para cada Etapa
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Te acompañamos desde la estrategia inicial hasta la implementación y optimización de tus soluciones de datos.
          </motion.p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="relative glass-strong p-8 rounded-3xl border border-glass-border h-full flex flex-col group hover:border-primary/50 transition-colors duration-300"
              >
                {/* Borde animado que aparece al hacer hover */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="shimmer-border"/>
                </div>
                <div className="bg-gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6 z-10">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 z-10">{service.title}</h3>
                <p className="text-muted-foreground flex-grow z-10">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;