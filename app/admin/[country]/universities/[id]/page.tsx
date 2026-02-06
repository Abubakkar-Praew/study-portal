"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

type University = {
  id: string;
  name: string;
  city: string;
  address: string;
  contactNumber: string;
  email: string;
  website: string;
  undergradRequirement: string;
  postgradRequirement: string;
  englishRequirement: string[];
  moiList: string;
  additionalNote: string;
};

export default function UniversityDetailPage() {
  const params = useParams();
  const countryParam = Array.isArray(params?.country) ? params.country[0] : params?.country;
  const idParam = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const country = (countryParam || "uk").toLowerCase();
  const storageKey = `admin_${country}_universities`;
  const [university, setUniversity] = useState<University | null>(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored) as University[];
        const found = parsed.find((item) => item.id === idParam);
        setUniversity(found ?? null);
      }
    } catch {
      setUniversity(null);
    }
  }, [storageKey, idParam]);

  if (!university) {
    return (
      <div className="rounded-2xl border bg-white p-8 text-sm text-gray-500">
        University not found.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">{university.name}</h1>
          <p className="text-sm text-gray-600">University details</p>
        </div>
        <Link
          href={`/admin/${country}/universities`}
          className="rounded-xl border px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
        >
          Back
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Detail label="City" value={university.city} />
        <Detail label="Address" value={university.address} />
        <Detail label="Contact Number" value={university.contactNumber} />
        <Detail label="Email Address" value={university.email} />
        <Detail label="Website" value={university.website} />
        <Detail label="Undergrad Requirement" value={university.undergradRequirement || "Not provided"} />
        <Detail label="Postgrad Requirement" value={university.postgradRequirement || "Not provided"} />
        <Detail label="English Requirement" value={university.englishRequirement.join(", ")} />
        <Detail label="MOI List" value={university.moiList || "Not provided"} />
        <Detail label="Additional Note" value={university.additionalNote || "Not provided"} />
      </div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-white p-5">
      <p className="text-xs font-semibold uppercase text-gray-500">{label}</p>
      <p className="mt-2 text-sm text-gray-900">{value}</p>
    </div>
  );
}
