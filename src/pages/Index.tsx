import { useState, useRef, useEffect } from "react";
import IntroSection from "@/components/IntroSection";
import MessageSection from "@/components/MessageSection";
import InteractiveSection from "@/components/InteractiveSection";
import EmotionalPeakSection from "@/components/EmotionalPeakSection";
import ProposalReveal from "@/components/ProposalReveal";

type Section = "intro" | "message" | "interactive" | "peak" | "proposal";

const Index = () => {
  const [currentSection, setCurrentSection] = useState<Section>("intro");
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToSection = (section: Section) => {
    setCurrentSection(section);
    scrollToTop();
  };

  // Prevent horizontal scroll on mobile
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background overflow-x-hidden"
    >
      {currentSection === "intro" && (
        <IntroSection onStart={() => goToSection("message")} />
      )}

      {currentSection === "message" && (
        <MessageSection onComplete={() => goToSection("interactive")} />
      )}

      {currentSection === "interactive" && (
        <InteractiveSection onComplete={() => goToSection("peak")} />
      )}

      {currentSection === "peak" && (
        <EmotionalPeakSection onComplete={() => goToSection("proposal")} />
      )}

      {currentSection === "proposal" && <ProposalReveal />}
    </div>
  );
};

export default Index;
