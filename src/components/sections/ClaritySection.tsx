import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";

interface TimelineStep {
  id: number;
  title: string;
  time: string;
  description: string;
  isVisible: boolean;
}

const timelineSteps: Omit<TimelineStep, "isVisible">[] = [
  {
    id: 1,
    title: "Creado",
    time: "14 Ago, 09:27",
    description: "Prioridad Alta"
  },
  {
    id: 2,
    title: "Asignado a",
    time: "14 Ago, 09:28",
    description: "lucas@empresa.com"
  },
  {
    id: 3,
    title: "SLA Modificado",
    time: "14 Ago, 11:15",
    description: "Tiempo extendido por complejidad"
  },
  {
    id: 4,
    title: "Resuelto",
    time: "15 Ago, 10:01",
    description: "Solución implementada y verificada"
  }
];

const TimelineStep = ({ step, index, isLast }: { step: TimelineStep; index: number; isLast: boolean }) => {
  return (
    <div className="relative flex items-start space-x-4">
      {/* Timeline Line */}
      {!isLast && (
        <div 
          className={`absolute left-4 top-8 w-0.5 h-16 bg-gradient-to-b transition-all duration-1000 ${
            step.isVisible ? "from-primary to-primary/50" : "from-transparent to-transparent"
          }`}
          style={{ transitionDelay: `${index * 300}ms` }}
        />
      )}
      
      {/* Step Icon */}
      <div 
        className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-700 ${
          step.isVisible 
            ? "bg-gradient-primary shadow-glow scale-100" 
            : "bg-muted scale-75 opacity-0"
        }`}
        style={{ transitionDelay: `${index * 300}ms` }}
      >
        <CheckCircle className="w-4 h-4 text-primary-foreground" />
      </div>
      
      {/* Step Content */}
      <div 
        className={`flex-1 space-y-2 transform transition-all duration-700 ${
          step.isVisible ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
        }`}
        style={{ transitionDelay: `${index * 300 + 150}ms` }}
      >
        <div className="glass-strong rounded-lg p-4 border border-glass-border">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-foreground">{step.title}</h4>
            <span className="text-sm text-accent font-mono">{step.time}</span>
          </div>
          <p className="text-muted-foreground text-sm">{step.description}</p>
        </div>
      </div>
    </div>
  );
};

const ClaritySection = () => {
  const [visibleSteps, setVisibleSteps] = useState<TimelineStep[]>(
    timelineSteps.map(s => ({ ...s, isVisible: false }))
  );
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate timeline steps appearing one by one
          timelineSteps.forEach((_, index) => {
            setTimeout(() => {
              setVisibleSteps(prev => 
                prev.map((step, i) => 
                  i === index ? { ...step, isVisible: true } : step
                )
              );
            }, index * 400);
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                De la incertidumbre a la{" "}
                <span className="text-gradient">certeza absoluta</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Genera infografías visuales del ciclo de vida de cualquier tiquete con un solo comando. 
                Transparencia total para tu equipo y para tus usuarios finales.
              </p>
            </div>

            {/* Ticket ID Card */}
            <div className="glass-strong rounded-xl p-6 border border-accent/30">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                <span className="text-accent font-mono font-semibold">
                  Tiquete KAI-2024-A8F1
                </span>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-4">
            {visibleSteps.map((step, index) => (
              <TimelineStep
                key={step.id}
                step={step}
                index={index}
                isLast={index === visibleSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-32 right-20 w-32 h-32 rounded-full glass animate-float opacity-50" />
      <div className="absolute bottom-20 left-16 w-24 h-24 rounded-full glass-strong animate-float opacity-60" style={{ animationDelay: "2s" }} />
    </section>
  );
};

export default ClaritySection;