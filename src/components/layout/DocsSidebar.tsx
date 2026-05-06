"use client";


import { motion } from "framer-motion";

export function DocsSidebar() {
  return (
    <motion.aside 
      initial={{ x: -250, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-full w-64 acrylic-panel flex flex-col py-6 px-3 gap-2 shrink-0 border-r border-white/5 bg-black/40"
    >
      <div className="px-4 py-2 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center border border-white/5">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
          </div>
          <div>
            <p className="font-mono text-xs text-secondary font-bold">Core Engine</p>
            <p className="text-[0.65rem] text-on-surface-variant uppercase tracking-widest font-medium">v2.4.0-stable</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 overflow-y-auto pr-2 custom-scrollbar">
        <p className="px-4 text-[0.7rem] font-black text-on-surface-variant/60 uppercase tracking-widest mb-3">Modules</p>
        <button className="relative bg-white/5 text-on-surface flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all border border-white/5">
          <span className="material-symbols-outlined text-sm">folder_open</span>
          <span className="font-sans text-[0.875rem] font-medium">authentication_core</span>
          <div className="absolute left-0 w-1 h-4 bg-secondary rounded-r-full"></div>
        </button>
        <div className="ml-4 border-l border-white/10 flex flex-col gap-1 mt-1">
          <button className="flex items-center gap-3 px-4 py-1.5 text-on-surface-variant hover:text-on-surface hover:bg-white/5 rounded-lg transition-all">
            <span className="material-symbols-outlined text-sm opacity-60">javascript</span>
            <span className="font-sans text-[0.875rem]">JWTProvider.ts</span>
          </button>
          <button className="flex items-center gap-3 px-4 py-1.5 text-on-surface-variant hover:text-on-surface hover:bg-white/5 rounded-lg transition-all">
            <span className="material-symbols-outlined text-sm opacity-60">javascript</span>
            <span className="font-sans text-[0.875rem]">AuthGuard.ts</span>
          </button>
          <button className="flex items-center gap-3 px-4 py-1.5 bg-secondary/10 text-secondary rounded-lg transition-all font-medium">
            <span className="material-symbols-outlined text-sm">schema</span>
            <span className="font-sans text-[0.875rem]">SessionSchema.ts</span>
          </button>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          <button className="flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:text-on-surface hover:bg-white/5 rounded-lg transition-all">
            <span className="material-symbols-outlined text-sm">auto_awesome</span>
            <span className="font-sans text-[0.875rem]">AI Assistant</span>
          </button>
          <button className="flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:text-on-surface hover:bg-white/5 rounded-lg transition-all">
             <span className="material-symbols-outlined text-sm">rocket_launch</span>
             <span className="font-sans text-[0.875rem]">Deployments</span>
          </button>
          <button className="flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:text-on-surface hover:bg-white/5 rounded-lg transition-all">
             <span className="material-symbols-outlined text-sm">bar_chart</span>
             <span className="font-sans text-[0.875rem]">Analytics</span>
          </button>
        </div>
      </div>
      <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-1">
        <button className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-secondary transition-all">
          <span className="material-symbols-outlined text-sm">help_outline</span>
          <span className="font-sans text-[0.875rem]">Support</span>
        </button>
        <button className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-secondary transition-all">
          <span className="material-symbols-outlined text-sm">vpn_key</span>
          <span className="font-sans text-[0.875rem]">API Keys</span>
        </button>
      </div>
    </motion.aside>
  );
}
