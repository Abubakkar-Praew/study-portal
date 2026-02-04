"use client";

import { announcements } from "@/lib/site-data";

export default function AnnouncementCard() {
  if (!announcements || announcements.length === 0) {
    return null;
  }

  const announcement = announcements[0];

  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex rounded-full border px-3 py-1 text-xs font-medium mb-3" style={{ borderColor: '#3B82F6', color: '#3B82F6' }}>
            📢 {announcement.country}
          </div>
          <h2 className="text-2xl font-bold">{announcement.title}</h2>
          <p className="mt-2 text-sm text-gray-500">{announcement.date}</p>
        </div>
      </div>

      <div className="mb-4 p-3 rounded-xl" style={{ backgroundColor: '#EFF6FF', borderColor: '#BFDBFE', borderWidth: '1px' }}>
        <p className="text-sm text-gray-700">
          ✨ <span className="font-semibold">IMPORTANT:</span> Students with PTE can apply to all listed universities ✅ (except Wolverhampton, where MOI works instead).
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {announcement.universities.map((uni, idx) => (
          <div key={idx} className="rounded-2xl border p-5 hover:shadow-md transition" style={{ borderColor: '#E5E7EB' }}>
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-gray-900">{uni.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{uni.location}</p>
              </div>
              {!uni.pte && (
                <div className="text-xs font-medium px-2 py-1 rounded-full" style={{ backgroundColor: '#FEE2E2', color: '#DC2626' }}>
                  MOI
                </div>
              )}
            </div>

            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Initial Fee:</span>
                <span className="font-medium">{uni.initialFee}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Scholarship:</span>
                <span className="font-medium">{uni.scholarship}</span>
              </div>
              <div className="flex justify-between border-t pt-2" style={{ borderColor: '#E5E7EB' }}>
                <span className="text-gray-600">Total Fee:</span>
                <span className="font-bold" style={{ color: '#3B82F6' }}>{uni.totalFee}</span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span style={{ color: '#6B7280' }}>🗣️</span>
                <span className="text-gray-700">{uni.interviews}</span>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: '#6B7280' }}>📅</span>
                <span className="text-gray-700">Intake: {uni.intake}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{uni.pte ? '✅' : '❌'}</span>
                <span className="text-gray-700">PTE: {uni.pte ? 'Accepted' : 'Not accepted'}</span>
              </div>
            </div>

            {uni.highlights.length > 0 && (
              <div className="mt-3 pt-3 border-t" style={{ borderColor: '#E5E7EB' }}>
                {uni.highlights.map((h, i) => (
                  <p key={i} className="text-xs text-gray-600 mt-1">{h}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
