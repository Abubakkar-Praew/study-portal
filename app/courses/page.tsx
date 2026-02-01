import CourseCard from "@/components/CourseCard";
import { courses } from "@/lib/courses";

export default function CoursesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">All Courses</h1>
        <p className="mt-2 text-gray-600">
          Choose from our comprehensive course catalog
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {courses.map((course: typeof courses[0]) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </div>
  );
}
