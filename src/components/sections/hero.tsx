export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="system-grid" aria-hidden="true">
        <span className="active-node" />
      </div>

      <div className="container hero-inner">
        <p className="eyebrow hero-eyebrow">Roman Ullah / Pakistan</p>

        <h1 className="hero-title" id="hero-title">
          <span>I build</span>
          <span>software</span>
          <span>
            That thinks<span className="hero-period">.</span>
          </span>
        </h1>

        <div className="hero-context">
          <p className="hero-identity">Roman Ullah — AI Engineer &amp; Product Builder</p>
          <p className="hero-copy">
            I build intelligent software and useful digital products from idea to deployment.
          </p>
          <div className="hero-actions" aria-label="Hero actions">
            <a href="#work">
              Explore my work <span className="action-arrow" aria-hidden="true">↓</span>
            </a>
            <a href="#contact">
              Let&apos;s talk <span className="action-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-footer" aria-label="Page context">
          <a className="eyebrow section-cue" href="#work">
            01 / Selected work <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
