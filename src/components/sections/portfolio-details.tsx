const capabilities = [
  {
    title: "AI Engineering",
    detail: "LLM systems, agent orchestration, retrieval, evaluation",
  },
  {
    title: "Product Engineering",
    detail: "Next.js, TypeScript, product architecture, deployment",
  },
  {
    title: "Backend & Data",
    detail: "NestJS, Python, PostgreSQL, Redis, Prisma",
  },
  {
    title: "AI-Assisted Development & Automation",
    detail: "workflow design, developer tooling, integration systems",
  },
] as const;

const learningStages = [
  { title: "Foundations", status: "Completed" },
  { title: "Data", status: "Completed" },
  { title: "Machine Learning", status: "Current" },
  { title: "Deployment", status: "Roadmap" },
  { title: "Deep Learning", status: "Roadmap" },
  { title: "LLMs", status: "Roadmap" },
  { title: "Agents", status: "Roadmap" },
] as const;

export function Capabilities() {
  return (
    <section className="section-shell capabilities" id="capabilities" aria-labelledby="capabilities-title">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">02 / Capabilities</p>
          <h2 id="capabilities-title">What I work with</h2>
        </div>

        <ul className="capability-list">
          {capabilities.map((capability, index) => (
            <li key={capability.title}>
              <span className="capability-index">0{index + 1}</span>
              <h3>{capability.title}</h3>
              <p>{capability.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function LearningInPublic() {
  return (
    <section className="section-shell learning" id="learning" aria-labelledby="learning-title">
      <div className="container">
        <div className="section-intro learning-intro">
          <p className="eyebrow">03 / Learning in public</p>
          <div>
            <h2 id="learning-title">Building toward AI engineering.</h2>
            <p>
              A public, build-led path through the foundations of applied AI engineering.
            </p>
          </div>
        </div>

        <ol className="learning-path">
          {learningStages.map((stage, index) => (
            <li key={stage.title} className={stage.status === "Roadmap" ? "is-roadmap" : undefined}>
              <span>0{index + 1}</span>
              <h3>{stage.title}</h3>
              <p>{stage.status}</p>
            </li>
          ))}
        </ol>

        <a
          className="section-link"
          href="https://github.com/coderomantor/90-Days-AI-ML-Roadmap"
          target="_blank"
          rel="noreferrer"
        >
          Follow the journey <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="section-shell about" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="section-intro about-intro">
          <p className="eyebrow">04 / About</p>
          <h2 id="about-title">
            <span>I like building</span>
            <span>things that have</span>
            <span>a reason to exist.</span>
          </h2>
        </div>

        <div className="about-copy">
          <p>
            I&apos;m Roman Ullah, a Computer Science student focused on AI engineering and software
            development. I like turning practical questions into useful systems, then learning what
            they need by building them.
          </p>
          <p>
            My work sits between intelligent software, product thinking and the technical details
            that make an idea dependable in the real world.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="section-shell contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <p className="eyebrow">05 / Contact</p>
        <h2 id="contact-title">
          <span>Have something</span>
          <span>worth building?</span>
        </h2>

        <div className="contact-actions">
          <a className="contact-primary" href="mailto:coderomantor@gmail.com">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
          <div className="contact-links" aria-label="Contact links">
            <a href="mailto:coderomantor@gmail.com">coderomantor@gmail.com</a>
            <a href="https://www.linkedin.com/in/roman-ullah/" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href="https://github.com/coderomantor" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
