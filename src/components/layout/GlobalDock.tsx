"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";
import { GlobalSearchModal } from "@/components/ui/GlobalSearchModal";
import { Dock, DockItem } from "@/components/unlumen-ui/dock";
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

export function GlobalDock() {
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

  const items: DockItem[] = [
    {
      label: "Home",
      icon: <House weight="duotone" />,
      onClick: () => router.push("/"),
    },
    {
      label: "Docs",
      icon: <FileText weight="duotone" />,
      onClick: () => router.push("/docs"),
    },
    {
      label: "Dashboard",
      icon: <SquaresFour weight="duotone" />,
      onClick: () => router.push("/dashboard"),
    },
    {
      label: "API",
      icon: <Code weight="duotone" />,
      href: "#",
    },
    {
      label: "Search",
      icon: <MagnifyingGlass weight="duotone" />,
      onClick: () => setIsSearchOpen(true),
    },
    {
      label: "Settings",
      icon: <Gear weight="duotone" />,
      onClick: () => router.push("/settings"),
    },
    user
      ? {
          label: "Sign Out",
          icon: <SignOut weight="duotone" />,
          onClick: handleSignOut,
        }
      : {
          label: "Log In",
          icon: <SignIn weight="duotone" />,
          onClick: () => router.push("/login"),
        },
  ];

  return (
    <>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <Dock items={items} className="bg-[#0a0a0a]/80 border-[#27272a] backdrop-blur-md" />
      </div>
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
