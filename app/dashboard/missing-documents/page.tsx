import { redirect } from "next/navigation";

export default function MissingDocumentsPage() {
  redirect("/admin");
}
