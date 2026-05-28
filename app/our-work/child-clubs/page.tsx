const gallery = ["/assets/childclubs-1.jpg", "/assets/childclubs-2.jpg", "/assets/childclubs-3.jpg", "/assets/childclubs-4.jpg"];

export default function ChildClubsPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="content-container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="breadcrumb-sep">/</span>
            <a href="/our-work">Our Work</a>
            <span className="breadcrumb-sep">/</span>
            <span>Child Clubs</span>
          </nav>
          <p className="membership-meta">PROGRAM STATS</p>
          <h1 className="section-heading">Child clubs strengthening youth leadership</h1>
          <p className="section-copy">
            Child Clubs create safe spaces for expression, civic learning, and
            peer-led protection.
          </p>
          <div className="card-grid mt-7">
            {gallery.map((image) => (
              <div className="media-image-wrap" key={image}>
                <img src={image} alt="Child club session photo" className="media-image" />
              </div>
            ))}
          </div>
          <div className="membership-card mt-7">
            <h2 className="card-title">Enable a youth club cycle</h2>
            <p className="card-copy">Invest in leadership and protection programming.</p>
            <a href="/get-involved" className="btn btn-primary mt-4">
              Fund child clubs
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
