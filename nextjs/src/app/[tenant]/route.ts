import { makeSupabaseRouteHandlerClient } from "@/make-supabase-route-handler-client";
import { RedirectType, redirect } from "next/navigation";

export async function GET() {
  const client = await makeSupabaseRouteHandlerClient();

  const session = await client.auth
    .getSession()
    .then(({ data }) => data.session);

  if (!session) return redirect("/login", RedirectType.replace);

  return redirect("/profile", RedirectType.replace);
}
