import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "./icon";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Empty image container */}
      <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-brand-magenta/5 to-brand-teal/10 overflow-hidden">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand-magenta/10 to-brand-teal/20" />
      </div>

      <div className="flex flex-col flex-1 p-6 md:p-8">
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-magenta-light text-brand-magenta group-hover:bg-brand-magenta group-hover:text-white transition-colors duration-300">
          <Icon name={icon} className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-deep-text mb-3 group-hover:text-brand-magenta transition-colors">
          {title}
        </h3>
        <p className="text-deep-text/70 text-sm leading-relaxed flex-1 mb-5">{description}</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal group-hover:text-brand-magenta transition-colors">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
