import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aarambh-heights.example.com"),
  title: {
    default: "Aarambh Heights | Premium Residences in Gandhinagar",
    template: "%s | Aarambh Heights",
  },
  description: "Aarambh Heights is a fictional premium residential portfolio concept in Gandhinagar, Gujarat, featuring considered 2, 3 and 4 BHK residences.",
  keywords: ["Aarambh Heights", "Gandhinagar apartments", "premium residences Gujarat", "luxury apartment concept"],
  openGraph: {
    title: "Aarambh Heights — Premium Residential Concept",
    description: "Elevated living, thoughtfully composed for modern families in Gandhinagar.",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85", width: 1600, height: 900 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarambh Heights",
    description: "A premium residential portfolio concept in Gandhinagar.",
  },
  icons: { icon: "/mark.svg" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#252822",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
