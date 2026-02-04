import Link from "next/link";
import AdminTableShell from "@/components/admin/AdminTableShell";
import DeleteButton from "@/components/admin/DeleteButton";

export default function AdminCoursesPage() {
  const rows = [
    {
      id: "1",
      title: "MSc Public Health",
      university: "University of Wolverhampton",
      country: "UK",
      level: "MSc",
      fee: "£15,500",
      intakes: "May, Sep",
      status: "Active",
    },
    {
      id: "2",
      title: "MBA (Leadership & Management)",
      university: "University of Derby",
      country: "UK",
      level: "MBA",
      fee: "£16,000",
      intakes: "Jan, Sep",
      status: "Active",
    },
  ];

  return (
    <AdminTableShell
      title="Courses"
      subtitle="Manage courses across countries & universities"
      primaryAction={
        <Link
          href="/admin/courses/new"
          className="rounded-xl bg-black px-4 py-2 text-sm text-white hover:opacity-90"
        >
          + Add New Course
        </Link>
      }
    >
      <div className="grid gap-3 md:grid-cols-5">
        <input className="rounded-xl border px-3 py-2 text-sm" placeholder="Search course title..." />
        <select className="rounded-xl border px-3 py-2 text-sm">
          <option value="">Country (All)</option>
          <option>UK</option>
          <option>Turkey</option>
        </select>
        <select className="rounded-xl border px-3 py-2 text-sm">
          <option value="">University (All)</option>
          <option>University of Wolverhampton</option>
          <option>University of Derby</option>
        </select>
        <select className="rounded-xl border px-3 py-2 text-sm">
          <option value="">Level (All)</option>
          <option>MSc</option>
          <option>MBA</option>
          <option>BA</option>
        </select>
        <select className="rounded-xl border px-3 py-2 text-sm">
          <option value="">Intake (All)</option>
          <option>January</option>
          <option>May</option>
          <option>September</option>
        </select>
      </div>

      <div className="mt-4 overflow-x-auto rounded-2xl border bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-5 py-3 text-left font-medium">Course</th>
              <th className="px-5 py-3 text-left font-medium">University</th>
              <th className="px-5 py-3 text-left font-medium">Country</th>
              <th className="px-5 py-3 text-left font-medium">Level</th>
              <th className="px-5 py-3 text-left font-medium">Fee</th>
              <th className="px-5 py-3 text-left font-medium">Intakes</th>
              <th className="px-5 py-3 text-left font-medium">Status</th>
              <th className="px-5 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {rows.map((r) => (
              <tr key={r.id} className="hover:bg-gray-50">
                <td className="px-5 py-3 font-medium">{r.title}</td>
                <td className="px-5 py-3">{r.university}</td>
                <td className="px-5 py-3">{r.country}</td>
                <td className="px-5 py-3">{r.level}</td>
                <td className="px-5 py-3">{r.fee}</td>
                <td className="px-5 py-3">{r.intakes}</td>
                <td className="px-5 py-3">
                  <span className="rounded-full bg-green-50 px-2 py-1 text-xs text-green-700">{r.status}</span>
                </td>
                <td className="px-5 py-3 text-right">
                  <div className="inline-flex gap-2">
                    <Link href={`/admin/courses/${r.id}/edit`} className="rounded-lg border px-3 py-1.5 text-xs hover:bg-gray-50">
                      Edit
                    </Link>
                    <DeleteButton />
                  </div>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td className="px-5 py-10 text-center text-gray-500" colSpan={8}>
                  No courses found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminTableShell>
  );
}
