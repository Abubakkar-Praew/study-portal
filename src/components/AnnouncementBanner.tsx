"use client";

import { announcements } from "@/lib/site-data";
import { useState } from "react";

export default function AnnouncementBanner() {
  const [closed, setClosed] = useState(false);

  if (closed || !announcements || announcements.length === 0) {
    return null;
  }

  const announcement = announcements[0];

  return (
    <div className="sticky top-[120px] z-40 bg-gradient-to-r from-blue-50 to-blue-100 border-b-2" style={{ borderColor: '#3B82F6' }}>
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <span className="text-xl">📢</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900">{announcement.title}</p>
            <p className="text-xs text-gray-600">{announcement.country} • {announcement.date}</p>
          </div>
        </div>
        <button
          onClick={() => setClosed(true)}
          className="ml-auto text-gray-500 hover:text-gray-700 font-bold text-lg flex-shrink-0"
          aria-label="Close announcement"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
