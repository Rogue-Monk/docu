"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { AcrylicCard, AcrylicPanel } from "@/components/ui/AcrylicCard";

export function FeaturesBentoGrid() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 text-center lg:text-left"
        >
          <h2 className="text-4xl lg:text-6xl font-black tracking-tighter text-on-surface mb-6">Architected for Speed.</h2>
          <p className="text-on-surface-variant text-xl max-w-2xl font-light">Eliminate documentation debt with AI-native workflows that integrate seamlessly into your engineering stack.</p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-12 gap-6"
        >
          {/* Feature 1: AI Understanding */}
          <AcrylicCard className="md:col-span-8 flex flex-col justify-between">
            <div className="absolute top-[-20%] right-[-10%] p-12 opacity-[0.03] group-hover:opacity-10 transition-all duration-700">
              <span className="material-symbols-outlined text-[320px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            </div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-secondary mb-8 text-4xl">psychology</span>
              <h3 className="text-3xl font-bold text-on-surface mb-6 tracking-tight">Deep Semantic Understanding</h3>
              <p className="text-on-surface-variant text-lg max-w-md leading-relaxed font-light">
                Beyond pattern matching. Our models trace execution flows to explain the &quot;why&quot; behind the logic, providing true architectural context.
              </p>
            </div>
          </AcrylicCard>

          {/* Feature 2: Auto Sync */}
          <AcrylicCard className="md:col-span-4 flex flex-col justify-center border-t-2 border-t-secondary/20">
            <span className="material-symbols-outlined text-tertiary mb-8 text-4xl">sync</span>
            <h3 className="text-2xl font-bold text-on-surface mb-4 tracking-tight">Automated Sync</h3>
            <p className="text-on-surface-variant leading-relaxed mb-8 font-light">
              Triggers on every commit. Your documentation lives in perfect lock-step with your production codebase.
            </p>
            <div className="space-y-4">
              <AcrylicPanel className="flex items-center justify-between text-xs font-mono text-on-surface-variant px-4 py-2.5 rounded-lg border-l-2 border-l-secondary">
                <span>main.yaml</span>
                <span className="text-secondary font-bold">SYNCED</span>
              </AcrylicPanel>
              <AcrylicPanel className="flex items-center justify-between text-xs font-mono text-on-surface-variant px-4 py-2.5 rounded-lg border-l-2 border-l-secondary">
                <span>api_routes.py</span>
                <span className="text-secondary font-bold">SYNCED</span>
              </AcrylicPanel>
            </div>
          </AcrylicCard>

          {/* Feature 3: Searchable KB */}
          <AcrylicCard className="md:col-span-4">
            <span className="material-symbols-outlined text-secondary mb-8 text-4xl">search_insights</span>
            <h3 className="text-2xl font-bold text-on-surface mb-4 tracking-tight">Semantic Search</h3>
            <p className="text-on-surface-variant leading-relaxed font-light">
              Natural language queries like &quot;Where is the retry logic for the payment gateway?&quot; return direct, actionable answers.
            </p>
          </AcrylicCard>

          {/* Feature 4: API Docs */}
          <AcrylicCard className="md:col-span-8 flex items-center gap-12 group overflow-hidden">
            <div className="flex-1">
              <span className="material-symbols-outlined text-tertiary mb-8 text-4xl">api</span>
              <h3 className="text-3xl font-bold text-on-surface mb-6 tracking-tight">Native API Interfaces</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed font-light">
                Instantly builds interactive OpenAPI/Swagger playgrounds directly from your code&apos;s type definitions and decorators.
              </p>
            </div>
            <div className="hidden lg:block w-56 h-56 bg-black/60 rounded-2xl border border-white/10 rotate-3 group-hover:rotate-0 transition-transform duration-500 p-6 shadow-2xl">
              <div className="w-full h-2.5 bg-white/10 rounded mb-3"></div>
              <div className="w-2/3 h-2.5 bg-white/10 rounded mb-6"></div>
              <div className="space-y-2">
                <div className="w-full h-1.5 bg-secondary/30 rounded"></div>
                <div className="w-full h-1.5 bg-secondary/30 rounded"></div>
                <div className="w-4/5 h-1.5 bg-secondary/30 rounded"></div>
              </div>
            </div>
          </AcrylicCard>
        </motion.div>
      </div>
    </section>
  );
}
