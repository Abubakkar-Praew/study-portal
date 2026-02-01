export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-gray-600">Welcome to your learning dashboard</p>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-600">Courses Enrolled</p>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-600">Lessons Completed</p>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-600">Progress</p>
          <p className="mt-2 text-3xl font-bold">0%</p>
        </div>
      </div>
    </div>
  );
}
