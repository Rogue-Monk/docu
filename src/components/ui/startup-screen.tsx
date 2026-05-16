"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function StartupScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if the startup screen has already played in this session
    const hasPlayed = sessionStorage.getItem("startup_played");

    if (hasPlayed) {
      setTimeout(() => setIsVisible(false), 0);
      return;
    }

    // Set flag in session storage so it doesn't replay on refresh
    sessionStorage.setItem("startup_played", "true");

    // Automatically dismiss the screen after the cinematic sequence
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000); // 4 seconds total duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          // Fade out the entire black overlay at the end
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
        >
          {/* Subtle background glow mimicking the reference */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-white/5 blur-[100px] rounded-full mix-blend-screen"
            />
          </div>

          <motion.div
            // Cinematic Tracking-In Blur Sequence natively with Framer Motion
            initial={{
              filter: "blur(12px)",
              opacity: 0,
              letterSpacing: "0.5em",
              scale: 0.95,
            }}
            animate={{
              filter: "blur(0px)",
              opacity: 1,
              letterSpacing: "-0.03em",
              scale: 1,
            }}
            transition={{
              duration: 2.5,
              ease: [0.16, 1, 0.3, 1], // Custom smooth spring-like easing
            }}
            className="relative z-10"
          >
            <span className="font-dx text-7xl md:text-[8rem] lg:text-[12rem] font-bold tracking-tighter text-white drop-shadow-2xl uppercase">
              Docu
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
