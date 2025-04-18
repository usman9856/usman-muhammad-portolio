import React from "react";
import { CodeIcon } from "lucide-react";
interface LogoProps {
  onClick?: () => void;
}
const Logo: React.FC<LogoProps> = ({ onClick }) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={onClick}>
      <div className="relative">
        <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transform rotate-12 shadow-lg">
          <CodeIcon size={20} className="text-white transform -rotate-12" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-400 rounded-full" />
      </div>
      <div>
        <h1 className="font-bold text-xl tracking-tight">
          <span className="text-white">USMAN</span>
          <span className="text-blue-400">MUHAMMAD</span>
        </h1>
        <p className="text-xs text-gray-400 -mt-1 tracking-widest">DEVELOPER</p>
      </div>
    </div>
  );
};
export default Logo;
