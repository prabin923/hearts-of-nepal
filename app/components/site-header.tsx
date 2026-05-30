"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/our-work", label: "Our work" },
  { href: "/impact", label: "Impact" },
  { href: "/stories", label: "Stories" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <img
            src="/assets/logo.png"
            alt=""
            width={36}
            height={36}
            className="brand__mark"
          />
          <span className="brand__name">Heart of Nepal</span>
        </Link>

        <nav className="nav" aria-label="Main">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav__link${pathname === href || pathname.startsWith(`${href}/`) ? " nav__link--active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <Link href="/get-involved" className="btn btn--primary btn--sm">
            Get involved
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav-toggle__bar" />
            <span className="nav-toggle__bar" />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`mobile-nav${open ? " mobile-nav--open" : ""}`}
        hidden={!open}
      >
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="mobile-nav__link"
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/get-involved"
          className="btn btn--primary btn--block"
          onClick={() => setOpen(false)}
        >
          Get involved
        </Link>
      </div>
    </header>
  );
}
