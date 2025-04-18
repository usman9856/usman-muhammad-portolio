import React from 'react';
interface NeumorphicBoxProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  active?: boolean;
}
const NeumorphicBox = ({
  children,
  className = '',
  onClick,
  active = false
}: NeumorphicBoxProps) => {
  return <div className={`
        relative 
        bg-[#0c1e3a] 
        rounded-xl
        ${active ? 'shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5),inset_-3px_-3px_6px_rgba(40,60,100,0.2)]' : 'shadow-[5px_5px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(40,60,100,0.15)]'}
        transition-all
        duration-300
        ${onClick ? 'cursor-pointer hover:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(40,60,100,0.2)]' : ''}
        ${className}
      `} onClick={onClick}>
      {children}
    </div>;
};
export default NeumorphicBox;