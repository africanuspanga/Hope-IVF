interface JourneyStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export function JourneyStep({ number, title, description, isLast }: JourneyStepProps) {
  return (
    <div className="relative flex gap-5 md:block">
      {/* Vertical line on mobile / horizontal on desktop */}
      {!isLast && (
        <>
          <div className="absolute left-[22px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-brand-magenta to-brand-teal md:hidden" />
          <div className="hidden md:absolute md:left-1/2 md:top-16 md:h-0.5 md:w-full md:-translate-x-1/2 md:bg-gradient-to-r md:from-brand-magenta md:to-brand-teal" />
        </>
      )}

      <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-magenta text-white font-bold shadow-lg shadow-brand-magenta/25 md:mx-auto md:mb-6">
        {number}
      </div>
      <div className="md:text-center pb-8 md:pb-0">
        <h3 className="text-lg font-bold text-deep-text mb-2">{title}</h3>
        <p className="text-sm text-deep-text/70 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
