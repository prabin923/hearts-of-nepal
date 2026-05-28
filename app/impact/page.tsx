const groupRows = [
  {
    name: "Pipaltar Mother's Group",
    members: "Tracked",
    savings: "Savings ledger active",
    cycle: "Quarterly",
  },
  {
    name: "Battar Mother's Group",
    members: "Tracked",
    savings: "Savings ledger active",
    cycle: "Quarterly",
  },
];

export default function ImpactPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="content-container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="breadcrumb-sep">/</span>
            <span>Impact</span>
          </nav>
          <h1 className="section-heading">Impact Dashboard</h1>
          <p className="section-copy">
            Evidence-first snapshot of women’s self-help groups and distribution outcomes.
          </p>

          <div className="table-card mt-7">
            <table className="impact-table">
              <thead>
                <tr>
                  <th>Group</th>
                  <th>Members</th>
                  <th>Total savings</th>
                  <th>Reporting cycle</th>
                </tr>
              </thead>
              <tbody>
                {groupRows.map((row) => (
                  <tr key={row.name}>
                    <td>{row.name}</td>
                    <td>{row.members}</td>
                    <td>{row.savings}</td>
                    <td>{row.cycle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card-grid mt-7">
            <article className="default-card">
              <h2 className="card-title">School kits milestone</h2>
              <p className="card-copy">Distribution milestones tracked by location and cycle.</p>
            </article>
            <article className="default-card">
              <h2 className="card-title">Meals milestone</h2>
              <p className="card-copy">730,000+ cumulative meals served.</p>
            </article>
            <article className="default-card">
              <h2 className="card-title">Portfolio milestone</h2>
              <p className="card-copy">5 core programs currently represented in reporting.</p>
            </article>
          </div>
          <div className="button-row mt-6">
            <a href="/stories" className="btn btn-secondary">
              Read ground stories
            </a>
            <a href="/get-involved" className="btn btn-primary">
              Join as a partner
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
