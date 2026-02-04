import CourseForm from "@/components/admin/CourseForm";

export default function EditCoursePage({ params }: { params: { id: string } }) {
  const initial = {
    id: params.id,
    country: "UK",
    university: "University of Wolverhampton",
    title: "MSc Public Health",
    level: "MSc",
    duration: "1 year",
    fee: "£15,500",
    scholarship: "£2,500",
    intakes: "May, Sep",
    deadline: "Rolling",
    deposit: "£4,000",
    language_requirements: "IELTS 6.0 (5.5 each)",
    entry_requirements: "Bachelor's degree or equivalent",
    description: "Full course description here...",
    status: "Active",
  };

  return (
    <div className="max-w-5xl">
      <CourseForm mode="edit" initial={initial} />
    </div>
  );
}
