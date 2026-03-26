const flowNodes = [
  { label: "Entry", title: "Free talks" },
  { label: "Engagement", title: "Workshops" },
  { label: "Depth", title: "Consulting" },
  { label: "Ongoing", title: "Coaching" },
];

export function ValueFlow() {
  return (
    <section className="reveal max-w-[1120px] mx-auto px-6 py-20 md:py-32 text-center">
      <div className="text-[0.65rem] tracking-[0.18em] uppercase font-semibold mb-6 text-accent-violet">
        The Bridge
      </div>
      <h2 className="font-serif text-[clamp(1.7rem,3.8vw,3rem)] font-normal leading-[1.25] tracking-[-0.015em] max-w-[700px] mx-auto mb-6">
        The two tracks reinforce each other.
      </h2>
      <p className="text-[var(--text-secondary)] text-[1.05rem] max-w-[600px] mx-auto leading-[1.85] font-light">
        Leaders who attend workshops ask how to help their people navigate the
        shift. Individuals who develop frontier skills become the talent leaders
        need. Each track generates demand for the other.
      </p>

      <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-0">
        {flowNodes.map((node, i) => (
          <div key={node.label} className="flex items-center flex-col md:flex-row">
            <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-[10px] py-5 px-7 text-center min-w-[160px]">
              <div className="text-[0.65rem] tracking-[0.12em] uppercase text-[var(--text-muted)] mb-1">
                {node.label}
              </div>
              <div className="font-serif text-[1rem] font-normal">
                {node.title}
              </div>
            </div>
            {i < flowNodes.length - 1 && (
              <span className="text-[var(--text-muted)] text-[1.4rem] tracking-[0.1em] px-3 py-1.5 md:py-0 md:rotate-0 rotate-90">
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
