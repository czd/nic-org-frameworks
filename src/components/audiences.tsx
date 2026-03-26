const tracks = [
  {
    label: "Track 1",
    labelColor: "var(--color-accent-emerald)",
    title: "Leaders & Organizations",
    body: "General managers who sense the transformation is overdue but have no playbook for moving from hype to results. The bottleneck isn't technology — it's that their company's purpose and decision logic were never written down.",
    glowColor: "rgba(52,211,153,0.08)",
    arrowColor: "var(--color-accent-emerald)",
    items: [
      { bold: "Strategic workshops", rest: "for leadership teams" },
      { bold: "Readiness assessments", rest: "with prioritized roadmaps" },
      { bold: "1:1 coaching", rest: "for frontier leadership skills" },
    ],
  },
  {
    label: "Track 2",
    labelColor: "var(--color-accent-gold)",
    title: "Individuals & Professionals",
    body: "Mid-career professionals with real domain expertise who feel the ground shifting. They're producing faster than ever but sense that speed alone isn't the same as staying relevant. They need a framework for continuous recalibration.",
    glowColor: "rgba(250,204,21,0.08)",
    arrowColor: "var(--color-accent-gold)",
    items: [
      { bold: "Public workshops", rest: "with self-assessment frameworks" },
      { bold: "Frontier skills bootcamp", rest: "for applied competencies" },
      { bold: "Career navigation", rest: "coaching for transitions" },
    ],
  },
];

export function Audiences() {
  return (
    <section
      id="audiences"
      className="reveal relative max-w-[1120px] mx-auto px-6 py-20 md:py-32"
    >
      {/* Ambient glow */}
      <div className="absolute top-[20%] left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(250,204,21,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div
        className="text-[0.65rem] tracking-[0.18em] uppercase font-semibold mb-6"
        style={{ color: "var(--color-accent-gold)" }}
      >
        Two Audiences
      </div>
      <h2 className="font-serif text-[clamp(1.7rem,3.8vw,3rem)] font-normal leading-[1.25] tracking-[-0.015em] max-w-[700px] mb-6">
        The frameworks serve two distinct groups with connected needs.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {tracks.map((track) => (
          <div
            key={track.label}
            className="relative overflow-hidden bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-[14px] p-6 md:p-10 transition-all duration-300 hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-hover)]"
          >
            {/* Corner glow */}
            <div
              className="absolute -top-10 -right-10 w-[120px] h-[120px] rounded-full pointer-events-none"
              style={{
                background: `radial-gradient(circle, ${track.glowColor}, transparent 70%)`,
              }}
            />

            <div
              className="text-[0.7rem] tracking-[0.15em] uppercase font-medium mb-5"
              style={{ color: track.labelColor }}
            >
              {track.label}
            </div>
            <h3 className="font-serif text-[1.35rem] font-normal tracking-[-0.01em] mb-4">
              {track.title}
            </h3>
            <p className="text-[var(--text-secondary)] text-[0.92rem] leading-[1.75] font-light mb-6">
              {track.body}
            </p>

            <div className="flex flex-col gap-2.5 mt-2">
              {track.items.map((item) => (
                <div
                  key={item.bold}
                  className="flex items-center gap-2.5 text-[0.85rem] text-[var(--text-secondary)]"
                >
                  <span
                    className="text-[0.75rem] shrink-0"
                    style={{ color: track.arrowColor }}
                  >
                    →
                  </span>
                  <span>
                    <span className="font-medium text-white">{item.bold}</span>{" "}
                    {item.rest}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
