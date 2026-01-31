import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold">Study Abroad Portal</h1>
      <p className="mt-2 text-gray-600">
        Embassy details • University details • Courses (intake, deadline, fees)
      </p>

      <div className="mt-6 flex gap-3">
        <Link className="px-4 py-2 rounded-lg border" href="/admin">
          Admin Panel
        </Link>
        <Link className="px-4 py-2 rounded-lg border" href="/login">
          Login
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {["UK", "Turkey", "Cyprus", "Germany", "Italy", "UAE (Dubai)"].map((c) => (
          <div key={c} className="rounded-xl border p-4">
            <h2 className="text-xl font-semibold">{c}</h2>
            <p className="text-gray-600">Embassies • Universities • Courses</p>
          </div>
        ))}
      </div>
    </main>
  );
}
