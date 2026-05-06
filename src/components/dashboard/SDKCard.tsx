"use client";

import { motion } from "framer-motion";
import { AcrylicCard } from "@/components/ui/AcrylicCard";
import { itemVariants } from "@/lib/animations";

export function SDKCard() {
  return (
    <motion.div variants={itemVariants} className="md:col-span-2">
      <AcrylicCard className="p-6">
        <div className="flex items-start gap-6">
          <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center border border-white/5 flex-shrink-0">
            <span
              className="material-symbols-outlined text-secondary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              javascript
            </span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-on-surface">
                Frontend SDK
              </h3>
              <span className="px-2.5 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 border border-secondary/20">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                Synced
              </span>
            </div>
            <p className="text-on-surface-variant text-sm mb-4 max-w-lg">
              TypeScript • Next.js Integration Layer. Automated documentation
              generated for version 4.2.0-alpha.
            </p>
            <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-4">
              <div>
                <p className="text-[0.65rem] uppercase text-[#47474e] font-bold mb-1">
                  Last Deploy
                </p>
                <p className="text-sm font-mono text-on-surface">
                  24 Oct, 14:20
                </p>
              </div>
              <div>
                <p className="text-[0.65rem] uppercase text-[#47474e] font-bold mb-1">
                  Coverage
                </p>
                <p className="text-sm font-mono text-secondary">94.2%</p>
              </div>
              <div>
                <p className="text-[0.65rem] uppercase text-[#47474e] font-bold mb-1">
                  Issues
                </p>
                <p className="text-sm font-mono text-on-surface">0 Open</p>
              </div>
            </div>
          </div>
        </div>
      </AcrylicCard>
    </motion.div>
  );
}
