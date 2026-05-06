"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export function GlobalSearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  // Listen for ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 bg-black/60 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full max-w-2xl bg-[#19191d]/80 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col overflow-hidden shadow-2xl shadow-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Header */}
            <div className="flex items-center gap-4 px-6 py-5 border-b border-white/10">
              <span className="material-symbols-outlined text-secondary text-2xl">search</span>
              <input 
                autoFocus 
                className="bg-transparent border-none focus:ring-0 flex-1 text-lg text-white placeholder-white/30 font-medium outline-none" 
                placeholder="Search functions, files, or documentation..." 
                type="text"
              />
              <div className="flex items-center gap-1.5 px-2 py-1 bg-white/10 rounded border border-white/10 cursor-pointer hover:bg-white/20 transition-colors" onClick={onClose}>
                <span className="text-[10px] font-mono text-white/50">ESC</span>
              </div>
            </div>

            {/* Results Section */}
            <div className="flex-1 overflow-y-auto max-h-[60vh] custom-scrollbar p-3 space-y-6">
              {/* Functions Category */}
              <div>
                <h6 className="px-4 py-1 text-[10px] font-black text-secondary uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-1 h-1 bg-secondary rounded-full"></span>
                  Functions & API
                </h6>
                <div className="space-y-1">
                  <div className="group flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-secondary/30">
                    <div className="bg-secondary/10 p-2 rounded-lg text-secondary flex items-center justify-center border border-secondary/20">
                      <span className="material-symbols-outlined text-sm">function</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white group-hover:text-secondary transition-colors">initialize_core_engine()</p>
                      <p className="text-[11px] text-white/40 font-mono">@core/v2/bootstrap.rs</p>
                    </div>
                    <span className="text-[10px] text-white/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      Open <span className="material-symbols-outlined text-[10px]">keyboard_return</span>
                    </span>
                  </div>
                  <div className="group flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-secondary/30">
                    <div className="bg-secondary/10 p-2 rounded-lg text-secondary flex items-center justify-center border border-secondary/20">
                      <span className="material-symbols-outlined text-sm">function</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white group-hover:text-secondary transition-colors">verify_api_signature()</p>
                      <p className="text-[11px] text-white/40 font-mono">@auth/security/jwt.ts</p>
                    </div>
                    <span className="text-[10px] text-white/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      Open <span className="material-symbols-outlined text-[10px]">keyboard_return</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Files Category */}
              <div>
                <h6 className="px-4 py-1 text-[10px] font-black text-secondary uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-1 h-1 bg-secondary rounded-full"></span>
                  Source Files
                </h6>
                <div className="space-y-1">
                  <div className="group flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-white/10">
                    <div className="bg-white/5 p-2 rounded-lg text-white/60 flex items-center justify-center border border-white/5">
                      <span className="material-symbols-outlined text-sm">description</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white group-hover:text-secondary transition-colors">deployment_config.yaml</p>
                      <p className="text-[11px] text-white/40 font-mono">root/config/prod/</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Docs Sections Category */}
              <div className="mb-2">
                <h6 className="px-4 py-1 text-[10px] font-black text-secondary uppercase tracking-widest mb-2 flex items-center gap-2">
                   <span className="w-1 h-1 bg-secondary rounded-full"></span>
                   Documentation
                </h6>
                <div className="space-y-1">
                  <div className="group flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-secondary/30">
                    <div className="bg-tertiary/10 p-2 rounded-lg text-tertiary flex items-center justify-center border border-tertiary/20">
                      <span className="material-symbols-outlined text-sm">menu_book</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white group-hover:text-tertiary transition-colors">Migrating from v1.8 to v2.4</p>
                      <p className="text-[11px] text-white/40">Guides &gt; Infrastructure Upgrade</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Meta */}
            <div className="px-6 py-4 bg-black/40 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono text-white/40 border border-white/10 px-1.5 py-0.5 rounded-md bg-white/5">↑↓</span>
                  <span className="text-[10px] font-medium text-white/50 uppercase tracking-wider">Navigate</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono text-white/40 border border-white/10 px-1.5 py-0.5 rounded-md bg-white/5">↵</span>
                  <span className="text-[10px] font-medium text-white/50 uppercase tracking-wider">Open</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                 <span className="text-[10px] text-white/30 italic">Search by</span>
                 <span className="text-[10px] font-black tracking-tighter text-white">EngineDoc Intelligence</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
