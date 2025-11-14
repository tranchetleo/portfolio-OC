import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { siteConfig } from "@/config/site.config";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Meta } from "@/components/meta/Meta";
import { TrackingProvider } from "@/components/tracking/TrackingProvider";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.navLinks[0].metaTitle,
  description: siteConfig.navLinks[0].metaDescription,
  icons: [
    {
      url: siteConfig.basePath + siteConfig.logo,
      type: "image/webp",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.locale} className="bg-truebase text-foreground">
      <head>
        <Meta />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Suspense fallback={<LoadingScreen />}>
          <TrackingProvider
            config={{
              url: process.env.NEXT_PUBLIC_TRACKER_URL ?? "",
              apiKey: process.env.NEXT_PUBLIC_TRACKER_API_KEY ?? "",
              debug: process.env.NODE_ENV === "development",
            }}
          >
            <Navbar logo="/logo_full.webp" opacity={80} />
            {children}
            <Footer />
          </TrackingProvider>
        </Suspense>
      </body>
    </html>
  );
}
