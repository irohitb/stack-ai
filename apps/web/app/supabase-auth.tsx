"use client";
import React from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useQueryClient } from "react-query";
import { Skeleton } from "@stackai/ui";
import stackAIApi from "@/utils/stackAi/api";
import { getAllFolders } from "@/utils/stackAi/folder";
import { Spinner } from "@stackai/ui/src/components/ui/spinner";

export default function SupabaseAuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAppLoaded, setIsAppLoaded] = React.useState(false);
  const queryClient = useQueryClient();
  const supabase = createClient();
  const router = useRouter();

  React.useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_OUT") {
        queryClient.invalidateQueries();
        router.refresh();
        stackAIApi.defaults.headers.common["Authorization"] = "";
      }
      if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
        stackAIApi.defaults.headers.common["Authorization"] =
          `Bearer ${session?.access_token}`;
      }
      if (!isAppLoaded) {
        setIsAppLoaded(true);
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase]);

  return (
    <>
      {isAppLoaded ? (
        <>{children} </>
      ) : (
        <div className="flex justify-center items-center w-screen h-screen">
          <Spinner size="lg" variant="secondary" />
        </div>
      )}
    </>
  );
}
