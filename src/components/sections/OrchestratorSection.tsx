import { useEffect, useRef, useState } from "react";
import { Calendar, Database, GitBranch, Zap, Users, BarChart3 } from "lucide-react";

interface AgentNode {
  id: string;
  name: string;
  icon: any;
  description: string;
  position: { x: number; y: number };
  isActive: boolean;
}

const agentNodes: Omit<AgentNode, "isActive">[] = [
  {
    id: "asana",
    name: "Agente de Proyectos",
    icon: GitBranch,
    description: "Gestiona tareas y proyectos en Asana automáticamente",
    position: { x: 15, y: 20 }
  },
  {
    id: "calendar",
    name: "Agente de Calendario",
    icon: Calendar,
    description: "Programa reuniones y gestiona disponibilidad",
    position: { x: 85, y: 25 }
  },
  {
    id: "database",
    name: "Agente Analista",
    icon: Database,
    description: "Consulta datos y genera reportes inteligentes",
    position: { x: 75, y: 75 }
  },
  {
    id: "support",
    name: "Agente de Soporte",
    icon: Users,
    description: "Resuelve tickets con base de conocimiento",
    position: { x: 25, y: 80 }
  },
  {
    id: "analytics",
    name: "Agente de Métricas",
    icon: BarChart3,
    description: "Monitorea KPIs y envía alertas automáticas",
    position: { x: 50, y: 10 }
  }
];

const OrchestratorSection = () => {
  const [activeNodes, setActiveNodes] = useState<AgentNode[]>(
    agentNodes.map(node => ({ ...node, isActive: false }))
  );
  const [centralPulse, setCentralPulse] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCentralPulse(true);
          
          // Activate nodes in sequence
          agentNodes.forEach((_, index) => {
            setTimeout(() => {
              setActiveNodes(prev => 
                prev.map((node, i) => 
                  i === index ? { ...node, isActive: true } : node
                )
              );
            }, 500 + index * 600);
          });
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-40 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-8 animate-on-scroll in-view">
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            El cerebro que{" "}
            <span className="text-gradient">orquesta</span>
            <br />
            toda tu operación
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Flux.ia no es solo un helpdesk. Es el director de orquesta que entiende cada solicitud 
            y la delega al agente especializado perfecto. Un cerebro central para todas tus operaciones.
          </p>
        </div>

        {/* Central Orchestrator Diagram */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative w-full h-[600px]">
            {/* Central Flux.ia Brain */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className={`relative w-32 h-32 glass-ultra rounded-full flex items-center justify-center transition-all duration-1000 ${
                centralPulse ? "animate-glow scale-110" : "scale-100"
              }`}>
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Zap className="w-10 h-10 text-primary-foreground" />
                </div>
                
                {/* Pulse Rings */}
                <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping" 
                     style={{ animationDelay: "0.5s" }} />
                <div className="absolute inset-0 rounded-full border border-accent/20 animate-ping" 
                     style={{ animationDelay: "1s" }} />
              </div>
            </div>

            {/* Agent Nodes */}
            {activeNodes.map((agent, index) => {
              const IconComponent = agent.icon;
              return (
                <div
                  key={agent.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
                    agent.isActive ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                  style={{
                    left: `${agent.position.x}%`,
                    top: `${agent.position.y}%`,
                    transitionDelay: `${index * 200}ms`
                  }}
                  onMouseEnter={() => setHoveredNode(agent.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  {/* Connection Line */}
                  <svg 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      width: `${Math.abs(50 - agent.position.x) * 12}px`,
                      height: `${Math.abs(50 - agent.position.y) * 12}px`,
                      left: agent.position.x > 50 ? '-50%' : '50%',
                      top: agent.position.y > 50 ? '-50%' : '50%',
                    }}
                  >
                    <line
                      x1={agent.position.x > 50 ? "100%" : "0%"}
                      y1={agent.position.y > 50 ? "100%" : "0%"}
                      x2={agent.position.x > 50 ? "0%" : "100%"}
                      y2={agent.position.y > 50 ? "0%" : "100%"}
                      stroke="url(#gradient-line)"
                      strokeWidth="2"
                      className="animate-pulse"
                    />
                    <defs>
                      <linearGradient id="gradient-line">
                        <stop offset="0%" stopColor="hsl(var(--primary) / 0.6)" />
                        <stop offset="100%" stopColor="hsl(var(--accent) / 0.3)" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Agent Node */}
                  <div className={`relative w-20 h-20 glass-strong rounded-full flex items-center justify-center cursor-pointer group transition-all duration-300 ${
                    hoveredNode === agent.id ? "glass-ultra scale-110 shadow-accent-glow" : ""
                  }`}>
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>

                  {/* Agent Info Card */}
                  <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-64 glass-strong rounded-xl p-4 transition-all duration-300 ${
                    hoveredNode === agent.id ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-2"
                  }`}>
                    <h4 className="font-semibold text-foreground mb-2">{agent.name}</h4>
                    <p className="text-sm text-muted-foreground">{agent.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-32 max-w-6xl mx-auto">
          {[
            {
              title: "Inteligencia Contextual",
              description: "Entiende el contexto completo de cada solicitud y la enruta al agente perfecto.",
              icon: "🧠"
            },
            {
              title: "Delegación Automática",
              description: "Cada agente especializado maneja su dominio sin intervención manual.",
              icon: "⚡"
            },
            {
              title: "Orquestación Total",
              description: "Un flujo de trabajo coordinado entre todos los sistemas y equipos.",
              icon: "🎯"
            }
          ].map((feature, index) => (
            <div 
              key={feature.title}
              className="glass-strong rounded-2xl p-8 hover:glass-ultra transition-all duration-500 animate-on-scroll"
              style={{ animationDelay: `${1 + index * 0.2}s` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-32 right-20 w-28 h-28 orb animate-float opacity-40" />
      <div className="absolute bottom-20 left-16 w-20 h-20 orb-glow animate-morph opacity-30" style={{ animationDelay: "3s" }} />
    </section>
  );
};

export default OrchestratorSection;