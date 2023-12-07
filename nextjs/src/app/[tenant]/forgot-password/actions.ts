"use server";

import nodemailer from "nodemailer";
import { makeSupabaseServerActionClient } from "@/make-supabase-server-action-client";
import { addTenantPrefix, removeTenantPrefix } from "../tenant-prefix";
import { getTenant } from "../get-tenant";
import { RedirectType, redirect } from "next/navigation";

interface Data {
  email: string;
}

export async function submit(data: FormData<Data>) {
  const tenant = await getTenant();
  const client = await makeSupabaseServerActionClient();
  const email = await addTenantPrefix(data.get("email"));

  let transporter = nodemailer.createTransport({
    port: 2500,
    secure: false,
    host: "localhost",
  });

  const link = await client.auth.admin.generateLink({
    email,
    type: "recovery",
  });

  if (link.error || !link.data.properties.hashed_token) return;

  const actionLink = `http://${tenant.domain_name}/update-password?token=${link.data.properties?.hashed_token}`;

  transporter.sendMail({
    text: actionLink,
    from: `no-reply@${tenant.domain_name}`,
    to: await removeTenantPrefix(link.data.user!.email!),
  });

  redirect("/login", RedirectType.push);
}
