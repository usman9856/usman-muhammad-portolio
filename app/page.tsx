import React from "react";
import StarfieldBackground from "../components/animations/StarfieldBackground";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import TechnologyFocusSection from "../components/TechnologyFocusSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import EmploymentSection from "../components/EmploymentSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative bg-gradient-to-b from-[#0a192f] to-[#020c1b] text-gray-300 min-h-screen w-full">
      <StarfieldBackground />
      <div className="relative z-10">
        <main>
          <HeroSection />
          <AboutSection />
          <TechnologyFocusSection />
          <ProjectsSection />
          <SkillsSection />
          <EmploymentSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
