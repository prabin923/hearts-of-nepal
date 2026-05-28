import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Heart of Nepal — Empowering Communities",
  description:
    "Heart of Nepal is a non-profit dedicated to empowering Nepali communities through education, scholarships, midday meals, and women's empowerment programs.",
  referrer: "strict-origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700&family=Space+Mono&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <header className="top-nav global-nav">
          <div className="content-container top-nav-inner">
            <a href="/" className="brand-mark no-underline">
              <img
                src="/assets/logo.png"
                alt="Heart of Nepal logo"
                className="brand-logo"
              />
              <span className="brand-text">Heart of Nepal</span>
            </a>
            <nav className="nav-links" aria-label="Primary">
              <a href="/" className="nav-link">
                Home
              </a>
              <a href="/our-work" className="nav-link">
                Our Work
              </a>
              <a href="/geographical-area" className="nav-link">
                Geographical Area
              </a>
              <a href="/stories" className="nav-link">
                Stories
              </a>
              <a href="/impact" className="nav-link">
                Impact
              </a>
              <a href="/about" className="nav-link">
                About
              </a>
              <a href="/get-involved" className="nav-link">
                Get Involved
              </a>
            </nav>
            <a href="/get-involved" className="btn btn-primary">
              Become a member
            </a>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="content-container footer-grid">
            <div>
              <p className="footer-brand">Heart of Nepal</p>
              <p className="footer-copy">
                Community health, education, and empowerment programs with
                transparent implementation.
              </p>
              <p className="footer-copy">Lalitpur, Nepal</p>
            </div>
            <div>
              <form className="newsletter-form">
                <label htmlFor="newsletter-email" className="newsletter-label">
                  Subscribe for updates
                </label>
                <div className="newsletter-row">
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="your@email.com"
                    className="field-input"
                  />
                  <button type="button" className="btn btn-primary">
                    Subscribe
                  </button>
                </div>
              </form>
              <div className="footer-links">
                <a href="https://www.instagram.com" rel="noreferrer">
                  Instagram
                </a>
                <a href="/get-involved">Contact</a>
              </div>
            </div>
          </div>
        </footer>

        <button type="button" className="floating-chat" aria-label="Open chat">
          S
        </button>
      </body>
    </html>
  );
}
