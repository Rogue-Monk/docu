"use client";

import { motion } from "framer-motion";

export default function DocsPage() {
  return (
    <div className="flex w-full h-full">
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto scroll-smooth custom-scrollbar">
        {/* Tabs */}
        <div className="sticky top-0 bg-[#0e0e0e]/80 backdrop-blur-xl z-40 px-12 pt-6 pb-2 border-b border-white/5">
          <div className="flex gap-10 items-end">
            <button className="pb-3 border-b-2 border-secondary text-on-surface font-bold text-sm tracking-tight transition-all">Overview</button>
            <button className="pb-3 border-b-2 border-transparent text-on-surface-variant hover:text-on-surface font-medium text-sm tracking-tight transition-all">API</button>
            <button className="pb-3 border-b-2 border-transparent text-on-surface-variant hover:text-on-surface font-medium text-sm tracking-tight transition-all">Examples</button>
            <button className="pb-3 border-b-2 border-transparent text-on-surface-variant hover:text-on-surface font-medium text-sm tracking-tight transition-all">Dependencies</button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl px-12 py-12 mx-auto"
        >
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-on-surface-variant mb-8 font-mono tracking-tight">
            <span className="hover:text-secondary cursor-pointer">authentication_core</span>
            <span className="material-symbols-outlined text-[10px] opacity-40">chevron_right</span>
            <span className="text-secondary font-bold">SessionSchema.ts</span>
          </div>

          {/* Header */}
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-secondary/20 text-secondary text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-[0.1em] border border-secondary/30">Interface</span>
              <span className="text-on-surface-variant/60 text-xs font-medium uppercase tracking-widest">Updated 2 hours ago</span>
            </div>
            <h1 className="text-5xl font-black tracking-tighter text-white mb-6">SessionSchema</h1>
            <p className="text-xl text-on-surface-variant leading-relaxed font-light">
              Defines the structural blueprint for session state management. This schema is utilized by the <span className="bg-white/5 border border-white/10 px-2 py-0.5 rounded text-secondary font-mono text-base">AuthStore</span> and persistent cache layers to maintain deterministic session data across clusters.
            </p>
          </div>

          {/* Section: Properties */}
          <div className="mb-14">
            <h2 className="text-2xl font-black tracking-tight text-white mb-8 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-secondary rounded-full shadow-[0_0_15px_rgba(0,220,130,0.5)]"></span>
              Properties
            </h2>
            <div className="space-y-2">
              {[
                { name: "sessionId", desc: "Unique identifier generated via UUID v4. Required for all state lookups." },
                { name: "ttl", desc: "Time-to-live in milliseconds. Default is 3600000 (1 hour)." },
                { name: "strictMode", desc: "Boolean flag to enforce cryptographic validation on every request." }
              ].map((prop, idx) => (
                <div key={idx} className="group grid grid-cols-[220px_1fr] p-5 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10">
                  <div className="font-mono text-sm text-secondary font-bold">{prop.name}</div>
                  <div className="text-[0.9375rem] text-on-surface-variant leading-relaxed">{prop.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Code Block */}
          <div className="mb-14">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-black tracking-tight text-white">Implementation</h2>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="text-xs text-secondary font-bold flex items-center gap-2 hover:brightness-125 transition-all px-3 py-1.5 rounded-lg bg-secondary/10"
              >
                <span className="material-symbols-outlined text-sm">content_copy</span>
                COPY SNIPPET
              </motion.button>
            </div>
            <div className="bg-black rounded-2xl p-8 border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden relative code-glow">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                 <span className="material-symbols-outlined text-6xl text-secondary">code</span>
              </div>
              <pre className="font-mono text-[0.9375rem] leading-7 overflow-x-auto">
<span className="text-secondary opacity-80">export interface</span> <span className="text-white font-bold">SessionSchema</span> {"{"}<br/>
  <span className="text-on-surface-variant italic">{"/** Unique cryptographic token */"}</span><br/>
  <span className="text-on-surface">id</span>: <span className="text-tertiary">string</span>;<br/>
  <br/>
  <span className="text-on-surface">meta</span>: {"{"}<br/>
    <span className="text-on-surface ml-4">createdAt</span>: <span className="text-tertiary">Date</span>;<br/>
    <span className="text-on-surface ml-4">origin</span>: <span className="text-tertiary">string</span>;<br/>
    <span className="text-on-surface ml-4">deviceFingerprint</span>: <span className="text-tertiary">string</span>;<br/>
  {"};"}<br/>
<br/>
  <span className="text-on-surface-variant italic">{"/** Validation method */"}</span><br/>
  <span className="text-on-surface">validate</span>(): <span className="text-tertiary">Promise</span>&lt;<span className="text-tertiary">boolean</span>&gt;;<br/>
{"}"}
              </pre>
            </div>
          </div>

          {/* Bento Info Grid */}
          <div className="grid grid-cols-2 gap-6 mb-14">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-secondary/30 transition-colors">
              <span className="material-symbols-outlined text-secondary mb-5 scale-125">security</span>
              <h3 className="font-black text-white text-lg mb-3">Security Note</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Always use TLS 1.3 when transmitting session objects. Native encryption is supported via the EngineCore crypto module.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-secondary/30 transition-colors">
              <span className="material-symbols-outlined text-secondary mb-5 scale-125">speed</span>
              <h3 className="font-black text-white text-lg mb-3">Performance</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Schema validation overhead is &lt; 2ms under load. Designed for high-frequency low-latency environments.</p>
            </div>
          </div>
        </motion.div>
        {/* Footer inside main content to scroll with it */}
        <footer className="w-full py-12 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-12 font-sans text-[0.65rem] uppercase tracking-[0.2em] font-bold text-on-surface-variant/40">
            <span className="mb-4 md:mb-0">© 2026 Architectural Core Systems. Forge Ahead.</span>
            <div className="flex gap-10">
              <span className="hover:text-secondary transition-colors cursor-pointer">Privacy</span>
              <span className="hover:text-secondary transition-colors cursor-pointer">Terms</span>
              <span className="hover:text-secondary transition-colors cursor-pointer">Security</span>
            </div>
          </div>
        </footer>
      </main>

      {/* Right Quick Info Panel */}
      <motion.aside 
        initial={{ x: 250, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-80 acrylic-panel p-8 hidden xl:flex flex-col gap-10 border-l border-white/5 bg-black/40 overflow-y-auto custom-scrollbar"
      >
        <div>
          <h4 className="text-[0.7rem] font-black text-on-surface-variant/50 uppercase tracking-[0.15em] mb-6">Quick Reference</h4>
          <div className="mb-4">
            <p className="text-[0.65rem] text-secondary uppercase font-black mb-3 tracking-widest">Export Path</p>
            <div className="bg-white/5 p-4 rounded-xl flex items-center justify-between border border-white/5 group cursor-pointer hover:bg-white/10 transition-all">
              <code className="text-xs font-mono text-white">@engine/core/auth</code>
              <span className="material-symbols-outlined text-sm text-secondary opacity-0 group-hover:opacity-100 transition-opacity">content_copy</span>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[0.65rem] text-secondary uppercase font-black mb-4 tracking-widest">Usage Context</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-white/5 text-[10px] font-bold rounded-lg border border-white/5 text-on-surface-variant uppercase tracking-wider">Production</span>
            <span className="px-3 py-1.5 bg-white/5 text-[10px] font-bold rounded-lg border border-white/5 text-on-surface-variant uppercase tracking-wider">Edge Runtime</span>
            <span className="px-3 py-1.5 bg-white/5 text-[10px] font-bold rounded-lg border border-white/5 text-on-surface-variant uppercase tracking-wider">Stateless</span>
          </div>
        </div>
        <div>
          <p className="text-[0.65rem] text-secondary uppercase font-black mb-6 tracking-widest">Hierarchy Map</p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-1 h-10 bg-white/20 rounded-full"></div>
              <div>
                <p className="text-sm font-black text-white">BaseModule</p>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">System Primitive</p>
              </div>
            </div>
            <div className="flex items-center gap-4 ml-4">
              <div className="w-1 h-10 bg-secondary rounded-full shadow-[0_0_10px_rgba(0,220,130,0.4)]"></div>
              <div>
                <p className="text-sm font-black text-secondary">SessionSchema</p>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Active Interface</p>
              </div>
            </div>
            <div className="flex items-center gap-4 ml-8">
              <div className="w-1 h-10 bg-white/20 rounded-full"></div>
              <div>
                <p className="text-sm font-black text-white">ValidationHook</p>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Child Logic</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-auto pt-8">
           <div className="relative rounded-xl overflow-hidden border border-white/5 h-32 flex items-center justify-center bg-white/5 text-white/20 text-4xl group">
             <span className="material-symbols-outlined text-5xl group-hover:text-white/40 transition-colors duration-500">schema</span>
           </div>
           <p className="text-[10px] text-on-surface-variant mt-4 text-center italic opacity-60">Visualizing component relationships</p>
        </div>
      </motion.aside>
    </div>
  );
}
