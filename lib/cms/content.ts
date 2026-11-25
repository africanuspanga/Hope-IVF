import { cache } from "react";
import { createPublicClient } from "@/lib/supabase/public";
import { CLINIC, HOME_FAQS } from "@/lib/site-data";
import { SERVICES, SERVICE_CATEGORIES, type Service } from "@/lib/services-data";
import { DOCTORS, type Doctor } from "@/lib/doctors-data";
import { RESOURCES, type Resource } from "@/lib/resources-data";

// ---------------------------------------------------------------
// Public content, read from Supabase (published rows only).
// The static files in lib/*.ts are the fallback if the database
// can't be reached, so the site never goes blank.
// ---------------------------------------------------------------

type Row = Record<string, unknown>;
const s = (v: unknown) => (typeof v === "string" ? v : v == null ? "" : String(v));
const opt = (v: unknown) => s(v) || undefined;
const arr = (v: unknown) => (Array.isArray(v) ? v.map(String).filter(Boolean) : []);

async function readTable<T>(
  table: string,
  order: [string, boolean][],
  map: (row: Row) => T,
  fallback: T[],
  publishedOnly = true
): Promise<T[]> {
  try {
    let query = createPublicClient().from(table).select("*");
    if (publishedOnly) query = query.eq("is_published", true);
    for (const [column, ascending] of order) query = query.order(column, { ascending });
    const { data, error } = await query;
    if (error) throw error;
    return (data ?? []).map(map);
  } catch (error) {
    console.error(`[cms] could not load "${table}", using built-in content:`, (error as Error).message);
    return fallback;
  }
}

// ---------- services ----------
const mapService = (r: Row): Service => ({
  slug: s(r.slug),
  title: s(r.title),
  shortDescription: s(r.short_description),
  fullDescription: s(r.full_description),
  category: s(r.category),
  icon: s(r.icon) || "Stethoscope",
  image: opt(r.image),
  whatIs: opt(r.what_is),
  whoMayNeedIt: arr(r.who_may_need_it),
  commonReasons: arr(r.common_reasons),
  consultation: arr(r.consultation),
  tests: arr(r.tests),
  treatmentOptions: arr(r.treatment_options),
  risks: arr(r.risks),
  faqs: Array.isArray(r.faqs)
    ? (r.faqs as Row[]).map((f) => ({ question: s(f.question), answer: s(f.answer) })).filter((f) => f.question)
    : [],
});

export const getServices = cache(() =>
  readTable("services", [["sort_order", true], ["title", true]], mapService, SERVICES)
);

export const getServiceBySlug = cache(async (slug: string) =>
  (await getServices()).find((service) => service.slug === slug)
);

export type ServiceCategory = { title: string; services: string[] };

export const getServiceCategories = cache(() =>
  readTable<ServiceCategory>(
    "service_categories",
    [["sort_order", true]],
    (r) => ({ title: s(r.title), services: arr(r.services) }),
    SERVICE_CATEGORIES
  )
);

// ---------- doctors ----------
export const getDoctors = cache(() =>
  readTable<Doctor>(
    "doctors",
    [["sort_order", true], ["name", true]],
    (r) => ({
      slug: s(r.slug),
      name: s(r.name),
      title: s(r.title),
      specialty: s(r.specialty),
      languages: arr(r.languages),
      focusAreas: arr(r.focus_areas),
      education: arr(r.education),
      registration: arr(r.registration),
      experience: opt(r.experience),
      schedule: opt(r.schedule),
      bio: opt(r.bio),
      image: opt(r.image),
    }),
    DOCTORS
  )
);

// ---------- resources ----------
export type Article = Resource & { image?: string; publishedAt?: string };

export const getResources = cache(() =>
  readTable<Article>(
    "resources",
    [["sort_order", true], ["published_at", false]],
    (r) => ({
      slug: s(r.slug),
      category: s(r.category),
      title: s(r.title),
      excerpt: s(r.excerpt),
      content: s(r.content),
      image: opt(r.image),
      publishedAt: opt(r.published_at),
    }),
    RESOURCES
  )
);

export const getResourceBySlug = cache(async (slug: string) =>
  (await getResources()).find((resource) => resource.slug === slug)
);

// ---------- home page ----------
export const getFaqs = cache(() =>
  readTable("faqs", [["sort_order", true]], (r) => ({ question: s(r.question), answer: s(r.answer) }), HOME_FAQS)
);

export type PatientStory = { title: string; story: string; patientName?: string };

export const getPatientStories = cache(() =>
  readTable<PatientStory>(
    "patient_stories",
    [["sort_order", true]],
    (r) => ({ title: s(r.title), story: s(r.story), patientName: opt(r.patient_name) }),
    []
  )
);

export type HeroSlide = {
  caption: string;
  label: string;
  videoUrl?: string;
  imageUrl?: string;
  posterUrl?: string;
};

export const DEFAULT_HERO_SLIDES: HeroSlide[] = [
  {
    videoUrl: "/videos/hero-1.mp4",
    posterUrl: "/videos/hero-1-poster.jpg",
    label: "Hope IVF International: an overview of our fertility services",
    caption: "Our fertility services",
  },
  {
    videoUrl: "/videos/hero-2.mp4",
    posterUrl: "/videos/hero-2-poster.jpg",
    label: "5D ultrasound scanning, now available at Hope IVF International",
    caption: "5D ultrasound — now available",
  },
];

export const getHeroSlides = cache(async () => {
  const slides = await readTable<HeroSlide>(
    "hero_slides",
    [["sort_order", true]],
    (r) => ({
      caption: s(r.caption),
      label: s(r.label) || s(r.caption),
      videoUrl: opt(r.video_url),
      imageUrl: opt(r.image_url),
      posterUrl: opt(r.poster_url),
    }),
    DEFAULT_HERO_SLIDES
  );
  const usable = slides.filter((slide) => slide.videoUrl || slide.imageUrl);
  return usable.length ? usable : DEFAULT_HERO_SLIDES;
});

// ---------- settings ----------
export const getSettings = cache(async (): Promise<Record<string, string>> => {
  try {
    const { data, error } = await createPublicClient().from("site_settings").select("key, value");
    if (error) throw error;
    return Object.fromEntries((data ?? []).map((r) => [r.key, r.value ?? ""]));
  } catch (error) {
    console.error("[cms] could not load settings:", (error as Error).message);
    return {};
  }
});

export type Clinic = typeof CLINIC & { socials: { label: string; href: string }[] };

/** Clinic contact details — admin settings override the built-in defaults. */
export const getClinic = cache(async (): Promise<Clinic> => {
  const settings = await getSettings();
  const pick = (key: string, fallback: string) => settings[key]?.trim() || fallback;
  return {
    name: pick("clinic_name", CLINIC.name),
    tagline: pick("clinic_tagline", CLINIC.tagline),
    location: CLINIC.location,
    phone: pick("phone", CLINIC.phone),
    whatsapp: pick("whatsapp", CLINIC.whatsapp),
    email: pick("email", CLINIC.email),
    address: pick("address", CLINIC.address),
    hours: pick("hours", CLINIC.hours),
    socials: [
      { label: "Facebook", href: settings.facebook_url },
      { label: "Instagram", href: settings.instagram_url },
      { label: "TikTok", href: settings.tiktok_url },
      { label: "YouTube", href: settings.youtube_url },
    ].filter((x): x is { label: string; href: string } => Boolean(x.href?.trim())),
  };
});
