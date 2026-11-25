// Copies the built-in content (lib/*.ts) into Supabase so the admin starts
// with everything that is on the site today. Safe to re-run: existing rows
// are never overwritten, so edits made in the admin are kept.
//
//   node --experimental-strip-types --env-file=.env.local scripts/seed.ts

import { createClient } from "@supabase/supabase-js";
import { SERVICES, SERVICE_CATEGORIES } from "../lib/services-data.ts";
import { DOCTORS } from "../lib/doctors-data.ts";
import { RESOURCES } from "../lib/resources-data.ts";
import { CLINIC, HOME_FAQS } from "../lib/site-data.ts";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) throw new Error("Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (see .env.local)");

const db = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });

async function upsertBySlug(table: string, rows: Record<string, unknown>[]) {
  const { error, data } = await db.from(table).upsert(rows, { onConflict: "slug", ignoreDuplicates: true }).select("id");
  if (error) throw new Error(`${table}: ${error.message}`);
  console.log(`${table}: ${data?.length ?? 0} new of ${rows.length}`);
}

async function insertIfEmpty(table: string, rows: Record<string, unknown>[]) {
  const { count, error } = await db.from(table).select("id", { count: "exact", head: true });
  if (error) throw new Error(`${table}: ${error.message}`);
  if (count) return console.log(`${table}: already has ${count} rows — skipped`);
  const { error: insertError } = await db.from(table).insert(rows);
  if (insertError) throw new Error(`${table}: ${insertError.message}`);
  console.log(`${table}: inserted ${rows.length}`);
}

await upsertBySlug(
  "services",
  SERVICES.map((s, i) => ({
    slug: s.slug,
    title: s.title,
    short_description: s.shortDescription,
    full_description: s.fullDescription,
    category: s.category,
    icon: s.icon,
    image: s.image ?? "",
    what_is: s.whatIs ?? "",
    who_may_need_it: s.whoMayNeedIt ?? [],
    common_reasons: s.commonReasons ?? [],
    consultation: s.consultation ?? [],
    tests: s.tests ?? [],
    treatment_options: s.treatmentOptions ?? [],
    risks: s.risks ?? [],
    faqs: s.faqs ?? [],
    sort_order: i + 1,
  }))
);

await insertIfEmpty(
  "service_categories",
  SERVICE_CATEGORIES.map((c, i) => ({ title: c.title, services: c.services, sort_order: i + 1 }))
);

await upsertBySlug(
  "doctors",
  DOCTORS.map((d, i) => ({
    slug: d.slug,
    name: d.name,
    title: d.title,
    specialty: d.specialty,
    languages: d.languages,
    focus_areas: d.focusAreas,
    education: d.education ?? [],
    registration: d.registration ?? [],
    experience: d.experience ?? "",
    schedule: d.schedule ?? "",
    bio: d.bio ?? "",
    image: d.image ?? "",
    sort_order: i + 1,
  }))
);

await upsertBySlug(
  "resources",
  RESOURCES.map((r, i) => ({
    slug: r.slug,
    category: r.category,
    title: r.title,
    excerpt: r.excerpt,
    content: r.content ?? "",
    sort_order: i + 1,
  }))
);

await insertIfEmpty(
  "faqs",
  HOME_FAQS.map((f, i) => ({ question: f.question, answer: f.answer, sort_order: i + 1 }))
);

await insertIfEmpty("hero_slides", [
  {
    caption: "Our fertility services",
    label: "Hope IVF International: an overview of our fertility services",
    video_url: "/videos/hero-1.mp4",
    poster_url: "/videos/hero-1-poster.jpg",
    sort_order: 1,
  },
  {
    caption: "5D ultrasound — now available",
    label: "5D ultrasound scanning, now available at Hope IVF International",
    video_url: "/videos/hero-2.mp4",
    poster_url: "/videos/hero-2-poster.jpg",
    sort_order: 2,
  },
]);

const settings = {
  clinic_name: CLINIC.name,
  clinic_tagline: CLINIC.tagline,
  phone: CLINIC.phone,
  whatsapp: CLINIC.whatsapp,
  email: CLINIC.email,
  address: CLINIC.address,
  hours: CLINIC.hours,
};
const { error } = await db
  .from("site_settings")
  .upsert(Object.entries(settings).map(([k, value]) => ({ key: k, value })), { onConflict: "key", ignoreDuplicates: true });
if (error) throw new Error(`site_settings: ${error.message}`);
console.log("site_settings: defaults ensured");
