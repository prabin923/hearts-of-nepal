import Link from "next/link";
import Breadcrumb from "../components/breadcrumb";
import PageHero from "../components/page-hero";
import { SectionBlock } from "../components/section-block";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        image="/assets/about-hero.jpg"
        imageAlt="About Heart of Nepal"
        eyebrow="About"
        title="Youth-led work for lasting community change"
        description="Founded by Aishworya Shrestha, Heart of Nepal advances inclusive nutrition, education, and women's economic agency in rural Nepal."
      >
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "About" },
          ]}
        />
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="card-grid card-grid--3">
            <article className="card">
              <h3 className="card__title">Community ownership</h3>
              <p className="card__text">
                Programs are planned and led with schools, parent groups, and local
                partners—not delivered top-down.
              </p>
            </article>
            <article className="card">
              <h3 className="card__title">Intersectional justice</h3>
              <p className="card__text">
                We address barriers shaped by caste, class, and gender that limit
                access to food, schooling, and livelihoods.
              </p>
            </article>
            <article className="card">
              <h3 className="card__title">Transparent partnerships</h3>
              <p className="card__text">
                Donors and volunteers receive clear reporting on meals, scholarships,
                and group outcomes.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container split">
          <div>
            <SectionBlock
              title="Mission priorities"
              description="Our work stays focused on measurable outcomes in Sindhupalchowk and partner communities."
            />
            <ul className="check-list">
              <li>Expand reliable school nutrition</li>
              <li>Keep scholarship students in school through graduation pathways</li>
              <li>Distribute learning materials where resources are scarce</li>
              <li>Strengthen women-led savings and skills groups</li>
              <li>Support child clubs for protection and leadership</li>
            </ul>
          </div>
          <div>
            <SectionBlock title="Learn more" />
            <p className="prose">
              Read how we work across programs, or explore field stories from students
              and women&apos;s groups.
            </p>
            <div className="btn-row">
              <Link href="/our-work" className="btn btn--secondary">
                Our work
              </Link>
              <Link href="/stories" className="btn btn--ghost">
                Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
