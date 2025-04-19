"use client";
import React, { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import Logo from "./ui/Logo";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a192f]/90 backdrop-blur-sm py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Logo onClick={() => scrollTo("home")} />
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["home", "about", "projects", "skills", "experience", "contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-gray-300 hover:text-blue-400 transition-colors capitalize cursor-pointer"
              >
                {item}
              </button>
            )
          )}
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-blue-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a192f]/95 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {[
              "home",
              "about",
              "projects",
              "skills",
              "experience",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-gray-300 hover:text-blue-400 transition-colors py-2 capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
