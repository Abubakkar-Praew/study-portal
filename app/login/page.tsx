"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Simulate login - replace with actual API call
      if (!email || !password) {
        setError("Please fill in all fields");
        return;
      }

      // Mock validation
      if (!email.includes("@")) {
        setError("Please enter a valid email");
        return;
      }

      if (password.length < 6) {
        setError("Password must be at least 6 characters");
        return;
      }

      // Here you would make an actual API call
      console.log("Login attempt:", { email, password });
      alert("Login successful! (Demo mode - implement real auth)");
      
      // Redirect to dashboard
      // router.push("/dashboard");
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "#E8F1FF" }}>
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-white font-semibold"
                style={{ backgroundColor: "#3B82F6" }}
              >
                SP
              </span>
              <span className="text-xl font-semibold" style={{ color: "#1F2937" }}>
                Study Portal
              </span>
            </div>
            <h1 className="text-2xl font-bold" style={{ color: "#1F2937" }}>
              Welcome Back
            </h1>
            <p className="mt-2 text-sm" style={{ color: "#6B7280" }}>
              Sign in to your account to continue
            </p>
          </div>

          {error && (
            <div
              className="mb-4 p-3 rounded-lg text-sm"
              style={{ backgroundColor: "#FEE2E2", color: "#991B1B" }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
                style={{ color: "#1F2937" }}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                style={{
                  borderColor: "#BFDBFE",
                  color: "#1F2937",
                }}
                onFocus={(e) => (e.target.style.ringColor = "#3B82F6")}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
                style={{ color: "#1F2937" }}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                style={{
                  borderColor: "#BFDBFE",
                  color: "#1F2937",
                }}
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded"
                  style={{ accentColor: "#3B82F6" }}
                />
                <span style={{ color: "#6B7280" }}>Remember me</span>
              </label>
              <Link
                href="#"
                className="hover:underline"
                style={{ color: "#3B82F6" }}
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 rounded-lg font-medium text-white hover:opacity-90 transition disabled:opacity-50"
              style={{ backgroundColor: "#3B82F6" }}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span style={{ color: "#6B7280" }}>Don't have an account? </span>
            <Link
              href="/register"
              className="font-semibold hover:underline"
              style={{ color: "#3B82F6" }}
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
