"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function PageContainer({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <main className="min-h-screen">{children}</main>;
  }

  return <main className="mx-auto max-w-6xl px-4 pb-10 pt-24">{children}</main>;
}
