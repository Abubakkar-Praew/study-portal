"use client";

export default function ConsultationForm() {
  return (
    <form className="mt-5 space-y-3">
      <input className="w-full rounded-xl border bg-white px-4 py-3 text-sm" placeholder="Full name" />
      <input className="w-full rounded-xl border bg-white px-4 py-3 text-sm" placeholder="Email" />
      <input className="w-full rounded-xl border bg-white px-4 py-3 text-sm" placeholder="Phone / WhatsApp" />
      <input className="w-full rounded-xl border bg-white px-4 py-3 text-sm" placeholder="City & Province" />

      <select className="w-full rounded-xl border bg-white px-4 py-3 text-sm text-gray-700">
        <option>Country of interest</option>
        <option>United Kingdom</option>
        <option>United States</option>
        <option>Canada</option>
        <option>Australia</option>
      </select>

      <label className="flex items-start gap-2 text-xs text-gray-600">
        <input type="checkbox" className="mt-1" />
        I agree to Terms & Privacy Policy.
      </label>

      <button
        type="button"
        className="w-full rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
        onClick={() => alert("Submitted (demo). Backend later.")}
      >
        Submit
      </button>
    </form>
  );
}
