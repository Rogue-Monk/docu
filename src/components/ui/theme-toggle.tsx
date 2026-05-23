"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Eclipse } from "@theme-toggles/react";
import "@theme-toggles/react/styles/eclipse.css";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-[52px] h-[52px] rounded-full bg-white/80 dark:bg-[#0a0a0a]/80 border border-neutral-200 dark:border-[#27272a] backdrop-blur-md shadow-lg text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-[#1f1f22] transition-colors">
      <Eclipse
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="text-2xl cursor-pointer"
      />
    </div>
  );
}
