"use server";

import { makeSupabaseServerActionClient } from "@/make-supabase-server-action-client";
import { RedirectType, redirect } from "next/navigation";
import { addTenantPrefix } from "../tenant-prefix";

interface Data {
  email: string;
  password: string;
}

export async function submit(data: FormData<Data>) {
  const client = await makeSupabaseServerActionClient();

  await client.auth.signInWithPassword({
    password: data.get("password"),
    email: await addTenantPrefix(data.get("email")),
  });

  redirect("/", RedirectType.push);
}
