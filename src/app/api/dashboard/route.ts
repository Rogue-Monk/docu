import { NextResponse } from "next/server";
import { recentActivities, activeInstanceValues } from "@/data/mockDashboardData";

export async function GET() {
  // Simulate network latency (between 600ms and 1500ms)
  const delay = Math.floor(Math.random() * 900) + 600;
  await new Promise((resolve) => setTimeout(resolve, delay));

  // Let's add some dynamic flair to make it feel "real"
  // We'll shuffle the activeInstanceValues slightly to simulate a changing graph
  const shuffledInstances = [...activeInstanceValues].map(
    (val) => val + Math.floor(Math.random() * 20 - 10) // add random noise +/- 10
  );

  // We can also calculate real times for the activity feed here if we wanted to.
  // For now, we'll return the mock data along with the randomized graph.

  return NextResponse.json({
    success: true,
    data: {
      activities: recentActivities,
      activeInstances: shuffledInstances,
      lastUpdated: new Date().toISOString(),
    },
  });
}
