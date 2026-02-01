import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer style={{ backgroundColor: '#E8F1FF', borderTopColor: '#BFDBFE' }} className="border-t">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-semibold" style={{ color: '#1F2937' }}>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-white" style={{ backgroundColor: '#3B82F6' }}>
              SP
            </span>
            <span>Study Portal</span>
          </div>
          <p className="mt-3 max-w-md text-sm" style={{ color: '#6B7280' }}>
            Study abroad guidance with counselling, admissions, and visa support.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold" style={{ color: '#1F2937' }}>Company</h4>
          <ul className="mt-3 space-y-2 text-sm" style={{ color: '#6B7280' }}>
            <li><Link className="hover:underline" href="/about">About</Link></li>
            <li><Link className="hover:underline" href="/services">Services</Link></li>
            <li><Link className="hover:underline" href="/destinations">Destinations</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold" style={{ color: '#1F2937' }}>Contact</h4>
          <ul className="mt-3 space-y-2 text-sm" style={{ color: '#6B7280' }}>
            <li>support@studyportal.com</li>
            <li>+92 300 0000000</li>
            <li>Your City, Pakistan</li>
          </ul>
        </div>
      </div>

      <div style={{ backgroundColor: '#DBEAFE', borderTopColor: '#BFDBFE' }} className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm" style={{ color: '#6B7280' }}>
          <span>© {new Date().getFullYear()} Study Portal. All rights reserved.</span>
          <span className="text-xs">Built with Next.js + Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
