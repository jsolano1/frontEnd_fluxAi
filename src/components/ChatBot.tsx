import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (message.trim()) {
      // Here you would typically send the message to your chat service
      console.log("Message sent:", message);
      setMessage("");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 h-96 glass-strong rounded-2xl border border-glass-border overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-primary p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">F</span>
              </div>
              <div>
                <h4 className="font-semibold text-primary-foreground">Flux.ia</h4>
                <p className="text-xs text-primary-foreground/80">Asistente Virtual</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-primary-foreground hover:bg-white/10 rounded-full p-1 transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-4 h-64 overflow-y-auto">
            <div className="flex justify-start">
              <div className="max-w-[80%] glass rounded-2xl rounded-tl-md px-4 py-3 border border-glass-border">
                <p className="text-sm text-foreground">
                  ¡Hola! Soy Flux.ia. ¿Te gustaría saber cómo podemos transformar el soporte interno de tu empresa?
                </p>
              </div>
            </div>
            
            <div className="flex justify-start">
              <div className="max-w-[80%] glass rounded-2xl rounded-tl-md px-4 py-3 border border-glass-border">
                <p className="text-sm text-foreground">
                  Puedo responder tus preguntas sobre nuestras funcionalidades, casos de uso, o programar una demo personalizada.
                </p>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-glass-border">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Escribe tu mensaje..."
                className="flex-1 glass border border-glass-border rounded-full px-4 py-2 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
              />
              <button
                onClick={handleSend}
                className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center hover:shadow-glow transition-all duration-200"
              >
                <Send className="w-3 h-3 text-primary-foreground" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <Button
        onClick={toggleChat}
        className={`w-14 h-14 rounded-full shadow-glow transition-all duration-300 ${
          isOpen 
            ? "bg-muted hover:bg-muted/80" 
            : "glass-strong hover:shadow-glow bg-gradient-primary border-0"
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </Button>
    </div>
  );
};

export default ChatBot;