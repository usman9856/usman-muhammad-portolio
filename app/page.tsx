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
import CurrentWorkSection from "../components/CurrentWorkSection";
import CareerPathSection from "../components/CareerPathSection";
import CertificationsSection from "../components/CertificationsSection";
import SkillsGraphSection from "../components/SkillsGraphSection";

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
          <CurrentWorkSection />
          <CertificationsSection />
          <SkillsSection />
          <EmploymentSection />
          <ContactSection />
        </main>
        {/* <main>
          <HeroSection />
          <AboutSection />
          <TechnologyFocusSection />
          <CurrentWorkSection />
          <ProjectsSection />
          <CertificationsSection />
          <CareerPathSection />
          <SkillsSection />
          <SkillsGraphSection /> 
          <EmploymentSection />
          <ContactSection />
        </main> */}
        <Footer />
      </div>
    </div>
  );
}
