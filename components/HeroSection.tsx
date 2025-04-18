"use client";
import React from "react";
import {
  ArrowDownIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  DownloadIcon,
} from "lucide-react";
import NeumorphicBox from "./ui/NeumorphicBox";
const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const handleDownloadCV = () => {
    // Replace with your actual CV PDF URL
    const cvUrl = "https://example.com/john-doe-cv.pdf";
    window.open(cvUrl, "_blank");
  };
  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center px-6 pt-20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-blue-400 mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              John Doe
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-gray-300">
              <span className="text-blue-400">Frontend</span> Developer
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
              I build exceptional and accessible digital experiences for the
              web. Focused on creating elegant, responsive, and user-friendly
              applications.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <NeumorphicBox
                className="px-6 py-3 hover:text-blue-400 transition-colors flex items-center gap-2"
                onClick={handleDownloadCV}
              >
                <DownloadIcon size={18} />
                Download CV
              </NeumorphicBox>
              <NeumorphicBox className="px-6 py-3 hover:text-blue-400 transition-colors">
                Contact Me
              </NeumorphicBox>
            </div>
            <div className="mt-10 flex gap-4 justify-center md:justify-start">
              <NeumorphicBox className="p-3 hover:text-blue-400">
                <GithubIcon size={20} />
              </NeumorphicBox>
              <NeumorphicBox className="p-3 hover:text-blue-400">
                <LinkedinIcon size={20} />
              </NeumorphicBox>
              <NeumorphicBox className="p-3 hover:text-blue-400">
                <TwitterIcon size={20} />
              </NeumorphicBox>
            </div>
          </div>
          <div className="md:w-1/2">
            <NeumorphicBox className="p-2">
              <div className="aspect-[3/4] w-full max-w-xl mx-auto overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="John Doe"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </NeumorphicBox>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <ArrowDownIcon size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
