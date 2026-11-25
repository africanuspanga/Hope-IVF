// Public Supabase settings. The anon key is designed to be public (it ships to
// every browser) — row-level security in the database is what protects data.
// The fallbacks keep the site working even if the env vars are missing on a
// deployment.
export const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://eyyixfilokbdqgwvfoew.supabase.co";

export const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5eWl4Zmlsb2tiZHFnd3Zmb2V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU2Mjc5MDQsImV4cCI6MjExMTIwMzkwNH0.1HqWk1KwO7ocjDDeCZ7IYQOeMDg7vh8ouneixIwbadc";

export const MEDIA_BUCKET = "media";
