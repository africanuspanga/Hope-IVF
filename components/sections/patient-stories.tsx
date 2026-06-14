import { SectionHeader } from "@/components/ui/section-header";
import { Heart, Users, Sparkles } from "lucide-react";

const STORIES = [
  {
    icon: Heart,
    title: "Patient story coming soon",
    text: "Real experiences shared by patients may appear here with written permission.",
  },
  {
    icon: Users,
    title: "Shared with permission",
    text: "Every fertility journey is personal. Stories will only be published with clear consent.",
  },
  {
    icon: Sparkles,
    title: "Every journey is personal",
    text: "We honor the uniqueness of each patient’s path and do not promise specific outcomes.",
  },
];

export function PatientStories() {
  return (
    <section className="py-16 md:py-24 bg-soft-pink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Patient Experiences"
          title="Patient experiences"
          subtitle="Real stories may be shared here only with patient consent. Individual results vary."
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {STORIES.map((story) => (
            <div
              key={story.title}
              className="rounded-3xl bg-white p-8 border border-pink-100/60 shadow-sm text-center transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-magenta-light text-brand-magenta">
                <story.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-deep-text mb-3">{story.title}</h3>
              <p className="text-sm text-deep-text/70 leading-relaxed">{story.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
