"use client";

import { motion } from "framer-motion";
import { AcrylicCard } from "@/components/ui/AcrylicCard";
import { itemVariants } from "@/lib/animations";

export type SystemTheme = "secondary" | "tertiary";

export interface SystemCardProps {
  title: string;
  subtitle: string;
  statusText: string;
  icon: string;
  bgIcon: string;
  theme: SystemTheme;
  timeAgo: string;
  linesOfCode: string;
}

const themeMap = {
  secondary: {
    bg: "bg-secondary/10",
    text: "text-secondary",
    border: "border-secondary/20",
    pulse: "bg-secondary",
  },
  tertiary: {
    bg: "bg-tertiary/10",
    text: "text-tertiary",
    border: "border-tertiary/20",
    pulse: "bg-tertiary",
  },
};

export function SystemCard({
  title,
  subtitle,
  statusText,
  icon,
  bgIcon,
  theme,
  timeAgo,
  linesOfCode,
}: SystemCardProps) {
  const styles = themeMap[theme];

  return (
    <motion.div variants={itemVariants}>
      <AcrylicCard className="p-6">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <span className="material-symbols-outlined text-6xl">{bgIcon}</span>
        </div>
        <div className="flex justify-between items-start mb-6">
          <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center border border-white/5">
            <span
              className={`material-symbols-outlined ${styles.text}`}
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {icon}
            </span>
          </div>
          <span
            className={`px-2.5 py-1 rounded-full ${styles.bg} ${styles.text} text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 border ${styles.border}`}
          >
            <span
              className={`w-1.5 h-1.5 ${styles.pulse} rounded-full animate-pulse`}
            ></span>
            {statusText}
          </span>
        </div>
        <h3 className="text-lg font-bold text-on-surface mb-1">{title}</h3>
        <p className="text-on-surface-variant text-sm mb-4">{subtitle}</p>
        <div className="flex items-center gap-4 text-xs font-mono text-[#9a9a9a]">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">history</span>{" "}
            {timeAgo}
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">code</span>{" "}
            {linesOfCode}
          </span>
        </div>
      </AcrylicCard>
    </motion.div>
  );
}
