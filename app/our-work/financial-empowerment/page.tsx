const gallery = ["/assets/financial-1.jpg", "/assets/financial-2.jpg", "/assets/financial-3.jpg", "/assets/financial-4.jpg"];

export default function FinancialEmpowermentPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="content-container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="breadcrumb-sep">/</span>
            <a href="/our-work">Our Work</a>
            <span className="breadcrumb-sep">/</span>
            <span>Financial Empowerment</span>
          </nav>
          <p className="membership-meta">PROGRAM STATS</p>
          <h1 className="section-heading">Women’s groups building savings resilience</h1>
          <p className="section-copy">
            Financial Empowerment supports self-help groups with savings, literacy,
            and local enterprise coaching.
          </p>
          <div className="card-grid mt-7">
            {gallery.map((image) => (
              <div className="media-image-wrap" key={image}>
                <img src={image} alt="Financial empowerment activity" className="media-image" />
              </div>
            ))}
          </div>
          <div className="membership-card mt-7">
            <h2 className="card-title">Support women-led livelihoods</h2>
            <p className="card-copy">Back training, savings pools, and enterprise pathways.</p>
            <a href="/get-involved" className="btn btn-primary mt-4">
              Support a training cycle
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
