import { Paths } from "@/constants/routes";
import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";
import stackAIApi from "../stackAi/api";

export const updateSession = async (request: NextRequest) => {
  // Create an unmodified response
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const protectedPaths = [Paths.DASHBOARD];
  const pathsToRedirectToProtectedPaths = [Paths.LOGIN];
  // This will refresh session if expired - required for Server Components
  // https://supabase.com/docs/guides/auth/server-side/nextjs
  const user = await supabase.auth.getUser();

  const currentPath = request.nextUrl.pathname;

  const protectedRouteRedirect = protectedPaths.find((el) => {
    return currentPath.startsWith(el);
  });

  const unProtectedRouteRedirect = pathsToRedirectToProtectedPaths.find(
    (el) => {
      return currentPath.startsWith(el);
    }
  );
  if (currentPath === "/") {
    if (user && !user.error) {
      return NextResponse.redirect(new URL(Paths.DASHBOARD, request.url));
    }
    return NextResponse.redirect(new URL(Paths.LOGIN, request.url));
  }
  // protected routes
  if ((!user || user.error) && protectedRouteRedirect) {
    return NextResponse.redirect(new URL(Paths.LOGIN, request.url));
  }

  if (user && !user.error && unProtectedRouteRedirect) {
    return NextResponse.redirect(new URL(Paths.DASHBOARD, request.url));
  }

  return response;
};
