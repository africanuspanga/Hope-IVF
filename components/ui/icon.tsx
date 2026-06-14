import {
  Stethoscope,
  Microscope,
  HeartPulse,
  Users,
  Clock,
  ShieldCheck,
  Baby,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Stethoscope,
  Microscope,
  HeartPulse,
  Users,
  Clock,
  ShieldCheck,
  Baby,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const IconComponent = ICONS[name] || Stethoscope;
  return <IconComponent className={className} />;
}
