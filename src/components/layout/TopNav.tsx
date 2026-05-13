"use client";

import Link from "next/link";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";
import { GlobalSearchModal } from "@/components/ui/GlobalSearchModal";
import { createClient } from "@/utils/supabase/client";
import GlassDock from "@/components/ui/glass-dock";
import {
  Home,
  FileText,
  LayoutDashboard,
  Code,
  Search,
  Settings,
  LogOut,
  LogIn,
} from "lucide-react";

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

  const items = [
    {
      title: "Home",
      icon: Home,
      onClick: () => router.push("/"),
    },
    {
      title: "Docs",
      icon: FileText,
      onClick: () => router.push("/docs"),
    },
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      onClick: () => router.push("/dashboard"),
    },
    {
      title: "API",
      icon: Code,
      href: "#",
    },
    {
      title: "Search",
      icon: Search,
      onClick: () => setIsSearchOpen(true),
    },
    {
      title: "Settings",
      icon: Settings,
      onClick: () => router.push("/settings"),
    },
    user
      ? {
          title: "Sign Out",
          icon: LogOut,
          onClick: handleSignOut,
        }
      : {
          title: "Log In",
          icon: LogIn,
          onClick: () => router.push("/login"),
        },
  ];

  return (
    <>
      <div className="fixed top-6 left-6 z-50">
        <Link href="/" className="text-xl font-bold tracking-tighter text-[#ffffff] flex items-center gap-2 group px-4 py-2 rounded-xl bg-[#0a0a0a] border border-[#27272a] hover:bg-[#111111] hover:border-[#3f3f46] transition-colors shadow-sm">
          <span className="w-2 h-6 bg-primary rounded-full group-hover:scale-110 transition-transform"></span>
          EngineDoc
        </Link>
      </div>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <GlassDock items={items} />
      </div>
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
