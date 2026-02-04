import StatCard from "@/components/admin/StatCard";
import RecentTable from "@/components/admin/RecentTable";

export default function AdminDashboardPage() {
  const stats = [
    { label: "Countries", value: 12, hint: "Active countries" },
    { label: "Universities", value: 240, hint: "Total universities" },
    { label: "Courses", value: 5200, hint: "Active courses" },
    { label: "Students", value: 860, hint: "Registered users" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} hint={s.hint} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <RecentTable
          title="Recently Added Courses"
          columns={["Course", "University", "Country", "Status"]}
          rows={[
            ["MSc Public Health", "University of Wolverhampton", "UK", "Active"],
            ["MBA (Leadership)", "University of Derby", "UK", "Active"],
            ["BBA", "Istanbul Aydin University", "Turkey", "Active"],
          ]}
        />
        <RecentTable
          title="Recent Student Registrations"
          columns={["Student", "Email", "Date"]}
          rows={[
            ["Ali Khan", "ali@email.com", "2026-02-03"],
            ["Sara Ahmad", "sara@email.com", "2026-02-02"],
            ["Usman", "usman@email.com", "2026-02-01"],
          ]}
        />
      </div>
    </div>
  );
}
