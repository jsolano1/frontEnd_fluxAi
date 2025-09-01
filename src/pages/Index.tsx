import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import ProductTeaserSection from "@/components/sections/ProductTeaserSection";

// Importamos las nuevas secciones narrativas
import KnowledgeAgentSection from "@/components/sections/KnowledgeAgentSection";
import DataAgentSection from "@/components/sections/DataAgentSection";
import ProjectAgentSection from "@/components/sections/ProjectAgentSection";

// Reutilizamos las secciones de Helpdesk como el Agente de Soporte
import CaptureSection from "@/components/sections/CaptureSection";
import ClaritySection from "@/components/sections/ClaritySection";
import IntelligenceSection from "@/components/sections/IntelligenceSection";

import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { Separator } from "@/components/ui/separator";
import { ShieldCheck } from "lucide-react";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        {/* Parte 1: Presentación de GuanaCloud */}
        <Hero />
        <ServicesSection />

        {/* Parte 2: Introducción al producto Flux.ia */}
        <ProductTeaserSection />

        {/* Parte 3: La Historia Narrativa de los Agentes de Flux.ia */}
        <KnowledgeAgentSection />
        <DataAgentSection />
        <ProjectAgentSection />

        {/* La historia del Helpdesk ahora como un caso de uso del 'Agente de Soporte' */}
        <div className="py-24 bg-primary/5">
            <div className="container mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full mb-4">
                    <ShieldCheck className="w-5 h-5" />
                    <span>Caso de Uso: Agente de Soporte Avanzado</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    Automatización Completa del Ciclo de Helpdesk
                </h2>
                <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
                    Desde la creación inteligente de tiquetes hasta la visualización de su ciclo de vida y el análisis de métricas.
                </p>
            </div>
            <CaptureSection />
            <ClaritySection />
            <IntelligenceSection />
        </div>
        
        {/* Parte 4: Cierre y Llamado a la Acción */}
        <FinalCTASection />
      </main>
      <Footer />
      <ChatBot />
    </>
  );
};

export default Index;