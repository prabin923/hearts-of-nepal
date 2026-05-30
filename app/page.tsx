import Link from "next/link";
import ImageSlider from "./components/image-slider";
import { SectionBlock } from "./components/section-block";

const slides = [
  {
    src: "/assets/gallery-1.jpg",
    alt: "Community gathering in Nepal",
    caption: "Community-led programs in Sindhupalchowk",
  },
  {
    src: "/assets/midday-1.jpg",
    alt: "Students at a midday meal service",
    caption: "School nutrition supporting attendance",
  },
  {
    src: "/assets/education-1.jpg",
    alt: "Students receiving education support",
    caption: "Scholarships and tuition assistance",
  },
  {
    src: "/assets/financial-1.jpg",
    alt: "Women in a savings group meeting",
    caption: "Women-led savings and livelihood groups",
  },
  {
    src: "/assets/gallery-extra-1.jpg",
    alt: "Field program activity",
    caption: "Partnerships with schools and local leaders",
  },
  {
    src: "/assets/gallery-extra-2.jpg",
    alt: "Community program event",
    caption: "Grassroots engagement across program areas",
  },
  {
    src: "/assets/gallery-extra-3.jpg",
    alt: "Program participants",
    caption: "Integrated education and nutrition work",
  },
];

const pillars = [
  {
    title: "Educate",
    copy: "Scholarships, tuition support, school kits, and child clubs that keep students in school.",
    image: "/assets/educate.jpg",
    href: "/our-work/education-support",
  },
  {
    title: "Nourish",
    copy: "Daily mid-day meals that improve attendance, concentration, and classroom participation.",
    image: "/assets/nourish.jpg",
    href: "/our-work/midday-meals",
  },
  {
    title: "Empower",
    copy: "Women's self-help groups, savings circles, and skills training for household resilience.",
    image: "/assets/empower.jpg",
    href: "/our-work/financial-empowerment",
  },
];

const impactStats = [
  { value: "730,000+", label: "meals served through mid-day meals" },
  { value: "340+", label: "students supported by scholarships" },
  { value: "80+", label: "women in active empowerment cohorts" },
];

