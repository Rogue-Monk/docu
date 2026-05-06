"use client";

import { motion } from "framer-motion";
import { AcrylicCard } from "@/components/ui/AcrylicCard";
import { itemVariants } from "@/lib/animations";
import { activeInstanceValues } from "@/data/mockDashboardData";

export function AnalyticsCards() {
  return (
    <>
      <motion.div variants={itemVariants} className="md:col-span-1">
        <AcrylicCard className="p-6 border border-white/5">
          <h4 className="text-xs font-bold uppercase text-[#47474e] mb-4 tracking-widest">
            Doc Health
          </h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs">
              <span className="text-on-surface-variant">API References</span>
              <span className="text-secondary">98%</span>
            </div>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "98%" }}
                transition={{ delay: 1, duration: 1 }}
                className="h-full bg-secondary rounded-full shadow-[0_0_8px_rgba(0,220,130,0.5)]"
              ></motion.div>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-on-surface-variant">User Guides</span>
              <span className="text-tertiary">72%</span>
            </div>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "72%" }}
                transition={{ delay: 1.2, duration: 1 }}
                className="h-full bg-tertiary rounded-full shadow-[0_0_8px_rgba(67,136,253,0.5)]"
              ></motion.div>
            </div>
          </div>
        </AcrylicCard>
      </motion.div>

      <motion.div variants={itemVariants} className="md:col-span-2">
        <AcrylicCard className="p-6 border border-white/5">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xs font-bold uppercase text-[#47474e] tracking-widest">
              Active Instances
            </h4>
            <span className="text-[10px] font-mono text-on-surface-variant">
              REGION: US-EAST-1
            </span>
          </div>
          <div className="flex items-end gap-1 h-24">
            {activeInstanceValues.map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: 1 + i * 0.05, type: "spring" }}
                className={`flex-1 rounded-t-sm transition-all ${
                  i === 6
                    ? "bg-secondary/30 shadow-[0_-2px_10px_rgba(0,220,130,0.2)]"
                    : "bg-secondary/10 hover:bg-secondary/30"
                }`}
              />
            ))}
          </div>
        </AcrylicCard>
      </motion.div>
    </>
  );
}
