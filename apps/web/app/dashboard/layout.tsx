import { Paths } from "@/constants/routes";
import { SidebarProvider } from "@stackai/ui";
import { Settings } from "lucide-react";
import LeftSidebar from "./Sidebar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl flex flex-col gap-12 items-start">
      <SidebarProvider>
        <LeftSidebar />
        {children}
      </SidebarProvider>
    </div>
  );
}
