import { services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Our Services</h1>
        <p className="mt-2 text-gray-600">
          A complete set of services for admissions, preparation, and success.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-base font-semibold">{service.title}</h2>
            <p className="mt-2 text-sm text-gray-600">{service.desc}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border bg-gray-50 p-6">
        <h2 className="text-lg font-semibold">How We Help</h2>
        <ul className="mt-3 space-y-2 text-sm text-gray-700">
          <li>✓ Comprehensive course and university recommendations</li>
          <li>✓ Professional application and SOP assistance</li>
          <li>✓ Standardized test preparation and guidance</li>
          <li>✓ End-to-end visa support and documentation</li>
        </ul>
      </section>
    </div>
  );
}
