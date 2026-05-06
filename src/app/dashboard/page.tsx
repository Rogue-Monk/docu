"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { SystemCard } from "@/components/dashboard/SystemCard";
import { SDKCard } from "@/components/dashboard/SDKCard";
import { AnalyticsCards } from "@/components/dashboard/AnalyticsCards";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { ActivityItem } from "@/data/mockDashboardData";

interface DashboardData {
  activities: ActivityItem[];
  activeInstances: number[];
  lastUpdated: string;
}

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDashboardData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/dashboard");
      const json = await res.json();
      if (json.success) {
        setData(json.data);
      }
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data on initial component mount
  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col h-full bg-transparent"
    >
      <div className="mb-12 flex justify-between items-end">
        <div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-extrabold tracking-tight text-on-surface mb-2"
          >
            Systems Overview
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-on-surface-variant font-medium"
          >
            Real-time synchronization and technical documentation status.
          </motion.p>
        </div>
        
        {/* Refresh Button */}
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={fetchDashboardData}
          disabled={isLoading}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-bold text-on-surface-variant disabled:opacity-50"
        >
          <span className={`material-symbols-outlined text-sm ${isLoading ? "animate-spin text-secondary" : ""}`}>
            refresh
          </span>
          {isLoading ? "SYNCING..." : "REFRESH"}
        </motion.button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 pb-24">
        {/* Left Column: Project Cards */}
        <div className="xl:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card: Backend API */}
            <SystemCard
              title="Backend API"
              subtitle="Go v1.21 • GraphQL/REST endpoints"
              statusText={isLoading ? "Syncing..." : "Synced"}
              icon="terminal"
              bgIcon="api"
              theme="secondary"
              timeAgo={data ? "Just now" : "..."}
              linesOfCode="1.4k lines"
            />

            {/* Card: Core Engine */}
            <SystemCard
              title="Core Engine"
              subtitle="Rust v1.75 • Memory Management"
              statusText={isLoading ? "Processing..." : "Processing"}
              icon="memory"
              bgIcon="settings_input_component"
              theme="tertiary"
              timeAgo={data ? "2m ago" : "..."}
              linesOfCode="42k lines"
            />

            {/* Card: Frontend SDK */}
            <SDKCard />
          </div>

          {/* Bento Section: Analytics/Code recents */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 
              We only pass the data down if it exists. 
              If it doesn't exist yet, we can pass an empty array to simulate a loading state 
              or the graph starting from zero.
            */}
            <AnalyticsCards activeInstances={data?.activeInstances || Array(12).fill(0)} />
          </div>
        </div>

        {/* Right Column: Recent Activity Feed */}
        <div className="relative h-full">
          {isLoading && (
             <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#0a0a0c]/60 backdrop-blur-sm rounded-2xl border border-white/5">
                <div className="flex flex-col items-center gap-4">
                   <div className="w-8 h-8 border-4 border-secondary/20 border-t-secondary rounded-full animate-spin"></div>
                   <span className="text-xs font-bold uppercase tracking-widest text-secondary animate-pulse">Syncing Network</span>
                </div>
             </div>
          )}
          <ActivityFeed activities={data?.activities || []} />
        </div>
      </div>
    </motion.div>
  );
}
