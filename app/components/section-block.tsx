type SectionBlockProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
};

export function SectionBlock({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  align = "left",
}: SectionBlockProps) {
  return (
    <header
      className={`section-block section-block--${align}${className ? ` ${className}` : ""}`}
      id={id}
    >
      {eyebrow ? <p className="section-block__eyebrow">{eyebrow}</p> : null}
      <h2 className="section-block__title">{title}</h2>
      {description ? (
        <p className="section-block__desc">{description}</p>
      ) : null}
      {children}
    </header>
  );
}
