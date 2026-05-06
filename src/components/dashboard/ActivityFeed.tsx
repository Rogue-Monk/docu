"use client";

import { motion } from "framer-motion";
import { AcrylicCard } from "@/components/ui/AcrylicCard";
import { itemVariants } from "@/lib/animations";
import { ActivityItem } from "@/data/mockDashboardData";

const activityColorMap: Record<string, { bg: string; text: string }> = {
  secondary: { bg: "bg-secondary/10", text: "text-secondary" },
  tertiary: { bg: "bg-tertiary/10", text: "text-tertiary" },
  white: { bg: "bg-white/10", text: "text-on-surface-variant" },
};

interface ActivityFeedProps {
  activities: ActivityItem[];
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <motion.div variants={itemVariants} className="xl:col-span-1">
      <AcrylicCard className="flex flex-col h-full overflow-hidden !px-0 py-0 pb-0">
        <div className="p-5 border-b border-white/5 flex justify-between items-center">
          <h3 className="text-sm font-bold tracking-tight px-2">
            Recent Activity
          </h3>
          <button className="text-[10px] uppercase font-bold text-secondary hover:underline transition-all pr-2">
            View All
          </button>
        </div>
        <div className="p-2 space-y-1 overflow-y-auto max-h-[calc(100vh-280px)] hide-scrollbar">
          {activities.map((activity, i) => (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              key={i}
              className="p-3 hover:bg-white/5 rounded-lg transition-colors group cursor-default"
            >
              <div className="flex gap-3">
                <div className="mt-1">
                  <div
                    className={`w-8 h-8 rounded-full ${
                      activityColorMap[activity.color]?.bg ?? "bg-white/10"
                    } flex items-center justify-center`}
                  >
                    <span
                      className={`material-symbols-outlined ${
                        activityColorMap[activity.color]?.text ??
                        "text-on-surface-variant"
                      } text-sm`}
                    >
                      {activity.icon}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-on-surface leading-tight">
                    <span className="font-bold">{activity.name}</span>{" "}
                    {activity.action}{" "}
                    <span className="font-mono text-on-surface-variant">
                      {activity.target}
                    </span>
                  </p>
                  <p className="text-[10px] text-[#47474e] mt-1 font-mono">
                    {activity.time} • {activity.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-auto p-4 bg-white/5 border-t border-white/5">
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full border-2 border-[#131316] bg-tertiary"></div>
              <div className="w-6 h-6 rounded-full border-2 border-[#131316] bg-secondary"></div>
              <div className="w-6 h-6 rounded-full border-2 border-[#131316] bg-primary"></div>
              <div className="w-6 h-6 rounded-full bg-white/10 border-2 border-[#131316] flex items-center justify-center text-[8px] font-bold text-on-surface-variant">
                +12
              </div>
            </div>
            <span className="text-[10px] text-on-surface-variant font-medium">
              Team currently active
            </span>
          </div>
        </div>
      </AcrylicCard>
    </motion.div>
  );
}
