const navigation = [
  { href: "#work", label: "Work" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#about", label: "About" },
] as const;

function NavigationLinks() {
  return (
    <>
      {navigation.map((item) => (
        <a key={item.href} href={item.href}>
          {item.label}
        </a>
      ))}
    </>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#top" aria-label="Roman Ullah, home">
          RU<span aria-hidden="true">.</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <div className="nav-links">
            <NavigationLinks />
          </div>
          <a className="contact-link" href="mailto:coderomantor@gmail.com">
            Let&apos;s Talk <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <details className="mobile-nav">
          <summary>
            <span>Menu</span>
            <span className="menu-mark" aria-hidden="true" />
          </summary>
          <nav aria-label="Mobile navigation">
            <NavigationLinks />
            <a href="mailto:coderomantor@gmail.com">
              Let&apos;s Talk <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
