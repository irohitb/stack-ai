"use client";
import React from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useQueryClient } from "react-query";

export default function SupabaseAuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = useQueryClient();
  const supabase = createClient();
  const router = useRouter();

  React.useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      console.log("EVENT:", event);
      if (event === "SIGNED_OUT") {
        queryClient.invalidateQueries();
        router.refresh();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase]);

  return (
    <>
      <>{children}</>
    </>
  );
}
