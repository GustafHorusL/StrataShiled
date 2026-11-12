create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) between 2 and 120),
  email text not null check (char_length(email) between 3 and 180),
  company text not null default '',
  message text not null check (char_length(trim(message)) between 10 and 2000),
  status text not null default 'new' check (status in ('new', 'reviewed', 'closed')),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create index if not exists contacts_created_at_idx
  on public.contacts (created_at desc);

alter table public.contacts enable row level security;

-- The API uses the server-only Supabase secret key. No public Data API policy
-- is granted here, so anonymous clients cannot read or write contacts directly.
