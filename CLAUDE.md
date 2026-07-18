@AGENTS.md

# Hope IVF International — Website

Marketing/informational website for **Hope IVF International**, a fertility and
women's health clinic in Dar es Salaam, Tanzania. Built with the Next.js App
Router, TypeScript, and Tailwind CSS v4.

> ⚠️ This is Next.js 16 (see `AGENTS.md`). Conventions and APIs may differ from
> older versions — check `node_modules/next/dist/docs/` before writing new
> framework code.

## Commands

```bash
npm run dev     # start the dev server (http://localhost:3000)
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

```
app/                 App Router pages (one folder per route)
  page.tsx           Home page — composes the section components below
  services/          Services list + [slug] detail (statically generated)
  doctors/           Doctors/team page
  about, contact, appointment, patient-journey, resources, ...
  robots.ts, sitemap.ts
components/
  sections/          Full-width page sections (hero, about-preview, ...)
  ui/                Reusable presentational pieces (service-card, doctor-card, icon, ...)
  site/              Navbar, footer, whatsapp button
  forms/             Appointment form
lib/                 Content lives here as typed data — edit these, not the JSX
  site-data.ts       CLINIC info (phone, email, hours), nav, trust items, FAQs
  services-data.ts   SERVICES[] + SERVICE_CATEGORIES + getServiceBySlug()
  doctors-data.ts    DOCTORS[] + getDoctorBySlug()
  resources-data.ts  Articles/resources
public/
  images/            Service + section photos, named kebab-case to match slugs
```

## Content conventions

- **Content is data-driven.** Text, service copy, doctor profiles, clinic
  contact details, and FAQs live in `lib/*.ts`. Change content there and every
  page/section that reads it updates automatically. Avoid hardcoding copy in JSX.
- **Clinic contact info** (phone, WhatsApp, email, address, opening hours) is
  centralized in `CLINIC` in `lib/site-data.ts`. It is rendered in the footer,
  contact page, and appointment page. Update it in one place.
- **Services**: each entry in `SERVICES` has a `slug`, `title`, descriptions,
  an `icon` (see below), an optional `image`, and structured detail fields
  (`whoMayNeedIt`, `tests`, `treatmentOptions`, `risks`, `faqs`, …). The
  `/services` list and `/services/[slug]` detail pages are generated from it.
  If you add a service, also add its slug to the right group in
  `SERVICE_CATEGORIES`.
- **Icons** come from `lucide-react` via `components/ui/icon.tsx`, which only
  maps a fixed allow-list (`Stethoscope`, `Microscope`, `HeartPulse`, `Users`,
  `Clock`, `ShieldCheck`, `Baby`). Use one of those names for a service `icon`,
  or add the icon to the map first.
- **Images**: store in `public/images/` with URL-safe kebab-case names. Service
  images are referenced by the `image` field on each service (e.g.
  `/images/pcos-care.jpg`). Render with `next/image` (`fill` + `sizes`) — the
  `ServiceCard` and section components already follow this pattern. Local
  `public/` images need no `remotePatterns` config.

## Styling

- Tailwind CSS v4 (config-less, via `@tailwindcss/postcss`). Global styles and
  the custom color tokens (`brand-magenta`, `brand-teal`, `deep-text`,
  `soft-pink`, …) are defined in `app/globals.css`. Reuse those tokens rather
  than raw hex values so the brand palette stays consistent.
