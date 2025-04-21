import React, { useEffect, useState } from "react";

const ToastMessage = ({
  type,
  message,
  duration = 3000,
  onClose,
}: {
  type: "success" | "fail";
  message: string;
  duration?: number;
  onClose?: () => void;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the toast initially
    setIsVisible(true);

    // Hide the toast after the duration
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onClose?.(); // Close after the slide-out animation ends
      }, 500); // Match this with the CSS transition duration
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={`fixed bottom-20 right-4 py-4 px-6 rounded-lg shadow-lg text-white text-sm transition-transform duration-500 ${type === "success" ? "bg-green-500" : "bg-red-500"
        } ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
    >
      {message}
    </div>
  );
};

export default ToastMessage;
