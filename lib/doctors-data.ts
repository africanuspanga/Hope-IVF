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
  image?: string;
}

export const DOCTORS: Doctor[] = [
  {
    slug: "dr-refik-sozen",
    name: "Dr. Refik Sözen",
    title: "IVF Specialist & Gynecologist",
    specialty: "Reproductive Medicine & Gynecology",
    languages: ["Turkish"],
    focusAreas: [
      "IVF",
      "Laparoscopy",
      "Cosmetic Gynecology",
      "Intrauterine Procedures",
      "Detailed Fetal Assessment",
    ],
    experience: "35 years in the IVF sector",
    schedule: "Monday – Saturday, by appointment",
    image: "/images/dr-refik-sozen.jpeg",
    bio:
      "Dr. Refik Sözen brings 35 years of experience in the IVF sector. His areas of focus include IVF, laparoscopy, cosmetic gynecology, intrauterine procedures, and detailed fetal assessment.",
  },
  {
    slug: "mian-abu-bakar",
    name: "Mian Abu Bakar",
    title: "Embryologist",
    specialty: "IVF Laboratory & Embryology",
    languages: ["English", "Urdu", "Punjabi"],
    focusAreas: ["IVF Laboratory Embryology"],
    experience: "3 years of experience in an IVF laboratory",
    schedule: "Monday – Saturday, by appointment",
    image: "/images/mian-abu-bakar.jpeg",
    bio:
      "Mian Abu Bakar is an embryologist with 3 years of experience in the IVF laboratory, focusing on the embryology processes that support successful fertility treatment.",
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return DOCTORS.find((d) => d.slug === slug);
}
