"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function AcrylicCard({ className, children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={cn("acrylic-card p-10 rounded-3xl group overflow-hidden relative", className)}
      whileHover={{ y: -4, borderColor: "rgba(70, 250, 156, 0.3)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function AcrylicPanel({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("acrylic-panel", className)} {...props}>
      {children}
    </div>
  );
}
