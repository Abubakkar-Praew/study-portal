import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/admin")) {
    // Check for demo mode cookie first (for testing without NextAuth)
    const demoMode = req.cookies.get("demo_admin")?.value;

    if (demoMode === "true") {
      // Demo mode enabled - allow access
      return NextResponse.next();
    }

    try {
      const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

      if (!token) {
        const url = req.nextUrl.clone();
        url.pathname = "/login";
        url.searchParams.set("next", pathname);
        return NextResponse.redirect(url);
      }

      if ((token as any).role !== "ADMIN") {
        const url = req.nextUrl.clone();
        url.pathname = "/unauthorized";
        return NextResponse.redirect(url);
      }
    } catch (err) {
      // NextAuth error - allow demo mode
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
