export default function StoriesPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="content-container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="breadcrumb-sep">/</span>
            <span>Stories</span>
          </nav>
          <h1 className="section-heading">Ground Stories</h1>
          <p className="section-copy">
            First-person journeys from communities where our programs are active.
          </p>

          <div className="story-card mt-7">
            <div className="media-image-wrap">
              <img
                src="/assets/financial-2.jpg"
                alt="Lalita Gurung in her entrepreneurship journey"
                className="media-image"
              />
            </div>
            <h2 className="card-title mt-5">Lalita Gurung&apos;s Journey (Majhi)</h2>
            <blockquote className="story-quote">
              “I started as a housewife with no independent income. With
              training and local support, I began a chicken poultry business and
              generated NPR 8,400 + NPR 4,000 in early cycles.”
            </blockquote>
            <p className="card-copy">
              Lalita&apos;s story reflects how women&apos;s financial empowerment can
              directly strengthen household resilience and decision-making.
            </p>
            <div className="button-row mt-4">
              <a href="/our-work/financial-empowerment" className="btn btn-secondary">
                View financial empowerment
              </a>
              <a href="/get-involved" className="btn btn-ghost-light">
                Support this journey
              </a>
            </div>
          </div>

          <div className="story-card mt-7">
            <div className="media-image-wrap">
              <img
                src="/assets/education-2.jpg"
                alt="Laju Majhi receiving educational support"
                className="media-image"
              />
            </div>
            <h2 className="card-title mt-5">Laju Majhi&apos;s Journey</h2>
            <blockquote className="story-quote">
              “At 10 years old, tuition support changed my classroom confidence.
              I can now keep learning without falling behind.”
            </blockquote>
            <p className="card-copy">
              Targeted educational support helps children like Laju stay engaged
              in school and avoid early dropout pressure.
            </p>
            <div className="button-row mt-4">
              <a href="/our-work/education-support" className="btn btn-secondary">
                View education support
              </a>
              <a href="/get-involved" className="btn btn-ghost-light">
                Sponsor a learner
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
