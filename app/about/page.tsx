export default function AboutPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">About Study Portal</h1>
        <p className="mt-2 text-gray-600">
          We help students plan, apply, and prepare for study abroad with a clear, guided process.
        </p>
      </header>

      <section className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Our focus</h2>
        <ul className="mt-3 space-y-2 text-sm text-gray-700">
          <li>Personalized counselling for the right course and destination.</li>
          <li>Documentation and application guidance at every step.</li>
          <li>Visa preparation that keeps timelines and requirements clear.</li>
        </ul>
      </section>
    </div>
  );
}
