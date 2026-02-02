"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { destinations } from "@/lib/site-data";

const serviceMenu = [
  { href: "/services#why-us", label: "Why Us" },
  { href: "/services", label: "Services" },
  { href: "/classes", label: "Online / Physical Classes" },
  { href: "/immigration/uk", label: "UK Immigration" },
  { href: "/immigration/canada", label: "Canada Immigration" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);
  const [deadlineOpen, setDeadlineOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const svcTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const destTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const deadlineTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const isActive = (href: string) => pathname === href;

  const handleSvcMouseLeave = () => {
    svcTimeoutRef.current = setTimeout(() => setSvcOpen(false), 300);
  };

  const handleSvcMouseEnter = () => {
    if (svcTimeoutRef.current) clearTimeout(svcTimeoutRef.current);
    setSvcOpen(true);
    setDestOpen(false);
  };

  const handleDestMouseLeave = () => {
    destTimeoutRef.current = setTimeout(() => setDestOpen(false), 300);
  };

  const handleDestMouseEnter = () => {
    if (destTimeoutRef.current) clearTimeout(destTimeoutRef.current);
    setDestOpen(true);
    setSvcOpen(false);
    setDeadlineOpen(false);
  };

  const handleDeadlineMouseLeave = () => {
    deadlineTimeoutRef.current = setTimeout(() => setDeadlineOpen(false), 300);
  };

  const handleDeadlineMouseEnter = () => {
    if (deadlineTimeoutRef.current) clearTimeout(deadlineTimeoutRef.current);
    setDeadlineOpen(true);
    setSvcOpen(false);
    setDestOpen(false);
  };

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) {
        setSvcOpen(false);
        setDestOpen(false);
        setDeadlineOpen(false);
        setAccountOpen(false);
      }
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return (
    <div style={{ backgroundColor: '#E8F1FF', color: '#1F2937' }} className="sticky top-0 z-50" ref={wrapperRef}>
      {/* Top info bar */}
      <div style={{ backgroundColor: '#DBEAFE', borderBottomColor: '#BFDBFE' }} className="hidden border-b md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs" style={{ color: '#6B7280' }}>
          <div className="flex items-center gap-4">
            <span>Ask Questions</span>
            <span className="h-4 w-px" style={{ backgroundColor: '#BFDBFE' }} />
            <span>+92 347 4765174</span>
            <span className="h-4 w-px" style={{ backgroundColor: '#BFDBFE' }} />
            <span>WhatsApp available</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full border px-3 py-1" style={{ borderColor: '#BFDBFE', color: '#6B7280' }}>English</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold" style={{ color: '#1F2937' }}>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-white" style={{ backgroundColor: '#3B82F6' }}>
            SP
          </span>
          <span>Study Portal</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link
            href="/"
            className={`rounded-lg px-3 py-2 transition ${isActive('/') ? 'font-semibold' : ''}`}
            style={{
              color: isActive('/') ? '#FFFFFF' : '#1F2937',
              backgroundColor: isActive('/') ? '#3B82F6' : 'transparent'
            }}
            onMouseEnter={(e) => !isActive('/') && (e.currentTarget.style.backgroundColor = '#BFDBFE')}
            onMouseLeave={(e) => !isActive('/') && (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`rounded-lg px-3 py-2 transition ${isActive('/about') ? 'font-semibold' : ''}`}
            style={{
              color: isActive('/about') ? '#FFFFFF' : '#1F2937',
              backgroundColor: isActive('/about') ? '#3B82F6' : 'transparent'
            }}
            onMouseEnter={(e) => !isActive('/about') && (e.currentTarget.style.backgroundColor = '#BFDBFE')}
            onMouseLeave={(e) => !isActive('/about') && (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            About
          </Link>

          {/* Services dropdown */}
          <div className="relative" onMouseEnter={handleSvcMouseEnter} onMouseLeave={handleSvcMouseLeave}>
            <button
              className="rounded-lg px-3 py-2 transition"
              style={{
                color: svcOpen ? '#FFFFFF' : '#1F2937',
                backgroundColor: svcOpen ? '#3B82F6' : 'transparent'
              }}
            >
              Our Services ▾
            </button>
            {svcOpen && (
              <div className="absolute left-0 mt-0 w-64 overflow-hidden rounded-2xl border bg-white shadow-sm" style={{ borderColor: '#E5E7EB' }}>
                <div className="px-4 py-3 text-xs" style={{ color: '#6B7280' }}>Services</div>
                {serviceMenu.map((i) => (
                  <Link
                    key={i.href}
                    href={i.href}
                    className={`block px-4 py-3 text-sm transition ${isActive(i.href) ? 'font-semibold' : ''}`}
                    style={{
                      color: isActive(i.href) ? '#FFFFFF' : '#1F2937',
                      backgroundColor: isActive(i.href) ? '#3B82F6' : 'transparent'
                    }}
                    onMouseEnter={(e) => !isActive(i.href) && (e.currentTarget.style.backgroundColor = '#F0F4FF')}
                    onMouseLeave={(e) => !isActive(i.href) && (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    {i.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Destinations dropdown */}
          <div className="relative" onMouseEnter={handleDestMouseEnter} onMouseLeave={handleDestMouseLeave}>
            <button
              className="rounded-lg px-3 py-2 transition"
              style={{
                color: destOpen ? '#FFFFFF' : '#1F2937',
                backgroundColor: destOpen ? '#3B82F6' : 'transparent'
              }}
            >
              Study Destinations ▾
            </button>
            {destOpen && (
              <div className="absolute left-0 mt-0 w-[520px] rounded-2xl border bg-white p-3 shadow-sm" style={{ borderColor: '#E5E7EB' }}>
                <div className="px-2 pb-2 text-xs" style={{ color: '#6B7280' }}>Popular destinations</div>
                <div className="grid grid-cols-2 gap-2">
                  {destinations.map((d) => (
                    <Link
                      key={d.slug}
                      href={`/destinations/${d.slug}`}
                      className={`rounded-xl px-3 py-2 text-sm transition border ${isActive(`/destinations/${d.slug}`) ? 'font-semibold' : ''}`}
                      style={{
                        color: isActive(`/destinations/${d.slug}`) ? '#FFFFFF' : '#1F2937',
                        backgroundColor: isActive(`/destinations/${d.slug}`) ? '#3B82F6' : 'transparent',
                        borderColor: isActive(`/destinations/${d.slug}`) ? '#3B82F6' : '#E5E7EB'
                      }}
                      onMouseEnter={(e) => !isActive(`/destinations/${d.slug}`) && (e.currentTarget.style.backgroundColor = '#F0F4FF')}
                      onMouseLeave={(e) => !isActive(`/destinations/${d.slug}`) && (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      {d.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* University Deadline dropdown */}
          <div className="relative" onMouseEnter={handleDeadlineMouseEnter} onMouseLeave={handleDeadlineMouseLeave}>
            <button
              className="rounded-lg px-3 py-2 transition"
              style={{
                color: deadlineOpen ? '#FFFFFF' : '#1F2937',
                backgroundColor: deadlineOpen ? '#3B82F6' : 'transparent'
              }}
            >
              University Deadline ▾
            </button>
            {deadlineOpen && (
              <div className="absolute left-0 mt-0 w-[520px] rounded-2xl border bg-white p-3 shadow-sm" style={{ borderColor: '#E5E7EB' }}>
                <div className="px-2 pb-2 text-xs" style={{ color: '#6B7280' }}>Deadlines by Country</div>
                <div className="grid grid-cols-2 gap-2">
                  {destinations.map((d) => (
                    <Link
                      key={`deadline-${d.slug}`}
                      href={`/destinations/${d.slug}`}
                      className={`rounded-xl px-3 py-2 text-sm transition border ${isActive(`/destinations/${d.slug}`) ? 'font-semibold' : ''}`}
                      style={{
                        color: isActive(`/destinations/${d.slug}`) ? '#FFFFFF' : '#1F2937',
                        backgroundColor: isActive(`/destinations/${d.slug}`) ? '#3B82F6' : 'transparent',
                        borderColor: isActive(`/destinations/${d.slug}`) ? '#3B82F6' : '#E5E7EB'
                      }}
                      onMouseEnter={(e) => !isActive(`/destinations/${d.slug}`) && (e.currentTarget.style.backgroundColor = '#F0F4FF')}
                      onMouseLeave={(e) => !isActive(`/destinations/${d.slug}`) && (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      {d.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className={`rounded-lg px-3 py-2 transition ${isActive('/contact') ? 'font-semibold' : ''}`}
            style={{
              color: isActive('/contact') ? '#FFFFFF' : '#1F2937',
              backgroundColor: isActive('/contact') ? '#3B82F6' : 'transparent'
            }}
            onMouseEnter={(e) => !isActive('/contact') && (e.currentTarget.style.backgroundColor = '#BFDBFE')}
            onMouseLeave={(e) => !isActive('/contact') && (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {/* Account dropdown for desktop */}
          <div className="relative hidden md:block">
            <button
              className="rounded-xl px-4 py-2 text-sm font-medium"
              style={{ backgroundColor: accountOpen ? '#3B82F6' : 'transparent', color: accountOpen ? '#FFFFFF' : '#1F2937' }}
              onClick={() => setAccountOpen((v) => !v)}
              aria-expanded={accountOpen}
            >
              Account ▾
            </button>
            {accountOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-2xl border bg-white shadow-sm" style={{ borderColor: '#E5E7EB' }}>
                <Link href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Login</Link>
                <Link href="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Sign Up</Link>
              </div>
            )}
          </div>

          <button
            className="inline-flex items-center justify-center rounded-xl border px-3 py-2 text-sm hover:bg-gray-50 md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t bg-white md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="flex flex-col gap-2 text-sm">
              <Link
                href="/"
                className={`rounded-xl px-3 py-2 transition ${isActive('/') ? 'bg-blue-100 text-blue-900 font-semibold' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`rounded-xl px-3 py-2 transition ${isActive('/about') ? 'bg-blue-100 text-blue-900 font-semibold' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`rounded-xl px-3 py-2 transition ${isActive('/services') ? 'bg-blue-100 text-blue-900 font-semibold' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Our Services
              </Link>
              <Link
                href="/destinations"
                className={`rounded-xl px-3 py-2 transition ${isActive('/destinations') ? 'bg-blue-100 text-blue-900 font-semibold' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Study Destinations
              </Link>
              <Link
                href="/destinations"
                className={`rounded-xl px-3 py-2 transition ${isActive('/destinations') ? 'bg-blue-100 text-blue-900 font-semibold' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                University Deadline
              </Link>
              <Link
                href="/contact"
                className={`rounded-xl px-3 py-2 transition ${isActive('/contact') ? 'bg-blue-100 text-blue-900 font-semibold' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Contact
              </Link>
              <Link href="/login" className="rounded-xl px-3 py-2 text-gray-700 hover:bg-gray-100 transition">Login</Link>
              <Link href="/register" className="rounded-xl bg-black px-3 py-2 text-white hover:opacity-90 transition">Sign Up</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
