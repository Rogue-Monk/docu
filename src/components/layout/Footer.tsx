"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full py-12 acrylic-panel border-t border-white/5 font-sans text-[10px] uppercase tracking-[0.2em] mt-auto"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 gap-8">
        <div className="flex items-center gap-4">
          <span className="text-on-surface-variant">© 2026 Architectural Core Systems.</span>
          <span className="text-secondary font-black">Built for Engineers.</span>
        </div>
        <div className="flex gap-10">
          <Link className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Privacy</Link>
          <Link className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Terms</Link>
          <Link className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Security</Link>
          <Link className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Status</Link>
        </div>
      </div>
    </motion.footer>
  );
}
