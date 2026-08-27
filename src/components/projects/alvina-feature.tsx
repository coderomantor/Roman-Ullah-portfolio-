import { alvinaProject } from "@/data/projects";

import { AlvinaSystemVisual } from "./alvina-system-visual";

const metadata = [
  { label: "Role", value: alvinaProject.role },
  { label: "Year", value: alvinaProject.year },
  { label: "Platform", value: alvinaProject.platform.join(" / ") },
] as const;

export function AlvinaFeature() {
  return (
    <article className="project-feature" aria-labelledby="alvina-title">
      <header className="project-heading">
        <p className="eyebrow">
          {alvinaProject.number} / {alvinaProject.title}
        </p>
        <h3 id="alvina-title">{alvinaProject.title}</h3>
        <p className="project-category">{alvinaProject.category}</p>
      </header>

      <AlvinaSystemVisual />

      <div className="project-details">
        <p className="project-description">{alvinaProject.description}</p>
        <dl className="project-metadata">
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
