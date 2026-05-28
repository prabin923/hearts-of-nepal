export default function GeographicalAreaPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="content-container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="breadcrumb-sep">/</span>
            <span>Geographical Area</span>
          </nav>
          <h1 className="section-heading">Geographical Area</h1>
          <p className="section-copy">
            Heart of Nepal works in Sindupalchowk District, with focus areas in
            Indrawati Rural Municipality where caste, income, and disaster
            vulnerability overlap.
          </p>

          <div className="card-grid mt-7">
            <article className="default-card">
              <p className="step-index">REGIONAL POPULATION</p>
              <h2 className="card-title">287,798</h2>
              <p className="card-copy">Estimated district population.</p>
            </article>
            <article className="default-card">
              <p className="step-index">ETHNIC DEMOGRAPHICS</p>
              <h2 className="card-title">Tamang 24.25%</h2>
              <p className="card-copy">One of the largest represented communities.</p>
            </article>
            <article className="default-card">
              <p className="step-index">EARTHQUAKE AFTERMATH</p>
              <h2 className="card-title">Long-term recovery gaps</h2>
              <p className="card-copy">
                Education and livelihood systems continue to face post-disaster strain.
              </p>
            </article>
          </div>

          <div className="media-section mt-7">
            <article className="media-card">
              <div className="media-image-wrap">
                <img
                  src="/assets/gallery-extra-11.jpg"
                  alt="Field geography and local households"
                  className="media-image"
                />
              </div>
              <h3 className="card-title mt-4">Context-driven implementation</h3>
              <p className="card-copy">
                Programs are mapped to local realities including nutrition,
                migration pressure, and school access barriers.
              </p>
            </article>
            <article className="media-card">
              <div className="media-image-wrap">
                <img
                  src="/assets/gallery-extra-14.jpg"
                  alt="Community infrastructure and surroundings"
                  className="media-image"
                />
              </div>
              <h3 className="card-title mt-4">Stunting and exclusion risks</h3>
              <p className="card-copy">
                Interventions prioritize households and children with the highest
                compounding risk indicators.
              </p>
            </article>
          </div>
          <div className="button-row mt-6">
            <a href="/our-work" className="btn btn-secondary">
              See programs in this region
            </a>
            <a href="/impact" className="btn btn-ghost-light">
              Open regional impact
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
