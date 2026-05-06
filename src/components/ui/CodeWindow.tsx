"use client";

import { ReactNode } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

interface CodeWindowProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  variant?: "minimal" | "detailed";
  filename?: string;
}

export function CodeWindow({ children, variant = "minimal", filename, className, ...props }: CodeWindowProps) {
  if (variant === "detailed") {
    return (
      <motion.div className={cn("bg-[#131316] rounded-xl overflow-hidden border border-white/5 shadow-2xl code-glow", className)} {...props}>
        <div className="bg-[#19191d] px-4 py-3 flex items-center gap-2 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-error/40 border border-black hover:bg-error transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-[#fbbc04]/40 border border-black hover:bg-[#fbbc04] transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-secondary/40 border border-black hover:bg-secondary transition-colors"></div>
          </div>
          {filename && <span className="text-xs font-mono text-on-surface-variant ml-2 tracking-widest uppercase">{filename}</span>}
        </div>
        <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto custom-scrollbar">
          {children}
        </div>
      </motion.div>
    );
  }

  return (
    <div className={cn("acrylic-panel p-1 rounded-2xl shadow-2xl", className)}>
      <div className="bg-black/80 rounded-xl p-8 font-mono text-[13px] leading-relaxed overflow-hidden relative code-glow">
        <div className="absolute top-5 right-6 flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
        </div>
        {children}
      </div>
    </div>
  );
}
