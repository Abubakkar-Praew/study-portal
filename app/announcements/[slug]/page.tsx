import Link from "next/link";
import { announcements } from "@/lib/site-data";

export default function AnnouncementDetailPage({ params }: { params: { slug: string } }) {
  const announcement = announcements.find((ann) => ann.slug === params.slug);

  if (!announcement) {
    return (
      <div className="rounded-3xl border bg-white p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Announcement Not Found</h1>
        <p className="mt-2 text-gray-600">The announcement you're looking for doesn't exist.</p>
        <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-3xl border bg-white p-8 shadow-sm">
        <div className="mb-4">
          <Link href="/" className="text-sm font-medium text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
        <div className="inline-flex rounded-full border px-3 py-1 text-xs font-medium mb-3" style={{ borderColor: '#3B82F6', color: '#3B82F6' }}>
          📢 {announcement.country}
        </div>
        <h1 className="text-3xl font-bold text-gray-900">{announcement.title}</h1>
        <p className="mt-2 text-sm text-gray-500">{announcement.date}</p>
      </div>

      {/* Important Note */}
      <div className="rounded-2xl p-4" style={{ backgroundColor: '#EFF6FF', borderColor: '#BFDBFE', borderWidth: '1px' }}>
        <p className="text-sm text-gray-700">
          ✨ <span className="font-semibold">IMPORTANT:</span> Students with PTE can apply to all listed universities ✅ (except Wolverhampton, where MOI works instead).
        </p>
      </div>

      {/* Universities Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {announcement.universities.map((uni, idx) => (
          <div key={idx} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition" style={{ borderColor: '#E5E7EB' }}>
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-bold text-gray-900">{uni.name}</h3>
                <p className="text-xs text-gray-500 mt-1">📍 {uni.location}</p>
              </div>
              {!uni.pte && (
                <div className="text-xs font-bold px-2 py-1 rounded-full ml-2 flex-shrink-0" style={{ backgroundColor: '#FEE2E2', color: '#DC2626' }}>
                  MOI
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="border-t my-4" style={{ borderColor: '#E5E7EB' }} />

            {/* Fees Section */}
            <div className="space-y-3 mb-4">
              <h4 className="text-xs font-semibold text-gray-600 uppercase">Fee Structure</h4>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Initial Fee:</span>
                <span className="font-semibold text-gray-900">{uni.initialFee}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Scholarship:</span>
                <span className="font-semibold text-gray-900">{uni.scholarship}</span>
              </div>
              <div className="border-t pt-3 flex justify-between text-sm" style={{ borderColor: '#E5E7EB' }}>
                <span className="text-gray-600 font-semibold">Total Fee:</span>
                <span className="font-bold text-lg" style={{ color: '#3B82F6' }}>
                  {uni.totalFee}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t my-4" style={{ borderColor: '#E5E7EB' }} />

            {/* Requirements Section */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-gray-600 uppercase">Requirements</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🗣️</span>
                  <div className="text-sm">
                    <p className="text-gray-600">Interview</p>
                    <p className="font-semibold text-gray-900">{uni.interviews}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">📅</span>
                  <div className="text-sm">
                    <p className="text-gray-600">Intake</p>
                    <p className="font-semibold text-gray-900">{uni.intake}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">{uni.pte ? '✅' : '❌'}</span>
                  <div className="text-sm">
                    <p className="text-gray-600">PTE Accepted</p>
                    <p className="font-semibold text-gray-900">{uni.pte ? 'Yes' : 'No (MOI required)'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            {uni.highlights.length > 0 && (
              <>
                <div className="border-t my-4" style={{ borderColor: '#E5E7EB' }} />
                <div>
                  <h4 className="text-xs font-semibold text-gray-600 uppercase mb-2">Special Notes</h4>
                  {uni.highlights.map((h, i) => (
                    <p key={i} className="text-xs text-gray-700 bg-amber-50 p-2 rounded mb-2">
                      {h}
                    </p>
                  ))}
                </div>
              </>
            )}

            {/* CTA Button */}
            <div className="mt-6 pt-4 border-t" style={{ borderColor: '#E5E7EB' }}>
              <button
                className="w-full rounded-lg px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
                style={{ backgroundColor: '#3B82F6' }}
              >
                Request More Info
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
