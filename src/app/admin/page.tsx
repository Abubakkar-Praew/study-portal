import { supabaseServer } from "@/lib/supabase/server";

export default async function AdminPage() {
  const supabase = supabaseServer();
  const { data: countries } = await supabase.from("countries").select("*").order("name");

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Admin Panel</h1>
      <p className="text-gray-600 mt-2">Manage Countries (first CRUD)</p>

      <form action="/admin/add-country" method="post" className="mt-6 flex gap-2">
        <input
          name="name"
          className="border rounded-lg p-2 flex-1"
          placeholder="Add country (e.g., UK)"
          required
        />
        <button className="border rounded-lg px-4 py-2 font-semibold" type="submit">
          Add
        </button>
      </form>

      <ul className="mt-6 grid gap-2">
        {countries?.map((c) => (
          <li key={c.id} className="border rounded-lg p-3">
            {c.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
