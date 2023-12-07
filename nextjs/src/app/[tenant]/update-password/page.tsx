"use client";

import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { FormField } from "@/components/form-field";
import { Input } from "@/components/input";
import { makeSupabaseClientComponentClient } from "@/make-supabase-client-component-client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { submit } from "./actions";

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showPage, setShowPage] = useState(false);
  const client = makeSupabaseClientComponentClient();

  useEffect(() => {
    async function bootstrap() {
      const session = await client.auth.getSession();

      if (!session && !searchParams.get("token"))
        return router.replace("/login");

      setShowPage(true);
    }

    bootstrap();
  }, [client.auth, searchParams, router]);

  if (!showPage) return null;

  const token = searchParams.get("token");

  return (
    <Card goBack={!token} title="Update password">
      <form action={submit}>
        {token && <input name="token" type="hidden" value={token} />}
        <FormField label="New password">
          <Input
            id="new-password"
            type="password"
            placeholder="New Password"
            name="password"
          />
        </FormField>

        <Button type="submit">Update Password</Button>
      </form>
    </Card>
  );
}
