-- ============================================================
-- Hope IVF International — CMS schema
-- Content tables, form submissions inbox, media bucket, and
-- row-level security. Only users whose auth app_metadata has
-- role = 'admin' can write; the public can read published rows.
-- ============================================================

create extension if not exists pgcrypto;

-- ---------- helpers ----------
create or replace function public.is_admin() returns boolean
language sql stable
as $$
  select coalesce((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false)
$$;

create or replace function public.set_updated_at() returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end
$$;

-- ---------- content tables ----------
create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  short_description text not null default '',
  full_description text not null default '',
  category text not null default 'Fertility & IVF Services',
  icon text not null default 'Stethoscope',
  image text,
  what_is text,
  who_may_need_it text[] not null default '{}',
  common_reasons text[] not null default '{}',
  consultation text[] not null default '{}',
  tests text[] not null default '{}',
  treatment_options text[] not null default '{}',
  risks text[] not null default '{}',
  faqs jsonb not null default '[]',
  sort_order int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.service_categories (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  services text[] not null default '{}',
  sort_order int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.doctors (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  title text not null default '',
  specialty text not null default '',
  languages text[] not null default '{}',
  focus_areas text[] not null default '{}',
  education text[] not null default '{}',
  registration text[] not null default '{}',
  experience text,
  schedule text,
  bio text,
  image text,
  sort_order int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.resources (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  category text not null default 'Fertility Basics',
  title text not null,
  excerpt text not null default '',
  content text not null default '',
  image text,
  published_at date not null default current_date,
  sort_order int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  sort_order int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.patient_stories (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  story text not null,
  patient_name text,
  sort_order int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.hero_slides (
  id uuid primary key default gen_random_uuid(),
  caption text not null default '',
  label text not null default '',
  video_url text,
  image_url text,
  poster_url text,
  link_url text,
  sort_order int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.site_settings (
  key text primary key,
  value text not null default '',
  updated_at timestamptz not null default now()
);

create table if not exists public.submissions (
  id uuid primary key default gen_random_uuid(),
  form text not null default 'appointment',
  name text,
  phone text,
  email text,
  message text,
  data jsonb not null default '{}',
  status text not null default 'new' check (status in ('new', 'contacted', 'booked', 'closed', 'spam')),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists submissions_created_at_idx on public.submissions (created_at desc);

-- ---------- updated_at triggers ----------
do $$
declare t text;
begin
  foreach t in array array['services','service_categories','doctors','resources','faqs','patient_stories','hero_slides','site_settings','submissions']
  loop
    execute format('drop trigger if exists set_updated_at on public.%I', t);
    execute format('create trigger set_updated_at before update on public.%I for each row execute function public.set_updated_at()', t);
  end loop;
end $$;

-- ---------- row level security ----------
do $$
declare t text;
begin
  foreach t in array array['services','service_categories','doctors','resources','faqs','patient_stories','hero_slides']
  loop
    execute format('alter table public.%I enable row level security', t);
    execute format('drop policy if exists "public read published" on public.%I', t);
    execute format('drop policy if exists "admin insert" on public.%I', t);
    execute format('drop policy if exists "admin update" on public.%I', t);
    execute format('drop policy if exists "admin delete" on public.%I', t);
    execute format('create policy "public read published" on public.%I for select using (is_published or public.is_admin())', t);
    execute format('create policy "admin insert" on public.%I for insert to authenticated with check (public.is_admin())', t);
    execute format('create policy "admin update" on public.%I for update to authenticated using (public.is_admin()) with check (public.is_admin())', t);
    execute format('create policy "admin delete" on public.%I for delete to authenticated using (public.is_admin())', t);
    execute format('grant select on public.%I to anon, authenticated', t);
    execute format('grant insert, update, delete on public.%I to authenticated', t);
  end loop;
end $$;

alter table public.site_settings enable row level security;
drop policy if exists "public read settings" on public.site_settings;
drop policy if exists "admin write settings" on public.site_settings;
create policy "public read settings" on public.site_settings for select using (true);
create policy "admin write settings" on public.site_settings for all to authenticated
  using (public.is_admin()) with check (public.is_admin());
grant select on public.site_settings to anon, authenticated;
grant insert, update, delete on public.site_settings to authenticated;

alter table public.submissions enable row level security;
drop policy if exists "public can submit" on public.submissions;
drop policy if exists "admin read submissions" on public.submissions;
drop policy if exists "admin update submissions" on public.submissions;
drop policy if exists "admin delete submissions" on public.submissions;
create policy "public can submit" on public.submissions for insert to anon, authenticated
  with check (
    status = 'new'
    and notes is null
    and char_length(coalesce(name, '')) <= 200
    and char_length(coalesce(phone, '')) <= 50
    and char_length(coalesce(email, '')) <= 200
    and char_length(coalesce(message, '')) <= 5000
    and pg_column_size(data) <= 16384
  );
create policy "admin read submissions" on public.submissions for select to authenticated using (public.is_admin());
create policy "admin update submissions" on public.submissions for update to authenticated
  using (public.is_admin()) with check (public.is_admin());
create policy "admin delete submissions" on public.submissions for delete to authenticated using (public.is_admin());
grant insert on public.submissions to anon, authenticated;
grant select, update, delete on public.submissions to authenticated;

-- ---------- media storage ----------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('media', 'media', true, 52428800, array['image/*', 'video/*', 'application/pdf'])
on conflict (id) do update
  set public = excluded.public,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "media admin select" on storage.objects;
drop policy if exists "media admin insert" on storage.objects;
drop policy if exists "media admin update" on storage.objects;
drop policy if exists "media admin delete" on storage.objects;
create policy "media admin select" on storage.objects for select to authenticated
  using (bucket_id = 'media' and public.is_admin());
create policy "media admin insert" on storage.objects for insert to authenticated
  with check (bucket_id = 'media' and public.is_admin());
create policy "media admin update" on storage.objects for update to authenticated
  using (bucket_id = 'media' and public.is_admin()) with check (bucket_id = 'media' and public.is_admin());
create policy "media admin delete" on storage.objects for delete to authenticated
  using (bucket_id = 'media' and public.is_admin());
