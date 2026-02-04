"use client";

import { useState } from "react";
import Link from "next/link";

type Mode = "create" | "edit";

export default function CourseForm({
  mode,
  initial,
}: {
  mode: Mode;
  initial?: any;
}) {
  const [form, setForm] = useState({
    country: initial?.country ?? "",
    university: initial?.university ?? "",
    title: initial?.title ?? "",
    level: initial?.level ?? "",
    duration: initial?.duration ?? "",
    fee: initial?.fee ?? "",
    scholarship: initial?.scholarship ?? "",
    intakes: initial?.intakes ?? "",
    deadline: initial?.deadline ?? "",
    deposit: initial?.deposit ?? "",
    language_requirements: initial?.language_requirements ?? "",
    entry_requirements: initial?.entry_requirements ?? "",
    description: initial?.description ?? "",
    status: initial?.status ?? "Active",
  });

  function update(key: string, value: string) {
    setForm((prev: any) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(
      `${mode === "create" ? "Create" : "Update"} course (wire this to your API)\n\n` +
      JSON.stringify(form, null, 2)
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-xl font-semibold">{mode === "create" ? "Add New Course" : "Edit Course"}</h1>
            <p className="mt-1 text-sm text-gray-600">Fill course details accurately for students.</p>
          </div>
          <Link href="/admin/courses" className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50">
            Back
          </Link>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium">Country</label>
              <input className="mt-1 w-full rounded-xl border px-3 py-2 text-sm" placeholder="e.g., UK" value={form.country} onChange={(e) => update("country", e.target.value)} />
            </div>

            <div>
              <label className="text-sm font-medium">University</label>
              <input className="mt-1 w-full rounded-xl border px-3 py-2 text-sm" placeholder="e.g., University of Wolverhampton" value={form.university} onChange={(e) => update("university", e.target.value)} />
            </div>

            <div>
              <label className="text-sm font-medium">Course Title</label>
              <input className="mt-1 w-full rounded-xl border px-3 py-2 text-sm" placeholder="e.g., MSc Public Health" value={form.title} onChange={(e) => update("title", e.target.value)} />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium">Level</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2 text-sm" placeholder="e.g., MSc" value={form.level} onChange={(e) => update("level", e.target.value)} />
              </div>
              <div>
                <label className="text-sm font-medium">Duration</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2 text-sm" placeholder="e.g., 1 year" value={form.duration} onChange={(e) => update("duration", e.target.value)} />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium">Fee</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2 text-sm" placeholder="e.g., £15,500" value={form.fee} onChange={(e) => update("fee", e.target.value)} />
              </div>
              <div>
                <label className="text-sm font-medium">Scholarship</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2 text-sm" placeholder="e.g., £2,500" value={form.scholarship} onChange={(e) => update("scholarship", e.target.value)} />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium">Intakes</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2 text-sm" placeholder="e.g., Jan, May, Sep" value={form.intakes} onChange={(e) => update("intakes", e.target.value)} />
              </div>
              <div>
                <label className="text-sm font-medium">Deadline</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2 text-sm" placeholder="e.g., Rolling / 15 March" value={form.deadline} onChange={(e) => update("deadline", e.target.value)} />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium">Deposit</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2 text-sm" placeholder="e.g., £4,000" value={form.deposit} onChange={(e) => update("deposit", e.target.value)} />
              </div>
              <div>
                <label className="text-sm font-medium">Status</label>
                <select className="mt-1 w-full rounded-xl border px-3 py-2 text-sm" value={form.status} onChange={(e) => update("status", e.target.value)}>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Language Requirements</label>
              <textarea className="mt-1 w-full rounded-xl border px-3 py-2 text-sm" rows={2} placeholder="e.g., IELTS 6.0 overall..." value={form.language_requirements} onChange={(e) => update("language_requirements", e.target.value)} />
            </div>

            <div>
              <label className="text-sm font-medium">Entry Requirements</label>
              <textarea className="mt-1 w-full rounded-xl border px-3 py-2 text-sm" rows={2} placeholder="e.g., Bachelor's degree..." value={form.entry_requirements} onChange={(e) => update("entry_requirements", e.target.value)} />
            </div>

            <div>
              <label className="text-sm font-medium">Full Course Description</label>
              <textarea className="mt-1 w-full rounded-xl border px-3 py-2 text-sm" rows={5} placeholder="Write detailed course overview..." value={form.description} onChange={(e) => update("description", e.target.value)} />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button type="submit" className="rounded-xl bg-black px-5 py-2 text-sm text-white hover:opacity-90">
            {mode === "create" ? "Save Course" : "Update Course"}
          </button>
          <Link href="/admin/courses" className="rounded-xl border px-5 py-2 text-sm hover:bg-gray-50">
            Cancel
          </Link>
        </div>
      </div>
    </form>
  );
}
