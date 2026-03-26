export function SiteFooter() {
  return (
    <footer className="max-w-[1120px] mx-auto px-6 py-16 pb-24 border-t border-[var(--border-subtle)] flex flex-col md:flex-row justify-between items-start md:items-end gap-6 bg-[#080808]">
      <div>
        <div className="font-serif text-[1.1rem] font-normal mb-1">
          Nicolas
        </div>
        <div className="text-[var(--text-muted)] text-[0.85rem]">
          Stavanger, Norway
        </div>
      </div>
      <div className="text-[var(--text-muted)] text-[0.8rem] md:text-right">
        Strategic frameworks for the AI-native transition.
        <br />
        Prepared for conversation — March 2026.
      </div>
    </footer>
  );
}
