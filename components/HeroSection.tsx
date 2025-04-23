import React from "react";
import {
  ArrowDownIcon,
  GithubIcon,
  LinkedinIcon,
  DownloadIcon,
} from "lucide-react";
import NeumorphicBox from "./ui/NeumorphicBox";
import UsmanBgRemoved from "../asset/images/Usman-bgRemoved.png";
import Image from "next/image";
import handleDownloadCV from "../utils/handleDownloadCV";
import scrollToAbout from "../utils/handleAbout";
const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center px-6 pt-20"
      aria-label="Hero Section"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Introduction Section */}
          <article className="md:w-1/2 text-center md:text-left">
            <header>
              <p className="text-blue-400 mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                Usman Muhammad
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-gray-300">
                <span className="text-blue-400">Fullstack</span> Developer
              </h2>
            </header>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
              I build exceptional and accessible digital experiences for the
              web. Focused on creating elegant, responsive, and user-friendly
              applications. Highly focused on MERN stack technologies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">

              <NeumorphicBox>
                <a
                  href="/Usman-CV.pdf"
                  target="_blank"
                  className="px-6 py-3 hover:text-blue-400 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <DownloadIcon size={18} />
                  Download CV
                </a>
              </NeumorphicBox>

              <NeumorphicBox className="px-6 py-3 hover:text-blue-400 transition-colors cursor-pointer">
                Contact Me
              </NeumorphicBox>
            </div>
            <div className="mt-10 flex gap-4 justify-center md:justify-start">
              <NeumorphicBox className="p-3 hover:text-blue-400">
                <a
                  href="https://github.com/usman9856/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={20} />
                </a>
              </NeumorphicBox>
              <NeumorphicBox className="p-3 hover:text-blue-400">
                <a
                  href="https://www.linkedin.com/in/usman-muhammad-98a68b223/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={20} />
                </a>
              </NeumorphicBox>
            </div>
          </article>

          {/* Profile Image Section */}
          <aside className="md:w-1/2">
            <NeumorphicBox className="p-2">
              <figure className="aspect-[3/4] w-full max-w-xl mx-auto overflow-hidden">
                <Image
                  src={UsmanBgRemoved}
                  alt="Usman Muhammad"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </figure>
            </NeumorphicBox>
          </aside>
        </div>
        <footer className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="Scroll to About Section"
          >
            <ArrowDownIcon size={24} />
          </button>
        </footer>
      </div>
    </section>
  );
};

export default HeroSection;
