import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function Breadcrumb({
  items,
  variant = "hero",
}: {
  items: Crumb[];
  variant?: "hero" | "page";
}) {
  return (
    <nav
      className={`breadcrumb${variant === "page" ? " breadcrumb--page" : ""}`}
      aria-label="Breadcrumb"
    >
      {items.map((item, i) => (
        <span key={`${item.label}-${i}`} className="breadcrumb__item">
          {i > 0 ? <span className="breadcrumb__sep" aria-hidden="true">/</span> : null}
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
