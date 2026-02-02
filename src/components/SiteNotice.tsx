"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const INTERVAL_MS = 2 * 60 * 1000;

export default function SiteNotice() {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const showNotice = () => {
      setOpen(true);
    };

    showNotice();
    timerRef.current = window.setInterval(showNotice, INTERVAL_MS);

    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
      }
    };
  }, []);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm animate-[fadeIn_260ms_ease-out]">
      <div className="w-full max-w-xl overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.25)] animate-[popIn_260ms_cubic-bezier(0.16,1,0.3,1)]">
        <div className="relative p-6 sm:p-8">
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-100/70 blur-2xl" />
          <div className="absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-indigo-100/70 blur-2xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              Progress Update
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900">
              We are polishing the experience
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              This website is still under process. Some sections may be incomplete, and we’re actively
              improving the layout, content, and performance.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
              <Link
                href="/contact"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700"
                onClick={() => setOpen(false)}
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400" />
      </div>
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes popIn {
          from {
            transform: translateY(12px) scale(0.96);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
