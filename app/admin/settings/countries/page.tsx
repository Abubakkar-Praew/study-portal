"use client";

import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "admin_countries";

type CountryItem = {
  name: string;
  slug: string;
  active: boolean;
};

const seedCountries: CountryItem[] = [{ name: "UK", slug: "uk", active: true }];

const makeSlug = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const normalizeCountries = (items: CountryItem[]) =>
  items.map((item) => ({
    name: item.name,
    slug: item.slug || makeSlug(item.name),
    active: item.active ?? true,
  }));

export default function CountriesSettingsPage() {
  const [countries, setCountries] = useState<CountryItem[]>(seedCountries);
  const [newCountry, setNewCountry] = useState("");
  const [newStatus, setNewStatus] = useState<"" | "active" | "inactive">("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editCountry, setEditCountry] = useState<CountryItem | null>(null);
  const [editStatus, setEditStatus] = useState<"" | "active" | "inactive">("");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as CountryItem[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          setCountries(normalizeCountries(parsed));
          return;
        }
      }
      setCountries(seedCountries);
    } catch {
      setCountries(seedCountries);
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(countries));
    } catch {
      // ignore
    }
    window.dispatchEvent(new Event("admin_countries_updated"));
  }, [countries]);

  const isDuplicate = useMemo(() => {
    const slug = makeSlug(newCountry);
    return countries.some((c) => c.slug === slug);
  }, [newCountry, countries]);

  const handleAddCountry = () => {
    const slug = makeSlug(newCountry);
    if (!slug || isDuplicate || !newStatus) return;
    setCountries((prev) => [
      { name: newCountry.trim(), slug, active: newStatus === "active" },
      ...prev,
    ]);
    setNewCountry("");
    setNewStatus("");
    setIsModalOpen(false);
  };

  const handleDelete = (slug: string) => {
    setCountries((prev) => prev.filter((c) => c.slug !== slug));
  };

  const handleToggleActive = (slug: string) => {
    setCountries((prev) =>
      prev.map((c) => (c.slug === slug ? { ...c, active: !c.active } : c))
    );
  };

  const handleOpenEdit = (country: CountryItem) => {
    setEditCountry(country);
    setEditStatus(country.active ? "active" : "inactive");
  };

  const handleSaveEdit = () => {
    if (!editCountry || !editStatus) return;
    setCountries((prev) =>
      prev.map((c) =>
        c.slug === editCountry.slug ? { ...c, active: editStatus === "active" } : c
      )
    );
    setEditCountry(null);
    setEditStatus("");
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border p-8 shadow-sm" style={{ backgroundColor: "#3B82F6" }}>
        <div className="flex flex-wrap items-center justify-between gap-4 text-white">
          <div>
            <h1 className="text-2xl font-semibold">Manage Countries</h1>
            <p className="mt-2 text-sm text-blue-100">
              Add or update countries that appear in the admin sidebar.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100 hover:text-blue-900 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Add Country
          </button>
        </div>
      </div>

      <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
        <div className="border-b bg-gray-50 px-6 py-4">
          <h2 className="text-lg font-semibold">Country List</h2>
        </div>
        <div className="divide-y">
          <div className="grid grid-cols-12 gap-4 px-6 py-3 text-xs font-semibold uppercase text-gray-500">
            <div className="col-span-7">Name</div>
            <div className="col-span-3">Status</div>
            <div className="col-span-2 text-right">Actions</div>
          </div>
          {countries.map((country) => (
            <div key={country.slug} className="grid grid-cols-12 gap-4 px-6 py-4 items-center">
              <div className="col-span-7">
                <span className="text-sm font-medium text-gray-900">{country.name}</span>
              </div>
              <div className="col-span-3">
                <span
                  className={
                    country.active
                      ? "inline-flex rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700"
                      : "inline-flex rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600"
                  }
                >
                  {country.active ? "Active" : "Inactive"}
                </span>
              </div>
              <div className="col-span-2 flex justify-end gap-3 text-sm">
                <button
                  type="button"
                  onClick={() => handleOpenEdit(country)}
                  className="text-blue-600 hover:text-blue-700"
                  aria-label="Edit country"
                  title="Edit"
                >
                  ✏️
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(country.slug)}
                  className="text-red-600 hover:text-red-700"
                  aria-label="Delete country"
                  title="Delete"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden">
              <div className="border-b px-6 py-4 text-center" style={{ backgroundColor: "#3B82F6" }}>
                <h2 className="text-lg font-semibold text-white">Add New Country</h2>
                <p className="mt-1 text-sm text-blue-100">Enter country name and status.</p>
              </div>
              <div className="px-6 py-6 space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Country Name</label>
                  <input
                    value={newCountry}
                    onChange={(event) => setNewCountry(event.target.value)}
                    className="mt-2 w-full rounded-xl border px-3 py-2 text-sm"
                    placeholder="e.g. Canada"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Status</label>
                  <select
                    value={newStatus}
                    onChange={(event) => setNewStatus(event.target.value as "" | "active" | "inactive")}
                    className="mt-2 w-full rounded-xl border px-3 py-2 text-sm"
                  >
                    <option value="">Select Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
                {isDuplicate && (
                  <p className="text-sm text-red-600">Country already exists.</p>
                )}
              </div>
              <div className="flex justify-center gap-3 border-t px-6 py-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setNewCountry("");
                    setNewStatus("");
                  }}
                  className="rounded-xl border px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAddCountry}
                  disabled={!newCountry.trim() || isDuplicate || !newStatus}
                  className="rounded-xl bg-black px-4 py-2 text-sm text-white transition hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Save Country
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {editCountry && (
        <>
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden">
              <div className="border-b px-6 py-4 text-center" style={{ backgroundColor: "#3B82F6" }}>
                <h2 className="text-lg font-semibold text-white">Edit Country</h2>
                <p className="mt-1 text-sm text-blue-100">Update status for {editCountry.name}.</p>
              </div>
              <div className="px-6 py-6 space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Status</label>
                  <select
                    value={editStatus}
                    onChange={(event) => setEditStatus(event.target.value as "" | "active" | "inactive")}
                    className="mt-2 w-full rounded-xl border px-3 py-2 text-sm"
                  >
                    <option value="">Select Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center gap-3 border-t px-6 py-4">
                <button
                  type="button"
                  onClick={() => {
                    setEditCountry(null);
                    setEditStatus("");
                  }}
                  className="rounded-xl border px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveEdit}
                  disabled={!editStatus}
                  className="rounded-xl bg-black px-4 py-2 text-sm text-white transition hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
