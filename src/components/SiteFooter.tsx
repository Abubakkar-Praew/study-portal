"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function SiteFooter() {
  const [hideForDemo, setHideForDemo] = useState<boolean>(() => typeof document !== 'undefined' ? document.cookie.includes('demo_admin=true') : false);

  useEffect(() => {
    try {
      const cookie = typeof document !== 'undefined' ? document.cookie : '';
      setHideForDemo(cookie.includes('demo_admin=true'));
    } catch (e) {
      setHideForDemo(false);
    }
  }, []);

  if (hideForDemo) return null;

  return (
    <footer>
      {/* Main footer section with same color as header */}
      <div style={{ backgroundColor: '#E8F1FF', color: '#1F2937' }} className="border-t-2 border-primary">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold text-white" style={{ backgroundColor: '#3B82F6' }}>
                SP
              </span>
              <div>
                <span className="text-lg font-bold" style={{ color: '#1F2937' }}>Study Portal</span>
                <p className="text-xs" style={{ color: '#6B7280' }}>Study Abroad Simplified</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed" style={{ color: '#6B7280' }}>
              Study abroad guidance with counselling, admissions, and visa support.
            </p>
          </div>

          <div>
            <h4 style={{ color: '#3B82F6' }} className="text-sm font-bold uppercase tracking-wide">🔗 Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm" style={{ color: '#6B7280' }}>
              <li><Link className="border-l-4 border-l-transparent pl-3 transition hover:font-medium" style={{ color: '#6B7280' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#3B82F6'; e.currentTarget.style.borderLeftColor = '#3B82F6'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#6B7280'; e.currentTarget.style.borderLeftColor = 'transparent'; }} href="/about">About Us</Link></li>
              <li><Link className="border-l-4 border-l-transparent pl-3 transition hover:font-medium" style={{ color: '#6B7280' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#3B82F6'; e.currentTarget.style.borderLeftColor = '#3B82F6'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#6B7280'; e.currentTarget.style.borderLeftColor = 'transparent'; }} href="/services">Services</Link></li>
              <li><Link className="border-l-4 border-l-transparent pl-3 transition hover:font-medium" style={{ color: '#6B7280' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#3B82F6'; e.currentTarget.style.borderLeftColor = '#3B82F6'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#6B7280'; e.currentTarget.style.borderLeftColor = 'transparent'; }} href="/destinations">Destinations</Link></li>
              <li><Link className="border-l-4 border-l-transparent pl-3 transition hover:font-medium" style={{ color: '#6B7280' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#3B82F6'; e.currentTarget.style.borderLeftColor = '#3B82F6'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#6B7280'; e.currentTarget.style.borderLeftColor = 'transparent'; }} href="/why-us">Why Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#3B82F6' }} className="text-sm font-bold uppercase tracking-wide">📞 Contact Info</h4>
            <ul className="mt-4 space-y-3 text-sm" style={{ color: '#6B7280' }}>
              <li className="flex items-center gap-2">
                <span className="text-lg">📧</span>
                <a href="mailto:abubakkarpraew@gmail.com" style={{ color: '#6B7280' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#3B82F6')} onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')} className="transition">abubakkarpraew@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">📱</span>
                <a href="tel:+923474765174" style={{ color: '#6B7280' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#3B82F6')} onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')} className="transition">+92 347 4765174</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">📍</span>
                <span>Mardan, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar with same color as header top info bar */}
      <div style={{ backgroundColor: '#DBEAFE', borderTopColor: '#BFDBFE' }} className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <div className="flex flex-col items-center justify-between gap-2 text-sm md:flex-row" style={{ color: '#6B7280' }}>
            <span className="font-medium">© {new Date().getFullYear()} Study Portal. All rights reserved.</span>
            <div className="flex gap-6 text-xs font-medium">
              <Link href="#" style={{ color: '#6B7280' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#3B82F6')} onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')} className="transition">Privacy Policy</Link>
              <Link href="#" style={{ color: '#6B7280' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#3B82F6')} onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')} className="transition">Terms of Service</Link>
              <Link href="#" style={{ color: '#6B7280' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#3B82F6')} onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')} className="transition">Contact Support</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
