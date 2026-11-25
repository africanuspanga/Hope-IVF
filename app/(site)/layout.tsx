import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { getClinic } from "@/lib/cms/content";

// Pages are static and refreshed instantly when content is saved in the admin.
// This hourly revalidation is only a safety net for edits made directly in
// the Supabase dashboard.
export const revalidate = 3600;

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const clinic = await getClinic();
  return (
    <>
      <Navbar phone={clinic.phone} />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton whatsapp={clinic.whatsapp} />
    </>
  );
}
