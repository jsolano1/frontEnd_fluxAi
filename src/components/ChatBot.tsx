import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcomeBubble, setShowWelcomeBubble] = useState(false);

  // --- INICIO: Lógica de animación de saludo cíclico ---
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    // Si el chat está cerrado, iniciamos el ciclo de saludos.
    if (!isOpen) {
      // Un saludo inicial después de 5 segundos
      const initialTimeout = setTimeout(() => {
        setShowWelcomeBubble(true);
        setTimeout(() => setShowWelcomeBubble(false), 4000); // Se oculta después de 4s
      }, 5000);

      // Luego, un saludo cada 15 segundos (5s de espera + 4s visible + 6s de espera)
      intervalId = setInterval(() => {
        setShowWelcomeBubble(true);
        setTimeout(() => setShowWelcomeBubble(false), 4000); // Se oculta después de 4s
      }, 15000);

      // Limpieza: se ejecuta si el componente se desmonta o si 'isOpen' cambia.
      return () => {
        clearTimeout(initialTimeout);
        clearInterval(intervalId);
      };
    } else {
        // Si el chat se abre, nos aseguramos de que la burbuja se oculte.
        setShowWelcomeBubble(false);
    }
  }, [isOpen]); // Este efecto se re-ejecutará cada vez que 'isOpen' cambie.
  // --- FIN: Lógica de animación ---


  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-end gap-4">
      <AnimatePresence>
        {showWelcomeBubble && !isOpen && (
            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ 
                    opacity: 1, y: 0, scale: 1,
                    // Movimiento suave y amigable mientras está visible
                    transition: { y: { yoyo: Infinity, duration: 1.5, ease: "easeInOut" } }
                }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-strong p-4 rounded-xl shadow-lg mb-20" // mb-20 para que no choque con el botón
            >
                <p className="text-foreground font-semibold">¡Hola! 👋</p>
                <p className="text-sm text-muted-foreground">¿Hablamos de datos?</p>
            </motion.div>
        )}
      </AnimatePresence>
      
      <div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-80 h-[28rem] glass-strong rounded-2xl flex flex-col shadow-2xl border border-glass-border"
            >
              {/* Header del Chat */}
              <div className="p-4 border-b border-glass-border flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-primary-foreground"/>
                  </div>
                  <div>
                      <h3 className="font-bold text-foreground">Flux.ia Agent</h3>
                      <p className="text-sm text-success">● Online</p>
                  </div>
              </div>

              {/* Cuerpo de Mensajes */}
              <div className="flex-grow p-4 space-y-4 overflow-y-auto">
                  <div className="flex gap-2">
                      <div className="w-8 h-8 bg-muted rounded-full flex-shrink-0" />
                      <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                          <p className="text-sm text-muted-foreground">¡Hola! Soy el agente de GuanaCloud. ¿Interesado en potenciar tu futuro con datos? Puedo ayudarte a agendar una demo.</p>
                      </div>
                  </div>
                  <div className="flex justify-end">
                      <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-[80%]">
                          <p className="text-sm">¡Claro! Me interesa.</p>
                      </div>
                  </div>
              </div>

              {/* Input para escribir */}
              <div className="p-4 border-t border-glass-border">
                  <div className="relative">
                      <Input 
                          placeholder="Escribe un mensaje..."
                          className="glass border-glass-border bg-glass pr-12 h-12"
                      />
                      <Button variant="ghost" size="icon" className="absolute top-1/2 right-2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                          <Send className="w-5 h-5"/>
                      </Button>
                  </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botón Flotante */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.8, type: "spring", bounce: 0.5 }}
        >
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="w-16 h-16 rounded-full bg-gradient-primary shadow-glow glass-strong hover:scale-110 transition-transform duration-300"
            size="icon"
          >
              <AnimatePresence initial={false}>
                  <motion.div
                      key={isOpen ? "x" : "message"}
                      initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.2 }}
                  >
                      {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
                  </motion.div>
            </AnimatePresence>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ChatBot;