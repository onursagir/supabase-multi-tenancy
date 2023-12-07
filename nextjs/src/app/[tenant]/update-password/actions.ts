"use server";

import { makeSupabaseServerActionClient } from "@/make-supabase-server-action-client";
import { RedirectType, redirect } from "next/navigation";

interface Data {
  token?: string;
  password: string;
}

export async function submit(data: FormData<Data>) {
  const token = data.get("token");
  const client = await makeSupabaseServerActionClient();

  let session = await client.auth.getSession().then(({ data }) => data.session);

  if (!session && !token) return redirect("/login", RedirectType.replace);

  if (session == null) {
    const { error } = await client.auth.verifyOtp({
      type: "recovery",
      token_hash: token,
    });

    if (error) return redirect("/login", RedirectType.replace);
  }

  await client.auth.updateUser({
    password: data.get("password"),
  });

  await client.auth.signOut();

  return redirect("/", RedirectType.push);
}
