interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeader({ label, title, subtitle, align = "left", light = false }: SectionHeaderProps) {
  return (
    <div className={`${align === "center" ? "text-center mx-auto" : ""} max-w-3xl mb-12 md:mb-16`}>
      {label && (
        <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-brand-magenta mb-3">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] ${
          light ? "text-white" : "text-deep-text"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? "text-white/80" : "text-deep-text/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
