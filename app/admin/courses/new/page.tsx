import CourseForm from "@/components/admin/CourseForm";

export default function NewCoursePage() {
  return (
    <div className="max-w-5xl">
      <CourseForm mode="create" />
    </div>
  );
}
