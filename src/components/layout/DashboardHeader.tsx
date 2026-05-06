"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function DashboardHeader() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 right-0 left-64 z-30 acrylic-panel bg-white/5 h-16 flex justify-between items-center px-6 border-b border-white/5"
    >
      <div className="flex items-center gap-8">
        <div className="relative w-80">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#9a9a9a] text-lg">search</span>
          <input className="bg-white/5 border-none rounded-md w-full pl-10 pr-4 py-2 text-sm text-[#e7e4ec] focus:ring-1 focus:ring-secondary/50 placeholder-[#47474e] outline-none" placeholder="Search documentation..." type="text"/>
        </div>
        <nav className="hidden lg:flex items-center gap-6">
          <Link className="text-[#9a9a9a] hover:text-[#e7e4ec] transition-colors font-sans text-sm tracking-tight" href="#">Docs</Link>
          <Link className="text-[#00DC82] font-semibold border-b-2 border-[#00DC82] pb-1 font-sans text-sm tracking-tight" href="/dashboard">Dashboard</Link>
          <Link className="text-[#9a9a9a] hover:text-[#e7e4ec] transition-colors font-sans text-sm tracking-tight" href="#">API</Link>
          <Link className="text-[#9a9a9a] hover:text-[#e7e4ec] transition-colors font-sans text-sm tracking-tight" href="#">Changelog</Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="hover:bg-white/5 p-2 rounded-full transition-colors relative">
          <span className="material-symbols-outlined text-[#9a9a9a]">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full border-2 border-[#131316]"></span>
        </button>
        <button className="hover:bg-white/5 p-2 rounded-full transition-colors">
          <span className="material-symbols-outlined text-[#9a9a9a]">settings</span>
        </button>
        <div className="h-8 w-[1px] bg-white/10 mx-2"></div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-1.5 rounded-md border border-secondary/30 text-secondary text-xs font-semibold hover:bg-secondary/5 transition-colors"
        >
          Connect Repo
        </motion.button>
        <div className="w-8 h-8 rounded-full border border-white/10 bg-secondary/20 flex justify-center items-center overflow-hidden">
           <span className="material-symbols-outlined text-sm text-secondary">person</span>
        </div>
      </div>
    </motion.header>
  );
}
