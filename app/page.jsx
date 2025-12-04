import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";
import ProjectsSection from "../components/sections/ProjectsSection";
// import TechStackSe ction from "../components/sections/TechStackSection";
import ProcessSection from "../components/sections/ProcessSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import FAQSection from "../components/sections/FAQSection";
import ContactSection from "../components/sections/ContactSection";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        {/* <TechStackSection /> */}
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

