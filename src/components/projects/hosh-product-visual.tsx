const homeApps = ["Phone", "Messages", "Maps", "Camera"] as const;

export function HoshProductVisual() {
  return (
    <figure className="hosh-product-visual">
      <figcaption className="visually-hidden">
        Conceptual Hosh mobile product preview showing a minimal launcher home screen and a mindful
        pause before opening a selected app. Hosh is in development.
      </figcaption>

      <div className="hosh-visual-meta" aria-hidden="true">
        <span>Product concept / in development</span>
        <span>Local-first preferences</span>
      </div>

      <div className="hosh-device-stage" aria-hidden="true">
        <div className="hosh-phone hosh-phone-home">
          <div className="hosh-phone-bar">
            <span>09:41</span>
            <span>Hosh</span>
          </div>
          <div className="hosh-home-content">
            <p>Good morning.</p>
            <nav aria-label="Conceptual Hosh app list">
              {homeApps.map((app) => (
                <span key={app}>{app}</span>
              ))}
            </nav>
            <span className="hosh-all-apps">All apps</span>
          </div>
        </div>

        <div className="hosh-phone hosh-phone-pause">
          <div className="hosh-phone-bar">
            <span>Hosh shield</span>
            <span>09:41</span>
          </div>
          <div className="hosh-pause-content">
            <p>Take a moment.</p>
            <span>Why are you opening this app?</span>
            <div className="hosh-pause-actions">
              <span>Continue</span>
              <span>Go back</span>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
