type PageHeroProps = {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  compact?: boolean;
};

export default function PageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  children,
  compact,
}: PageHeroProps) {
  return (
    <section className={`page-hero${compact ? " page-hero--compact" : ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={imageAlt} className="page-hero__media" />
      <div className="page-hero__scrim" />
      <div className="container page-hero__content">
        {children}
        {eyebrow ? <p className="page-hero__eyebrow">{eyebrow}</p> : null}
        <h1 className="page-hero__title">{title}</h1>
        {description ? <p className="page-hero__desc">{description}</p> : null}
      </div>
    </section>
  );
}
