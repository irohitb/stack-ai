"use client";
import React from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useQueryClient } from "react-query";
import stackAIApi from "@/utils/stackAi/api";
import { Spinner } from "@stackai/ui/src/components/ui/spinner";
import { User } from "@supabase/supabase-js";
import { SUPABASE_TOKEN } from "@/constants/local-storage";

type SupabaseContext = {
  user?: User;
};

const Context = React.createContext<SupabaseContext | undefined>(undefined);

export default function SupabaseAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = React.useState<User>();
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
        stackAIApi.defaults.headers["Authorization"] = "";
        localStorage.removeItem(SUPABASE_TOKEN);
      }
      if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
        stackAIApi.defaults.headers["Authorization"] =
          `Bearer ${session?.access_token}`;

        localStorage.setItem(SUPABASE_TOKEN, session?.access_token as string);
      }

      if (!isAppLoaded) {
        setIsAppLoaded(true);
      }
      setUser(session?.user);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase]);

  return (
    <Context.Provider value={{ user }}>
      {isAppLoaded ? (
        <>{children} </>
      ) : (
        <div className="flex justify-center items-center w-screen h-screen">
          <Spinner size="lg" variant="secondary" />
        </div>
      )}
    </Context.Provider>
  );
}

export const useSupabaseUser = () => {
  const context = React.useContext(Context);

  if (context === undefined) {
    throw new Error("useSupabaseUser must be used inside SupabaseProvider");
  }

  return context;
};
