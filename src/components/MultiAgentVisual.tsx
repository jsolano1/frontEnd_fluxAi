import { motion } from "framer-motion";
import { DatabaseZap, Calendar, Zap, BrainCircuit } from 'lucide-react';

// Configuración de los agentes que orbitarán el núcleo
const agents = [
  { icon: DatabaseZap, name: "Data Agent", size: 60, distance: 120, duration: 15 },
  { icon: Calendar, name: "Calendar Agent", size: 50, distance: 180, duration: 20 },
  { icon: Zap, name: "Action Agent", size: 65, distance: 240, duration: 25 },
  { icon: BrainCircuit, name: "Knowledge Agent", size: 55, distance: 300, duration: 30 },
];

const MultiAgentVisual = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative w-[600px] h-[600px] flex items-center justify-center">
        {/* Anillos de la órbita */}
        <div className="absolute w-[240px] h-[240px] border border-glass-border rounded-full animate-pulse-orb opacity-50" />
        <div className="absolute w-[360px] h-[360px] border border-glass-border rounded-full animate-pulse-orb opacity-40" style={{animationDelay: '1s'}} />
        <div className="absolute w-[480px] h-[480px] border border-glass-border rounded-full animate-pulse-orb opacity-30" style={{animationDelay: '2s'}} />
        <div className="absolute w-[600px] h-[600px] border border-glass-border rounded-full animate-pulse-orb opacity-20" style={{animationDelay: '3s'}} />

        {/* Núcleo Central (Flux.ia) */}
        <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
            className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center glass-strong shadow-glow"
        >
            <Zap className="w-12 h-12 text-primary-foreground" />
        </motion.div>

        {/* Agentes en Órbita */}
        {agents.map((agent, index) => (
          <motion.div
            key={agent.name}
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 + index * 0.2 }}
            style={{
                width: agent.distance * 2,
                height: agent.distance * 2,
                animation: `orbit ${agent.duration}s linear infinite`,
            }}
          >
            <div 
                className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 w-16 h-16 glass-strong rounded-full flex items-center justify-center"
                style={{
                    width: agent.size,
                    height: agent.size,
                }}
            >
              <agent.icon className="w-6 h-6 text-accent-foreground" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MultiAgentVisual;