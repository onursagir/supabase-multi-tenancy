create table tenants (
  id uuid not null default gen_random_uuid(),
  created_at timestamp with time zone not null default now(),
  name character varying not null,
  domain_name character varying not null,
  constraint tenants_pkey primary key (id)
);