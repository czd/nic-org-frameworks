const thesisCards = [
  {
    color: "var(--color-accent-coral)",
    title: "The Coordination Crisis",
    body: "As individual output multiplies, legacy team structures create exponential coordination costs. The mathematics of communication pathways makes this inevitable, not optional.",
  },
  {
    color: "var(--color-accent-cyan)",
    title: "Volume vs. Correctness",
    body: "AI has made production volume free. The only remaining scarcity is correctness — the ability to recognize whether output is strategically sound, architecturally coherent, and worth shipping.",
  },
  {
    color: "var(--color-accent-violet)",
    title: "The Intent Gap",
    body: "Organizations have never needed to write down their values and decision logic. Humans filled the gaps through osmosis. Agents cannot. This gap is now the primary bottleneck.",
  },
  {
    color: "var(--color-accent-emerald)",
    title: "Ambition Expansion",
    body: "The goal is not efficiency — doing the same with fewer people. It's expansion — using the multiplier to pursue missions that were previously impossible at any headcount.",
  },
];

export function Thesis() {
  return (
    <section
      id="thesis"
      className="reveal relative max-w-[1120px] mx-auto px-6 py-20 md:py-32"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-[radial-gradient(circle,rgba(255,77,106,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="text-[0.65rem] tracking-[0.18em] uppercase font-semibold mb-6 text-accent-magenta">
        Core Thesis
      </div>
      <h2 className="font-serif text-[clamp(1.7rem,3.8vw,3rem)] font-normal leading-[1.25] tracking-[-0.015em] max-w-[700px] mb-6">
        AI readiness is an organizational design problem — not a technology
        adoption problem.
      </h2>
      <p className="text-[var(--text-secondary)] text-[1.05rem] max-w-[600px] leading-[1.85] font-light">
        Most organizations are drowning in AI-generated volume while lacking the
        structures to ensure correctness. The frameworks I&apos;ve developed address
        the gap between what AI can do and what organizations are equipped to
        capture.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[1px] mt-10 md:mt-12">
        {thesisCards.map((card) => (
          <div
            key={card.title}
            className="relative group bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-[14px] p-6 md:p-11 transition-all duration-400 hover:border-[var(--border-hover)] hover:-translate-y-[3px]"
          >
            {/* Glow */}
            <div
              className="absolute top-6 left-6 w-[120px] h-[120px] rounded-full opacity-[0.12] group-hover:opacity-[0.2] transition-opacity duration-400 pointer-events-none"
              style={{
                background: card.color,
                filter: "blur(90px)",
              }}
            />
            <div
              className="w-[10px] h-[10px] rounded-full mb-5"
              style={{ background: card.color }}
            />
            <h3 className="font-serif text-[1.15rem] font-normal tracking-[-0.01em] mb-3">
              {card.title}
            </h3>
            <p className="text-[var(--text-secondary)] text-[0.92rem] leading-[1.7] font-light">
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
