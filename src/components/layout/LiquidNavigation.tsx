"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";
import { GlobalSearchModal } from "@/components/ui/GlobalSearchModal";
import { motion, AnimatePresence } from "framer-motion";
import {
  House,
  FileText,
  SquaresFour,
  Code,
  MagnifyingGlass,
  Gear,
  SignOut,
  SignIn,
} from "@phosphor-icons/react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

export function LiquidNavigation() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const supabase = createClient();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        if (event === "SIGNED_OUT") {
          router.refresh();
        }
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase.auth, router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  const items: NavItem[] = [
    {
      id: "/",
      label: "Home",
      icon: <House weight="duotone" size={20} />,
      onClick: () => router.push("/"),
    },
    {
      id: "/docs",
      label: "Docs",
      icon: <FileText weight="duotone" size={20} />,
      onClick: () => router.push("/docs"),
    },
    {
      id: "/dashboard",
      label: "Dashboard",
      icon: <SquaresFour weight="duotone" size={20} />,
      onClick: () => router.push("/dashboard"),
    },
    {
      id: "/api",
      label: "API",
      icon: <Code weight="duotone" size={20} />,
      href: "#",
    },
    {
      id: "search",
      label: "Search",
      icon: <MagnifyingGlass weight="duotone" size={20} />,
      onClick: () => setIsSearchOpen(true),
    },
    {
      id: "/settings",
      label: "Settings",
      icon: <Gear weight="duotone" size={20} />,
      onClick: () => router.push("/settings"),
    },
    user
      ? {
          id: "auth-out",
          label: "Sign Out",
          icon: <SignOut weight="duotone" size={20} />,
          onClick: handleSignOut,
        }
      : {
          id: "auth-in",
          label: "Log In",
          icon: <SignIn weight="duotone" size={20} />,
          onClick: () => router.push("/login"),
        },
  ];

  return (
    <>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <motion.div 
          className="flex items-center gap-2 p-3 bg-white/50 dark:bg-[#0a0a0a]/50 backdrop-blur-2xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-full shadow-lg dark:shadow-[0_8px_32px_rgba(255,255,255,0.03)]"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {items.map((item) => {
            const isActive = pathname === item.id || (item.id === "search" && isSearchOpen);
            
            return (
              <button
                key={item.id}
                onClick={item.onClick}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative flex items-center justify-center w-12 h-12 rounded-full text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-300 outline-none"
              >
                {/* Active Indicator Background */}
                {isActive && (
                  <motion.div
                    layoutId="liquid-active"
                    className="absolute inset-0 bg-black dark:bg-white rounded-full z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                {/* Hover Indicator Background (only when not active) */}
                {hoveredId === item.id && !isActive && (
                  <motion.div
                    layoutId="liquid-hover"
                    className="absolute inset-0 bg-neutral-200/60 dark:bg-neutral-800/60 rounded-full z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                
                {/* Icon */}
                <span className={`relative z-10 transition-colors duration-300 ${isActive ? "text-white dark:text-black" : ""}`}>
                  {item.icon}
                </span>
                
                {/* Tooltip */}
                <AnimatePresence>
                  {hoveredId === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: -45, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="absolute -top-2 pointer-events-none px-3 py-1.5 bg-black/90 dark:bg-white/90 text-white dark:text-black text-xs font-semibold rounded-lg shadow-xl whitespace-nowrap z-50 backdrop-blur-md border border-white/10 dark:border-black/10"
                    >
                      {item.label}
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </motion.div>
      </div>
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
