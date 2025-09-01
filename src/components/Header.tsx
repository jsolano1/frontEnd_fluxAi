import { Button } from "@/components/ui/button";

// Este es un placeholder para tu logo. Idealmente, importa tu archivo SVG aquí.
const Logo = () => (
  <div className="flex items-center">
    {/* Reemplaza este SVG con tu logo real de GuanaCloud */}
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="hsl(var(--primary))"/>
        <path d="M50 12L83.92 29.5V70.5L50 88L16.08 70.5V29.5L50 12Z" fill="hsl(var(--background))"/>
        <path d="M50 22L75.6 35.75V64.25L50 78L24.4 64.25V35.75L50 22Z" fill="hsl(var(--success))"/>
    </svg>
    <span className="text-2xl font-bold ml-3 text-foreground">GuanaCloud</span>
  </div>
);

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-glass-border">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" aria-label="Página de inicio de GuanaCloud">
            <Logo />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#servicios" className="text-muted-foreground hover:text-foreground transition-colors">Servicios</a>
          <a href="#producto" className="text-muted-foreground hover:text-foreground transition-colors">Producto</a>
          <a href="#nosotros" className="text-muted-foreground hover:text-foreground transition-colors">Nosotros</a>
          <a href="#contacto" className="text-muted-foreground hover:text-foreground transition-colors">Contacto</a>
        </nav>
        <Button 
            className="hidden md:flex glass hover:glass-strong transition-all duration-300 bg-primary/10 hover:bg-primary/20"
            variant="outline"
        >
            Agendar Reunión
        </Button>
      </div>
    </header>
  );
};

export default Header;