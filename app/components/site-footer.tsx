import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <p className="site-footer__brand">Heart of Nepal</p>
          <p className="site-footer__text">
            Nutrition, education, and women&apos;s empowerment in Sindhupalchowk and
            surrounding communities.
          </p>
          <p className="site-footer__meta">Lalitpur, Nepal</p>
        </div>

        <div>
          <p className="site-footer__label">Programs</p>
          <ul className="site-footer__list">
            <li>
              <Link href="/our-work/midday-meals">Mid-day meals</Link>
            </li>
            <li>
              <Link href="/our-work/education-support">Education support</Link>
            </li>
            <li>
              <Link href="/our-work/financial-empowerment">
                Women&apos;s empowerment
              </Link>
            </li>
            <li>
              <Link href="/our-work">All programs</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="site-footer__label">Organization</p>
          <ul className="site-footer__list">
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/impact">Impact</Link>
            </li>
            <li>
              <Link href="/stories">Stories</Link>
            </li>
            <li>
              <Link href="/get-involved">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p className="site-footer__copy">
          © {new Date().getFullYear()} Heart of Nepal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
