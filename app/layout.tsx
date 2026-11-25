import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { GoogleTagManagerNoScript, GoogleTags } from "@/components/site/google-tags";
import { getSettings } from "@/lib/cms/content";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const baseMetadata: Metadata = {
  title: "Hope IVF International | Fertility & IVF Clinic in Dar es Salaam, Tanzania",
  description:
    "Hope IVF International provides confidential fertility consultations, IVF guidance, reproductive health care, and personalized treatment planning in Dar es Salaam, Tanzania.",
  keywords: [
    "fertility clinic in Tanzania",
    "IVF clinic in Dar es Salaam",
    "IVF treatment in Tanzania",
    "fertility specialist in Dar es Salaam",
    "IUI treatment in Tanzania",
    "male infertility treatment Tanzania",
    "PCOS treatment Dar es Salaam",
    "fibroids and fertility Tanzania",
    "endometriosis care Tanzania",
    "book fertility consultation Tanzania",
  ],
  authors: [{ name: "Hope IVF International" }],
  creator: "Hope IVF International",
  metadataBase: new URL("https://www.hopeivf.co.tz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Hope IVF International",
    title: "Hope IVF International | Fertility & IVF Clinic in Dar es Salaam",
    description:
      "Confidential fertility consultations, IVF guidance, and personalized reproductive health care in Dar es Salaam, Tanzania.",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hope IVF International | Fertility & IVF Clinic in Dar es Salaam",
    description:
      "Confidential fertility consultations, IVF guidance, and personalized reproductive health care in Dar es Salaam, Tanzania.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/hope-favicon.png",
    apple: "/hope-favicon.png",
    shortcut: "/hope-favicon.png",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  const verification = (settings.google_site_verification ?? "").trim();
  return /^[A-Za-z0-9_-]{10,100}$/.test(verification)
    ? { ...baseMetadata, verification: { google: verification } }
    : baseMetadata;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "Hope IVF International",
              description:
                "Fertility and IVF clinic providing confidential consultations and reproductive health care in Dar es Salaam, Tanzania.",
              url: "https://www.hopeivf.co.tz",
              logo: "https://www.hopeivf.co.tz/logo.png",
              image: "https://www.hopeivf.co.tz/logo.png",
              telephone: "+255725829595",
              email: "info@hopeivf.co.tz",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Tropical Center, New Bagamoyo Road",
                postOfficeBoxNumber: "2083",
                addressLocality: "Dar es Salaam",
                addressCountry: "TZ",
              },
              openingHours: "Mo-Sa 09:00-16:00",
              medicalSpecialty: ["Fertility", "Gynecology", "Reproductive Medicine"],
              slogan: "An AMERICAN Healthcare Institution",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-deep-text">
        <GoogleTagManagerNoScript />
        {children}
        <GoogleTags />
      </body>
    </html>
  );
}
