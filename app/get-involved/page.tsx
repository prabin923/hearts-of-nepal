export default function GetInvolvedPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="content-container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="breadcrumb-sep">/</span>
            <span>Get Involved</span>
          </nav>
          <h1 className="section-heading">Get Involved</h1>
          <p className="section-copy">
            Join us as a donor, volunteer, or implementation partner.
          </p>

          <form className="contact-form mt-7">
            <div className="form-grid">
              <label>
                Full name
                <input className="field-input" type="text" placeholder="Your name" />
              </label>
              <label>
                Email
                <input className="field-input" type="email" placeholder="you@example.com" />
              </label>
              <label>
                Phone
                <input className="field-input" type="tel" placeholder="+977..." />
              </label>
              <label>
                Interest area
                <input className="field-input" type="text" placeholder="Meals, scholarship, etc." />
              </label>
            </div>
            <label className="mt-4 block">
              Message
              <textarea className="field-input field-textarea" placeholder="Tell us how you'd like to contribute." />
            </label>
            <button type="button" className="btn btn-primary mt-5">
              Submit interest
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
