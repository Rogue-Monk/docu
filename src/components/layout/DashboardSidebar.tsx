"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { DASHBOARD_LINKS } from "@/lib/constants";

export function DashboardSidebar() {
  return (
    <motion.aside 
      initial={{ x: -250, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-screen w-64 fixed left-0 top-0 acrylic-sidebar flex flex-col py-4 px-2 gap-2 z-40"
    >
      <div className="px-4 mb-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
          <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>developer_board</span>
        </div>
        <div>
          <h1 className="font-mono text-xs text-[#00DC82] leading-none">Core Engine</h1>
          <p className="text-[0.65rem] text-on-surface-variant font-medium mt-1 uppercase tracking-widest">v2.4.0-stable</p>
        </div>
      </div>
      <nav className="flex-1 space-y-1">
         {DASHBOARD_LINKS.map(link => (
          <Link key={link.label} className="text-[#9a9a9a] hover:bg-white/5 hover:text-[#e7e4ec] flex items-center px-4 py-2.5 rounded-md font-sans text-[0.875rem] transition-all group" href={link.href}>
            <span className="material-symbols-outlined mr-3 group-hover:text-secondary">{link.icon}</span>
            <span>{link.label}</span>
          </Link>
         ))}
      </nav>
      <div className="mt-auto px-4 py-4 border-t border-white/5">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-2.5 px-4 rounded-md machined-finish text-on-secondary text-xs font-bold uppercase tracking-tight flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          New Documentation
        </motion.button>
        <div className="mt-4 flex flex-col gap-2">
          <Link className="text-[#9a9a9a] hover:text-[#e7e4ec] flex items-center gap-3 text-[0.8rem] transition-colors" href="#">
            <span className="material-symbols-outlined text-sm">help_outline</span> Support
          </Link>
          <Link className="text-[#9a9a9a] hover:text-[#e7e4ec] flex items-center gap-3 text-[0.8rem] transition-colors" href="#">
            <span className="material-symbols-outlined text-sm">vpn_key</span> API Keys
          </Link>
        </div>
      </div>
    </motion.aside>
  );
}