export default function HomePage() {
  return (
    <main>
      <section className="home-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/gallery-1.jpg"
          alt=""
          className="home-hero__media"
          fetchPriority="high"
        />
        <div className="home-hero__scrim" />
        <div className="container home-hero__inner">
          <p className="home-hero__eyebrow">Non-profit · Nepal</p>
          <h1 className="home-hero__title">
            Nutrition, education, and dignity for communities in Sindhupalchowk.
          </h1>
          <p className="home-hero__desc">
            Heart of Nepal runs practical, locally led programs—mid-day meals,
            scholarships, school supplies, and women&apos;s savings groups—with
            transparent reporting for partners and donors.
          </p>
          <div className="btn-row">
            <Link href="/get-involved" className="btn btn--primary">
              Support our work
            </Link>
            <Link href="/our-work" className="btn btn--outline-light">
              View programs
            </Link>
          </div>
          <dl className="stat-row">
            {impactStats.map((stat) => (
              <div key={stat.label} className="stat-row__item">
                <dt className="stat-row__value">{stat.value}</dt>
                <dd className="stat-row__label">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="split">
            <div>
              <SectionBlock
                title="How we work"
                description="Programs are designed with schools, parent groups, and local partners—not imposed from outside. We start with what communities need, deliver consistently, and report outcomes openly."
              />
              <div className="btn-row">
                <Link href="/our-work" className="btn btn--secondary">
                  All programs
                </Link>
                <Link href="/impact" className="btn btn--ghost">
                  Impact data
                </Link>
              </div>
            </div>
            <ol className="process-list">
              <li className="process-list__item">
                <span className="process-list__step">01</span>
                <div>
                  <h3 className="card__title">Listen and assess</h3>
                  <p className="card__text">
                    Map nutrition gaps, school attendance, and household needs with
                    teachers and community leaders.
                  </p>
                </div>
              </li>
              <li className="process-list__item">
                <span className="process-list__step">02</span>
                <div>
                  <h3 className="card__title">Deliver on the ground</h3>
                  <p className="card__text">
                    Run meals, scholarships, kits, and women&apos;s groups with
                    accountable local coordination.
                  </p>
                </div>
              </li>
              <li className="process-list__item">
                <span className="process-list__step">03</span>
                <div>
                  <h3 className="card__title">Measure and adapt</h3>
                  <p className="card__text">
                    Track meals served, student progression, and group savings—then
                    refine with partners each quarter.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split split--center">
          <div>
            <SectionBlock
              title="Why we exist"
              description="Caste, gender, and economic barriers still limit access to nutrition, quality schooling, and financial independence for many families in rural Nepal."
            />
            <p className="prose">
              Founded by youth leader Aishworya Shrestha, Heart of Nepal focuses on
              practical interventions that communities can sustain—starting in
              Sindhupalchowk and expanding with partner support.
            </p>
            <Link href="/about" className="text-link">
              About our mission →
            </Link>
          </div>
          <figure className="figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/why-we-exist.jpg"
              alt="Community members supported by Heart of Nepal"
              className="figure__img"
            />
          </figure>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionBlock
            title="Three pillars of change"
            description="Education, nutrition, and women's economic agency reinforce one another across our portfolio."
          />
          <div className="card-grid card-grid--3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="card card--media">
                <figure className="figure figure--card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={pillar.image} alt="" className="figure__img" />
                </figure>
                <h3 className="card__title">{pillar.title}</h3>
                <p className="card__text">{pillar.copy}</p>
                <Link href={pillar.href} className="text-link">
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card-grid card-grid--2">
            <article className="card card--horizontal">
              <figure className="figure figure--wide">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/midday-2.jpg"
                  alt="Mid-day meal service at a school"
                  className="figure__img"
                />
              </figure>
              <div className="card__body">
                <h3 className="card__title">Mid-day meals at scale</h3>
                <p className="card__text">
                  Our largest program has served more than 730,000 meals, helping
                  students stay in school with reliable daily nutrition.
                </p>
                <div className="btn-row">
                  <Link href="/our-work/midday-meals" className="btn btn--secondary">
                    Program page
                  </Link>
                  <Link href="/impact" className="btn btn--ghost">
                    See impact
                  </Link>
                </div>
              </div>
            </article>
            <article className="card card--horizontal">
              <figure className="figure figure--wide">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/financial-2.jpg"
                  alt="Women in an empowerment program"
                  className="figure__img"
                />
              </figure>
              <div className="card__body">
                <h3 className="card__title">Women-led savings groups</h3>
                <p className="card__text">
                  Mother&apos;s groups in Pipaltar and Battar build household
                  resilience through structured savings and skills training.
                </p>
                <div className="btn-row">
                  <Link
                    href="/our-work/financial-empowerment"
                    className="btn btn--secondary"
                  >
                    Program page
                  </Link>
                  <Link href="/stories" className="btn btn--ghost">
                    Read stories
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--border">
        <div className="container">
          <SectionBlock
            title="From the field"
            description="Photographs from schools, meal services, and women's groups across our program areas."
          />
          <ImageSlider slides={slides} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionBlock
            title="Ways to contribute"
            description="Donors and volunteers receive clear updates on meals delivered, students supported, and group milestones—not marketing fluff."
          />
          <div className="split">
            <div className="donate-panel">
              <p className="donate-panel__label">Partner with us</p>
              <h3 className="donate-panel__title">
                Fund a school year of meals, a scholarship, or a women&apos;s cohort.
              </h3>
              <p className="donate-panel__text">
                We welcome one-time gifts, recurring support, and in-kind
                contributions aligned with program needs.
              </p>
              <div className="btn-row">
                <Link href="/get-involved" className="btn btn--primary">
                  Get involved
                </Link>
                <Link href="/impact" className="btn btn--outline-dark">
                  Review impact
                </Link>
              </div>
            </div>
            <aside className="card">
              <h3 className="card__title">What partners receive</h3>
              <ul className="check-list">
                <li>Quarterly program summaries with key metrics</li>
                <li>Field photos and short narrative updates</li>
                <li>Direct line to our coordination team in Lalitpur</li>
                <li>Visibility into meal, scholarship, and savings outcomes</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section--cta">
        <div className="container container--narrow">
          <h2 className="section-block__title">Help us reach more students and families</h2>
          <p className="section-block__desc">
            Whether you donate, volunteer, or connect us with a school partner, your
            support expands evidence-backed work on the ground.
          </p>
          <div className="btn-row btn-row--center">
            <Link href="/get-involved" className="btn btn--primary">
              Contact the team
            </Link>
            <Link href="/about" className="btn btn--secondary">
              Meet our founder
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
