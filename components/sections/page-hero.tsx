interface PageHeroProps {
  title: string;
  subtitle?: string;
  label?: string;
}

export function PageHero({ title, subtitle, label }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-soft-pink via-white to-soft-teal pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-magenta/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-brand-teal/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {label && (
          <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-brand-magenta mb-4">
            {label}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-deep-text leading-[1.1] max-w-4xl mx-auto">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg md:text-xl text-deep-text/70 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
