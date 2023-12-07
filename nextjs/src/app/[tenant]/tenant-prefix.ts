import { getTenant } from "./get-tenant";

export async function getTenantPrefix() {
  const tenant = await getTenant();

  return tenant.id.split("-")[0] + "-";
}

export async function addTenantPrefix(input: string) {
  const prefix = await getTenantPrefix();

  return prefix + input;
}

export async function removeTenantPrefix(input: string) {
  const prefix = await getTenantPrefix();

  return input.replace(prefix, "");
}
