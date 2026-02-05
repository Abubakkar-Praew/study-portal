"use client";

import Link from "next/link";

export default function SettingsPage() {
  return (
    <div className="rounded-2xl border bg-white p-8 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Manage Countries</h1>
          <p className="mt-2 text-sm text-gray-600">
            You can add more countries anytime from here or delete any country from here, Each country creates Universities, Courses, and Embassy links.
          </p>
        </div>
        <Link
          href="/admin/settings/countries"
          className="rounded-xl bg-black px-4 py-2 text-sm text-white transition hover:bg-gray-900"
        >
          Manage Countries
        </Link>
      </div>
    </div>
  );
}
