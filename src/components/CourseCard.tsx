import Link from "next/link";
import type { Course } from "@/lib/courses";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold">{course.title}</h3>
          <p className="mt-1 text-sm text-gray-600">{course.description}</p>
        </div>
        <span className="rounded-full border px-3 py-1 text-xs text-gray-700">
          {course.level}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-gray-600">{course.lessons} lessons</span>
        <Link href={`/courses/${course.slug}`} className="text-sm font-medium underline">
          View
        </Link>
      </div>
    </div>
  );
}
