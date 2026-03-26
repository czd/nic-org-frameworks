export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 bg-[rgba(8,8,8,0.8)] backdrop-blur-xl border-b border-[var(--border-subtle)]">
      <div className="flex items-center gap-2.5">
        <div className="w-2 h-2 rounded-full bg-ember pulse-dot" />
        <span className="font-[var(--font-serif)] font-serif text-[1.15rem] font-normal tracking-[-0.02em]">
          Nicolas{" "}
          <span className="text-[var(--text-muted)] font-light">
            / Frameworks
          </span>
        </span>
      </div>
      <ul className="hidden md:flex items-center gap-10">
        {["Thesis", "Frameworks", "Audiences"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-[var(--text-secondary)] text-[0.85rem] font-medium uppercase tracking-[0.04em] hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
