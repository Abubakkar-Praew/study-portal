export default function ContactPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-2 text-gray-600">
          Share your questions and we will follow up with the right guidance.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Reach us</h2>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>Email: abubakkarpraew@gmail.com</li>
            <li>Phone: +92 347 4765174</li>
            <li>Location: Mardan Pakistan</li>
          </ul>
        </div>

        <form className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="space-y-3">
            <input className="w-full rounded-xl border px-4 py-3 text-sm" placeholder="Full name" />
            <input className="w-full rounded-xl border px-4 py-3 text-sm" placeholder="Email" />
            <input className="w-full rounded-xl border px-4 py-3 text-sm" placeholder="Phone" />
            <textarea
              rows={4}
              className="w-full rounded-xl border px-4 py-3 text-sm"
              placeholder="Tell us about your study plans"
            />
            <button
              type="button"
              className="w-full rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
