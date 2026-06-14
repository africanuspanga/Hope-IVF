export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  icon: string;
  whatIs?: string;
  whoMayNeedIt?: string[];
  commonReasons?: string[];
  consultation?: string[];
  tests?: string[];
  treatmentOptions?: string[];
  risks?: string[];
  faqs?: { question: string; answer: string }[];
}

export const SERVICES: Service[] = [
  {
    slug: "fertility-consultation",
    title: "Fertility Consultation & Assessment",
    shortDescription:
      "Private consultation, medical history review, fertility testing guidance, and personalized next-step planning.",
    fullDescription:
      "A fertility consultation is the first step in understanding your reproductive health. During your visit, the doctor will review your medical history, discuss your goals, and recommend appropriate evaluations to help clarify your options.",
    category: "Fertility & IVF Services",
    icon: "Stethoscope",
    whatIs:
      "A confidential appointment with a fertility or women’s health specialist to discuss your history, concerns, and goals.",
    whoMayNeedIt: [
      "Couples trying to conceive for 12+ months",
      "Women aged 35+ trying for 6+ months",
      "Individuals with irregular periods or hormonal concerns",
      "Patients with a history of miscarriage",
      "Couples seeking clarity before starting treatment",
    ],
    commonReasons: [
      "Difficulty conceiving",
      "Irregular or absent periods",
      "Known reproductive conditions",
      "Recurrent pregnancy loss",
      "Planning for future fertility",
    ],
    consultation: [
      "Review of personal and family medical history",
      "Discussion of menstrual cycle and reproductive history",
      "Physical assessment if needed",
      "Initial testing plan tailored to your situation",
    ],
    tests: [
      "Hormone blood tests (e.g., AMH, FSH, LH, prolactin)",
      "Pelvic ultrasound",
      "Semen analysis for male partner",
      "Hysterosalpingogram (HSG) if indicated",
    ],
    treatmentOptions: [
      "Lifestyle and ovulation guidance",
      "Medication to support ovulation",
      "IUI or IVF referral if appropriate",
      "Referral for surgical evaluation when needed",
    ],
    risks: [
      "Not all tests are needed for every patient",
      "Results may indicate further evaluation is required",
      "Treatment recommendations depend on individual factors",
    ],
    faqs: [
      {
        question: "How long does a first consultation take?",
        answer: "Initial consultations typically last 30–60 minutes, allowing time for history, questions, and planning.",
      },
      {
        question: "Should my partner attend?",
        answer: "Yes, when possible. Fertility care involves both partners, and shared understanding helps with decision-making.",
      },
    ],
  },
  {
    slug: "ivf-treatment-tanzania",
    title: "IVF Treatment Guidance",
    shortDescription:
      "Doctor-led guidance for patients considering in-vitro fertilization and assisted reproductive treatment.",
    fullDescription:
      "In-vitro fertilization (IVF) is an assisted reproductive technology in which eggs and sperm are combined in a laboratory setting. We provide guidance, coordination, and medical oversight for patients considering IVF in Tanzania.",
    category: "Fertility & IVF Services",
    icon: "Microscope",
    whatIs:
      "IVF is a process where eggs are retrieved, fertilized with sperm in the lab, and resulting embryos are transferred to the uterus.",
    whoMayNeedIt: [
      "Blocked or damaged fallopian tubes",
      "Severe male factor infertility",
      "Unexplained infertility after evaluation",
      "Patients needing genetic testing of embryos",
      "Those for whom other treatments have not succeeded",
    ],
    commonReasons: [
      "Tubal factor infertility",
      "Low sperm count or motility",
      "Ovulatory disorders not responding to medication",
      "Endometriosis-related infertility",
      "Need for fertility preservation before cancer treatment",
    ],
    consultation: [
      "Detailed medical review for both partners",
      "Ovarian reserve testing and sperm analysis",
      "Discussion of IVF steps, timelines, and expectations",
      "Preparation of a personalized treatment plan",
    ],
    tests: [
      "Baseline hormone tests",
      "Transvaginal ultrasound",
      "Semen analysis",
      "Infectious disease screening",
      "Uterine cavity assessment",
    ],
    treatmentOptions: [
      "Standard IVF",
      "ICSI (micro-injection) if indicated",
      "Embryo freezing for future use",
      "Preimplantation genetic testing where appropriate",
    ],
    risks: [
      "No guarantee of pregnancy",
      "Ovarian hyperstimulation syndrome (OHSS) is possible",
      "Multiple pregnancy risk if more than one embryo is transferred",
      "Emotional and financial considerations",
    ],
    faqs: [
      {
        question: "How long does one IVF cycle take?",
        answer: "A typical cycle takes 4–6 weeks, including ovarian stimulation, egg retrieval, fertilization, and embryo transfer.",
      },
      {
        question: "Is IVF painful?",
        answer: "Most patients experience mild discomfort from injections and brief cramping during egg retrieval. Pain management is available.",
      },
    ],
  },
  {
    slug: "iui-treatment-tanzania",
    title: "IUI / Intrauterine Insemination",
    shortDescription: "A fertility treatment option for selected patients after clinical assessment.",
    fullDescription:
      "Intrauterine insemination (IUI) places prepared sperm directly into the uterus around the time of ovulation. It is a less invasive option than IVF and may be suitable for selected patients.",
    category: "Fertility & IVF Services",
    icon: "HeartPulse",
    whatIs:
      "IUI involves placing washed and concentrated sperm into the uterus using a thin catheter, timed with ovulation.",
    whoMayNeedIt: [
      "Mild male factor infertility",
      "Unexplained infertility",
      "Cervical factor concerns",
      "Patients using donor sperm",
      "Couples needing ovulation induction plus insemination",
    ],
    commonReasons: [
      "Low sperm motility or count",
      "Difficulty with timed intercourse",
      "Cervical mucus concerns",
      "Use of donor sperm",
    ],
    consultation: [
      "Review of fertility history",
      "Semen analysis",
      "Ovulation tracking plan",
      "Discussion of success rates and limitations",
    ],
    tests: [
      "Semen analysis",
      "Hormone tests",
      "Pelvic ultrasound",
      "Tubal patency assessment if indicated",
    ],
    treatmentOptions: [
      "Natural cycle IUI",
      "IUI with ovulation-stimulating medication",
      "Donor sperm IUI",
    ],
    risks: [
      "Multiple pregnancy if ovulation medication is used",
      "Infection risk is very low",
      "Success rates vary by age and diagnosis",
    ],
    faqs: [
      {
        question: "Is IUI the same as IVF?",
        answer: "No. IUI is less invasive and involves placing sperm in the uterus, while IVF involves fertilization outside the body.",
      },
      {
        question: "How many IUI cycles are usually tried?",
        answer: "This depends on individual circumstances, but 3–6 cycles are commonly discussed before considering other options.",
      },
    ],
  },
  {
    slug: "male-fertility-assessment",
    title: "Male Fertility Assessment",
    shortDescription: "Support for semen analysis, male-factor fertility concerns, and treatment planning.",
    fullDescription:
      "Male factor infertility contributes to a significant number of couples facing difficulty conceiving. Our assessment includes semen analysis, history review, and guidance on next steps.",
    category: "Male Fertility Services",
    icon: "Users",
    whatIs:
      "An evaluation of male reproductive health, focusing on sperm quality, quantity, and overall fertility factors.",
    whoMayNeedIt: [
      "Couples struggling to conceive",
      "Men with hormonal concerns",
      "History of testicular surgery or infection",
      "Men with erectile or ejaculatory concerns",
      "Those considering fertility preservation",
    ],
    commonReasons: [
      "Low sperm count",
      "Poor sperm motility or morphology",
      "Erectile dysfunction",
      "Varicocele",
      "Previous infections affecting fertility",
    ],
    consultation: [
      "Detailed medical and reproductive history",
      "Physical examination if needed",
      "Semen analysis",
      "Discussion of lifestyle and treatment options",
    ],
    tests: [
      "Semen analysis",
      "Hormone tests (FSH, LH, testosterone, prolactin)",
      "Scrotal ultrasound if indicated",
      "Infectious screening",
    ],
    treatmentOptions: [
      "Lifestyle and nutritional guidance",
      "Hormonal treatment if appropriate",
      "Surgical referral for varicocele",
      "IUI or IVF/ICSI depending on severity",
    ],
    risks: [
      "Some causes of male infertility are not reversible",
      "Treatment success depends on underlying cause",
      "Further specialist referral may be needed",
    ],
    faqs: [
      {
        question: "How is semen analysis done?",
        answer: "A semen sample is collected and examined in the laboratory for count, motility, and morphology.",
      },
      {
        question: "Can male infertility be treated?",
        answer: "Many causes can be addressed with lifestyle changes, medication, or assisted reproductive techniques.",
      },
    ],
  },
  {
    slug: "pcos-care",
    title: "PCOS Care",
    shortDescription: "Assessment and management of polycystic ovary syndrome and its impact on fertility.",
    fullDescription:
      "Polycystic ovary syndrome (PCOS) is a common hormonal condition that can affect ovulation and fertility. We offer assessment, lifestyle guidance, and treatment planning for women with PCOS.",
    category: "Women’s Health & Gynecology",
    icon: "HeartPulse",
    whatIs:
      "PCOS is a hormonal disorder that can cause irregular periods, excess androgen levels, and polycystic ovaries.",
    whoMayNeedIt: [
      "Women with irregular or absent periods",
      "Patients with signs of excess androgen",
      "Those struggling to conceive due to irregular ovulation",
      "Women with insulin resistance or weight concerns",
    ],
    commonReasons: [
      "Irregular periods",
      "Acne or excess hair growth",
      "Difficulty losing weight",
      "Infertility due to anovulation",
    ],
    consultation: [
      "Hormonal and metabolic assessment",
      "Ultrasound evaluation of ovaries",
      "Discussion of symptoms and goals",
      "Personalized management plan",
    ],
    tests: [
      "Hormone panel (testosterone, LH, FSH, prolactin)",
      "Fasting glucose and insulin",
      "Lipid profile",
      "Pelvic ultrasound",
    ],
    treatmentOptions: [
      "Lifestyle and diet modification",
      "Ovulation-inducing medication",
      "Metformin when appropriate",
      "IUI or IVF if needed",
    ],
    risks: [
      "Long-term metabolic and cardiovascular risks",
      "Difficulty conceiving without ovulation support",
      "Treatment response varies individually",
    ],
    faqs: [
      {
        question: "Can PCOS be cured?",
        answer: "PCOS cannot be cured, but symptoms and fertility can often be managed effectively with treatment and lifestyle changes.",
      },
      {
        question: "Can I get pregnant with PCOS?",
        answer: "Many women with PCOS conceive with ovulation support, lifestyle changes, or assisted reproductive treatments.",
      },
    ],
  },
  {
    slug: "fibroids-care",
    title: "Fibroids Care",
    shortDescription: "Evaluation and management of uterine fibroids that may affect fertility.",
    fullDescription:
      "Uterine fibroids are non-cancerous growths that can affect menstruation, fertility, and pregnancy. We provide evaluation and discuss medical or surgical management options when appropriate.",
    category: "Women’s Health & Gynecology",
    icon: "ShieldCheck",
    whatIs:
      "Fibroids are benign tumors of the uterus that vary in size, number, and location.",
    whoMayNeedIt: [
      "Women with heavy or painful periods",
      "Patients with pelvic pressure or bloating",
      "Those experiencing difficulty conceiving",
      "Women with recurrent pregnancy loss",
    ],
    commonReasons: [
      "Heavy menstrual bleeding",
      "Pelvic pain or pressure",
      "Frequent urination",
      "Infertility or pregnancy complications",
    ],
    consultation: [
      "Review of symptoms and history",
      "Pelvic ultrasound or MRI if needed",
      "Discussion of fertility goals",
      "Treatment planning",
    ],
    tests: [
      "Pelvic ultrasound",
      "MRI for detailed mapping",
      "Complete blood count if heavy bleeding",
      "Hormone tests if indicated",
    ],
    treatmentOptions: [
      "Watchful waiting if fibroids are small and asymptomatic",
      "Medication to manage bleeding or shrink fibroids",
      "Myomectomy (surgical removal) when indicated",
      "Minimally invasive procedures in selected cases",
    ],
    risks: [
      "Not all fibroids affect fertility",
      "Surgery carries standard operative risks",
      "Recurrence of fibroids is possible",
    ],
    faqs: [
      {
        question: "Do all fibroids need surgery?",
        answer: "No. Many fibroids are managed conservatively, especially if they are not causing symptoms or affecting fertility.",
      },
      {
        question: "Can fibroids prevent pregnancy?",
        answer: "Some fibroids, particularly those inside or distorting the uterine cavity, can affect implantation and pregnancy.",
      },
    ],
  },
  {
    slug: "endometriosis-care",
    title: "Endometriosis Care",
    shortDescription: "Specialist assessment and management of endometriosis and fertility concerns.",
    fullDescription:
      "Endometriosis can cause pain and affect fertility. We provide assessment, treatment planning, and coordination of medical or surgical care as needed.",
    category: "Women’s Health & Gynecology",
    icon: "HeartPulse",
    whatIs:
      "Endometriosis occurs when tissue similar to the uterine lining grows outside the uterus, often causing pain and infertility.",
    whoMayNeedIt: [
      "Women with pelvic pain, especially during periods",
      "Patients with painful intercourse",
      "Those with infertility despite normal tests",
      "Women with suspected or diagnosed endometriosis",
    ],
    commonReasons: [
      "Severe menstrual cramps",
      "Chronic pelvic pain",
      "Pain during intercourse",
      "Difficulty conceiving",
    ],
    consultation: [
      "Detailed pain and fertility history",
      "Pelvic examination",
      "Imaging if indicated",
      "Discussion of medical and surgical options",
    ],
    tests: [
      "Pelvic ultrasound",
      "MRI for deep infiltrating disease",
      "Laparoscopy for definitive diagnosis when appropriate",
      "Hormone tests",
    ],
    treatmentOptions: [
      "Pain management",
      "Hormonal therapy",
      "Laparoscopic surgery",
      "Fertility treatment (IUI/IVF) when needed",
    ],
    risks: [
      "Endometriosis can recur after treatment",
      "Surgery carries standard risks",
      "Fertility outcomes depend on disease severity",
    ],
    faqs: [
      {
        question: "Does endometriosis always cause infertility?",
        answer: "No. Many women with endometriosis conceive naturally, but the condition can reduce fertility in some cases.",
      },
      {
        question: "How is endometriosis diagnosed?",
        answer: "Imaging can suggest endometriosis, but laparoscopy is the most definitive diagnostic method.",
      },
    ],
  },
  {
    slug: "egg-freezing",
    title: "Egg Freezing",
    shortDescription: "Fertility preservation option for patients planning treatment or future family building.",
    fullDescription:
      "Egg freezing allows women to preserve eggs at their current age for future use. It may be chosen for medical reasons, before cancer treatment, or for personal family planning.",
    category: "Fertility Preservation",
    icon: "Clock",
    whatIs:
      "Egg freezing involves stimulating the ovaries, retrieving eggs, and freezing them for later use.",
    whoMayNeedIt: [
      "Women planning future pregnancy",
      "Patients before cancer treatment",
      "Those with conditions reducing ovarian reserve",
      "Women not ready to conceive now",
    ],
    commonReasons: [
      "Age-related fertility decline",
      "Medical treatments affecting fertility",
      "Personal or career timing",
      "Family history of early menopause",
    ],
    consultation: [
      "Ovarian reserve assessment",
      "Discussion of success rates and limitations",
      "Personalized stimulation plan",
      "Long-term storage planning",
    ],
    tests: [
      "AMH blood test",
      "Antral follicle count via ultrasound",
      "Baseline hormone tests",
      "Infectious screening",
    ],
    treatmentOptions: [
      "Ovarian stimulation protocol",
      "Egg retrieval under sedation",
      "Vitrification freezing technique",
      "Future IVF using frozen eggs",
    ],
    risks: [
      "No guarantee of future pregnancy",
      "Ovarian hyperstimulation risk",
      "Egg quality and quantity decline with age",
      "Long-term storage costs",
    ],
    faqs: [
      {
        question: "What is the ideal age for egg freezing?",
        answer: "Egg freezing is most effective before age 35, though it can be considered at older ages with appropriate counseling.",
      },
      {
        question: "How long can eggs be frozen?",
        answer: "Eggs can be frozen for many years with modern vitrification techniques, though storage policies vary by facility.",
      },
    ],
  },
  {
    slug: "sperm-freezing",
    title: "Sperm Freezing",
    shortDescription: "Fertility preservation option for men planning treatment or future family building.",
    fullDescription:
      "Sperm freezing preserves sperm for future fertility treatment. It is often used before medical treatments that may affect fertility or for personal planning.",
    category: "Fertility Preservation",
    icon: "Clock",
    whatIs:
      "Sperm freezing involves collecting, analyzing, and cryopreserving sperm samples for future use.",
    whoMayNeedIt: [
      "Men before cancer treatment",
      "Those undergoing surgery affecting fertility",
      "Men with declining sperm quality",
      "Patients using donor sperm backup",
    ],
    commonReasons: [
      "Upcoming chemotherapy or radiation",
      "Vasectomy before family completion",
      "Occupational risks",
      "Personal fertility preservation",
    ],
    consultation: [
      "Medical history review",
      "Semen analysis",
      "Infectious screening",
      "Storage agreement discussion",
    ],
    tests: [
      "Semen analysis",
      "Infectious disease screening",
      "Hormone tests if indicated",
    ],
    treatmentOptions: [
      "Collection and preparation",
      "Cryopreservation",
      "Future use in IUI or IVF",
    ],
    risks: [
      "Not all sperm survive freezing and thawing",
      "Success depends on sperm quality",
      "Long-term storage costs",
    ],
    faqs: [
      {
        question: "How is sperm collected?",
        answer: "Sperm is usually collected through masturbation at the clinic or at home and brought in within a short timeframe.",
      },
      {
        question: "How long can sperm be frozen?",
        answer: "Sperm can be frozen for many years and used later in fertility treatment.",
      },
    ],
  },
  {
    slug: "hysteroscopy",
    title: "Hysteroscopy",
    shortDescription: "Minimally invasive examination of the uterine cavity when clinically appropriate.",
    fullDescription:
      "Hysteroscopy uses a thin telescope to examine the inside of the uterus. It helps diagnose and sometimes treat conditions affecting the uterine cavity.",
    category: "Reproductive Surgery",
    icon: "Microscope",
    whatIs:
      "A procedure to look inside the uterus using a hysteroscope passed through the cervix.",
    whoMayNeedIt: [
      "Women with abnormal uterine bleeding",
      "Patients with suspected polyps or fibroids",
      "Those with recurrent miscarriage",
      "Women before fertility treatment",
    ],
    commonReasons: [
      "Heavy or irregular bleeding",
      "Suspected uterine polyp or fibroid",
      "Recurrent implantation failure",
      "Evaluation of uterine adhesions",
    ],
    consultation: [
      "Review of symptoms and imaging",
      "Discussion of diagnostic vs operative hysteroscopy",
      "Anesthesia and preparation planning",
    ],
    tests: [
      "Pelvic ultrasound",
      "Pregnancy test before procedure",
      "Blood tests if needed",
    ],
    treatmentOptions: [
      "Diagnostic hysteroscopy",
      "Polypectomy",
      "Removal of small fibroids",
      "Adhesiolysis",
    ],
    risks: [
      "Infection or bleeding",
      "Uterine perforation (rare)",
      "Anesthesia-related risks",
    ],
    faqs: [
      {
        question: "Is hysteroscopy painful?",
        answer: "It may cause cramping. Anesthesia or sedation is often used for operative procedures.",
      },
      {
        question: "How long is recovery?",
        answer: "Most patients recover within a day or two after diagnostic hysteroscopy.",
      },
    ],
  },
  {
    slug: "laparoscopy",
    title: "Laparoscopy",
    shortDescription: "Minimally invasive abdominal/pelvic surgery for diagnostic and treatment purposes.",
    fullDescription:
      "Laparoscopy is a keyhole surgery used to diagnose and treat conditions such as endometriosis, fibroids, tubal problems, and ovarian cysts.",
    category: "Reproductive Surgery",
    icon: "Microscope",
    whatIs:
      "A surgical procedure using a small camera and instruments inserted through tiny abdominal incisions.",
    whoMayNeedIt: [
      "Women with suspected endometriosis",
      "Patients with tubal disease",
      "Those with ovarian cysts",
      "Women with pelvic pain of unclear cause",
    ],
    commonReasons: [
      "Pelvic pain",
      "Suspected endometriosis",
      "Tubal blockage",
      "Ovarian cysts",
    ],
    consultation: [
      "Review of symptoms and imaging",
      "Discussion of surgical goals",
      "Preoperative assessment",
    ],
    tests: [
      "Pelvic ultrasound",
      "MRI if needed",
      "Blood tests",
      "Anesthesia assessment",
    ],
    treatmentOptions: [
      "Diagnostic laparoscopy",
      "Endometriosis treatment",
      "Ovarian cystectomy",
      "Tubal surgery",
    ],
    risks: [
      "Infection, bleeding, or blood clots",
      "Injury to nearby organs (rare)",
      "Anesthesia risks",
      "Recurrence of underlying condition",
    ],
    faqs: [
      {
        question: "How long does laparoscopy take?",
        answer: "It typically takes 30–90 minutes depending on the complexity of the procedure.",
      },
      {
        question: "When can I return to normal activity?",
        answer: "Most patients return to light activities within a week, with full recovery in 2–4 weeks.",
      },
    ],
  },
];

export const SERVICE_CATEGORIES = [
  {
    title: "Fertility & IVF Services",
    services: [
      "fertility-consultation",
      "ivf-treatment-tanzania",
      "iui-treatment-tanzania",
      "ovulation-induction",
      "embryo-transfer",
      "failed-ivf-consultation",
      "recurrent-miscarriage-evaluation",
      "icsi-microinjection",
    ],
  },
  {
    title: "Male Fertility Services",
    services: ["male-fertility-assessment", "semen-analysis", "sperm-preparation", "sperm-freezing", "surgical-sperm-retrieval-referral"],
  },
  {
    title: "Fertility Preservation",
    services: ["egg-freezing", "sperm-freezing", "embryo-freezing"],
  },
  {
    title: "Women’s Health & Gynecology",
    services: ["pcos-care", "fibroids-care", "endometriosis-care", "ovarian-cysts", "hormonal-disorders", "menstrual-problems"],
  },
  {
    title: "Reproductive Surgery",
    services: ["hysteroscopy", "laparoscopy", "fibroid-surgery", "polyp-removal", "endometriosis-surgery", "tube-related-conditions"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
