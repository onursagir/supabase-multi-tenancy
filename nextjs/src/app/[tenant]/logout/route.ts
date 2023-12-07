import { makeSupabaseRouteHandlerClient } from "@/make-supabase-route-handler-client";
import { RedirectType, redirect } from "next/navigation";

export async function GET() {
  const client = await makeSupabaseRouteHandlerClient();

  await client.auth.signOut();

  redirect("/", RedirectType.replace);
}
