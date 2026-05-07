"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";
import { GlobalSearchModal } from "@/components/ui/GlobalSearchModal";
import { createClient } from "@/utils/supabase/client";

export function TopNav() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
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
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      if (event === 'SIGNED_OUT') {
        router.refresh();
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase.auth, router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 w-full z-40 acrylic-panel flex justify-between items-center px-6 h-16 font-sans text-sm tracking-tight border-b border-white/5 bg-black/50 backdrop-blur-md"
      >
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-black tracking-tighter text-[#ffffff] flex items-center gap-2 group">
            <span className="w-2 h-6 bg-secondary rounded-full group-hover:scale-110 transition-transform"></span>
            EngineDoc
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link
              className="text-secondary font-semibold relative after:absolute after:bottom-[-20px] after:left-0 after:w-full after:h-[2px] after:bg-secondary"
              href="/docs"
            >
              Docs
            </Link>
            <Link
              className="text-on-surface-variant hover:text-on-surface transition-colors"
              href="/dashboard"
            >
              Dashboard
            </Link>
            <Link
              className="text-on-surface-variant hover:text-on-surface transition-colors"
              href="#"
            >
              API
            </Link>
            <Link
              className="text-on-surface-variant hover:text-on-surface transition-colors"
              href="#"
            >
              Changelog
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div 
            onClick={() => setIsSearchOpen(true)}
            className="hidden lg:flex items-center px-3 py-1.5 acrylic-panel rounded-lg text-on-surface-variant mr-2 cursor-pointer hover:bg-white/5 transition-colors"
          >
            <span className="material-symbols-outlined text-sm mr-2">search</span>
            <span className="text-[10px] uppercase tracking-widest opacity-50">Quick Search</span>
            <span className="ml-4 text-[10px] bg-black/40 px-1.5 py-0.5 rounded border border-white/10 font-mono">
              ⌘K
            </span>
          </div>
          <button className="material-symbols-outlined text-on-surface-variant hover:text-on-surface transition-colors">
            notifications
          </button>
          <Link href="/settings" className="material-symbols-outlined text-on-surface-variant hover:text-on-surface transition-colors">
            settings
          </Link>
          
          {user ? (
            <div className="flex items-center gap-3 ml-2 border-l border-white/10 pl-4">
              <span className="text-xs text-on-surface-variant hidden md:block truncate max-w-[120px]">{user.email}</span>
              <button 
                onClick={handleSignOut}
                className="text-xs font-bold text-white/70 hover:text-white transition-colors uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3 ml-2 border-l border-white/10 pl-4">
              <Link href="/login">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="machined-finish text-on-secondary font-bold px-5 py-2 rounded-lg text-xs uppercase tracking-wider"
                >
                  Log In
                </motion.button>
              </Link>
            </div>
          )}
        </div>
      </motion.nav>
      <GlobalSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
