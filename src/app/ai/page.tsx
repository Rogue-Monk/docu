"use client";

import { motion } from "framer-motion";

import { containerVariants, itemVariants } from "@/lib/animations";
import { APP_SIDEBAR_LINKS } from "@/lib/constants";
import { CodeWindow } from "@/components/ui/CodeWindow";
import { useChat, Message } from "ai/react";

export default function AIExplanationPage() {
  const { messages, input, handleInputChange, handleSubmit, append, isLoading } = useChat({
    initialMessages: [
      {
        id: "1",
        role: "assistant",
        content: "Hello! I've analyzed `control_loop.c`. How can I help you debug the fuel injection sequence today?",
      },
    ],
  });

  return (
    <div className="bg-background text-on-surface font-body selection:bg-secondary/30 min-h-screen flex flex-col">


      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 border-r border-white/5 bg-[#0e0e0e]/60 backdrop-blur-md flex-col p-4 pt-20 gap-2 z-40">
          <div className="mb-6 px-2 mt-4">
            <h3 className="text-white text-lg font-bold">V8-Turbo-2024</h3>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Active Documentation</p>
          </div>
          {APP_SIDEBAR_LINKS.map((link) => (
            <button
              key={link.label}
              className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-white hover:bg-white/5 transition-all duration-200 font-sans text-xs font-semibold uppercase tracking-widest active:translate-x-1 rounded-lg"
            >
              <span className="material-symbols-outlined text-sm">{link.icon}</span>
              {link.label}
            </button>
          ))}
        </aside>

        <main className="flex-1 lg:ml-64 p-8 pt-20 flex flex-col xl:flex-row gap-8 overflow-y-auto custom-scrollbar relative z-10 w-full mb-16 h-screen pb-24">
          {/* Center Editor Area (Simulated) */}
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="flex-grow max-w-4xl min-w-0">
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Main Injection Control</h1>
                <p className="text-on-surface-variant text-sm font-mono">V8-Turbo-2024 / firmware / control_loop.c</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-surface-container-highest border border-white/10 px-4 py-2 rounded-lg text-sm hover:bg-white/5 transition-colors text-white font-medium">
                  Edit Module
                </button>
                <button className="bg-secondary text-black px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-secondary/90 active:scale-95 duration-200">
                  <span className="material-symbols-outlined text-sm">play_arrow</span>
                  Deploy Hook
                </button>
              </div>
            </motion.div>

            {/* Bento Code Block */}
            <CodeWindow variants={itemVariants} variant="detailed" filename="control_loop.c">
              <pre>
                <code>
                  <span className="text-tertiary">void</span> <span className="text-secondary font-bold">calculate_fuel_trim</span>(<span className="text-tertiary">float</span> manifold_pressure, <span className="text-tertiary">float</span> rpm) {"{"}
                  <br />
                  <span className="text-on-surface-variant italic">{"// Target AFR is 14.7 for stoichiometric balance"}</span>
                  <br />
                  <span className="text-tertiary">const float</span> target_afr = <span className="text-pink-400">14.7f</span>;
                  <br />
                  <span className="text-tertiary">float</span> base_load = (manifold_pressure * <span className="text-pink-400">0.85f</span>) / rpm;
                  <br />
                  <br />
                  <span className="text-tertiary">if</span> (base_load &gt; <span className="text-pink-400">1.2f</span>) {"{"}
                  <br />
                  <span className="text-secondary font-bold ml-4">enrichment_protocol</span>(base_load);
                  <br />
                  {"}"} <span className="text-tertiary">else</span> {"{"}
                  <br />
                  <span className="text-secondary font-bold ml-4">normalize_lambda</span>();
                  <br />
                  {"}"}
                  <br />
                  <br />
                  <span className="text-on-surface-variant italic">{"// Output results to the primary ECU register"}</span>
                  <br />
                  <span className="text-secondary font-bold">update_ecu_register</span>(FUEL_TRIM_ADDR, base_load / target_afr);
                  <br />
                  {"}"}
                </code>
              </pre>
            </CodeWindow>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pb-8">
              <motion.div variants={itemVariants} className="acrylic-card p-6 rounded-xl border border-white/5 group hover:border-secondary/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-secondary">memory</span>
                  <h4 className="font-bold text-white">Memory Profile</h4>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "66%" }} transition={{ delay: 0.5, duration: 1 }} className="h-full bg-secondary shadow-[0_0_8px_rgba(0,220,130,0.5)]"></motion.div>
                </div>
                <p className="mt-4 text-xs text-on-surface-variant uppercase tracking-widest font-bold">64KB / 128KB stack utilized</p>
              </motion.div>
              <motion.div variants={itemVariants} className="acrylic-card p-6 rounded-xl border border-white/5 group hover:border-tertiary/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-tertiary">speed</span>
                  <h4 className="font-bold text-white">Cycle Accuracy</h4>
                </div>
                <p className="text-3xl font-black tracking-tighter text-tertiary">99.82%</p>
                <p className="mt-2 text-xs text-on-surface-variant font-mono">Last run: 14ms ago</p>
              </motion.div>
            </div>
          </motion.div>

          {/* AI Explanation Side Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full xl:w-[450px] flex-shrink-0 mb-8"
          >
            <div className="acrylic-panel sticky top-0 rounded-2xl border border-white/10 shadow-2xl shadow-black/80 flex flex-col h-[600px] xl:h-[calc(100vh-120px)] bg-black/40">
              {/* Header */}
              <div className="p-4 border-b border-white/5 flex items-center justify-between bg-black/20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_#00DC82]"></div>
                  <span className="text-sm font-bold tracking-tight text-white">EngineDoc AI</span>
                </div>
                <span className="text-[10px] font-black tracking-widest text-secondary bg-secondary/10 px-2 py-1 rounded">GEMINI 1.5 FLASH</span>
              </div>

              {/* Chat History */}
              <div className="flex-grow overflow-y-auto p-4 space-y-5 custom-scrollbar">
                {messages.map((m: Message) => (
                  <div key={m.id} className="flex flex-col gap-2">
                    <div
                      className={`${
                        m.role === "user"
                          ? "bg-secondary/10 text-secondary ml-auto"
                          : "bg-white/5 text-[#d0d0d0]"
                      } p-4 rounded-xl ${
                        m.role === "user" ? "rounded-tr-none" : "rounded-tl-none"
                      } border border-white/5 shadow-inner max-w-[90%] whitespace-pre-wrap text-sm leading-relaxed`}
                    >
                      {m.content}
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex flex-col gap-2">
                    <div className="bg-white/5 p-4 rounded-xl rounded-tl-none border border-white/5 shadow-inner max-w-[90%] w-24 flex gap-1 items-center h-12">
                      <div className="w-2 h-2 bg-secondary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                    </div>
                  </div>
                )}

                {/* Suggestions (Only show if there are no user messages yet) */}
                {messages.length === 1 && (
                  <div className="flex flex-col gap-2 pt-4 border-t border-white/5">
                    {[
                      { icon: "auto_awesome", label: "Explain this function" },
                      { icon: "summarize", label: "Summarize this module" },
                      { icon: "bug_report", label: "Check for logic errors" },
                    ].map((opt, i) => (
                      <motion.button
                        key={i}
                        onClick={() => append({ role: "user", content: opt.label })}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="text-left w-full p-3 rounded-xl bg-black/40 border border-white/5 text-xs font-medium text-[#d0d0d0] hover:border-secondary/50 hover:bg-secondary/5 transition-all group shadow-sm"
                      >
                        <span className="material-symbols-outlined text-secondary text-sm align-middle mr-3 group-hover:scale-110 duration-200">
                          {opt.icon}
                        </span>
                        {opt.label}
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>

              {/* Input Area */}
              <form onSubmit={handleSubmit} className="p-4 bg-black/40 border-t border-white/5 shrink-0">
                <div className="relative">
                  <textarea
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        const form = e.currentTarget.closest("form");
                        if (form) form.requestSubmit();
                      }
                    }}
                    className="w-full bg-[#131316] border border-white/10 rounded-xl p-3 pr-24 text-xs text-white placeholder-slate-500 focus:ring-1 focus:ring-secondary focus:border-secondary transition-all resize-none outline-none shadow-inner"
                    placeholder="Ask EngineDoc AI anything..."
                    rows={2}
                  ></textarea>
                  <div className="absolute right-2 bottom-2 flex gap-1">
                    <button type="button" className="p-1.5 rounded-md hover:bg-white/5 text-on-surface-variant transition-colors">
                      <span className="material-symbols-outlined text-sm">attach_file</span>
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading || !input.trim()}
                      className="p-1.5 rounded-md bg-secondary text-black hover:bg-secondary/90 shadow-lg shadow-secondary/20 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="material-symbols-outlined text-sm">send</span>
                    </button>
                  </div>
                </div>
                <p className="text-[9px] text-center text-on-surface-variant/40 uppercase tracking-widest mt-3 font-semibold">
                  AI can make mistakes. Verify critical safety code.
                </p>
              </form>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
