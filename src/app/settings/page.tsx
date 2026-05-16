"use client";

import { motion } from "framer-motion";



import { containerVariants, itemVariants } from "@/lib/animations";
import { APP_SIDEBAR_LINKS } from "@/lib/constants";
import { ToggleSwitch } from "@/components/ui/ToggleSwitch";

export default function SettingsPage() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-secondary/30 min-h-screen flex flex-col">

      <div className="flex flex-1 overflow-hidden">
        {/* SideNavBar for Settings */}
        <aside className="fixed left-0 top-0 h-screen w-64 border-r border-white/5 bg-[#0e0e0e]/60 backdrop-blur-md hidden md:flex flex-col p-4 pt-20 gap-2 z-40">
          <div className="mb-6 px-2 mt-4">
            <div className="text-lg font-bold text-white">V8-Turbo-2024</div>
            <div className="text-[10px] text-on-surface-variant uppercase tracking-widest">Active Documentation</div>
          </div>
          <div className="flex flex-col gap-1 flex-1">
            {APP_SIDEBAR_LINKS.map(link => (
              <button key={link.label} className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-white hover:bg-white/5 transition-all duration-200 rounded-lg group">
                <span className="material-symbols-outlined text-xl">{link.icon}</span>
                <span className="font-sans text-xs font-semibold uppercase tracking-widest">{link.label}</span>
              </button>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-1 border-t border-white/5 pt-4">
            <button className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-white rounded-lg transition-colors">
              <span className="material-symbols-outlined text-xl">help</span>
              <span className="font-sans text-xs font-semibold uppercase tracking-widest">Help</span>
            </button>
            <button className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-white rounded-lg transition-colors">
              <span className="material-symbols-outlined text-xl">history</span>
              <span className="font-sans text-xs font-semibold uppercase tracking-widest">Logs</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-64 p-8 overflow-y-auto custom-scrollbar relative z-10 w-full mb-16 pb-24">
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="mb-12 mt-4">
              <motion.h1 variants={itemVariants} className="text-4xl font-bold tracking-tight text-white mb-2">Workspace Settings</motion.h1>
              <motion.p variants={itemVariants} className="text-on-surface-variant">Configure your documentation output and synchronization preferences.</motion.p>
            </div>

            {/* Settings Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 pb-20">
              {/* Documentation Style Card */}
              <motion.div variants={itemVariants} className="md:col-span-4 acrylic-card rounded-xl p-8 bg-gradient-to-br from-secondary/5 to-secondary/5 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-secondary">description</span>
                    <h2 className="text-xl font-semibold text-white">Documentation Style</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="relative flex flex-col p-4 rounded-lg border border-white/10 bg-black/40 cursor-pointer hover:border-secondary/50 transition-all group">
                      <input defaultChecked className="absolute top-4 right-4 text-secondary focus:ring-secondary bg-transparent border-white/20" name="doc-style" type="radio"/>
                      <span className="font-semibold text-white mb-1">Concise</span>
                      <span className="text-xs text-on-surface-variant">Prioritizes bullet points and technical specs. Best for quick reference.</span>
                    </label>
                    <label className="relative flex flex-col p-4 rounded-lg border border-white/10 bg-black/40 cursor-pointer hover:border-secondary/50 transition-all group">
                      <input className="absolute top-4 right-4 text-secondary focus:ring-secondary bg-transparent border-white/20" name="doc-style" type="radio"/>
                      <span className="font-semibold text-white mb-1">Detailed</span>
                      <span className="text-xs text-on-surface-variant">Full descriptive paragraphs with step-by-step logic and context.</span>
                    </label>
                  </div>
                </div>
              </motion.div>

              {/* Output Format Card */}
              <motion.div variants={itemVariants} className="md:col-span-2 acrylic-card rounded-xl p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-secondary">terminal</span>
                  <h2 className="text-xl font-semibold text-white">Output</h2>
                </div>
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-between p-3 rounded-lg bg-secondary/20 text-secondary font-semibold border border-secondary/30 transition-transform active:scale-95">
                    <span>Markdown</span>
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                  </button>
                  <button className="w-full flex items-center justify-between p-3 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors">
                    <span>HTML5</span>
                    <span className="material-symbols-outlined text-sm opacity-0">circle</span>
                  </button>
                  <button className="w-full flex items-center justify-between p-3 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors">
                    <span>JSON Data</span>
                    <span className="material-symbols-outlined text-sm opacity-0">circle</span>
                  </button>
                </div>
              </motion.div>

              {/* Auto-Sync Toggle Card */}
              <motion.div variants={itemVariants} className="md:col-span-3 acrylic-card rounded-xl p-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">sync</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Auto-Sync Engine</h3>
                    <p className="text-xs text-on-surface-variant">Push changes to cloud instantly</p>
                  </div>
                </div>
                <ToggleSwitch checked={true} />
              </motion.div>

              {/* Integration Status */}
              <motion.div variants={itemVariants} className="md:col-span-3 acrylic-card rounded-xl p-8 flex items-center gap-6">
                <div className="flex-1">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Storage Capacity</span>
                    <span className="text-xs font-bold text-secondary">82%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: "82%" }} transition={{ delay: 0.5, duration: 1 }} className="bg-secondary h-1.5 rounded-full"></motion.div>
                  </div>
                </div>
                <button className="material-symbols-outlined p-2 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-colors">open_in_new</button>
              </motion.div>

              {/* Visual Theme Card */}
              <motion.div variants={itemVariants} className="md:col-span-6 h-64 rounded-xl relative overflow-hidden group border border-white/5 mt-4">
                <div className="absolute inset-0 bg-secondary/5"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="max-w-md">
                    <h3 className="text-2xl font-bold text-white mb-2">Premium Workspace Mode</h3>
                    <p className="text-slate-300 text-sm mb-4">You are currently using the Neon Monolith framework. Enjoy high-performance documentation processing with zero latency.</p>
                    <button className="px-6 py-2 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-secondary transition-colors">Manage License</button>
                  </div>
                </div>
              </motion.div>
              
              {/* Action Bar */}
              <motion.div variants={itemVariants} className="col-span-1 md:col-span-6 mt-4 flex justify-end gap-4 border-t border-white/5 pt-8">
                <button className="px-8 py-3 rounded-lg text-on-surface-variant hover:text-white transition-colors font-semibold">Discard Changes</button>
                <button className="px-8 py-3 rounded-lg bg-secondary text-on-secondary font-bold shadow-lg shadow-secondary/20 hover:scale-[1.02] active:scale-95 transition-all">Save Preferences</button>
              </motion.div>
            </div>
          </motion.div>
        </main>
      </div>
      
      {/* Absolute Bottom Footer for settings page layout style */}
      <div className="fixed bottom-0 z-50 w-full ml-64 bg-background">
      </div>
    </div>
  );
}
