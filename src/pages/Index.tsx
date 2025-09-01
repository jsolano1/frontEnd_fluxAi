import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import ProductTeaserSection from "@/components/sections/ProductTeaserSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <ProductTeaserSection />
        <FinalCTASection />
      </main>
      <Footer />
      <ChatBot />
    </>
  );
};

export default Index;