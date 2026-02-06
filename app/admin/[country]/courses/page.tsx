"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type Course = {
  id: string;
  title: string;
  level: string;
  intake: string;
  location: string;
  duration: string;
  studyMode: string;
  tuitionFeeGbp: string;
  scholarships: string;
  initialFeeGbp: string;
  entryRequirement: string;
  englishRequirement: string;
  interview: string;
  createdAt: string;
};

const emptyForm = {
  title: "",
  level: "",
  intake: "",
  location: "",
  duration: "",
  studyMode: "",
  tuitionFeeGbp: "",
  scholarships: "",
  initialFeeGbp: "",
  entryRequirement: "",
  englishRequirement: "",
  interview: "",
};

export default function CountryCoursesPage() {
  const router = useRouter();
  const params = useParams();
  const countryParam = Array.isArray(params?.country) ? params.country[0] : params?.country;
  const country = (countryParam || "uk").toLowerCase();
  const storageKey = `admin_${country}_courses`;

  const [courses, setCourses] = useState<Course[]>([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored) as Course[];
        if (Array.isArray(parsed)) {
          setCourses(parsed);
        }
      }
    } catch {
      setCourses([]);
    }
  }, [storageKey]);

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(courses));
    } catch {
      // ignore
    }
    window.dispatchEvent(new Event("admin_courses_updated"));
  }, [courses, storageKey]);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return courses;
    return courses.filter((item) =>
      [item.title, item.level, item.intake, item.location].some((value) =>
        value.toLowerCase().includes(query)
      )
    );
  }, [search, courses]);

  const openCreate = () => {
    setEditingId(null);
    setFormData(emptyForm);
    setIsModalOpen(true);
  };

  const openEdit = (item: Course) => {
    setEditingId(item.id);
    setFormData({
      title: item.title,
      level: item.level,
      intake: item.intake,
      location: item.location,
      duration: item.duration,
      studyMode: item.studyMode,
      tuitionFeeGbp: item.tuitionFeeGbp,
      scholarships: item.scholarships,
      initialFeeGbp: item.initialFeeGbp,
      entryRequirement: item.entryRequirement,
      englishRequirement: item.englishRequirement,
      interview: item.interview,
    });
    setIsModalOpen(true);
  };

  const isValid =
    formData.title.trim() &&
    formData.level.trim() &&
    formData.intake.trim() &&
    formData.location.trim() &&
    formData.duration.trim() &&
    formData.studyMode.trim() &&
    formData.tuitionFeeGbp.trim() &&
    formData.scholarships.trim() &&
    formData.initialFeeGbp.trim() &&
    formData.entryRequirement.trim() &&
    formData.englishRequirement.trim() &&
    formData.interview.trim();

  const handleSave = () => {
    if (!isValid) return;
    if (editingId) {
      setCourses((prev) =>
        prev.map((item) => (item.id === editingId ? { ...item, ...formData } : item))
      );
    } else {
      const newItem: Course = {
        id: `${Date.now()}`,
        createdAt: new Date().toISOString(),
        ...formData,
      };
      setCourses((prev) => [newItem, ...prev]);
    }
    setIsModalOpen(false);
    setEditingId(null);
    setFormData(emptyForm);
  };

  const handleDelete = (id: string) => {
    setCourses((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border px-6 py-4 shadow-sm" style={{ backgroundColor: "#3B82F6" }}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="text-white">
            <h1 className="text-2xl font-semibold">{country.toUpperCase()} Courses</h1>
            <p className="mt-1 text-sm text-blue-100">Manage courses for this country.</p>
          </div>
          <div className="flex flex-1 justify-center">
            <div className="relative w-full max-w-xl">
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search courses by title, level, intake, or location"
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
            Add Course
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.length === 0 && (
          <div className="rounded-2xl border bg-white p-8 text-sm text-gray-500">
            No courses yet.
          </div>
        )}
        {filtered.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <button
              type="button"
              onClick={() => router.push(`/admin/${country}/courses/${item.id}`)}
              className="w-full text-left"
            >
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">Level: {item.level}</p>
              <p className="text-sm text-gray-600">Intake: {item.intake}</p>
              <p className="text-sm text-gray-600">Tuition Fee (GBP): {item.tuitionFeeGbp}</p>
              <p className="text-sm text-gray-600">Scholarships: {item.scholarships}</p>
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
                    {editingId ? "Edit Course" : "Add New Course"}
                  </h2>
                  <p className="text-sm text-blue-100">Create or update a course entry.</p>
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
                  <Field
                    label="Course Title"
                    value={formData.title}
                    onChange={(value) => setFormData({ ...formData, title: value })}
                    required
                  />
                  <Field
                    label="Level Of Study"
                    value={formData.level}
                    onChange={(value) => setFormData({ ...formData, level: value })}
                    required
                  />
                  <Field
                    label="Intake"
                    value={formData.intake}
                    onChange={(value) => setFormData({ ...formData, intake: value })}
                    required
                  />
                  <Field
                    label="Location"
                    value={formData.location}
                    onChange={(value) => setFormData({ ...formData, location: value })}
                    required
                  />
                  <Field
                    label="Duration"
                    value={formData.duration}
                    onChange={(value) => setFormData({ ...formData, duration: value })}
                    required
                  />
                  <Field
                    label="Study Mode"
                    value={formData.studyMode}
                    onChange={(value) => setFormData({ ...formData, studyMode: value })}
                    required
                  />
                  <Field
                    label="Tuition Fee GBP"
                    value={formData.tuitionFeeGbp}
                    onChange={(value) => setFormData({ ...formData, tuitionFeeGbp: value })}
                    required
                  />
                  <Field
                    label="Scholarships"
                    value={formData.scholarships}
                    onChange={(value) => setFormData({ ...formData, scholarships: value })}
                    required
                  />
                  <Field
                    label="Initial Fee GBP"
                    value={formData.initialFeeGbp}
                    onChange={(value) => setFormData({ ...formData, initialFeeGbp: value })}
                    required
                  />
                  <Field
                    label="Entry Requirement"
                    value={formData.entryRequirement}
                    onChange={(value) => setFormData({ ...formData, entryRequirement: value })}
                    required
                  />
                  <Field
                    label="English Requirement"
                    value={formData.englishRequirement}
                    onChange={(value) => setFormData({ ...formData, englishRequirement: value })}
                    required
                  />
                  <Field
                    label="Interview"
                    value={formData.interview}
                    onChange={(value) => setFormData({ ...formData, interview: value })}
                    required
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
                  {editingId ? "Save Changes" : "Save Course"}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  required,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-xl border px-3 py-2 text-sm"
        placeholder={label}
      />
    </div>
  );
}
