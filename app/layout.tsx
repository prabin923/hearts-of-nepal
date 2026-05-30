import type { Metadata } from "next";
import "./globals.css";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";

export const metadata: Metadata = {
  title: {
    default: "Heart of Nepal",
    template: "%s · Heart of Nepal",
  },
  description:
    "A Nepali non-profit advancing school nutrition, scholarships, and women-led livelihoods in Sindhupalchowk and surrounding communities.",
  referrer: "strict-origin-when-cross-origin",
  robots: { index: true, follow: true },
  other: { "theme-color": "#ffffff" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&family=Space+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="site-body">
        <SiteHeader />
        <div className="site-main">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
