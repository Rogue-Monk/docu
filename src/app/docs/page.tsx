import { redirect } from "next/navigation";

export default function DocsIndexPage() {
  // Redirect to the first document by default when visiting /docs
  redirect("/docs/session-schema");
}
