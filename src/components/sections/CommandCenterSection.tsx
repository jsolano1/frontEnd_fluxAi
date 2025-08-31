import { useEffect, useRef, useState } from "react";
import { Activity, TrendingUp, Users, Clock, AlertCircle, CheckCircle } from "lucide-react";

const CommandCenterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMetrics, setActiveMetrics] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const metrics = [
    { label: "Tickets Resueltos", value: "2,847", change: "+12%", icon: CheckCircle, color: "success" },
    { label: "Tiempo Promedio", value: "18.5h", change: "-23%", icon: Clock, color: "accent" },
    { label: "Satisfacción", value: "94.2%", change: "+8%", icon: TrendingUp, color: "primary" },
    { label: "Equipos Activos", value: "12", change: "+3", icon: Users, color: "accent" }
  ];

  const activities = [
    { type: "resolved", message: "Ticket KAI-2024-A8F1 resuelto automáticamente", time: "Hace 2 min", agent: "Agente Analista" },
    { type: "escalated", message: "Consulta SQL compleja delegada a especialista", time: "Hace 5 min", agent: "Agente de Datos" },
    { type: "created", message: "Nuevo proyecto creado en Asana", time: "Hace 8 min", agent: "Agente de Proyectos" },
    { type: "scheduled", message: "Reunión agendada para Q4 Planning", time: "Hace 12 min", agent: "Agente de Calendario" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          
          // Animate metrics appearing
          metrics.forEach((_, index) => {
            setTimeout(() => {
              setActiveMetrics(prev => [...prev, index]);
            }, index * 300);
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
    <section ref={sectionRef} className="py-40 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-20" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold leading-tight animate-on-scroll">
            Tu centro de{" "}
            <span className="text-gradient">comando</span>
            <br />
            en tiempo real
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-on-scroll">
            Observa cómo cada agente trabaja en sincronía. Métricas en tiempo real, 
            flujos de trabajo transparentes y control total de tu operación.
          </p>
        </div>

        {/* Dashboard Interface */}
        <div className="max-w-7xl mx-auto">
          <div className="glass-ultra rounded-3xl p-8 border border-glass-border">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-glass-border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Activity className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Centro de Comando Flux.ia</h3>
                  <p className="text-muted-foreground">Todos los sistemas operativos</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                <span className="text-success text-sm font-medium">En línea</span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {metrics.map((metric, index) => {
                const IconComponent = metric.icon;
                const isActive = activeMetrics.includes(index);
                
                return (
                  <div 
                    key={metric.label}
                    className={`glass rounded-2xl p-6 transform transition-all duration-700 ${
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-90"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className={`w-6 h-6 text-${metric.color}`} />
                      <span className={`text-sm font-medium ${
                        metric.change.startsWith('+') ? 'text-success' : 'text-accent'
                      }`}>
                        {metric.change}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                      <p className="text-sm text-muted-foreground">{metric.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Activity Feed and Analytics */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Real-time Activity */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-foreground flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse mr-3" />
                  Actividad en Tiempo Real
                </h4>
                
                <div className="space-y-4">
                  {activities.map((activity, index) => (
                    <div 
                      key={index}
                      className={`glass rounded-xl p-4 transform transition-all duration-500 ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                      }`}
                      style={{ transitionDelay: `${1000 + index * 200}ms` }}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          activity.type === 'resolved' ? 'bg-success/20' :
                          activity.type === 'escalated' ? 'bg-warning/20' :
                          activity.type === 'created' ? 'bg-primary/20' : 'bg-accent/20'
                        }`}>
                          {activity.type === 'resolved' && <CheckCircle className="w-4 h-4 text-success" />}
                          {activity.type === 'escalated' && <AlertCircle className="w-4 h-4 text-warning" />}
                          {activity.type === 'created' && <Users className="w-4 h-4 text-primary" />}
                          {activity.type === 'scheduled' && <Clock className="w-4 h-4 text-accent" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-foreground text-sm mb-1">{activity.message}</p>
                          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <span>{activity.time}</span>
                            <span>•</span>
                            <span>{activity.agent}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Chart */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-foreground">Rendimiento Semanal</h4>
                
                <div className="glass rounded-xl p-6">
                  <div className="space-y-4">
                    {[
                      { day: "Lun", efficiency: 92, tickets: 45 },
                      { day: "Mar", efficiency: 88, tickets: 52 },
                      { day: "Mié", efficiency: 96, tickets: 38 },
                      { day: "Jue", efficiency: 91, tickets: 48 },
                      { day: "Vie", efficiency: 94, tickets: 41 },
                      { day: "Sáb", efficiency: 89, tickets: 28 },
                      { day: "Dom", efficiency: 85, tickets: 22 }
                    ].map((item, index) => (
                      <div key={item.day} className="flex items-center space-x-4">
                        <span className="w-8 text-sm text-muted-foreground font-mono">{item.day}</span>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">Eficiencia</span>
                            <span className="text-accent font-medium">{item.efficiency}%</span>
                          </div>
                          <div className="bg-muted/20 rounded-full h-2 overflow-hidden">
                            <div 
                              className="h-full bg-gradient-accent transition-all duration-1000 ease-out"
                              style={{ 
                                width: isVisible ? `${item.efficiency}%` : "0%",
                                transitionDelay: `${1500 + index * 100}ms`
                              }}
                            />
                          </div>
                        </div>
                        <span className="w-12 text-xs text-foreground font-mono">{item.tickets}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-24 h-24 orb animate-float opacity-30" />
      <div className="absolute bottom-32 left-20 w-32 h-32 orb-glow animate-morph opacity-20" style={{ animationDelay: "2s" }} />
    </section>
  );
};

export default CommandCenterSection;