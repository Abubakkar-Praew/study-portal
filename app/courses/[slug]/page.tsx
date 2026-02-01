import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "@/lib/courses";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export default function CourseDetailPage({ params }: PageProps) {
  const course = courses.find((item) => item.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <Link href="/courses" className="text-sm font-medium underline">
          Back to courses
        </Link>
      </div>

      <header className="space-y-2">
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <p className="text-gray-600">{course.description}</p>
      </header>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <dl className="grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-xs uppercase text-gray-500">Level</dt>
            <dd className="text-lg font-semibold">{course.level}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase text-gray-500">Lessons</dt>
            <dd className="text-lg font-semibold">{course.lessons}</dd>
          </div>
        </dl>
      </div>

      <section className="rounded-2xl border bg-gray-50 p-6">
        <h2 className="text-lg font-semibold">What you will learn</h2>
        <ul className="mt-3 space-y-2 text-sm text-gray-700">
          <li>Core concepts and hands-on exercises.</li>
          <li>Guided practice with curated resources.</li>
          <li>Milestones to track your progress.</li>
        </ul>
      </section>
    </div>
  );
}
