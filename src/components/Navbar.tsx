"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#embassy", label: "Embassy" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const accountItems = useMemo(
    () => [
      { href: "/login", label: "Login" },
      { href: "/register", label: "Register" },
    ],
    []
  );

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white">
            SP
          </span>
          <span>Study Portal</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-600 hover:text-gray-900"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#search"
            className="hidden rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50 md:inline-flex"
          >
            Search
          </Link>

          <div className="relative">
            <button
              onClick={() => setAccountOpen((v) => !v)}
              className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              Account
            </button>

            {accountOpen && (
              <div
                className="absolute right-0 mt-2 w-52 overflow-hidden rounded-xl border bg-white shadow-sm"
                onMouseLeave={() => setAccountOpen(false)}
              >
                <div className="px-4 py-3 text-xs text-gray-500">
                  Quick actions
                </div>
                {accountItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-sm hover:bg-gray-50"
                    onClick={() => setAccountOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="border-t">
                  <button
                    className="block w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => {
                      setAccountOpen(false);
                      alert("Logout (demo). Add real auth later.");
                    }}
                  >
                    Logout (Demo)
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            className="inline-flex items-center justify-center rounded-xl border px-3 py-2 text-sm hover:bg-gray-50 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open Menu"
          >
            Menu
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3 py-2 text-sm hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/#search"
                className="rounded-lg px-3 py-2 text-sm hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                Search
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
