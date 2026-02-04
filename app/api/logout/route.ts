import { NextResponse } from "next/server";

export async function GET() {
  // Create response that redirects to login
  const response = NextResponse.redirect(new URL("/login", process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"));

  // Clear the demo_admin cookie
  response.cookies.set("demo_admin", "", { maxAge: 0, path: "/" });

  return response;
}
