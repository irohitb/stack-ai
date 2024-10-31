import {
  Card,
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarFooter,
} from "@stackai/ui";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("DASHBOARD");
  return (
    <div className="max-w-7xl flex flex-col gap-12 items-start">
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader />
          <SidebarContent>
            <SidebarGroup>Connections</SidebarGroup>
            <SidebarGroup>Connections</SidebarGroup>
            <SidebarGroup>Connections</SidebarGroup>
            <SidebarGroup />
          </SidebarContent>
          <SidebarFooter />
        </Sidebar>
        {children}
      </SidebarProvider>
    </div>
  );
}
