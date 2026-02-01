import Link from "next/link";
import { destinations, services, stats, testimonials } from "@/lib/site-data";
import ConsultationForm from "@/components/ConsultationForm";

export default function HomePage() {
  return (
    <div className="space-y-14">
      {/* HERO + LEAD FORM */}
      <section className="rounded-3xl border p-6 shadow-sm md:p-10" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <p className="inline-flex rounded-full border px-3 py-1 text-xs" style={{ color: '#6B7280', borderColor: '#E5E7EB' }}>
              Study Abroad • Admissions • Visa Guidance
            </p>

            <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl" style={{ color: '#1F2937' }}>
              Your complete study abroad solution — from counselling to visa.
            </h1>

            <p className="mt-4 max-w-2xl" style={{ color: '#6B7280' }}>
              Explore destinations, choose the right course, and submit your application with a clean
              checklist-driven process.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/apply"
                className="rounded-xl px-5 py-3 text-sm font-medium text-white hover:opacity-90"
                style={{ backgroundColor: '#F59E0B' }}
              >
                Apply Now
              </Link>
              <Link
                href="/destinations"
                className="rounded-xl border px-5 py-3 text-sm font-medium hover:bg-gray-50"
              >
                Study Destinations
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border px-5 py-3 text-sm font-medium hover:bg-gray-50"
              >
                Ask a Question
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {stats.map((s) => (
                <div key={s.v} className="rounded-2xl border bg-gray-50 p-4">
                  <div className="text-2xl font-bold">{s.k}</div>
                  <div className="mt-1 text-sm text-gray-600">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border bg-gray-50 p-6">
              <h2 className="text-lg font-semibold">Free Consultation</h2>
              <p className="mt-1 text-sm text-gray-600">Enter your details — we’ll contact you.</p>

              {/* Client component (interactive) */}
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">Study Destinations</h2>
            <p className="mt-2 text-gray-600">
              Choose where you want to study — we’ll guide the full process.
            </p>
          </div>
          <Link href="/destinations" className="text-sm font-medium underline">
            View all →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.slice(0, 8).map((d) => (
            <Link
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className="rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="text-sm text-gray-500">Study in</div>
              <div className="mt-1 text-base font-semibold">{d.name}</div>
              <div className="mt-3 inline-flex rounded-full border px-3 py-1 text-xs text-gray-700">
                Explore
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="rounded-3xl border bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold">Our Services</h2>
        <p className="mt-2 text-gray-600">Everything you need in one place.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border bg-gray-50 p-6">
              <div className="text-base font-semibold">{s.title}</div>
              <div className="mt-2 text-sm text-gray-600">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section>
        <h2 className="text-xl font-semibold">How it works</h2>
        <p className="mt-2 text-gray-600">A simple step-by-step process to keep everything clear.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { n: "01", t: "Register & Checklist", d: "Get your document list based on destination." },
            { n: "02", t: "Apply & Offer", d: "We submit your application and track responses." },
            { n: "03", t: "Visa & Departure", d: "Visa file, interview prep, and pre-departure guidance." },
          ].map((x) => (
            <div key={x.n} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-gray-500">{x.n}</div>
              <div className="mt-2 text-base font-semibold">{x.t}</div>
              <div className="mt-2 text-sm text-gray-600">{x.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="rounded-3xl border bg-white p-8 shadow-sm">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">Success Stories</h2>
            <p className="mt-2 text-gray-600">What students say about our guidance.</p>
          </div>
          <Link href="/reviews" className="text-sm font-medium underline">
            More reviews →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border bg-gray-50 p-6">
              <p className="text-sm text-gray-700">“{t.text}”</p>
              <div className="mt-4">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-gray-500">{t.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl border bg-black p-8 text-white md:p-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold">Ready to start your journey?</h2>
            <p className="mt-2 text-white/80">Apply now and get a free document checklist.</p>
          </div>
          <Link
            href="/apply"
            className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black hover:opacity-90"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
