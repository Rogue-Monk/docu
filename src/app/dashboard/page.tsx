"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { SystemCard } from "@/components/dashboard/SystemCard";
import { SDKCard } from "@/components/dashboard/SDKCard";
import { AnalyticsCards } from "@/components/dashboard/AnalyticsCards";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";

export default function DashboardPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col h-full bg-transparent"
    >
      <div className="mb-12">
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

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 pb-24">
        {/* Left Column: Project Cards */}
        <div className="xl:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card: Backend API */}
            <SystemCard
              title="Backend API"
              subtitle="Go v1.21 • GraphQL/REST endpoints"
              statusText="Synced"
              icon="terminal"
              bgIcon="api"
              theme="secondary"
              timeAgo="12m ago"
              linesOfCode="1.4k lines"
            />

            {/* Card: Core Engine */}
            <SystemCard
              title="Core Engine"
              subtitle="Rust v1.75 • Memory Management"
              statusText="Processing"
              icon="memory"
              bgIcon="settings_input_component"
              theme="tertiary"
              timeAgo="2h ago"
              linesOfCode="42k lines"
            />

            {/* Card: Frontend SDK */}
            <SDKCard />
          </div>

          {/* Bento Section: Analytics/Code recents */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnalyticsCards />
          </div>
        </div>

        {/* Right Column: Recent Activity Feed */}
        <ActivityFeed />
      </div>
    </motion.div>
  );
}
