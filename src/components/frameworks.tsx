const frameworks = [
  {
    color: "var(--color-accent-emerald)",
    name: "AI-Native Teams",
    desc: "How organizations must restructure their units of work — moving from departments to high-context, AI-augmented small teams optimized for correctness over volume.",
  },
  {
    color: "var(--color-accent-violet)",
    name: "Intent Engineering",
    desc: "The discipline of making organizational purpose, values, and decision boundaries machine-readable — going beyond prompts and context to encode what agents should want.",
  },
  {
    color: "var(--color-accent-cyan)",
    name: "Frontier Operations",
    desc: "Five competencies for working at the expanding boundary between human judgment and machine execution. Skills that expire every 90 days as the capability frontier moves.",
  },
  {
    color: "var(--color-accent-gold)",
    name: "Talent Identification",
    desc: "Protocols for identifying individuals who can direct AI rather than be directed by it — replacing legacy performance rubrics with diagnostic missions.",
  },
  {
    color: "var(--color-accent-coral)",
    name: "Autonomy Levels",
    desc: "A five-level progression model for AI-driven development — from assisted autocomplete to fully autonomous production systems.",
  },
  {
    color: "var(--color-accent-magenta)",
    name: "Strategic Reorganization",
    desc: "The operational playbook for transitioning legacy organizations into federated, high-autonomy structures — including the economic case and implementation mandates.",
  },
];

export function Frameworks() {
  return (
    <section
      id="frameworks"
      className="reveal relative max-w-[1120px] mx-auto px-6 py-20 md:py-32"
    >
      {/* Ambient glow */}
      <div className="absolute top-[10%] right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,200,255,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="text-[0.65rem] tracking-[0.18em] uppercase font-semibold mb-6 text-accent-cyan">
        Framework Library
      </div>
      <h2 className="font-serif text-[clamp(1.7rem,3.8vw,3rem)] font-normal leading-[1.25] tracking-[-0.015em] max-w-[700px] mb-6">
        Six interconnected frameworks for the AI-native transition.
      </h2>
      <p className="text-[var(--text-secondary)] text-[1.05rem] max-w-[600px] leading-[1.85] font-light">
        Each framework addresses a specific layer of the transition — from team
        architecture to individual skill development to autonomous system
        governance.
      </p>

      <div className="mt-12 flex flex-col">
        {frameworks.map((fw, i) => (
          <div
            key={fw.name}
            className={`grid grid-cols-1 md:grid-cols-[200px_1fr] gap-1.5 md:gap-8 items-baseline py-6 md:py-8 border-b border-[var(--border-subtle)] transition-[padding-left] duration-300 hover:pl-2 ${
              i === 0 ? "border-t" : ""
            }`}
          >
            <div className="font-serif text-[1.1rem] font-normal tracking-[-0.01em] flex items-center gap-3">
              <div
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: fw.color }}
              />
              {fw.name}
            </div>
            <div className="text-[var(--text-secondary)] text-[0.95rem] leading-[1.7] font-light">
              {fw.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
