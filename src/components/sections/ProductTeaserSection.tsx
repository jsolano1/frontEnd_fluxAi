import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ProductTeaserSection = () => {
    return (
        <section id="producto" className="py-24 bg-primary/5">
            <div className="container mx-auto px-6 text-center">
                <motion.div 
                    initial={{opacity: 0, y: 20}} 
                    whileInView={{opacity: 1, y: 0}} 
                    viewport={{once: true, amount: 0.5}} 
                    transition={{duration: 0.6}}
                >
                    <h3 className="text-lg font-semibold text-primary uppercase tracking-widest mb-4">
                        Nuestro Producto Estrella
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Conoce a Flux.ia
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                        Hemos volcado toda nuestra experiencia en un orquestador de IA que automatiza tus operaciones internas, desde el soporte técnico hasta el análisis de datos. Es la prueba de nuestro conocimiento en acción.
                    </p>
                    <Button 
                        size="lg" 
                        className="glass-strong hover:glass-ultra hover:shadow-glow transition-all duration-500 bg-gradient-primary border-0 px-10 py-7 text-lg font-semibold rounded-2xl group"
                    >
                        <span className="group-hover:scale-105 transition-transform duration-300">
                            Explorar Flux.ia
                        </span>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}

export default ProductTeaserSection;