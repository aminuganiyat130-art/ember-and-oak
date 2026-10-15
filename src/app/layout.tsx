import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ember & Oak | Wood-fired Kitchen in Manchester",
  description:
    "Ember & Oak is a wood-fired seasonal kitchen in the Northern Quarter, Manchester. Live-fire cooking, small-batch wines, and a menu that changes with the harvest.",
  keywords: [
    "wood-fired restaurant Manchester",
    "live-fire cooking",
    "seasonal kitchen",
    "Ember and Oak",
    "Northern Quarter restaurant",
  ],
  authors: [{ name: "Ember & Oak" }],
  openGraph: {
    title: "Ember & Oak | Wood-fired Kitchen in Manchester",
    description:
      "Live-fire cooking, small-batch wines, and a menu that changes with the harvest. Book your table at Ember & Oak, Manchester.",
    siteName: "Ember & Oak",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ember & Oak | Wood-fired Kitchen in Manchester",
    description:
      "Live-fire cooking and seasonal plates in the Northern Quarter, Manchester.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <SonnerToaster
          position="top-center"
          toastOptions={{
            style: {
              background: "var(--espresso)",
              color: "var(--cream)",
              border: "1px solid var(--ember)",
            },
          }}
        />
      </body>
    </html>
  );
}
