import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services-data";
import { RESOURCES } from "@/lib/resources-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hopeivfinternational.com";

  const staticRoutes = [
    "/",
    "/about",
    "/services",
    "/doctors",
    "/patient-journey",
    "/appointment",
    "/contact",
    "/resources",
    "/privacy-policy",
    "/terms",
    "/medical-disclaimer",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const resourceRoutes = RESOURCES.map((resource) => ({
    url: `${baseUrl}/resources/${resource.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...resourceRoutes];
}
