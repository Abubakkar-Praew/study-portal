export default function StatCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: number | string;
  hint?: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="mt-2 text-3xl font-semibold">{value}</div>
      {hint && <div className="mt-2 text-xs text-gray-400">{hint}</div>}
    </div>
  );
}
