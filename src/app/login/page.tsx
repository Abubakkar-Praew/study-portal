"use client";

import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const supabase = supabaseBrowser();
  const router = useRouter();

  const [mode, setMode] = useState<"login" | "signup">("login");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);

    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: fullName } },
      });
      if (error) return setErr(error.message);
      router.push("/dashboard");
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return setErr(error.message);
    router.push("/dashboard");
  }

  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold">{mode === "login" ? "Login" : "Create Account"}</h1>

      <form onSubmit={onSubmit} className="mt-6 grid gap-3">
        {mode === "signup" && (
          <input
            className="border rounded-lg p-2"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        )}

        <input
          className="border rounded-lg p-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border rounded-lg p-2"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="border rounded-lg p-2 font-semibold" type="submit">
          {mode === "login" ? "Login" : "Sign up"}
        </button>

        <button
          className="underline text-sm"
          type="button"
          onClick={() => setMode(mode === "login" ? "signup" : "login")}
        >
          Switch to {mode === "login" ? "Sign up" : "Login"}
        </button>

        {err && <p className="text-red-600">{err}</p>}
      </form>
    </main>
  );
}
