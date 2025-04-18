"use client";
import React, { useEffect, useRef } from "react";
const StarfieldBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    // Star properties
    const stars: {
      x: number;
      y: number;
      radius: number;
      velocity: number;
      alpha: number;
    }[] = [];
    const starCount = Math.floor((canvas.width * canvas.height) / 6000); // Adjust density
    // Create stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        velocity: Math.random() * 0.05,
        alpha: Math.random(),
      });
    }
    // Animation loop
    const animate = () => {
      // Clear canvas with a slight fade effect
      ctx.fillStyle = "rgba(2, 12, 27, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Draw stars
      stars.forEach((star) => {
        // Update star position
        star.y += star.velocity;
        // Reset star if it goes off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);
  return (
    <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full" />
  );
};
export default StarfieldBackground;
