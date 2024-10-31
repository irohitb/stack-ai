"use client";
import "@stackai/ui/index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import SupabaseAuth from "./supabase-auth";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <QueryClientProvider client={queryClient}>
          <SupabaseAuth>
            <div>{children}</div>
          </SupabaseAuth>
        </QueryClientProvider>
      </body>
    </html>
  );
}
