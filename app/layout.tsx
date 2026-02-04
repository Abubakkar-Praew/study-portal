import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ClientOnly from "@/components/ClientOnly";

export const metadata: Metadata = {
  title: "Study Portal",
  description: "Professional study abroad portal UI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#F9FAFB', color: '#1F2937' }} className="min-h-screen">
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        {/* Removed pre-hydration DOM mutation script to avoid hydration mismatch. */}
        <div id="site-header"><ClientOnly fallback={<div />}><SiteHeader /></ClientOnly></div>
        <main className="mx-auto max-w-6xl px-4 pb-10 pt-24">{children}</main>
        <div id="site-footer"><ClientOnly fallback={<div />}><SiteFooter /></ClientOnly></div>
      </body>
    </html>
  );
}
