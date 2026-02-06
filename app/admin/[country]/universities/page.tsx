"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type University = {
  id: string;
  name: string;
  city: string;
  address: string;
  contactNumber: string;
  email: string;
  website: string;
  undergradRequirement: string;
  postgradRequirement: string;
  englishRequirement: string[];
  moiList: string;
  additionalNote: string;
  createdAt: string;
};
const ENGLISH_OPTIONS = ["IELTS", "PTE", "Oxford", "Language Cert"];

const emptyForm = {
  name: "",
  city: "",
  address: "",
  contactNumber: "",
  email: "",
  website: "",
  undergradRequirement: "",
  postgradRequirement: "",
  englishRequirement: [] as string[],
  moiList: "",
  additionalNote: "",
};

export default function CountryUniversitiesPage() {
  const router = useRouter();
  const params = useParams();
  const countryParam = Array.isArray(params?.country) ? params.country[0] : params?.country;
  const country = (countryParam || "uk").toLowerCase();
  const storageKey = `admin_${country}_universities`;

  const [universities, setUniversities] = useState<University[]>([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored) as University[];
        if (Array.isArray(parsed)) {
          setUniversities(parsed);
        }
      }
    } catch {
      setUniversities([]);
    }
  }, [storageKey]);

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(universities));
    } catch {
      // ignore
    }
    window.dispatchEvent(new Event("admin_universities_updated"));
  }, [universities, storageKey]);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return universities;
    return universities.filter((item) =>
      [item.name, item.city, item.address].some((value) => value.toLowerCase().includes(query))
    );
  }, [search, universities]);

  const openCreate = () => {
    setEditingId(null);
    setFormData(emptyForm);
    setIsModalOpen(true);
  };

  const openEdit = (item: University) => {
    setEditingId(item.id);
    setFormData({
      name: item.name,
      city: item.city,
      address: item.address,
      contactNumber: item.contactNumber,
      email: item.email,
      website: item.website,
      undergradRequirement: item.undergradRequirement ?? "",
      postgradRequirement: item.postgradRequirement ?? "",
      englishRequirement: item.englishRequirement ?? [],
      moiList: item.moiList ?? "",
      additionalNote: item.additionalNote ?? "",
    });
    setIsModalOpen(true);
  };

  const isValid =
    formData.name.trim() &&
    formData.city.trim() &&
    formData.address.trim() &&
    formData.contactNumber.trim() &&
    formData.email.trim() &&
    formData.website.trim() &&
    formData.undergradRequirement.trim() &&
    formData.postgradRequirement.trim() &&
    formData.englishRequirement.length > 0;

  const toggleEnglish = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      englishRequirement: prev.englishRequirement.includes(value)
        ? prev.englishRequirement.filter((item) => item !== value)
        : [...prev.englishRequirement, value],
    }));
  };

  const handleSave = () => {
    if (!isValid) return;
    if (editingId) {
      setUniversities((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? { ...item, ...formData }
            : item
        )
      );
    } else {
      const newItem: University = {
        id: `${Date.now()}`,
        createdAt: new Date().toISOString(),
        ...formData,
        englishRequirement: [...formData.englishRequirement],
      };
      setUniversities((prev) => [newItem, ...prev]);
    }
    setIsModalOpen(false);
    setEditingId(null);
    setFormData(emptyForm);
  };

  const handleDelete = (id: string) => {
    setUniversities((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border px-6 py-4 shadow-sm" style={{ backgroundColor: "#3B82F6" }}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="text-white">
            <h1 className="text-2xl font-semibold">{country.toUpperCase()} Universities</h1>
            <p className="mt-1 text-sm text-blue-100">Manage universities for this country.</p>
          </div>
          <div className="flex flex-1 justify-center">
            <div className="relative w-full max-w-xl">
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search universities"
                className="w-full rounded-xl border border-white/40 bg-white px-4 py-2 pr-10 text-sm text-gray-900 placeholder:text-gray-400"
              />
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <MagnifyingGlassIcon className="h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={openCreate}
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-100"
          >
            Add University
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.length === 0 && (
          <div className="rounded-2xl border bg-white p-8 text-sm text-gray-500">
            No universities yet.
          </div>
        )}
        {filtered.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <button
              type="button"
              onClick={() => router.push(`/admin/${country}/universities/${item.id}`)}
              className="w-full text-left"
            >
              <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
              <p className="mt-2 text-sm text-gray-600">City: {item.city}</p>
              <p className="text-sm text-gray-600">Address: {item.address}</p>
            </button>
            <div className="mt-4 flex gap-3">
              <button
                type="button"
                onClick={() => openEdit(item)}
                className="rounded-lg border px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => handleDelete(item.id)}
                className="rounded-lg border border-red-200 px-3 py-1.5 text-xs text-red-600 hover:bg-red-50"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-6">
            <div className="flex w-full max-w-2xl max-h-[90vh] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
              <div
                className="flex items-center justify-between px-6 py-3 text-white"
                style={{ backgroundColor: "#3B82F6" }}
              >
                <div>
                  <h2 className="text-lg font-semibold">
                    {editingId ? "Edit University" : "Add New University"}
                  </h2>
                  <p className="text-sm text-blue-100">Create or update a university entry.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-lg border border-white/40 px-3 py-1 text-xs font-semibold text-white hover:bg-white/10"
                >
                  Close
                </button>
              </div>
              <div className="flex-1 space-y-5 overflow-y-auto px-6 py-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      University Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      value={formData.name}
                      onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                      className="mt-2 w-full rounded-xl border px-3 py-2 text-sm"
                      placeholder="University name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      value={formData.city}
                      onChange={(event) => setFormData({ ...formData, city: event.target.value })}
                      className="mt-2 w-full rounded-xl border px-3 py-2 text-sm"
                      placeholder="City"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium text-gray-700">
                      Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      value={formData.address}
                      onChange={(event) => setFormData({ ...formData, address: event.target.value })}
                      className="mt-2 w-full rounded-xl border px-3 py-2 text-sm"
                      placeholder="Address"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      value={formData.contactNumber}
                      onChange={(event) =>
                        setFormData({ ...formData, contactNumber: event.target.value })
                      }
                      className="mt-2 w-full rounded-xl border px-3 py-2 text-sm"
                      placeholder="Contact number"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                      className="mt-2 w-full rounded-xl border px-3 py-2 text-sm"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium text-gray-700">
                      Website <span className="text-red-500">*</span>
                    </label>
                    <input
                      value={formData.website}
                      onChange={(event) => setFormData({ ...formData, website: event.target.value })}
                      className="mt-2 w-full rounded-xl border px-3 py-2 text-sm"
                      placeholder="Website"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Undergrad Requirement <span className="text-red-500">*</span>
                    </label>
                    <input
                      value={formData.undergradRequirement}
                      onChange={(event) =>
                        setFormData({ ...formData, undergradRequirement: event.target.value })
                      }
                      className="mt-2 w-full rounded-xl border px-3 py-2 text-sm"
                      placeholder="e.g. Minimum GPA / %"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Postgrad Requirement <span className="text-red-500">*</span>
                    </label>
                    <input
                      value={formData.postgradRequirement}
                      onChange={(event) =>
                        setFormData({ ...formData, postgradRequirement: event.target.value })
                      }
                      className="mt-2 w-full rounded-xl border px-3 py-2 text-sm"
                      placeholder="e.g. Minimum GPA / %"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    English Requirement <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2 flex flex-wrap gap-3">
                    {ENGLISH_OPTIONS.map((option) => (
                      <label key={option} className="flex items-center gap-2 text-sm text-gray-700">
                        <input
                          type="checkbox"
                          checked={formData.englishRequirement.includes(option)}
                          onChange={() => toggleEnglish(option)}
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">MOI List</label>
                  <textarea
                    value={formData.moiList}
                    onChange={(event) => setFormData({ ...formData, moiList: event.target.value })}
                    className="mt-2 w-full rounded-xl border px-3 py-2 text-sm"
                    rows={3}
                    placeholder="Optional list"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Additional Note</label>
                  <textarea
                    value={formData.additionalNote}
                    onChange={(event) =>
                      setFormData({ ...formData, additionalNote: event.target.value })
                    }
                    className="mt-2 w-full rounded-xl border px-3 py-2 text-sm"
                    rows={3}
                    placeholder="Optional notes"
                  />
                </div>
              </div>
              <div className="flex justify-center gap-3 border-t px-6 py-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-xl border px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  disabled={!isValid}
                  className="rounded-xl bg-black px-4 py-2 text-sm text-white hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {editingId ? "Save Changes" : "Save University"}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
