import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CaptureSection from "@/components/sections/CaptureSection";
import ClaritySection from "@/components/sections/ClaritySection";
import IntelligenceSection from "@/components/sections/IntelligenceSection";
import ActionSection from "@/components/sections/ActionSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot"; // <-- 1. IMPORTA EL NUEVO COMPONENTE

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero
          title="Tu equipo es brillante. Su tiempo, un caos."
          description="Cada email, mensaje y solicitud interrumpe el trabajo que realmente genera valor. Flux.ia es el cerebro orquestador de IA que pone orden, liberando el potencial de tus equipos técnicos."
          buttons={[
            {
              href: "#",
              label: "Ver Demo Interactiva",
              variant: "default",
            },
            {
              href: "#",
              label: "Ver Planes",
              variant: "outline",
            },
          ]}
        />
        <CaptureSection />
        <ClaritySection />
        <IntelligenceSection />
        <ActionSection />
      </main>
      <Footer />
      <ChatBot /> {/* <-- 2. AÑADE EL COMPONENTE (fuera del main/footer para que sea fijo) */}
    </>
  );
};

export default Index;