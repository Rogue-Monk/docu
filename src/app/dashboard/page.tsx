"use client";

import { motion } from "framer-motion";
import { AcrylicCard } from "@/components/ui/AcrylicCard";
import { containerVariants, itemVariants } from "@/lib/animations";

// Static color map — Tailwind purges dynamically constructed classes at build time,
// so we must use complete class strings that the scanner can find.
const activityColorMap: Record<string, { bg: string; text: string }> = {
  secondary: { bg: "bg-secondary/10", text: "text-secondary" },
  tertiary:  { bg: "bg-tertiary/10",  text: "text-tertiary" },
  white:     { bg: "bg-white/10",     text: "text-on-surface-variant" },
};

export default function DashboardPage() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="flex flex-col h-full bg-transparent">
      <div className="mb-12">
        <motion.h2 variants={itemVariants} className="text-3xl font-extrabold tracking-tight text-on-surface mb-2">Systems Overview</motion.h2>
        <motion.p variants={itemVariants} className="text-on-surface-variant font-medium">Real-time synchronization and technical documentation status.</motion.p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 pb-24">
        {/* Left Column: Project Cards */}
        <div className="xl:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card: Backend API */}
            <motion.div variants={itemVariants}>
              <AcrylicCard className="p-6">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-6xl">api</span>
                </div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center border border-white/5">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 border border-secondary/20">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></span>
                    Synced
                  </span>
                </div>
                <h3 className="text-lg font-bold text-on-surface mb-1">Backend API</h3>
                <p className="text-on-surface-variant text-sm mb-4">Go v1.21 • GraphQL/REST endpoints</p>
                <div className="flex items-center gap-4 text-xs font-mono text-[#9a9a9a]">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">history</span> 12m ago</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">code</span> 1.4k lines</span>
                </div>
              </AcrylicCard>
            </motion.div>

            {/* Card: Core Engine */}
            <motion.div variants={itemVariants}>
              <AcrylicCard className="p-6">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-6xl">settings_input_component</span>
                </div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center border border-white/5">
                    <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>memory</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-tertiary/10 text-tertiary text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 border border-tertiary/20">
                    <span className="w-1.5 h-1.5 bg-tertiary rounded-full animate-pulse"></span>
                    Processing
                  </span>
                </div>
                <h3 className="text-lg font-bold text-on-surface mb-1">Core Engine</h3>
                <p className="text-on-surface-variant text-sm mb-4">Rust v1.75 • Memory Management</p>
                <div className="flex items-center gap-4 text-xs font-mono text-[#9a9a9a]">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">history</span> 2h ago</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">code</span> 42k lines</span>
                </div>
              </AcrylicCard>
            </motion.div>

            {/* Card: Frontend SDK */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <AcrylicCard className="p-6">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center border border-white/5 flex-shrink-0">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>javascript</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-on-surface">Frontend SDK</h3>
                      <span className="px-2.5 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 border border-secondary/20">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                        Synced
                      </span>
                    </div>
                    <p className="text-on-surface-variant text-sm mb-4 max-w-lg">TypeScript • Next.js Integration Layer. Automated documentation generated for version 4.2.0-alpha.</p>
                    <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-4">
                      <div>
                        <p className="text-[0.65rem] uppercase text-[#47474e] font-bold mb-1">Last Deploy</p>
                        <p className="text-sm font-mono text-on-surface">24 Oct, 14:20</p>
                      </div>
                      <div>
                        <p className="text-[0.65rem] uppercase text-[#47474e] font-bold mb-1">Coverage</p>
                        <p className="text-sm font-mono text-secondary">94.2%</p>
                      </div>
                      <div>
                        <p className="text-[0.65rem] uppercase text-[#47474e] font-bold mb-1">Issues</p>
                        <p className="text-sm font-mono text-on-surface">0 Open</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AcrylicCard>
            </motion.div>
          </div>

          {/* Bento Section: Analytics/Code recents */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={itemVariants} className="md:col-span-1">
              <AcrylicCard className="p-6 border border-white/5">
                <h4 className="text-xs font-bold uppercase text-[#47474e] mb-4 tracking-widest">Doc Health</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-on-surface-variant">API References</span>
                    <span className="text-secondary">98%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: "98%" }} transition={{ delay: 1, duration: 1 }} className="h-full bg-secondary rounded-full shadow-[0_0_8px_rgba(0,220,130,0.5)]"></motion.div>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-on-surface-variant">User Guides</span>
                    <span className="text-tertiary">72%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: "72%" }} transition={{ delay: 1.2, duration: 1 }} className="h-full bg-tertiary rounded-full shadow-[0_0_8px_rgba(67,136,253,0.5)]"></motion.div>
                  </div>
                </div>
              </AcrylicCard>
            </motion.div>
            
            <motion.div variants={itemVariants} className="md:col-span-2">
              <AcrylicCard className="p-6 border border-white/5">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xs font-bold uppercase text-[#47474e] tracking-widest">Active Instances</h4>
                  <span className="text-[10px] font-mono text-on-surface-variant">REGION: US-EAST-1</span>
                </div>
                <div className="flex items-end gap-1 h-24">
                  {[60, 45, 70, 85, 50, 90, 95, 65, 40, 55, 30, 75].map((height, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: 1 + (i * 0.05), type: "spring" }}
                      className={`flex-1 rounded-t-sm transition-all ${i === 6 ? 'bg-secondary/30 shadow-[0_-2px_10px_rgba(0,220,130,0.2)]' : 'bg-secondary/10 hover:bg-secondary/30'}`}
                    />
                  ))}
                </div>
              </AcrylicCard>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Recent Activity Feed */}
        <motion.div variants={itemVariants} className="xl:col-span-1">
          <AcrylicCard className="flex flex-col h-full overflow-hidden !px-0 py-0 pb-0">
            <div className="p-5 border-b border-white/5 flex justify-between items-center">
              <h3 className="text-sm font-bold tracking-tight px-2">Recent Activity</h3>
              <button className="text-[10px] uppercase font-bold text-secondary hover:underline transition-all pr-2">View All</button>
            </div>
            <div className="p-2 space-y-1 overflow-y-auto max-h-[calc(100vh-280px)] hide-scrollbar">
              {[
                { name: "alex_dev", action: "updated", target: "auth_flow.md", time: "34 min ago", detail: "commit: a4b2c1d", icon: "history_edu", color: "secondary" },
                { name: "ci_bot", action: "deployed", target: "v2.4.1-rc1", time: "1h 12m ago", detail: "production-us-east", icon: "terminal", color: "tertiary" },
                { name: "System", action: "re-synced", target: "Backend API", time: "2h ago", detail: "auto-trigger", icon: "sync", color: "secondary" },
                { name: "sarah_m", action: "joined the", target: "Core Engine team", time: "4h ago", detail: "administrator action", icon: "group_add", color: "white" }
              ].map((activity, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  key={i} 
                  className="p-3 hover:bg-white/5 rounded-lg transition-colors group cursor-default"
                >
                  <div className="flex gap-3">
                    <div className="mt-1">
                      <div className={`w-8 h-8 rounded-full ${activityColorMap[activity.color]?.bg ?? 'bg-white/10'} flex items-center justify-center`}>
                        <span className={`material-symbols-outlined ${activityColorMap[activity.color]?.text ?? 'text-on-surface-variant'} text-sm`}>{activity.icon}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-on-surface leading-tight">
                        <span className="font-bold">{activity.name}</span> {activity.action} <span className="font-mono text-on-surface-variant">{activity.target}</span>
                      </p>
                      <p className="text-[10px] text-[#47474e] mt-1 font-mono">{activity.time} • {activity.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-auto p-4 bg-white/5 border-t border-white/5">
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full border-2 border-[#131316] bg-tertiary"></div>
                  <div className="w-6 h-6 rounded-full border-2 border-[#131316] bg-secondary"></div>
                  <div className="w-6 h-6 rounded-full border-2 border-[#131316] bg-primary"></div>
                  <div className="w-6 h-6 rounded-full bg-white/10 border-2 border-[#131316] flex items-center justify-center text-[8px] font-bold text-on-surface-variant">+12</div>
                </div>
                <span className="text-[10px] text-on-surface-variant font-medium">Team currently active</span>
              </div>
            </div>
          </AcrylicCard>
        </motion.div>
      </div>
    </motion.div>
  );
}
