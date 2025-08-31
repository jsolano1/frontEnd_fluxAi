import { Button } from "@/components/ui/button";

const ActionSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Transforma tu soporte.{" "}
              <span className="text-gradient">Potencia</span> a tu equipo.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Implementa Flux.ia en minutos y observa el impacto en horas. 
              ¿Listo para llevar tus operaciones al siguiente nivel?
            </p>
          </div>

          {/* CTA Form Card */}
          <div className="max-w-2xl mx-auto">
            <div className="glass-strong rounded-2xl p-8 border border-glass-border">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Solicita una Demo Personalizada
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    className="glass border border-glass-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                  />
                  <input
                    type="email"
                    placeholder="Email corporativo"
                    className="glass border border-glass-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                  />
                </div>
                
                <input
                  type="text"
                  placeholder="Empresa"
                  className="w-full glass border border-glass-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                />
                
                <textarea
                  placeholder="Cuéntanos sobre tu equipo y tus retos actuales (opcional)"
                  rows={4}
                  className="w-full glass border border-glass-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 resize-none"
                />
                
                <Button 
                  size="lg" 
                  className="w-full glass-strong hover:shadow-glow transition-all duration-300 bg-gradient-primary border-0 py-6 text-lg font-semibold"
                >
                  Solicitar Demo Personalizada
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  Sin compromiso. Sin tarjeta de crédito. Solo 15 minutos para mostrarte el futuro de tu soporte interno.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="pt-16 space-y-8">
            <p className="text-muted-foreground">Empresas que ya confían en GuanaCloud</p>
            
            <div className="flex items-center justify-center space-x-12 opacity-60">
              {/* Placeholder for company logos */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-24 h-12 glass rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground font-mono text-sm">Logo {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full glass animate-float opacity-30" />
        <div className="absolute bottom-32 right-20 w-32 h-32 rounded-full glass-strong animate-float opacity-40" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-10 w-24 h-24 rounded-full glass animate-float opacity-25" style={{ animationDelay: "4s" }} />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
    </section>
  );
};

export default ActionSection;