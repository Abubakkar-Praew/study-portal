import Link from "next/link";
import { announcements } from "@/lib/site-data";

export default async function UniversityDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // Await params in Next.js 16
  const { id } = await params;

  // Parse the ID to get announcement index and university index
  const parts = id.split("-");
  if (parts.length !== 2) {
    return (
      <div className="rounded-3xl border bg-white p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Invalid University ID</h1>
        <p className="mt-2 text-gray-600">The university link is invalid.</p>
        <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  const [annIdStr, uniIdxStr] = parts;
  const annId = parseInt(annIdStr);
  const uniIdx = parseInt(uniIdxStr);

  const announcement = announcements.find((ann) => ann.id === annId);

  if (!announcement || !announcement.universities[uniIdx]) {
    return (
      <div className="rounded-3xl border bg-white p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900">University Not Found</h1>
        <p className="mt-2 text-gray-600">The university details you're looking for doesn't exist.</p>
        <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  const university = announcement.universities[uniIdx];

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <div className="flex items-center gap-2">
        <Link href="/" className="text-sm font-medium text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>

      {/* Header Section */}
      <div className="rounded-3xl border bg-white p-8 shadow-sm" style={{ borderColor: '#E5E7EB' }}>
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex-1">
            <div className="inline-flex rounded-full border px-3 py-1 text-xs font-medium mb-3" style={{ borderColor: '#3B82F6', color: '#3B82F6' }}>
              📍 {announcement.country}
            </div>
            <h1 className="text-3xl font-bold text-gray-900">{university.name}</h1>
            <p className="text-lg text-gray-600 mt-2">{university.location}</p>
          </div>
          {!university.pte && (
            <div className="text-xs font-bold px-4 py-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#FEE2E2', color: '#DC2626' }}>
              MOI Required
            </div>
          )}
        </div>
      </div>

      {/* Key Information Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Intake", value: university.intake, icon: "📅" },
          { label: "Initial Fee", value: university.initialFee, icon: "💰" },
          { label: "Scholarship", value: university.scholarship, icon: "🎓" },
          { label: "Total Fee", value: university.totalFee, icon: "💵" }
        ].map((item) => (
          <div key={item.label} className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: '#E5E7EB' }}>
            <p className="text-2xl mb-2">{item.icon}</p>
            <p className="text-xs font-semibold text-gray-600 uppercase">{item.label}</p>
            <p className="text-lg font-bold text-gray-900 mt-2">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Interview Details */}
      <div className="rounded-3xl border bg-white p-8 shadow-sm" style={{ borderColor: '#E5E7EB' }}>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Interview Requirements</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4 pb-4 border-b" style={{ borderColor: '#E5E7EB' }}>
            <span className="text-3xl">🗣️</span>
            <div>
              <h3 className="font-semibold text-gray-900">Interview Details</h3>
              <p className="text-gray-600 mt-1">{university.interviews}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-3xl">{university.pte ? '✅' : '❌'}</span>
            <div>
              <h3 className="font-semibold text-gray-900">PTE Acceptance</h3>
              <p className="text-gray-600 mt-1">
                {university.pte
                  ? "PTE English test is accepted for admission"
                  : "PTE is not accepted. MOI (Medium of Instruction) certificate required instead"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fee Structure */}
      <div className="rounded-3xl border bg-white p-8 shadow-sm" style={{ borderColor: '#E5E7EB' }}>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Fee Structure Breakdown</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-4 rounded-xl bg-gray-50" style={{ backgroundColor: '#F3F4F6' }}>
            <span className="text-gray-600">Initial Fee</span>
            <span className="text-xl font-bold text-gray-900">{university.initialFee}</span>
          </div>
          <div className="flex justify-between items-center p-4 rounded-xl bg-blue-50" style={{ backgroundColor: '#EFF6FF' }}>
            <span className="text-gray-600">Scholarship Available</span>
            <span className="text-xl font-bold text-blue-600">{university.scholarship}</span>
          </div>
          <div className="border-t-2 my-2" style={{ borderColor: '#E5E7EB' }} />
          <div className="flex justify-between items-center p-4 rounded-xl" style={{ backgroundColor: '#EFF6FF' }}>
            <span className="font-semibold text-gray-900">Total Fee After Scholarship</span>
            <span className="text-2xl font-bold text-blue-600">{university.totalFee}</span>
          </div>
        </div>
      </div>

      {/* Location & Additional Info */}
      <div className="rounded-3xl border bg-white p-8 shadow-sm" style={{ borderColor: '#E5E7EB' }}>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">University Information</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">📍 Location</h3>
            <p className="text-gray-600">{university.location}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">📅 Intake Period</h3>
            <p className="text-gray-600">{university.intake} Intake</p>
          </div>
          {university.highlights.length > 0 && (
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">⭐ Special Notes</h3>
              <div className="space-y-2">
                {university.highlights.map((h, i) => (
                  <div key={i} className="p-3 rounded-lg bg-amber-50" style={{ backgroundColor: '#FFFBEB' }}>
                    <p className="text-sm text-gray-700">{h}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="rounded-3xl border bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white" style={{ borderColor: '#3B82F6' }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold">Interested in {university.name}?</h2>
            <p className="text-blue-100 mt-2">Get professional guidance for your application process</p>
          </div>
          <button
            className="px-8 py-3 rounded-xl bg-white text-blue-600 font-semibold hover:opacity-90 transition whitespace-nowrap"
          >
            Request Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
