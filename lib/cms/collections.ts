import type { Collection, Field, SettingGroup } from "./types";

// ---------------------------------------------------------------
// Hope IVF International — what the admin can manage.
// Each collection maps to a Supabase table (see supabase/migrations).
// ---------------------------------------------------------------

export const SITE_ADMIN = {
  name: "Hope IVF International",
  short: "Hope IVF",
  logo: "/logo.png",
  accent: "#EC1678",
  accentDark: "#C70E63",
  sidebar: "#082A35",
};

// Google tags supplied by the clinic ("Hope-IVF- Google Tag.docx"). Used when
// nothing has been saved in Admin → Settings yet.
export const GOOGLE_TAG_DEFAULTS = {
  gtm_container_id: "GTM-PDWCM3S3",
  ga4_measurement_id: "",
  google_ads_id: "",
};

const SERVICE_ICONS = ["Stethoscope", "Microscope", "HeartPulse", "Users", "Clock", "ShieldCheck", "Baby"];

const SERVICE_CATEGORY_NAMES = [
  "Fertility & IVF Services",
  "Male Fertility Services",
  "Fertility Preservation",
  "Women’s Health & Gynecology",
  "Reproductive Surgery",
];

const publish: Field = {
  name: "is_published",
  label: "Published",
  type: "boolean",
  help: "Unpublished items are hidden from the website.",
  defaultValue: true,
  half: true,
};

const order: Field = {
  name: "sort_order",
  label: "Display order",
  type: "number",
  help: "Lower numbers appear first.",
  defaultValue: 0,
  half: true,
};

