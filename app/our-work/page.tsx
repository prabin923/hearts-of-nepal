const programs = [
  {
    slug: "midday-meals",
    title: "Mid-day Meals",
    image: "/assets/project-midday.png",
    copy: "Nutritious meal delivery in schools to improve attendance and learning.",
  },
  {
    slug: "education-support",
    title: "Education Support",
    image: "/assets/project-education.png",
    copy: "Scholarships, mentoring, and retention pathways for students.",
  },
  {
    slug: "school-kits",
    title: "School Kits",
    image: "/assets/project-schoolkits.png",
    copy: "Learning materials that reduce educational exclusion.",
  },
  {
    slug: "financial-empowerment",
    title: "Financial Empowerment",
    image: "/assets/project-financial.png",
    copy: "Savings groups and skills pathways for women and households.",
  },
  {
    slug: "child-clubs",
    title: "Child Clubs",
    image: "/assets/project-childclubs.png",
    copy: "Youth leadership spaces for confidence and protection.",
  },
];

export default function OurWorkPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="content-container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="breadcrumb-sep">/</span>
            <span>Our Work</span>
          </nav>
          <h1 className="section-heading">Our Work</h1>
          <p className="section-copy">
            Program dashboard built around practical interventions and tracked outcomes.
          </p>
          <div className="card-grid mt-7">
            {programs.map((program) => (
              <article className="media-card" key={program.slug}>
                <div className="media-image-wrap">
                  <img src={program.image} alt={program.title} className="media-image" />
                </div>
                <h2 className="card-title mt-4">{program.title}</h2>
                <p className="card-copy">{program.copy}</p>
                <div className="button-row mt-4">
                  <a href={`/our-work/${program.slug}`} className="btn btn-secondary">
                    View program
                  </a>
                  <a href="/get-involved" className="btn btn-ghost-light">
                    Support this program
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
