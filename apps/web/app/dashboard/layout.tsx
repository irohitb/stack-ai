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
    <SidebarProvider>
      <LeftSidebar />
      {children}
    </SidebarProvider>
  );
}
