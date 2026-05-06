import { TopNav } from "@/components/layout/TopNav";
import { DocsSidebar } from "@/components/layout/DocsSidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background">
      <TopNav />
      <div className="flex flex-1 pt-16 overflow-hidden">
        <DocsSidebar />
        <div className="flex-1 overflow-hidden relative" style={{ background: "radial-gradient(circle at 50% 0%, rgba(0, 220, 130, 0.03) 0%, transparent 50%), #0e0e0e" }}>
           {children}
        </div>
      </div>
    </div>
  );
}
