const flowSteps = [
  {
    number: "01",
    title: "QR entry",
    detail: "Scan code",
    data: "Entry point",
    kind: "scan",
    active: false,
  },
  {
    number: "02",
    title: "Validate now",
    detail: "Card no. + ID",
    data: "•••• 4821 / •••• 7310",
    kind: "validation",
    active: false,
  },
  {
    number: "03",
    title: "Verify record",
    detail: "Identity check",
    data: "Matched record",
    kind: "match",
    active: true,
  },
  {
    number: "04",
    title: "Worker details",
    detail: "Verified record",
    data: "Access confirmed",
    kind: "record",
    active: false,
  },
] as const;

function FlowCue({ kind }: { kind: (typeof flowSteps)[number]["kind"] }) {
  if (kind === "scan") {
    return (
      <div className="flow-cue flow-cue-scan">
        <span className="scan-corners" />
        <span className="scan-grid" />
      </div>
    );
  }

  if (kind === "validation") {
    return (
      <div className="flow-cue flow-cue-form">
        <span>Card no.</span>
        <i />
        <span>ID</span>
        <i />
      </div>
    );
  }

  if (kind === "match") {
    return (
      <div className="flow-cue flow-cue-match">
        <span>Record match</span>
        <span>
          <i /> Verified input
        </span>
      </div>
    );
  }

  return (
    <div className="flow-cue flow-cue-record">
      <span>Record</span>
      <i />
      <span>Access</span>
      <i />
      <span>Status</span>
      <i />
    </div>
  );
}

export function VerificationProductVisual() {
  return (
    <figure className="verification-product-visual">
      <figcaption className="visually-hidden">
        Conceptual product workflow for an employee verification platform: QR entry, validation,
        identity check, record verification, and worker details.
      </figcaption>

      <div className="product-visual-meta" aria-hidden="true">
        <span>Product flow / conceptual preview</span>
        <span>Production system</span>
      </div>

      <div className="verification-flow" aria-hidden="true">
        {flowSteps.map((step) => (
          <div
            className={`flow-step flow-step-${step.kind}${step.active ? " is-active" : ""}`}
            key={step.number}
          >
            <span className="flow-step-number">{step.number}</span>
            <div className="flow-step-content">
              <span className="flow-step-title">{step.title}</span>
              <span className="flow-step-detail">{step.detail}</span>
              <FlowCue kind={step.kind} />
            </div>
            <span className="flow-step-data">{step.data}</span>
          </div>
        ))}
      </div>
    </figure>
  );
}
