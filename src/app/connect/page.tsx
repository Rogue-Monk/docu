"use client";

import { motion, Variants } from "framer-motion";
import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/Footer";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function ConnectPage() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-secondary/30 min-h-screen flex flex-col pt-16">
      <TopNav />
      {/* Background Gradient Decor */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-secondary/10 blur-[120px] -z-10 rounded-full"></div>
      <div className="fixed bottom-1/4 right-1/4 w-64 h-64 bg-tertiary/10 blur-[120px] -z-10 rounded-full"></div>

      <main className="flex-grow pt-24 pb-12 px-6 flex flex-col items-center justify-center">
        <motion.section 
          variants={containerVariants} 
          initial="hidden" 
          animate="show"
          className="max-w-4xl w-full"
        >
          <div className="mb-10 text-center">
            <motion.h1 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-4 text-on-surface">Connect Repository</motion.h1>
            <motion.p variants={itemVariants} className="text-on-surface-variant text-lg max-w-xl mx-auto">
              Sync your documentation codebase directly or upload local files to begin the parsing process.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 flex flex-col gap-6">
              {/* GitHub Connect Card */}
              <motion.div variants={itemVariants} className="acrylic-card rounded-xl p-8 border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 blur-3xl -z-10 group-hover:bg-secondary/10 transition-colors"></div>
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center border border-white/5">
                      <span className="material-symbols-outlined text-3xl text-on-surface">source</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">GitHub Repository</h3>
                      <p className="text-sm text-on-surface-variant">Import from public or private repos</p>
                    </div>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-secondary text-on-secondary font-bold px-6 py-2.5 rounded-lg text-sm transition-all flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-lg">link</span>
                    Connect GitHub
                  </motion.button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-black/50 p-4 rounded-lg border border-white/5">
                    <span className="material-symbols-outlined text-on-surface-variant">search</span>
                    <input className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-on-surface-variant/50 text-white outline-none" placeholder="https://github.com/username/repository" type="text"/>
                  </div>
                </div>
              </motion.div>

              {/* File & Paste Split */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div variants={itemVariants} className="acrylic-card rounded-xl p-6 border border-white/5 hover:border-secondary/20 transition-all cursor-pointer group">
                  <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center border border-white/5 mb-4 group-hover:bg-secondary/10 transition-colors">
                    <span className="material-symbols-outlined text-secondary">upload_file</span>
                  </div>
                  <h4 className="text-md font-semibold text-white mb-1">Local Files</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Upload .zip, .tar, or individual markdown/code files.</p>
                </motion.div>
                <motion.div variants={itemVariants} className="acrylic-card rounded-xl p-6 border border-white/5 hover:border-tertiary/20 transition-all cursor-pointer group">
                  <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center border border-white/5 mb-4 group-hover:bg-tertiary/10 transition-colors">
                    <span className="material-symbols-outlined text-tertiary">content_paste</span>
                  </div>
                  <h4 className="text-md font-semibold text-white mb-1">Paste Snippet</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Directly paste code or documentation for instant analysis.</p>
                </motion.div>
              </div>
            </div>

            {/* Status / Progress Column */}
            <motion.div variants={itemVariants} className="md:col-span-4">
              <div className="acrylic-card rounded-xl p-6 border border-white/5 h-full flex flex-col relative overflow-hidden">
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">System Status</h3>
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                </div>
                
                {/* Sleek Progress Indicator */}
                <div className="flex-grow flex flex-col justify-center relative z-10">
                  <div className="mb-8">
                    <div className="flex justify-between items-end mb-3">
                      <span className="text-3xl font-bold text-white">64%</span>
                      <span className="text-xs font-semibold text-secondary uppercase">Parsing Schema</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }} 
                        animate={{ width: "64%" }} 
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-secondary to-[#00A662] rounded-full shadow-[0_0_12px_rgba(70,250,156,0.4)]"
                      ></motion.div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                      <span className="text-xs text-white font-medium">Cloning repository branch: <code className="text-[10px] bg-white/5 px-1.5 py-0.5 rounded text-white">main</code></span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                      <span className="text-xs text-white font-medium">Validating config manifest</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full border-2 border-secondary/30 border-t-secondary animate-spin"></div>
                      <span className="text-xs text-white font-medium">Analyzing dependency graph</span>
                    </div>
                    <div className="flex items-center gap-3 opacity-30">
                      <span className="material-symbols-outlined text-on-surface-variant text-sm">pending</span>
                      <span className="text-xs text-on-surface-variant font-medium">Generating documentation nodes</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/5 relative z-10">
                  <div className="flex items-center justify-between text-[10px] text-on-surface-variant uppercase tracking-tighter">
                    <span>Worker ID: ED-992-X</span>
                    <span>Elapsed: 12.4s</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
