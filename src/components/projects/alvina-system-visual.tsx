const systemLayers = [
  { name: "Interface", detail: "Conversation surface" },
  { name: "Backend", detail: "Routing and services" },
  { name: "AI orchestrator", detail: "Agents and context" },
  { name: "Memory / data", detail: "Persistent state" },
  { name: "Tools / integrations", detail: "External actions" },
] as const;

const integrationLabels = ["Chat", "Email", "Calendar", "Contacts", "Memory", "Tools"] as const;

export function AlvinaSystemVisual() {
  return (
    <figure className="alvina-system-visual">
      <figcaption className="visually-hidden">
        Conceptual system map showing interface, backend, AI orchestration, memory and data, and
        tools and integrations layers for ALVINA.
      </figcaption>

      <div className="system-visual-meta" aria-hidden="true">
        <span>System preview</span>
        <span>Conceptual</span>
      </div>

      <div className="system-visual-map" aria-hidden="true">
        <div className="system-integrations">
          {integrationLabels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>

        <div className="system-stack">
          {systemLayers.map((layer, index) => (
            <div className="system-layer" key={layer.name}>
              <span className="system-layer-index">0{index + 1}</span>
              <span className="system-layer-name">{layer.name}</span>
              <span className="system-layer-detail">{layer.detail}</span>
              {index < systemLayers.length - 1 ? <span className="system-connector" /> : null}
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}
