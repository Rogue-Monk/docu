import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { DashboardHeader } from "@/components/layout/DashboardHeader";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-[#0e0e10] min-h-screen overflow-hidden">
      <DashboardSidebar />
      <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
        <DashboardHeader />
        <div className="mt-16 p-8 flex-1 overflow-y-auto hide-scrollbar z-10">
          {children}
        </div>
      </main>
    </div>
  );
}
