export default function AdminPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Admin Panel</h1>
      <p className="mt-2 text-gray-600">
        Manage Countries, Embassies, Universities, Courses, Intakes & Deadlines
      </p>

      <div className="mt-6 grid gap-4">
        <div className="p-4 border rounded-xl">
          <h2 className="text-xl font-semibold">Countries</h2>
          <p className="text-gray-600">UK, Turkey, Cyprus, Germany, Italy, UAE (Dubai)</p>
        </div>

        <div className="p-4 border rounded-xl">
          <h2 className="text-xl font-semibold">Embassies</h2>
          <p className="text-gray-600">Add embassy address, phone, email, website, requirements</p>
        </div>

        <div className="p-4 border rounded-xl">
          <h2 className="text-xl font-semibold">Universities</h2>
          <p className="text-gray-600">Add university details by country</p>
        </div>

        <div className="p-4 border rounded-xl">
          <h2 className="text-xl font-semibold">Courses</h2>
          <p className="text-gray-600">Course name, link, intake, deadline, fees</p>
        </div>
      </div>
    </div>
  );
}
