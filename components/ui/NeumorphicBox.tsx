"use client";
import React, { ReactNode } from "react";

interface NeumorphicBoxProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  active?: boolean;
}

const NeumorphicBox = ({
  children,
  className = "",
  onClick,
  active = false,
}: NeumorphicBoxProps) => {
  const boxShadow = active
    ? "inset 2px 2px 4px rgba(0, 0, 0, 0.5), inset -2px -2px 4px rgba(40, 60, 100, 0.2)"
    : "4px 4px 8px rgba(0, 0, 0, 0.3), -4px -4px 8px rgba(40, 60, 100, 0.15)";

  return (
    <div
      className={`relative bg-[#0c1e3a] rounded-xl transition-all duration-300 ${
        onClick
          ? "cursor-pointer hover:shadow-[3px_3px_6px_rgba(0,0,0,0.4),-3px_-3px_6px_rgba(40,60,100,0.2)]"
          : ""
      } ${className}`}
      style={{ boxShadow }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default NeumorphicBox;
