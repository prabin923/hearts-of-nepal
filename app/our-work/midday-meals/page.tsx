const gallery = ["/assets/midday-1.jpg", "/assets/midday-2.jpg", "/assets/midday-3.jpg", "/assets/midday-4.jpg"];

export default function MiddayMealsPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="content-container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="breadcrumb-sep">/</span>
            <a href="/our-work">Our Work</a>
            <span className="breadcrumb-sep">/</span>
            <span>Mid-day Meals</span>
          </nav>
          <p className="membership-meta">PROGRAM STATS</p>
          <h1 className="section-heading">730,000+ meals served</h1>
          <p className="section-copy">
            The Mid-day Meals program addresses stunting and attendance gaps by ensuring
            consistent school nutrition for children in vulnerable communities.
          </p>
          <div className="card-grid mt-7">
            {gallery.map((image) => (
              <div className="media-image-wrap" key={image}>
                <img src={image} alt="Midday meals field photo" className="media-image" />
              </div>
            ))}
          </div>
          <div className="membership-card mt-7">
            <h2 className="card-title">Offer a meal today</h2>
            <p className="card-copy">Help us sustain nutrition delivery during the academic year.</p>
            <a href="/get-involved" className="btn btn-primary mt-4">
              Donate for meals
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
