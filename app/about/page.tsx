export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <img src="/assets/about-hero.jpg" alt="About Heart of Nepal" className="hero-media" />
        <div className="content-container hero-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="breadcrumb-sep">/</span>
            <span>About</span>
          </nav>
          <p className="eyebrow">About</p>
          <h1 className="hero-title">Built by youth leadership for community transformation.</h1>
          <p className="hero-copy">
            Founded by Aishworya Shrestha, a Globethics Youth Leadership Award
            winner, Heart of Nepal advances inclusive health, education, and
            dignity-centered development.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="content-container card-grid">
          <article className="default-card">
            <h3 className="card-title">Community Ownership</h3>
            <p className="card-copy">Programs are designed and led with local stakeholders.</p>
          </article>
          <article className="default-card">
            <h3 className="card-title">Intersectional Justice</h3>
            <p className="card-copy">We address barriers shaped by caste, class, and gender.</p>
          </article>
          <article className="default-card">
            <h3 className="card-title">Ethical Partnerships</h3>
            <p className="card-copy">Transparent collaboration with measurable outcomes.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="content-container">
          <h2 className="section-heading">Mission goals</h2>
          <ul className="mono-list">
            <li>Expand daily school nutrition access</li>
            <li>Increase scholarship continuity rates</li>
            <li>Improve educational resource equity</li>
            <li>Enable women-led economic agency</li>
            <li>Scale child protection and leadership clubs</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
