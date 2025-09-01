import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import MultiAgentVisual from "@/components/MultiAgentVisual"; // Usaremos la animación que creamos

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProductTeaserSection = () => {
    return (
        <section id="producto" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div 
                    initial="hidden" 
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h3 
                        variants={itemVariants}
                        className="text-lg font-semibold text-primary uppercase tracking-widest mb-4"
                    >
                        Nuestro Producto Estrella
                    </motion.h3>
                    <motion.h2 
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Flux.ia: El Copiloto Operativo de tu Empresa
                    </motion.h2>
                    <motion.p 
                        variants={itemVariants}
                        className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
                    >
                        Hemos volcado nuestra experiencia en un orquestador de IA que va más allá del helpdesk. Conecta con tus datos, gestiona proyectos y automatiza tareas complejas, demostrando el poder de nuestra consultoría en acción.
                    </motion.p>

                    <motion.div 
                        variants={itemVariants} 
                        className="w-full h-[600px] flex items-center justify-center relative -mt-24 -mb-24"
                    >
                        <MultiAgentVisual />
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-24">
                        <Button 
                            size="lg" 
                            className="glass-strong hover:glass-ultra hover:shadow-glow transition-all duration-500 bg-gradient-primary border-0 px-10 py-7 text-lg font-semibold rounded-2xl group"
                        >
                            <span className="group-hover:scale-105 transition-transform duration-300">
                                Explorar todas las capacidades
                            </span>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default ProductTeaserSection;