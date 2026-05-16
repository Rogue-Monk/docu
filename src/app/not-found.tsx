"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function NotFound() {

  // Mouse position for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse movement
  const springConfig = { damping: 50, stiffness: 400 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax transforms for the giant "404"
  const textX = useTransform(smoothX, [-0.5, 0.5], [-30, 30]);
  const textY = useTransform(smoothY, [-0.5, 0.5], [-30, 30]);
  
  // Parallax transforms for glowing orbs
  const orb1X = useTransform(smoothX, [-0.5, 0.5], [-60, 60]);
  const orb1Y = useTransform(smoothY, [-0.5, 0.5], [-60, 60]);
  
  const orb2X = useTransform(smoothX, [-0.5, 0.5], [60, -60]);
  const orb2Y = useTransform(smoothY, [-0.5, 0.5], [60, -60]);

  // Additional parallax transforms for layered 404 text
  const shadowX = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const shadowY = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);
  
  const overlayX = useTransform(smoothX, [-0.5, 0.5], [-40, 40]);
  const overlayY = useTransform(smoothY, [-0.5, 0.5], [-40, 40]);


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position between -0.5 and 0.5
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);



  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050505] text-white flex flex-col items-center justify-center selection:bg-white/20">
      
      {/* Background Gradients & Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ x: orb1X, y: orb1Y }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-primary/20 blur-[120px] rounded-full mix-blend-screen"
        />
        <motion.div 
          style={{ x: orb2X, y: orb2Y }}
          className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-tertiary/10 blur-[100px] rounded-full mix-blend-screen"
        />
        
        {/* Subtle noise texture over background */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col items-center justify-center text-center">
        
        {/* Giant Parallax "404" Layered */}
        <div className="relative w-full flex items-center justify-center mb-8">
          {/* Blurred Background Shadow of 404 */}
          <motion.h1 
            style={{ x: shadowX, y: shadowY }}
            className="absolute font-dx text-[25vw] md:text-[20rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent blur-xl select-none"
          >
            404
          </motion.h1>

          {/* Main 404 Text */}
          <motion.h1 
            style={{ x: textX, y: textY }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-dx text-[25vw] md:text-[20rem] font-bold leading-none tracking-tighter text-white drop-shadow-2xl select-none mix-blend-overlay"
          >
            404
          </motion.h1>
          
          {/* Crisp Overlay 404 Text */}
          <motion.h1 
            style={{ x: overlayX, y: overlayY }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="absolute font-dx text-[25vw] md:text-[20rem] font-bold leading-none tracking-tighter text-white/90 select-none"
          >
            404
          </motion.h1>
        </div>

        {/* Copywriting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="max-w-xl mx-auto flex flex-col items-center gap-6"
        >
          <h2 className="font-dx text-2xl md:text-4xl uppercase tracking-widest text-zinc-200">
            Page Not Found
          </h2>
          <p className="font-body text-zinc-400 md:text-lg leading-relaxed max-w-md">
            The space you are looking for has drifted into the void. It might have been moved, renamed, or never existed.
          </p>
          
          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link href="/" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden rounded-full bg-white px-8 py-4 font-dx text-sm tracking-wide text-black transition-colors"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Return to Homepage
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                {/* Button Hover Effect */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-zinc-200 to-white opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
