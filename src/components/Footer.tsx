import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white">
              SP
            </span>
            <span>Study Portal</span>
          </div>
          <p className="mt-3 max-w-md text-sm text-gray-600">
            A professional portal layout with search, reviews, contact and embassy information.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><Link className="hover:underline" href="/#search">Search</Link></li>
            <li><Link className="hover:underline" href="/#embassy">Embassy Info</Link></li>
            <li><Link className="hover:underline" href="/#reviews">Reviews</Link></li>
            <li><Link className="hover:underline" href="/#contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Account</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><Link className="hover:underline" href="/login">Login</Link></li>
            <li><Link className="hover:underline" href="/register">Register</Link></li>
            <li><Link className="hover:underline" href="/dashboard">Dashboard</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-gray-600 md:flex-row">
          <span>© {new Date().getFullYear()} Study Portal. All rights reserved.</span>
          <span className="text-xs">Built with Next.js + Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
