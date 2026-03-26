export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 md:pt-32 md:pb-24 bg-[#080808]">
      {/* Ambient glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(168,85,247,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="hero-stagger-1 text-[0.8rem] tracking-[0.15em] uppercase text-[var(--text-muted)] mb-8 font-medium">
        Strategic Research &amp; Frameworks
      </div>

      <h1 className="hero-stagger-2 font-serif text-[clamp(2.2rem,5.5vw,4.5rem)] font-normal leading-[1.15] max-w-[800px] tracking-[-0.015em] mb-8">
        Making organizations{" "}
        <em className="italic hero-gradient-text">machine-readable</em>
      </h1>

      <p className="hero-stagger-3 text-[1.15rem] text-[var(--text-secondary)] max-w-[560px] leading-[1.8] mb-12 font-light">
        A body of strategic frameworks exploring how organizations and
        individuals must restructure for an era of exponential capability —
        where the bottleneck is no longer technology, but organizational design.
      </p>

    </section>
  );
}
