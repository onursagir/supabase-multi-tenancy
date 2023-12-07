import { supabase } from "@/supabase";
import { headers } from "next/headers";

export async function getTenant() {
  const [tenantName] = headers().get("host")?.split(".") || [];

  if (!tenantName) throw new Error();

  const { data: tenant, error } = await supabase
    .from("tenants")
    .select("*")
    .eq("name", tenantName)
    .single();

  if (error) throw error;

  return tenant;
}
