import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#E8F1FF', color: '#1F2937' }}>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-white" style={{ backgroundColor: '#0F172A' }}>
              SP
            </span>
            <div>
              <span className="font-semibold" style={{ color: '#0F172A' }}>Study Portal</span>
              <p className="text-sm" style={{ color: '#6B7280' }}>Study Abroad Simplified</p>
            </div>
          </div>
          <p className="mt-3 max-w-md text-sm" style={{ color: '#6B7280' }}>
            A professional portal layout with search, reviews, contact and embassy information.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold" style={{ color: '#3B82F6' }}>Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm" style={{ color: '#6B7280' }}>
            <li><Link className="hover:underline" href="/#search">Search</Link></li>
            <li><Link className="hover:underline" href="/#embassy">Embassy Info</Link></li>
            <li><Link className="hover:underline" href="/#reviews">Reviews</Link></li>
            <li><Link className="hover:underline" href="/#contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold" style={{ color: '#3B82F6' }}>Account</h4>
          <ul className="mt-3 space-y-2 text-sm" style={{ color: '#6B7280' }}>
            <li><Link className="text-sm" href="/login" style={{ color: '#6B7280' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#3B82F6')} onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}>Login</Link></li>
            <li><Link className="text-sm" href="/register" style={{ color: '#6B7280' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#3B82F6')} onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}>Register</Link></li>
          </ul>
        </div>
      </div>

      <div style={{ backgroundColor: '#DBEAFE', borderTopColor: '#BFDBFE' }} className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm md:flex-row" style={{ color: '#6B7280' }}>
          <span className="font-medium">© {new Date().getFullYear()} Study Portal. All rights reserved.</span>
          <span className="text-xs">Built with Next.js + Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
