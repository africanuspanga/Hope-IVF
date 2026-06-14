import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { WhatsAppButton } from "@/components/site/whatsapp-button";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
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
  metadataBase: new URL("https://hopeivfinternational.com"),
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
              url: "https://hopeivfinternational.com",
              logo: "https://hopeivfinternational.com/logo.png",
              image: "https://hopeivfinternational.com/logo.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dar es Salaam",
                addressCountry: "TZ",
              },
              medicalSpecialty: ["Fertility", "Gynecology", "Reproductive Medicine"],
              slogan: "An AMERICAN Healthcare Institution",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-deep-text">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
