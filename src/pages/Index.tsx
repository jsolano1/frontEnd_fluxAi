import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OrchestratorSection from "@/components/sections/OrchestratorSection";
import ClaritySection from "@/components/sections/ClaritySection";
import IntelligenceSection from "@/components/sections/IntelligenceSection";
import CommandCenterSection from "@/components/sections/CommandCenterSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Header />
      
      {/* Act 1: El Ruido Operativo */}
      <Hero />
      
      {/* Act 2: El Cerebro Orquestador */}
      <OrchestratorSection />
      
      {/* Act 3: La Claridad (Enhanced) */}
      <ClaritySection />
      
      {/* Act 4: La Inteligencia (Enhanced) */}
      <IntelligenceSection />
      
      {/* Act 5: El Centro de Comando */}
      <CommandCenterSection />
      
      {/* Act 6: La Invitación */}
      <FinalCTASection />
      
      {/* Chat Bot */}
      <ChatBot />
    </div>
  );
};

export default Index;
