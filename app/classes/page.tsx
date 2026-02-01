export default function ClassesPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Online / Physical Classes</h1>
        <p className="mt-2 text-gray-600">
          Choose flexible classes for test prep and admissions support.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Online Classes</h2>
          <p className="mt-2 text-sm text-gray-600">
            Live sessions, mock tests, and recorded materials for busy schedules.
          </p>
        </div>
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Physical Classes</h2>
          <p className="mt-2 text-sm text-gray-600">
            In-person sessions with structured practice and instructor guidance.
          </p>
        </div>
      </section>
    </div>
  );
}
