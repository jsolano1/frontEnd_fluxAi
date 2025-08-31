import { useEffect, useRef, useState } from "react";
import { Send, BarChart3 } from "lucide-react";

const IntelligenceSection = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const userQuery = "¿cuál fue nuestro tiempo promedio de resolución la semana pasada para el equipo de BI?";
  const aiResponse = "El tiempo promedio de resolución fue de 18.5 horas.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isAnimating) {
          setIsAnimating(true);
          
          // Simulate typing and response
          setTimeout(() => {
            setShowResponse(true);
          }, 2000);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isAnimating]);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Tus datos tienen respuestas.{" "}
            <span className="text-gradient">Ahora puedes preguntar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flux.ia traduce tus preguntas de negocio en consultas SQL complejas y te entrega las respuestas en segundos. 
            Sin filtros, sin esperas, sin saber programar.
          </p>
        </div>

        {/* Chat Interface */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-strong rounded-2xl p-8 border border-glass-border">
            {/* Chat Header */}
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-glass-border">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">F</span>
              </div>
              <span className="font-semibold text-foreground">Flux.ia Analytics</span>
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            </div>

            {/* Chat Messages */}
            <div className="space-y-6 mb-6">
              {/* User Message */}
              <div 
                className={`flex justify-end transform transition-all duration-700 ${
                  isAnimating ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <div className="max-w-3xl bg-primary/20 rounded-2xl rounded-br-md px-6 py-4 border border-primary/30">
                  <p className="text-foreground">{userQuery}</p>
                </div>
              </div>

              {/* AI Response */}
              <div 
                className={`flex justify-start space-x-4 transform transition-all duration-700 ${
                  showResponse ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <BarChart3 className="w-4 h-4 text-accent-foreground" />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="glass rounded-2xl rounded-tl-md px-6 py-4 border border-accent/30">
                    <p className="text-foreground font-medium">{aiResponse}</p>
                  </div>
                  
                  {/* Chart Visualization */}
                  <div className="glass rounded-xl p-6 border border-accent/30">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">Tiempo de Resolución - Equipo BI</h4>
                      
                      {/* Simple Bar Chart */}
                      <div className="space-y-3">
                        {[
                          { day: "Lun", hours: 16, color: "bg-accent" },
                          { day: "Mar", hours: 22, color: "bg-primary" },
                          { day: "Mié", hours: 14, color: "bg-success" },
                          { day: "Jue", hours: 19, color: "bg-accent" },
                          { day: "Vie", hours: 21, color: "bg-primary" },
                          { day: "Sáb", hours: 18, color: "bg-success" },
                          { day: "Dom", hours: 20, color: "bg-accent" }
                        ].map((item, index) => (
                          <div key={item.day} className="flex items-center space-x-3">
                            <span className="w-8 text-sm text-muted-foreground">{item.day}</span>
                            <div className="flex-1 bg-muted/20 rounded-full h-6 overflow-hidden">
                              <div 
                                className={`h-full ${item.color} transition-all duration-1000 ease-out`}
                                style={{ 
                                  width: showResponse ? `${(item.hours / 25) * 100}%` : "0%",
                                  transitionDelay: `${500 + index * 100}ms`
                                }}
                              />
                            </div>
                            <span className="w-12 text-sm text-foreground font-mono">{item.hours}h</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="pt-2 border-t border-glass-border">
                        <p className="text-sm text-muted-foreground">
                          Promedio: <span className="text-accent font-semibold">18.5 horas</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="flex items-center space-x-3 pt-4 border-t border-glass-border">
              <div className="flex-1 glass rounded-full px-6 py-3 border border-glass-border">
                <p className="text-muted-foreground text-sm">Pregunta cualquier cosa sobre tus métricas...</p>
              </div>
              <button className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center hover:shadow-glow transition-all duration-200">
                <Send className="w-4 h-4 text-primary-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-16 left-10 w-28 h-28 rounded-full glass animate-float opacity-40" />
      <div className="absolute bottom-32 right-16 w-20 h-20 rounded-full glass-strong animate-float opacity-50" style={{ animationDelay: "1s" }} />
    </section>
  );
};

export default IntelligenceSection;