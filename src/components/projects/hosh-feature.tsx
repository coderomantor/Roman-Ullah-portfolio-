import { hoshProject } from "@/data/projects";

import { HoshProductVisual } from "./hosh-product-visual";

const metadata = [
  { label: "Status", value: hoshProject.status },
  { label: "Role", value: hoshProject.role },
  { label: "Year", value: hoshProject.year },
  { label: "Platform", value: hoshProject.platform.join(" / ") },
] as const;

export function HoshFeature() {
  return (
    <article className="hosh-feature" aria-labelledby="hosh-title">
      <header className="hosh-heading">
        <p className="eyebrow">
          {hoshProject.number} / {hoshProject.label}
        </p>
        <h3 id="hosh-title">{hoshProject.title}</h3>
        <div className="hosh-heading-context">
          <p className="hosh-category">{hoshProject.category}</p>
          <p className="hosh-heading-status">{hoshProject.status}</p>
        </div>
      </header>

      <HoshProductVisual />

      <div className="project-details hosh-details">
        <p className="project-description">{hoshProject.description}</p>
        <dl className="project-metadata hosh-metadata">
          {metadata.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
