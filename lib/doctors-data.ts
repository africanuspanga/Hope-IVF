export interface Doctor {
  slug: string;
  name: string;
  title: string;
  specialty: string;
  languages: string[];
  focusAreas: string[];
  education?: string[];
  registration?: string[];
  experience?: string;
  schedule?: string;
  bio?: string;
}

export const DOCTORS: Doctor[] = [
  {
    slug: "dr-placeholder-one",
    name: "Dr. Placeholder Name",
    title: "Fertility Specialist / Gynecologist",
    specialty: "Reproductive Medicine & Women’s Health",
    languages: ["English", "Swahili"],
    focusAreas: ["IVF & IUI", "PCOS", "Endometriosis", "Fertility Preservation"],
    education: [
      "Medical Degree – University Name (Placeholder)",
      "Specialist Training – Institution Name (Placeholder)",
    ],
    registration: ["Medical Council Registration Number (Placeholder)"],
    experience: "Years of experience to be confirmed",
    schedule: "Monday – Friday, by appointment",
    bio:
      "This doctor profile is a placeholder. Please replace with verified qualifications, professional registration details, languages spoken, areas of focus, and clinic schedule.",
  },
  {
    slug: "dr-placeholder-two",
    name: "Dr. Placeholder Name Two",
    title: "Fertility Specialist / Embryologist",
    specialty: "Laboratory & Embryology Support",
    languages: ["English"],
    focusAreas: ["Embryology", "IVF Laboratory", "Semen Analysis", "Egg Freezing"],
    education: [
      "Medical Degree – University Name (Placeholder)",
      "Embryology Training – Institution Name (Placeholder)",
    ],
    registration: ["Medical Council Registration Number (Placeholder)"],
    experience: "Years of experience to be confirmed",
    schedule: "Monday – Friday, by appointment",
    bio:
      "This doctor profile is a placeholder. Please replace with verified qualifications, professional registration details, languages spoken, areas of focus, and clinic schedule.",
  },
  {
    slug: "dr-placeholder-three",
    name: "Dr. Placeholder Name Three",
    title: "Women’s Health Specialist / Gynecologist",
    specialty: "Gynecology & Reproductive Surgery",
    languages: ["English", "Swahili"],
    focusAreas: ["Fibroids", "Endometriosis", "Hysteroscopy", "Laparoscopy"],
    education: [
      "Medical Degree – University Name (Placeholder)",
      "Gynecology Specialist Training – Institution Name (Placeholder)",
    ],
    registration: ["Medical Council Registration Number (Placeholder)"],
    experience: "Years of experience to be confirmed",
    schedule: "Monday – Friday, by appointment",
    bio:
      "This doctor profile is a placeholder. Please replace with verified qualifications, professional registration details, languages spoken, areas of focus, and clinic schedule.",
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return DOCTORS.find((d) => d.slug === slug);
}
