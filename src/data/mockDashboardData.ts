export type ActivityTheme = "secondary" | "tertiary" | "white";

export interface ActivityItem {
  name: string;
  action: string;
  target: string;
  time: string;
  detail: string;
  icon: string;
  color: ActivityTheme;
}

export const recentActivities: ActivityItem[] = [
  { 
    name: "alex_dev", 
    action: "updated", 
    target: "auth_flow.md", 
    time: "34 min ago", 
    detail: "commit: a4b2c1d", 
    icon: "history_edu", 
    color: "secondary" 
  },
  { 
    name: "ci_bot", 
    action: "deployed", 
    target: "v2.4.1-rc1", 
    time: "1h 12m ago", 
    detail: "production-us-east", 
    icon: "terminal", 
    color: "tertiary" 
  },
  { 
    name: "System", 
    action: "re-synced", 
    target: "Backend API", 
    time: "2h ago", 
    detail: "auto-trigger", 
    icon: "sync", 
    color: "secondary" 
  },
  { 
    name: "sarah_m", 
    action: "joined the", 
    target: "Core Engine team", 
    time: "4h ago", 
    detail: "administrator action", 
    icon: "group_add", 
    color: "white" 
  }
];

export const activeInstanceValues = [60, 45, 70, 85, 50, 90, 95, 65, 40, 55, 30, 75];
