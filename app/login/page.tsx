"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("abubakkarPraew@gmail.com");
  const [password, setPassword] = useState("956615731");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotMessage, setForgotMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Validate inputs
      if (!email || !password) {
        setError("Please fill in all fields");
        setLoading(false);
        return;
      }

      // Mock validation
      if (!email.includes("@")) {
        setError("Please enter a valid email");
        setLoading(false);
        return;
      }

      if (password.length < 6) {
        setError("Password must be at least 6 characters");
        setLoading(false);
        return;
      }

      // Check demo admin credentials
      const DEMO_ADMIN_EMAIL = "abubakkarPraew@gmail.com";
      const DEMO_PASSWORD = "956615731";

      if (email === DEMO_ADMIN_EMAIL && password === DEMO_PASSWORD) {
        // Set demo mode cookie
        document.cookie = "demo_admin=true; path=/; max-age=86400";

        // Redirect to admin
        console.log("Login successful - Admin login");
        await new Promise((resolve) => setTimeout(resolve, 100));
        router.push("/admin");
      } else {
        setError("Invalid email or password. Use the demo admin credentials.");
        setLoading(false);
      }
    } catch (err) {
      setError("Login failed. Please try again.");
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setForgotMessage("");

    try {
      if (!forgotEmail) {
        setForgotMessage("Please enter your email address");
        return;
      }

      if (!forgotEmail.includes("@")) {
        setForgotMessage("Please enter a valid email");
        return;
      }

      // Here you would make an API call to send reset link
      console.log("Forgot password request for:", forgotEmail);
      setForgotMessage("Password reset link has been sent to your email!");
      setForgotEmail("");

      // Close modal after 3 seconds
      setTimeout(() => {
        setShowForgotPassword(false);
        setForgotMessage("");
      }, 3000);
    } catch (err) {
      setForgotMessage("Failed to process request. Please try again.");
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

            <div className="mt-4 p-3 rounded-lg text-xs bg-blue-50 border border-blue-200 space-y-2">
              <p className="font-semibold text-blue-900">Demo Account</p>
              <p className="text-blue-800"><strong>Admin:</strong> abubakkarPraew@gmail.com</p>
              <p className="text-blue-800"><strong>Password:</strong> 956615731</p>
            </div>
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
                className="w-full px-4 py-2 border border-blue-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  borderColor: "#BFDBFE",
                  color: "#1F2937",
                }}
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
              <button
                type="button"
                onClick={() => setShowForgotPassword(true)}
                className="hover:underline cursor-pointer"
                style={{ color: "#3B82F6" }}
              >
                Forgot password?
              </button>
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

        {/* Forgot Password Modal */}
        {showForgotPassword && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md mx-4">
              <h2 className="text-2xl font-bold mb-2" style={{ color: "#1F2937" }}>
                Reset Password
              </h2>
              <p className="text-sm mb-6" style={{ color: "#6B7280" }}>
                Enter your email address and we'll send you a link to reset your password.
              </p>

              {forgotMessage && (
                <div
                  className={`mb-4 p-3 rounded-lg text-sm ${forgotMessage.includes("sent")
                    ? "text-green-700"
                    : "text-red-700"
                    }`}
                  style={{
                    backgroundColor:
                      forgotMessage.includes("sent") ? "#DCFCE7" : "#FEE2E2",
                  }}
                >
                  {forgotMessage}
                </div>
              )}

              <form onSubmit={handleForgotPassword} className="space-y-4">
                <div>
                  <label
                    htmlFor="forgot-email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#1F2937" }}
                  >
                    Email
                  </label>
                  <input
                    id="forgot-email"
                    type="email"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                    style={{
                      borderColor: "#BFDBFE",
                      color: "#1F2937",
                    }}
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 py-2 rounded-lg font-medium text-white hover:opacity-90 transition"
                    style={{ backgroundColor: "#3B82F6" }}
                  >
                    Send Reset Link
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowForgotPassword(false);
                      setForgotEmail("");
                      setForgotMessage("");
                    }}
                    className="flex-1 py-2 rounded-lg font-medium border hover:bg-gray-50 transition"
                    style={{
                      borderColor: "#BFDBFE",
                      color: "#3B82F6",
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
