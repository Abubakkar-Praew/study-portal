import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-white">
      <div className="border-t-2 border-primary bg-gradient-to-b from-light-blue to-lighter-blue">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-blue-600 text-lg font-bold text-white">
                SP
              </span>
              <span className="text-lg font-bold text-text-dark">Study Portal</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-text-gray">
              Study abroad guidance with counselling, admissions, and visa support.
            </p>
          </div>

          <div>
            <h4 className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-sm font-bold text-transparent uppercase tracking-wide">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm text-text-gray">
              <li><Link className="border-l-2 border-l-transparent pl-2 transition hover:border-l-primary hover:text-primary hover:font-medium" href="/about">About Us</Link></li>
              <li><Link className="border-l-2 border-l-transparent pl-2 transition hover:border-l-primary hover:text-primary hover:font-medium" href="/services">Services</Link></li>
              <li><Link className="border-l-2 border-l-transparent pl-2 transition hover:border-l-primary hover:text-primary hover:font-medium" href="/destinations">Destinations</Link></li>
              <li><Link className="border-l-2 border-l-transparent pl-2 transition hover:border-l-primary hover:text-primary hover:font-medium" href="/why-us">Why Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-sm font-bold text-transparent uppercase tracking-wide">Contact Info</h4>
            <ul className="mt-4 space-y-3 text-sm text-text-gray">
              <li className="flex items-center gap-2">
                <span className="text-primary">📧</span>
                <span>abubakkarpraew@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">📱</span>
                <span>+92 347 4765174</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">📍</span>
                <span>Mardan, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-primary bg-gradient-to-r from-primary to-blue-600">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-white md:flex-row">
          <span>© {new Date().getFullYear()} Study Portal. All rights reserved.</span>
          <div className="flex gap-6 text-xs">
            <Link href="#" className="transition hover:opacity-80">Privacy Policy</Link>
            <Link href="#" className="transition hover:opacity-80">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
