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

      <section id="why-us" className="rounded-2xl border bg-gray-50 p-6">
        <h2 className="text-lg font-semibold">Why choose us</h2>
        <ul className="mt-3 space-y-2 text-sm text-gray-700">
          <li>Clear timelines and checklists for every destination.</li>
          <li>One-on-one guidance for documents and applications.</li>
          <li>Dedicated support through visa and pre-departure steps.</li>
        </ul>
      </section>
    </div>
  );
}