export const COLLECTIONS: Collection[] = [
  {
    key: "services",
    table: "services",
    label: "Services",
    singular: "Service",
    icon: "HeartPulse",
    description: "Treatments and services shown on /services and the home page.",
    titleField: "title",
    subtitleField: "short_description",
    imageField: "image",
    columns: [
      { name: "category", label: "Category" },
      { name: "sort_order", label: "Order" },
    ],
    orderBy: [
      { column: "sort_order", ascending: true },
      { column: "title", ascending: true },
    ],
    viewPath: "/services/{slug}",
    searchFields: ["title", "category", "slug"],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "slug", label: "URL slug", type: "slug", from: "title", required: true, help: "Used in the page address: /services/your-slug" },
      { name: "category", label: "Category", type: "select", options: SERVICE_CATEGORY_NAMES, allowCustom: true, half: true },
      { name: "icon", label: "Icon", type: "select", options: SERVICE_ICONS, half: true, defaultValue: "Stethoscope" },
      { name: "image", label: "Image", type: "image", help: "Shown on service cards and the service page." },
      { name: "short_description", label: "Short description", type: "textarea", rows: 2, required: true, help: "One or two sentences for cards and search results." },
      { name: "full_description", label: "Introduction", type: "textarea", rows: 4 },
      { name: "what_is", label: "What is it?", type: "textarea", rows: 3 },
      { name: "who_may_need_it", label: "Who may need it", type: "list" },
      { name: "common_reasons", label: "Common reasons", type: "list" },
      { name: "consultation", label: "What happens at consultation", type: "list" },
      { name: "tests", label: "Tests that may be recommended", type: "list" },
      { name: "treatment_options", label: "Treatment options", type: "list" },
      { name: "risks", label: "Risks & considerations", type: "list" },
      {
        name: "faqs",
        label: "FAQs",
        type: "repeater",
        subfields: [
          { name: "question", label: "Question", type: "text" },
          { name: "answer", label: "Answer", type: "textarea", rows: 3 },
        ],
      },
      order,
      publish,
    ],
  },
  {
    key: "service-categories",
    table: "service_categories",
    label: "Service Groups",
    singular: "Service Group",
    icon: "LayoutGrid",
    description: "The “How our care is organized” groups on the services page.",
    titleField: "title",
    columns: [{ name: "sort_order", label: "Order" }],
    orderBy: [{ column: "sort_order", ascending: true }],
    searchFields: ["title"],
    fields: [
      { name: "title", label: "Group title", type: "text", required: true },
      {
        name: "services",
        label: "Services in this group",
        type: "list",
        help: "One service slug per line (e.g. ivf-treatment-tanzania). Slugs without a published service show as “coming soon”.",
      },
      order,
      publish,
    ],
  },
  {
    key: "doctors",
    table: "doctors",
    label: "Doctors & Team",
    singular: "Team member",
    icon: "Stethoscope",
    description: "Profiles shown on /doctors and the home page.",
    titleField: "name",
    subtitleField: "title",
    imageField: "image",
    columns: [
      { name: "specialty", label: "Specialty" },
      { name: "sort_order", label: "Order" },
    ],
    orderBy: [{ column: "sort_order", ascending: true }],
    viewPath: "/doctors#{slug}",
    searchFields: ["name", "title", "specialty"],
    fields: [
      { name: "name", label: "Full name", type: "text", required: true },
      { name: "slug", label: "URL slug", type: "slug", from: "name", required: true },
      { name: "title", label: "Role / title", type: "text", half: true, placeholder: "IVF Specialist & Gynecologist" },
      { name: "specialty", label: "Specialty", type: "text", half: true },
      { name: "image", label: "Photo", type: "image", help: "Portrait photo; the top of the image is kept when cropped." },
      { name: "experience", label: "Experience", type: "text", half: true, placeholder: "10 years in reproductive medicine" },
      { name: "schedule", label: "Schedule", type: "text", half: true, placeholder: "Monday – Saturday, by appointment" },
      { name: "bio", label: "Biography", type: "textarea", rows: 4 },
      { name: "languages", label: "Languages", type: "list" },
      { name: "focus_areas", label: "Focus areas", type: "list" },
      { name: "education", label: "Education", type: "list" },
      { name: "registration", label: "Registrations & memberships", type: "list" },
      order,
      publish,
    ],
  },
  {
    key: "resources",
    table: "resources",
    label: "Articles & Resources",
    singular: "Article",
    icon: "BookOpen",
    description: "Educational articles on /resources.",
    titleField: "title",
    subtitleField: "excerpt",
    imageField: "image",
    columns: [
      { name: "category", label: "Category" },
      { name: "published_at", label: "Date", kind: "date" },
    ],
    orderBy: [
      { column: "sort_order", ascending: true },
      { column: "published_at", ascending: false },
    ],
    viewPath: "/resources/{slug}",
    searchFields: ["title", "category", "excerpt"],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "slug", label: "URL slug", type: "slug", from: "title", required: true },
      { name: "category", label: "Category", type: "select", allowCustom: true, half: true, options: ["Fertility Basics", "Fertility Treatment", "Treatment Comparison", "Women’s Health", "Men’s Health", "Diagnostics", "Patient Guidance", "Clinic News"] },
      { name: "published_at", label: "Publish date", type: "date", half: true },
      { name: "image", label: "Cover image", type: "image" },
      { name: "excerpt", label: "Summary", type: "textarea", rows: 3, required: true },
      { name: "content", label: "Article body", type: "markdown", rows: 16 },
      { ...order, help: "Lower numbers appear first. New articles default to 0 (top)." },
      publish,
    ],
  },
  {
    key: "faqs",
    table: "faqs",
    label: "FAQs",
    singular: "FAQ",
    icon: "HelpCircle",
    description: "Frequently asked questions on the home page.",
    titleField: "question",
    subtitleField: "answer",
    columns: [{ name: "sort_order", label: "Order" }],
    orderBy: [{ column: "sort_order", ascending: true }],
    searchFields: ["question", "answer"],
    fields: [
      { name: "question", label: "Question", type: "text", required: true },
      { name: "answer", label: "Answer", type: "textarea", rows: 4, required: true },
      order,
      publish,
    ],
  },
  {
    key: "patient-stories",
    table: "patient_stories",
    label: "Patient Stories",
    singular: "Patient story",
    icon: "Heart",
    description: "Testimonials on the home page. Publish only with written patient consent.",
    titleField: "title",
    subtitleField: "patient_name",
    columns: [{ name: "sort_order", label: "Order" }],
    orderBy: [{ column: "sort_order", ascending: true }],
    searchFields: ["title", "story", "patient_name"],
    fields: [
      { name: "title", label: "Headline", type: "text", required: true },
      { name: "story", label: "Story", type: "textarea", rows: 5, required: true },
      { name: "patient_name", label: "Patient name or initials", type: "text", help: "Optional — e.g. “A. M., Dar es Salaam”." },
      order,
      publish,
    ],
  },
  {
    key: "hero-slides",
    table: "hero_slides",
    label: "Hero Slider",
    singular: "Slide",
    icon: "Clapperboard",
    description: "Videos or images in the home page hero slider.",
    titleField: "caption",
    subtitleField: "label",
    imageField: "poster_url",
    columns: [{ name: "sort_order", label: "Order" }],
    orderBy: [{ column: "sort_order", ascending: true }],
    searchFields: ["caption", "label"],
    fields: [
      { name: "caption", label: "Caption", type: "text", required: true, help: "Short text shown under the slider." },
      { name: "label", label: "Accessibility description", type: "text", help: "Describes the video/image for screen readers." },
      { name: "video_url", label: "Video", type: "video", help: "MP4 recommended. Leave empty to use an image slide." },
      { name: "image_url", label: "Image (for image slides)", type: "image" },
      { name: "poster_url", label: "Video poster image", type: "image", help: "Shown while the video loads." },
      order,
      publish,
    ],
  },
];

