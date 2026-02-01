export default function ApplyPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Apply Now</h1>
        <p className="mt-2 text-gray-600">
          Start your application with a quick intake form. We will contact you with next steps.
        </p>
      </header>

      <form className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          <input className="w-full rounded-xl border px-4 py-3 text-sm" placeholder="Full name" />
          <input className="w-full rounded-xl border px-4 py-3 text-sm" placeholder="Email" />
          <input className="w-full rounded-xl border px-4 py-3 text-sm" placeholder="Phone / WhatsApp" />
          <input className="w-full rounded-xl border px-4 py-3 text-sm" placeholder="City & Province" />
        </div>
        <textarea
          rows={5}
          className="mt-4 w-full rounded-xl border px-4 py-3 text-sm"
          placeholder="Preferred destination and program"
        />
        <button
          type="button"
          className="mt-4 w-full rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
        >
          Submit application
        </button>
      </form>
    </div>
  );
}
