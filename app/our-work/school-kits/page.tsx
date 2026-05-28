const gallery = ["/assets/schoolkits-1.jpg", "/assets/schoolkits-2.jpg", "/assets/schoolkits-3.jpg", "/assets/schoolkits-4.jpg"];

export default function SchoolKitsPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="content-container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="breadcrumb-sep">/</span>
            <a href="/our-work">Our Work</a>
            <span className="breadcrumb-sep">/</span>
            <span>School Kits</span>
          </nav>
          <p className="membership-meta">PROGRAM STATS</p>
          <h1 className="section-heading">2,500+ school kits distributed</h1>
          <p className="section-copy">
            School Kits ensure children have the baseline tools needed to participate
            consistently in classrooms.
          </p>
          <div className="card-grid mt-7">
            {gallery.map((image) => (
              <div className="media-image-wrap" key={image}>
                <img src={image} alt="School kit distribution photo" className="media-image" />
              </div>
            ))}
          </div>
          <div className="membership-card mt-7">
            <h2 className="card-title">Fund school kits</h2>
            <p className="card-copy">Equip a child with essentials for the school year.</p>
            <a href="/get-involved" className="btn btn-primary mt-4">
              Donate a kit
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
