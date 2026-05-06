"use client";

import { motion } from "framer-motion";
import { AcrylicPanel } from "@/components/ui/AcrylicCard";

export function PlatformIntegration() {
  return (
    <section className="py-32 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24"
      >
        <div className="flex-1 space-y-8">
          <h2 className="text-5xl font-black tracking-tighter text-on-surface leading-none">Integrated with your toolchain.</h2>
          <p className="text-on-surface-variant text-xl font-light leading-relaxed">EngineDoc doesn&apos;t disrupt; it enhances. We sit quietly in your CI/CD pipeline and deliver documentation excellence automatically.</p>
          <div className="grid grid-cols-2 gap-x-12 gap-y-6 pt-4">
            {['GitHub Actions', 'GitLab CI', 'Slack Integration', 'Bitbucket Pipelines'].map((tool) => (
              <div key={tool} className="flex items-center gap-4 text-sm font-mono text-on-surface-variant group">
                <span className="w-8 h-8 rounded-lg acrylic-panel flex items-center justify-center text-secondary group-hover:border-secondary/50 transition-colors">
                  <span className="material-symbols-outlined text-sm">check</span>
                </span>
                {tool}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 relative">
          <AcrylicPanel className="p-2 rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] group">
            <div className="relative overflow-hidden rounded-2xl bg-black/60 h-[350px] flex items-center justify-center border border-white/5">
              <span className="material-symbols-outlined text-[100px] text-white/5 group-hover:text-white/10 transition-colors duration-1000">terminal</span>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute bottom-10 left-10 right-10 acrylic-card p-8 rounded-2xl border-l-4 border-l-secondary shadow-2xl"
              >
                <div className="flex items-center gap-6">
                  <div className="bg-secondary/20 w-12 h-12 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-2xl">terminal</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest mb-1 font-bold">CLI Integration Active</p>
                    <p className="text-lg font-bold text-on-surface font-mono">$ edgedoc push --repo=engine-core</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </AcrylicPanel>
        </div>
      </motion.div>
    </section>
  );
}