export function getCollection(key: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.key === key);
}

// ---------------------------------------------------------------
// Site settings (key/value). Google tag IDs are validated so nothing
// but a real ID can ever be injected into the page <head>.
// ---------------------------------------------------------------
export const SETTING_GROUPS: SettingGroup[] = [
  {
    title: "Clinic details",
    description: "Shown in the header, footer, contact and appointment pages.",
    fields: [
      { key: "clinic_name", label: "Clinic name", placeholder: "Hope IVF International" },
      { key: "clinic_tagline", label: "Tagline", placeholder: "An AMERICAN Healthcare Institution" },
      { key: "phone", label: "Phone", placeholder: "+255 725 829 595" },
      { key: "whatsapp", label: "WhatsApp number", placeholder: "+255 725 829 595" },
      { key: "email", label: "Email", placeholder: "info@hopeivf.co.tz" },
      { key: "address", label: "Address", type: "textarea" },
      { key: "hours", label: "Opening hours", placeholder: "Monday – Saturday: 9:00 AM – 4:00 PM" },
    ],
  },
  {
    title: "Google tags",
    description:
      "Paste your IDs and save — the tags load on every public page. Leave a field empty to switch that tag off.",
    fields: [
      {
        key: "ga4_measurement_id",
        label: "Google Analytics 4 — Measurement ID",
        placeholder: "G-XXXXXXXXXX",
        pattern: "^G-[A-Z0-9]{4,20}$",
        patternHint: "Starts with G- (find it in GA4 → Admin → Data streams).",
      },
      {
        key: "gtm_container_id",
        label: "Google Tag Manager — Container ID",
        placeholder: "GTM-XXXXXXX",
        pattern: "^GTM-[A-Z0-9]{4,12}$",
        patternHint: "Starts with GTM- (shown at the top of Tag Manager).",
      },
      {
        key: "google_ads_id",
        label: "Google Ads — Conversion ID",
        placeholder: "AW-XXXXXXXXXX",
        pattern: "^AW-[0-9]{6,15}$",
        patternHint: "Starts with AW- (Google Ads → Tools → Google tag).",
      },
      {
        key: "google_site_verification",
        label: "Google Search Console — verification code",
        placeholder: "abc123…",
        pattern: "^[A-Za-z0-9_-]{10,100}$",
        patternHint: "Only the content value of the HTML-tag verification method.",
      },
    ],
  },
  {
    title: "Social links",
    fields: [
      { key: "facebook_url", label: "Facebook", type: "url", placeholder: "https://facebook.com/…" },
      { key: "instagram_url", label: "Instagram", type: "url", placeholder: "https://instagram.com/…" },
      { key: "tiktok_url", label: "TikTok", type: "url", placeholder: "https://tiktok.com/@…" },
      { key: "youtube_url", label: "YouTube", type: "url", placeholder: "https://youtube.com/@…" },
    ],
  },
];

export const ALL_SETTING_FIELDS = SETTING_GROUPS.flatMap((g) => g.fields);
