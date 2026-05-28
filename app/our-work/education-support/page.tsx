const gallery = [
  "/assets/education-1.jpg",
  "/assets/education-2.jpg",
  "/assets/education-3.jpg",
  "/assets/education-4.jpg",
];

export default function EducationSupportPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="content-container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="breadcrumb-sep">/</span>
            <a href="/our-work">Our Work</a>
            <span className="breadcrumb-sep">/</span>
            <span>Education Support</span>
          </nav>
          <p className="membership-meta">PROGRAM STATS</p>
          <h1 className="section-heading">340+ students retained in school</h1>
          <p className="section-copy">
            Education Support reduces dropout pressure through scholarships, mentoring,
            and family-centered planning.
          </p>
          <div className="card-grid mt-7">
            {gallery.map((image) => (
              <div className="media-image-wrap" key={image}>
                <img src={image} alt="Education support field photo" className="media-image" />
              </div>
            ))}
          </div>
          <div className="membership-card mt-7">
            <h2 className="card-title">Sponsor a student pathway</h2>
            <p className="card-copy">Contribute to scholarships and continuity support.</p>
            <a href="/get-involved" className="btn btn-primary mt-4">
              Donate for education
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
