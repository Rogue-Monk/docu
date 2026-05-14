"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function PremiumBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Particle positions
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-black">
      {/* Abstract Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, #000 40%, transparent 100%)'
        }}
      ></div>

      {/* Primary Abstract Aurora / Glow */}
      <motion.div 
        animate={{
          x: ["0%", "10%", "-5%", "0%"],
          y: ["0%", "5%", "-10%", "0%"],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-20%] left-[20%] w-[800px] h-[600px] bg-primary/15 blur-[120px] rounded-full mix-blend-screen"
      ></motion.div>

      {/* Secondary Abstract Glow */}
      <motion.div 
        animate={{
          x: ["0%", "-15%", "5%", "0%"],
          y: ["0%", "-10%", "15%", "0%"],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[10%] right-[10%] w-[600px] h-[500px] bg-[#ff3300]/10 blur-[100px] rounded-full mix-blend-screen"
      ></motion.div>

      {/* Floating Particles (Tech Dust) */}
      <div className="absolute inset-0" style={{ maskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)', WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)' }}>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ 
              x: `${particle.x}vw`, 
              y: `${particle.y}vh`, 
              opacity: 0 
            }}
            animate={{ 
              y: [`${particle.y}vh`, `${particle.y - 20}vh`],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
            }}
            className="absolute rounded-full bg-primary shadow-[0_0_8px_rgba(255,77,0,0.8)]"
            style={{
              width: particle.size,
              height: particle.size,
            }}
          />
        ))}
      </div>

      {/* Diagonal Abstract Beam */}
      <motion.div
        animate={{
          opacity: [0, 0.5, 0],
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: 2
        }}
        className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent blur-[1px] rotate-12 origin-left"
      ></motion.div>
      
      {/* Dark Fade Overlay at bottom to blend into next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}
