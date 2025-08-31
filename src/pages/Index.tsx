import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CaptureSection from "@/components/sections/CaptureSection";
import ClaritySection from "@/components/sections/ClaritySection";
import IntelligenceSection from "@/components/sections/IntelligenceSection";
import ActionSection from "@/components/sections/ActionSection";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg relative overflow-x-hidden">
      <Header />
      
      {/* Act 1: The Chaos */}
      <Hero />
      
      {/* Act 2: The Capture */}
      <CaptureSection />
      
      {/* Act 3: The Clarity */}
      <ClaritySection />
      
      {/* Act 4: The Intelligence */}
      <IntelligenceSection />
      
      {/* Act 5: The Action */}
      <ActionSection />
      
      {/* Chat Bot */}
      <ChatBot />
    </div>
  );
};

export default Index;
