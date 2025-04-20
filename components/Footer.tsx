import React from "react";
import { HeartIcon } from "lucide-react";
import Logo from "./ui/Logo";
const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-[#060f1d] text-center ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-8">
          <div className="mb-4 pr-4">
            <Logo />
          </div>
          <div className="mb-4 flex justify-center gap-6">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center text-sm text-gray-400">
          <span>© {new Date().getFullYear()} Usman Muhammad. Made with</span>
          {/* <HeartIcon size={14} className="mx-1 text-red-500" /> */}
          <span>and Next/React.</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
