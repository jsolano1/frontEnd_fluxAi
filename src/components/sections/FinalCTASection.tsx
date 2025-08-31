import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Calendar, Users, Zap } from "lucide-react";

const FinalCTASection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const benefits = [
    "Implementación en minutos, no semanas",
    "ROI medible desde el primer día",
    "Soporte dedicado en español para LATAM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would integrate with your lead capture system
  };

  return (
    <section className="py-40 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-40 h-40 orb-glow animate-float opacity-20" />
      <div className="absolute bottom-32 right-16 w-32 h-32 orb animate-morph opacity-15" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 orb-glow animate-pulse-orb opacity-10" style={{ animationDelay: "4s" }} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Content */}
          <div className="space-y-12 mb-16">
            <div className="space-y-8 animate-on-scroll">
              <h2 className="text-5xl md:text-8xl font-bold leading-tight">
                Transforma tu soporte.{" "}
                <br className="hidden md:block" />
                <span className="text-gradient animate-glow">Potencia a tu equipo.</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
                Implementa Flux.ia en minutos y observa el impacto en horas. 
                <br className="hidden md:block" />
                ¿Listo para llevar tus operaciones al siguiente nivel?
              </p>
            </div>

            {/* Demo Form */}
            {!isSubmitted ? (
              <div className="glass-ultra rounded-3xl p-12 max-w-3xl mx-auto animate-on-scroll" style={{ animationDelay: "0.3s" }}>
                <h3 className="text-2xl font-semibold text-foreground mb-8">
                  Solicita una Demo Personalizada
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      type="text"
                      placeholder="Nombre completo"
                      className="glass border-glass-border bg-glass text-foreground placeholder:text-muted-foreground px-6 py-4 text-lg rounded-xl"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email corporativo"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="glass border-glass-border bg-glass text-foreground placeholder:text-muted-foreground px-6 py-4 text-lg rounded-xl"
                      required
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      type="text"
                      placeholder="Empresa"
                      className="glass border-glass-border bg-glass text-foreground placeholder:text-muted-foreground px-6 py-4 text-lg rounded-xl"
                      required
                    />
                    <Input
                      type="text"
                      placeholder="Tamaño del equipo"
                      className="glass border-glass-border bg-glass text-foreground placeholder:text-muted-foreground px-6 py-4 text-lg rounded-xl"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full glass-strong hover:glass-ultra hover:shadow-glow transition-all duration-500 bg-gradient-primary border-0 px-8 py-6 text-xl font-semibold rounded-2xl group"
                  >
                    <span className="group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                      Reservar Demo Ahora
                      <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </form>

                <p className="text-muted-foreground text-sm mt-6">
                  Sin compromiso. Sin tarjeta de crédito. Solo 15 minutos para mostrarte el futuro de tu soporte interno.
                </p>
              </div>
            ) : (
              <div className="glass-ultra rounded-3xl p-12 max-w-3xl mx-auto animate-scale-in">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  ¡Demo Solicitada Exitosamente!
                </h3>
                <p className="text-muted-foreground mb-8">
                  Nuestro equipo se pondrá en contacto contigo en las próximas 2 horas para agendar tu demo personalizada.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="glass px-4 py-2 rounded-lg text-sm text-foreground flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Demo en 24-48h
                  </span>
                  <span className="glass px-4 py-2 rounded-lg text-sm text-foreground flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Equipo especializado
                  </span>
                  <span className="glass px-4 py-2 rounded-lg text-sm text-foreground flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    Configuración inmediata
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-on-scroll" style={{ animationDelay: "0.6s" }}>
            {benefits.map((benefit, index) => (
              <div key={benefit} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16 animate-on-scroll" style={{ animationDelay: "0.9s" }}>
            <Button 
              variant="outline" 
              size="lg"
              className="glass border-glass-border hover:glass-strong hover:shadow-accent-glow transition-all duration-500 px-8 py-4 rounded-2xl"
            >
              Ver Casos de Uso
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass border-glass-border hover:glass-strong hover:shadow-accent-glow transition-all duration-500 px-8 py-4 rounded-2xl"
            >
              Explorar Precios
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default FinalCTASection;