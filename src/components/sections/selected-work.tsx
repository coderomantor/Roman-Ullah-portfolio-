import { AlvinaFeature } from "@/components/projects/alvina-feature";
import { EmployeeVerificationFeature } from "@/components/projects/employee-verification-feature";
import { HoshFeature } from "@/components/projects/hosh-feature";

export function SelectedWork() {
  return (
    <section className="selected-work" id="work" aria-labelledby="selected-work-title">
      <div className="container">
        <div className="selected-work-intro">
          <p className="eyebrow">01 / Selected work</p>
          <h2 id="selected-work-title">
            <span>Selected</span>
            <span>work</span>
          </h2>
          <p className="selected-work-summary">
            A selection of AI systems, digital products and production software.
          </p>
        </div>

        <AlvinaFeature />
        <EmployeeVerificationFeature />
        <HoshFeature />
      </div>
    </section>
  );
}
