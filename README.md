# Supabase/NextJS multi tenancy

> Nothing in here should be treated as production-ready code; this is just a proof of concept. Corners have been cut.

Example repo with NextJS and Supabase for a hacky multi-tenant auth solution.

## How to run

1. Start supabase `supabase start`
2. Start the project `docker compose up -d`

You can now visit [foo.localhost](http://foo.localhost) and [bar.localhost](http://bar.localhost) and register. The docker compose also includes its own `inbucket` to send the password reset email you can visit this at [localhost:9000](http://localhost:9000)
