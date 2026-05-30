import Breadcrumb from "../components/breadcrumb";
import { SectionBlock } from "../components/section-block";

export const metadata = {
  title: "Get involved",
};

export default function GetInvolvedPage() {
  return (
    <main>
      <section className="section">
        <div className="container page-content">
          <Breadcrumb
            variant="page"
            items={[
              { label: "Home", href: "/" },
              { label: "Get involved" },
            ]}
          />
          <SectionBlock
            title="Get involved"
            description="Join us as a donor, volunteer, or implementation partner. We respond to every inquiry within a few business days."
          />

          <form className="contact-form">
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
                <input className="field-input" type="tel" placeholder="+977 …" />
              </label>
              <label>
                Interest area
                <input
                  className="field-input"
                  type="text"
                  placeholder="Meals, scholarship, empowerment…"
                />
              </label>
            </div>
            <label className="mt-4 block">
              Message
              <textarea
                className="field-input field-textarea"
                placeholder="Tell us how you would like to contribute."
              />
            </label>
            <button type="button" className="btn btn--primary mt-5">
              Send message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
