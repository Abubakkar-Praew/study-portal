export default function AdminPage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Admin Panel</h1>
      <p className="mt-2 text-gray-600">
        Manage Countries, Embassies, Universities, Courses, Intakes, Deadlines
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border p-4">
          <h2 className="text-xl font-semibold">Countries</h2>
          <p className="text-gray-600">UK, Turkey, Cyprus, Germany, Italy, UAE (Dubai)</p>
        </div>

        <div className="rounded-xl border p-4">
          <h2 className="text-xl font-semibold">Embassies</h2>
          <p className="text-gray-600">Address, Phone, Email, Website, Requirements</p>
        </div>

        <div className="rounded-xl border p-4">
          <h2 className="text-xl font-semibold">Universities</h2>
          <p className="text-gray-600">Name, City, Website, Description</p>
        </div>

        <div className="rounded-xl border p-4">
          <h2 className="text-xl font-semibold">Courses</h2>
          <p className="text-gray-600">Name, Link, Fees, Intake, Deadline</p>
        </div>
      </div>
    </main>
  );
}
