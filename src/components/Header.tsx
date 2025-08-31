import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-gradient">Flux.ia</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="text-foreground/80 hover:text-foreground transition-colors duration-200"
            >
              Características
            </a>
            <a 
              href="#cases" 
              className="text-foreground/80 hover:text-foreground transition-colors duration-200"
            >
              Casos de Uso
            </a>
            <a 
              href="#pricing" 
              className="text-foreground/80 hover:text-foreground transition-colors duration-200"
            >
              Precios
            </a>
            <a 
              href="#blog" 
              className="text-foreground/80 hover:text-foreground transition-colors duration-200"
            >
              Blog
            </a>
          </div>

          {/* CTA Button */}
          <Button className="glass-strong hover:shadow-glow transition-all duration-300 bg-gradient-primary border-0">
            Solicitar Demo
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;