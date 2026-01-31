import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = String(formData.get("name") || "").trim();

  if (!name) return NextResponse.redirect(new URL("/admin", req.url));

  const supabase = supabaseServer();
  await supabase.from("countries").insert({ name });

  return NextResponse.redirect(new URL("/admin", req.url));
}
