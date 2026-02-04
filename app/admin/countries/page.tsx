import Link from "next/link";

export default function CountriesPage() {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Countries</h1>
        <Link
          href="/admin/countries/new"
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          + Add Country
        </Link>
      </div>

      <div className="rounded-2xl border bg-white p-8 shadow-sm text-center">
        <p className="mt-2 text-gray-600">Coming soon</p>
      </div>
    </div>
  );
}
