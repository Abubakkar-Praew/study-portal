"use client";

import { ReactNode, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  GlobeAltIcon,
  BuildingLibraryIcon,
  BookOpenIcon,
  UserGroupIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

type NavItem = { name: string; href: string; icon: any };

export default function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  const nav = useMemo<NavItem[]>(
    () => [
      { name: "Dashboard", href: "/admin", icon: HomeIcon },
      { name: "Countries", href: "/admin/countries", icon: GlobeAltIcon },
      { name: "Universities", href: "/admin/universities", icon: BuildingLibraryIcon },
      { name: "Courses", href: "/admin/courses", icon: BookOpenIcon },
      { name: "Students", href: "/admin/students", icon: UserGroupIcon },
      { name: "Applications", href: "/admin/applications", icon: DocumentTextIcon },
      { name: "Settings", href: "/admin/settings", icon: Cog6ToothIcon },
    ],
    []
  );

  const title =
    pathname === "/admin"
      ? "Dashboard"
      : (pathname?.split("/").slice(2).join(" / ") || "Admin").replaceAll("-", " ");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <aside
          className={[
            "sticky top-0 min-h-screen h-screen overflow-y-auto border-r border-slate-200 bg-gray-100 shadow-sm transition-all",
            open ? "w-72" : "w-20",
          ].join(" ")}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <Link href="/admin" className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-black text-white flex items-center justify-center font-bold">
                U
              </div>
              {open && (
                <div className="leading-tight">
                  <div className="font-semibold">UKVI Info</div>
                  <div className="text-xs text-gray-500">Admin Panel</div>
                </div>
              )}
            </Link>

            <button
              className="rounded-xl p-2 hover:bg-gray-100"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle sidebar"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          </div>

          <nav className="p-3">
            <div className="space-y-1">
              {nav.map((item) => {
                const active = pathname === item.href || pathname.startsWith(item.href + "/");
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition",
                      active ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100",
                    ].join(" ")}
                  >
                    <Icon className="h-5 w-5" />
                    {open && <span>{item.name}</span>}
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 border-t pt-3">
              <a
                href="/api/logout"
                className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <ArrowRightOnRectangleIcon className="h-5 w-5" />
                {open && <span>Logout</span>}
              </a>
            </div>
          </nav>
        </aside>

        <main className="flex-1">
          <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
            <div className="flex items-center justify-between px-6 py-4">
              <div>
                <div className="text-xs text-gray-500">Admin</div>
                <div className="text-lg font-semibold capitalize">{title}</div>
              </div>
              <div className="flex items-center gap-3">
                <a href="/" className="rounded-xl border px-3 py-2 text-sm hover:bg-gray-50">
                  View Website
                </a>
              </div>
            </div>
          </header>

          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
