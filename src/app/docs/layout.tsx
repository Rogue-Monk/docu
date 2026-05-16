
import { DocsSidebar } from "@/components/layout/DocsSidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background">

      <div className="flex flex-1 overflow-hidden">
        <DocsSidebar />
        <div className="flex-1 overflow-hidden relative pb-24 bg-[#0a0a0a]">
           {children}
        </div>
      </div>
    </div>
  );
}
