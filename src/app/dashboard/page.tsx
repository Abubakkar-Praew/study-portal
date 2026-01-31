import Link from "next/link";
import { supabaseServer } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = supabaseServer();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return (
      <main className="max-w-xl mx-auto p-6">
        <p>You are not logged in.</p>
        <Link className="underline" href="/login">Go to login</Link>
      </main>
    );
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, role")
    .eq("id", user.id)
    .single();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-2">Name: <b>{profile?.full_name ?? "User"}</b></p>
      <p>Role: <b>{profile?.role ?? "student"}</b></p>

      <div className="mt-6 flex gap-3">
        <Link className="border rounded-lg px-4 py-2" href="/">Home</Link>
        {profile?.role === "admin" && (
          <Link className="border rounded-lg px-4 py-2" href="/admin">Admin Panel</Link>
        )}
      </div>
    </main>
  );
}
