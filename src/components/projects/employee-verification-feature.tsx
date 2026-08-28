import { employeeVerificationProject } from "@/data/projects";

import { VerificationProductVisual } from "./verification-product-visual";

const metadata = [
  { label: "Role", value: employeeVerificationProject.role },
  { label: "Type", value: employeeVerificationProject.type },
  { label: "Year", value: employeeVerificationProject.year },
  { label: "Platform", value: employeeVerificationProject.platform.join(" / ") },
] as const;

export function EmployeeVerificationFeature() {
  return (
    <article className="employee-feature" aria-labelledby="employee-verification-title">
      <header className="employee-heading">
        <p className="eyebrow">
          {employeeVerificationProject.number} / {employeeVerificationProject.label}
        </p>
        <h3 id="employee-verification-title">
          {employeeVerificationProject.titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h3>
        <p className="employee-category">{employeeVerificationProject.category}</p>
      </header>

      <VerificationProductVisual />

      <div className="project-details employee-details">
        <p className="project-description">{employeeVerificationProject.description}</p>
        <dl className="project-metadata employee-metadata">
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
