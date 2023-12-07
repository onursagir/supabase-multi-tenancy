import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Link } from "@/components/link";
import { makeSupabaseServerComponentClient } from "@/make-supabase-server-component-client";
import { getTenant } from "../get-tenant";
import { removeTenantPrefix } from "../tenant-prefix";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const tenant = await getTenant();
  const client = await makeSupabaseServerComponentClient();

  const email = await client.auth.getUser().then(({ data }) => {
    if (data.user === null) return redirect("/login");

    return removeTenantPrefix(data.user.email!);
  });

  return (
    <Card title={`Tenant: ${tenant.name}`}>
      <p>{email}</p>
      <div className="my-6">
        <Link href="/update-password">Change password</Link>
      </div>
      <Button href="/logout">Logout</Button>
    </Card>
  );
}
