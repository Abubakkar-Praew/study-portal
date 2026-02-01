import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations } from "@/lib/site-data";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export default function DestinationDetailPage({ params }: PageProps) {
  const destination = destinations.find((item) => item.slug === params.slug);

  if (!destination) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <Link href="/destinations" className="text-sm font-medium underline">
          Back to destinations
        </Link>
      </div>

      <header>
        <h1 className="text-3xl font-bold">{destination.name}</h1>
        <p className="mt-2 text-gray-600">
          Guidance for programs, admissions, and visa preparation for {destination.name}.
        </p>
      </header>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">What we help with</h2>
        <ul className="mt-3 space-y-2 text-sm text-gray-700">
          <li>University shortlisting and application planning.</li>
          <li>Document checklist and SOP guidance.</li>
          <li>Visa file preparation and interview prep.</li>
        </ul>
      </div>
    </div>
  );
}
