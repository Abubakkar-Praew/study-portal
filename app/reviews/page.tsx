import { testimonials } from "@/lib/site-data";

export default function ReviewsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Student Reviews</h1>
        <p className="mt-2 text-gray-600">
          Hear from students who completed their applications with our guidance.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="rounded-2xl border bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-700">"{testimonial.text}"</p>
            <div className="mt-4">
              <div className="text-sm font-semibold">{testimonial.name}</div>
              <div className="text-xs text-gray-500">{testimonial.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
