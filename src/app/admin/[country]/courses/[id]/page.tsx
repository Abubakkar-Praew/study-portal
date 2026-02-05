"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

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
};

export default function CourseDetailPage() {
  const params = useParams();
  const countryParam = Array.isArray(params?.country) ? params.country[0] : params?.country;
  const idParam = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const country = (countryParam || "uk").toLowerCase();
  const storageKey = `admin_${country}_courses`;
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored) as Course[];
        const found = parsed.find((item) => item.id === idParam);
        setCourse(found ?? null);
      }
    } catch {
      setCourse(null);
    }
  }, [storageKey, idParam]);

  if (!course) {
    return (
      <div className="rounded-2xl border bg-white p-8 text-sm text-gray-500">
        Course not found.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">{course.title}</h1>
          <p className="text-sm text-gray-600">Course details</p>
        </div>
        <Link
          href={`/admin/${country}/courses`}
          className="rounded-xl border px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
        >
          Back
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Detail label="Level Of Study" value={course.level} />
        <Detail label="Intake" value={course.intake} />
        <Detail label="Location" value={course.location} />
        <Detail label="Duration" value={course.duration} />
        <Detail label="Study Mode" value={course.studyMode} />
        <Detail label="Tuition Fee GBP" value={course.tuitionFeeGbp} />
        <Detail label="Scholarships" value={course.scholarships} />
        <Detail label="Initial Fee GBP" value={course.initialFeeGbp} />
        <Detail label="Entry Requirement" value={course.entryRequirement} />
        <Detail label="English Requirement" value={course.englishRequirement} />
        <Detail label="Interview" value={course.interview} />
      </div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-white p-5">
      <p className="text-xs font-semibold uppercase text-gray-500">{label}</p>
      <p className="mt-2 text-sm text-gray-900">{value}</p>
    </div>
  );
}
