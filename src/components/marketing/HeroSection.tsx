"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { AcrylicPanel } from "@/components/ui/AcrylicCard";
import { CodeWindow } from "@/components/ui/CodeWindow";
import { TextRotate } from "@/components/ui/text-rotate";
import dynamic from "next/dynamic";
import { CyberGlitchText } from "@/components/ui/cyber-glitch-text";

const PremiumBackground = dynamic(
  () => import("@/components/ui/premium-background").then((mod) => mod.PremiumBackground),
  { ssr: false }
);

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 px-6">
      {/* Premium Studio Background */}
      <PremiumBackground />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 acrylic-panel rounded-full border border-primary/20 bg-black/40 backdrop-blur-xl"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(255,77,0,0.5)]"></span>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary flex items-center">
              <CyberGlitchText text="Engine v2.4.0 now live" scrambleDuration={50} />
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-6xl lg:text-8xl font-black tracking-tighter leading-[1.1] text-on-surface flex flex-col items-start gap-2"
          >
            <div>Turn Code Into</div>
            <div className="flex items-center flex-wrap gap-4 mt-2">
              <span className="bg-primary text-white inline-flex px-6 py-4 rounded-2xl shadow-lg shadow-primary/20">
                <TextRotate
                  texts={["Docs", "API Specs", "Insights"]}
                  mainClassName="overflow-hidden pr-4"
                  staggerFrom="last"
                  staggerDuration={0.025}
                  splitBy="characters"
                  rotationInterval={3000}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                />
              </span>
              <span className="italic font-light opacity-80">Instantly.</span>
            </div>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-xl text-on-surface-variant max-w-xl leading-relaxed font-light"
          >
            Our neural engine understands your source code and generates
            editorial-grade documentation. Sync your repository, eliminate the
            debt.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="machined-finish text-on-secondary font-bold px-10 py-5 rounded-xl text-sm uppercase tracking-widest"
            >
              Connect Repository
            </motion.button>
            <motion.button
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              className="acrylic-panel text-on-surface font-bold px-10 py-5 rounded-xl text-sm uppercase tracking-widest transition-all"
            >
              Try Demo
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Sleek UI Transformation Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-transparent blur-3xl -z-10"></div>
          <div className="grid grid-cols-1 gap-4">
            {/* Source Code Layer */}
            <CodeWindow variant="minimal">
              <div className="text-[#699cff]">
                async function{" "}
                <span className="text-secondary">processStream</span>(input){" "}
                {"{"}
              </div>
              <div className="pl-4 text-on-surface-variant">
                <span className="text-[#ff9993]">const</span> data ={" "}
                <span className="text-[#ff9993]">await</span> input.json();
              </div>
              <div className="pl-4 text-on-surface-variant">
                <span className="text-[#ff9993]">return</span>{" "}
                data.map(item =&gt; ({"{"}
              </div>
              <div className="pl-8 text-on-surface-variant">id: item.uid,</div>
              <div className="pl-8 text-on-surface-variant">
                status: <span className="text-white">&apos;active&apos;</span>
              </div>
              <div className="pl-4 text-on-surface-variant">{"}"}));</div>
              <div className="text-[#699cff]">{"}"}</div>
            </CodeWindow>

            {/* Connecting Line */}
            <div className="flex justify-center -my-2 relative z-20">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 40 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="w-[2px] bg-gradient-to-b from-secondary to-transparent"
              ></motion.div>
            </div>

            {/* Resulting Doc Layer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="acrylic-card p-8 rounded-2xl shadow-2xl translate-x-6 border-l-4 border-l-secondary"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl machined-finish flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-secondary text-2xl">
                    auto_awesome
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-secondary font-mono text-sm mb-2 uppercase tracking-[0.2em] font-bold">
                    Method: processStream
                  </h3>
                  <p className="text-on-surface text-lg font-medium mb-5">
                    Parses incoming JSON streams and normalizes unique
                    identifier mapping for downstream consumers.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <AcrylicPanel className="p-3 rounded-lg">
                      <span className="text-[10px] text-on-surface-variant block uppercase mb-1 tracking-widest font-bold">
                        Return Type
                      </span>
                      <span className="text-xs font-mono text-tertiary">
                        Array&lt;ActiveRecord&gt;
                      </span>
                    </AcrylicPanel>
                    <AcrylicPanel className="p-3 rounded-lg">
                      <span className="text-[10px] text-on-surface-variant block uppercase mb-1 tracking-widest font-bold">
                        Latency
                      </span>
                      <span className="text-xs font-mono text-secondary">
                        ~14ms p99
                      </span>
                    </AcrylicPanel>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
