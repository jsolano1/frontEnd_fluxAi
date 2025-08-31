import { useEffect, useRef, useState } from "react";

interface TicketProps {
  id: number;
  request: string;
  priority: "Alta" | "Media" | "Baja";
  team: string;
  response?: string;
  isVisible: boolean;
}

const tickets: Omit<TicketProps, "isVisible">[] = [
  {
    id: 1,
    request: "URGENTE: El ETL de ventas nocturno falló.",
    priority: "Alta",
    team: "Data Engineering"
  },
  {
    id: 2,
    request: "El dashboard de marketing no muestra los datos de la última campaña.",
    priority: "Media",
    team: "Data Analyst"
  },
  {
    id: 3,
    request: "¿Cómo puedo solicitar acceso a los dashboards de Looker?",
    priority: "Baja",
    team: "Autorespuesta",
    response: "Respuesta Encontrada en la Base de Conocimiento ✓"
  }
];

const TicketCard = ({ ticket, delay }: { ticket: TicketProps; delay: number }) => {
  return (
    <div 
      className={`glass-strong rounded-xl p-6 transform transition-all duration-700 ${
        ticket.isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="space-y-4">
        <p className="text-foreground font-medium">{ticket.request}</p>
        
        <div className="flex flex-wrap gap-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            ticket.priority === "Alta" 
              ? "bg-error/20 text-error border border-error/30" 
              : ticket.priority === "Media"
              ? "bg-warning/20 text-warning border border-warning/30"
              : "bg-success/20 text-success border border-success/30"
          }`}>
            Prioridad: {ticket.priority}
          </span>
          
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-accent/20 text-accent border border-accent/30">
            Equipo: {ticket.team}
          </span>
        </div>
        
        {ticket.response && (
          <div className="mt-4 p-3 glass rounded-lg border border-success/30">
            <p className="text-success font-medium">{ticket.response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const CaptureSection = () => {
  const [visibleTickets, setVisibleTickets] = useState<TicketProps[]>(
    tickets.map(t => ({ ...t, isVisible: false }))
  );
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate tickets appearing one by one
          tickets.forEach((_, index) => {
            setTimeout(() => {
              setVisibleTickets(prev => 
                prev.map((ticket, i) => 
                  i === index ? { ...ticket, isVisible: true } : ticket
                )
              );
            }, index * 800);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold">
            Deja que la IA reciba el{" "}
            <span className="text-gradient">primer golpe</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flux.ia analiza, prioriza y enruta cada solicitud al instante. 
            Transforma el triaje manual en un flujo de trabajo inteligente y automático.
          </p>
        </div>

        {/* Central Flux.ia Logo/Brain */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-primary glass-strong flex items-center justify-center animate-glow">
              <span className="text-2xl font-bold text-primary-foreground">F</span>
            </div>
            
            {/* Animated Lines Connecting to Tickets */}
            <div className="absolute inset-0 pointer-events-none">
              {visibleTickets.map((ticket, index) => {
                if (!ticket.isVisible) return null;
                
                const angle = (index * 120) - 60;
                const length = 200;
                
                return (
                  <div
                    key={ticket.id}
                    className="absolute top-12 left-12 origin-top-left h-px bg-gradient-to-r from-primary to-transparent"
                    style={{
                      width: `${length}px`,
                      transform: `rotate(${angle}deg)`,
                      animation: "pulse-glow 2s ease-in-out infinite"
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Tickets Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {visibleTickets.map((ticket, index) => (
            <TicketCard 
              key={ticket.id} 
              ticket={ticket} 
              delay={index * 200} 
            />
          ))}
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-20 right-10 w-20 h-20 rounded-full glass animate-float" />
      <div className="absolute bottom-20 left-10 w-16 h-16 rounded-full glass-strong animate-float" style={{ animationDelay: "3s" }} />
    </section>
  );
};

export default CaptureSection;