import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Images uploaded through the admin live in Supabase Storage.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eyyixfilokbdqgwvfoew.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
