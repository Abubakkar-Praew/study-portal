import Link from "next/link";
import { destinations } from "@/lib/site-data";

export default function DestinationsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Study Destinations</h1>
        <p className="mt-2 text-gray-600">
          Explore popular countries and learn what the process looks like.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <Link
            key={destination.slug}
            href={`/destinations/${destination.slug}`}
            className="rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="text-sm text-gray-500">Study in</div>
            <div className="mt-1 text-lg font-semibold">{destination.name}</div>
            <span className="mt-4 inline-flex rounded-full border px-3 py-1 text-xs text-gray-700">
              View details
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
