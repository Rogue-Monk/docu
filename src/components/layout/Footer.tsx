"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FacebookLogo, TwitterLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import Link from "next/link";
import { useRef } from "react";

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Map scroll progress from [0, 1] to [-50, 150]
  const truckY = useTransform(scrollYProgress, [0, 1], [-50, 150]);

  return (
    <>
      {/* Top Spacer Section */}
      <div className="flex h-[50vh] md:h-[30vh] w-full items-center justify-center bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-white/30 text-xs font-bold uppercase tracking-[0.5em]"
        >
          View Below
        </motion.div>
      </div>

      {/* Main Parallax Container */}
      <div 
        ref={containerRef}
        className="relative h-screen w-full overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260430_115327_3f256636-9e63-4885-8d0b-09317dc2b0a5.png&w=1280&q=85')"
        }}
      >
        {/* Top-Aligned Footer Card */}
        <div className="absolute top-0 w-full pt-12 md:pt-24 z-30 px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mx-auto max-w-7xl overflow-hidden rounded-2xl md:rounded-3xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl"
          >
            {/* Top Half: Logo and Links */}
            <div className="flex flex-col md:flex-row justify-between gap-12 p-8 md:p-12">
              
              {/* Logo Area */}
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-primary p-2 shadow-inner shadow-black/50">
                  <svg viewBox="0 0 256 256" className="w-full h-full fill-white">
                    <path d="M 228 0 C 172.772 0 128 44.772 128 100 L 128 0 L 0 0 L 0 28 C 0 83.228 44.772 128 100 128 L 0 128 L 0 256 L 28 256 C 83.228 256 128 211.228 128 156 L 128 256 L 256 256 L 256 228 C 256 172.772 211.228 128 156 128 L 256 128 L 256 0 Z" />
                  </svg>
                </div>
                <span className="text-2xl md:text-3xl font-bold tracking-tighter text-white">EngineDoc</span>
              </div>

              {/* Links Area */}
              <div className="flex flex-wrap md:flex-nowrap gap-12 md:gap-24">
                {/* Column 1 */}
                <div className="flex flex-col gap-4">
                  <span className="text-sm font-bold uppercase tracking-widest text-white/40">Company</span>
                  <Link href="#" className="text-white/70 font-medium hover:text-primary transition-colors">Founding</Link>
                  <Link href="#" className="text-white/70 font-medium hover:text-primary transition-colors">Platform</Link>
                  <Link href="#" className="text-white/70 font-medium hover:text-primary transition-colors">Testify</Link>
                </div>
                
                {/* Column 2 */}
                <div className="flex flex-col gap-4">
                  <span className="text-sm font-bold uppercase tracking-widest text-white/40">Mobile</span>
                  <Link href="#" className="text-white/70 font-medium hover:text-primary transition-colors">Get Apple App</Link>
                  <Link href="#" className="text-white/70 font-medium hover:text-primary transition-colors">Get Google App</Link>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col gap-4">
                  <span className="text-sm font-bold uppercase tracking-widest text-white/40">Contracts</span>
                  <Link href="#" className="text-white/70 font-medium hover:text-primary transition-colors">Private Data</Link>
                  <Link href="#" className="text-white/70 font-medium hover:text-primary transition-colors">User Consent</Link>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/10 bg-black/40 p-6 md:px-12 gap-4">
              <span className="text-sm font-medium text-white/40 text-center sm:text-left">
                © 2026 EngineDoc. All Rights Reserved
              </span>
              
              {/* Social Icons */}
              <div className="flex gap-4">
                {[
                  { Icon: FacebookLogo, href: "#" },
                  { Icon: TwitterLogo, href: "#" },
                  { Icon: InstagramLogo, href: "#" },
                  { Icon: LinkedinLogo, href: "#" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-black"
                  >
                    <social.Icon className="h-5 w-5" weight="fill" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background Truck Parallax Layer */}
        <motion.div 
          style={{ y: truckY }}
          className="absolute inset-x-0 bottom-0 h-full pointer-events-none z-20"
        >
          <img 
            src="https://roof-wish-40038865.figma.site/_components/v2/f31fd17907ce60745d45e83a61d44fd3810d5f25/truck_1.8c4bff83.png" 
            alt="Parallax Foreground" 
            className="w-full h-full object-contain object-bottom origin-bottom scale-[1.5] sm:scale-110 md:scale-[2.0] lg:scale-105"
          />
        </motion.div>
      </div>
    </>
  );
}
