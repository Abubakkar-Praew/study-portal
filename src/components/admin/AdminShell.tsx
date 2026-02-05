"use client";

import { ReactNode, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  GlobeAltIcon,
  UserGroupIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  PowerIcon,
  Bars3Icon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

type NavItem = { name: string; href: string; icon: any };

export default function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);
  const [openCountry, setOpenCountry] = useState<string>("uk");
  const [countries, setCountries] = useState<{ name: string; slug: string; active?: boolean }[]>([
    { name: "UK", slug: "uk", active: true },
  ]);

  useEffect(() => {
    const loadCountries = () => {
      try {
        const stored = window.localStorage.getItem("admin_countries");
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setCountries(parsed);
            const firstActive = parsed.find((c: { active?: boolean }) => c.active !== false);
            if (firstActive) {
              setOpenCountry((prev) => prev || firstActive.slug);
            }
            return;
          }
        }
      } catch {
        // keep defaults
      }
    };

    loadCountries();
    window.addEventListener("admin_countries_updated", loadCountries);
    return () => window.removeEventListener("admin_countries_updated", loadCountries);
  }, []);

  const nav = useMemo<NavItem[]>(
    () => [
      { name: "Dashboard", href: "/admin", icon: HomeIcon },
      { name: "Students", href: "/admin/students", icon: UserGroupIcon },
      { name: "Applications", href: "/admin/applications", icon: DocumentTextIcon },
      { name: "Settings", href: "/admin/settings", icon: Cog6ToothIcon },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <aside
          className={[
            "sticky top-0 h-screen overflow-hidden border-r border-slate-200 bg-gray-100 shadow-sm transition-all",
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

          <nav className="flex h-[calc(100%-64px)] min-h-0 flex-col p-3">
            <div className="flex-1 min-h-0 space-y-1 overflow-y-auto pr-1">
              {nav.slice(0, 1).map((item) => {
                const active = pathname === item.href;
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

              {countries.filter((country) => country.active !== false).map((country) => {
                const isActive = pathname?.startsWith(`/admin/${country.slug}`);
                const isOpen = openCountry === country.slug;
                return (
                  <div key={country.slug}>
                    <button
                      type="button"
                      onClick={() => setOpenCountry(isOpen ? "" : country.slug)}
                    className={[
                        "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm transition",
                        isActive ? "bg-gray-200 text-gray-900" : "text-gray-700 hover:bg-gray-100",
                      ].join(" ")}
                      aria-expanded={isOpen}
                    >
                      <GlobeAltIcon className="h-5 w-5" />
                      {open && (
                        <span className="flex w-full items-center justify-between">
                          <span>{country.name}</span>
                          <ChevronDownIcon className={["h-4 w-4 transition", isOpen ? "rotate-180" : ""].join(" ")} />
                        </span>
                      )}
                    </button>

                    {open && isOpen && (
                      <div className="ml-10 space-y-1">
                        <Link
                          href={`/admin/${country.slug}/universities`}
                          className={[
                            "block rounded-lg px-3 py-2 text-xs transition",
                            pathname === `/admin/${country.slug}/universities`
                              ? "bg-gray-900 text-white"
                              : "text-gray-600 hover:bg-gray-100",
                          ].join(" ")}
                        >
                          Universities
                        </Link>
                        <Link
                          href={`/admin/${country.slug}/courses`}
                          className={[
                            "block rounded-lg px-3 py-2 text-xs transition",
                            pathname === `/admin/${country.slug}/courses`
                              ? "bg-gray-900 text-white"
                              : "text-gray-600 hover:bg-gray-100",
                          ].join(" ")}
                        >
                          Courses
                        </Link>
                        <Link
                          href={`/admin/${country.slug}/embassy-detail`}
                          className={[
                            "block rounded-lg px-3 py-2 text-xs transition",
                            pathname === `/admin/${country.slug}/embassy-detail`
                              ? "bg-gray-900 text-white"
                              : "text-gray-600 hover:bg-gray-100",
                          ].join(" ")}
                        >
                          Embassy detail
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}

              {nav.slice(1).map((item) => {
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

            <div className="mt-auto border-t pt-4">
              <div className="flex justify-center">
                <a
                  href="/api/logout"
                  className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700"
                >
                  <PowerIcon className="h-5 w-5" />
                  {open && <span>Logout</span>}
                </a>
              </div>
            </div>
          </nav>
        </aside>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
