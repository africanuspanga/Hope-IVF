export interface Resource {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  content?: string;
}

export const RESOURCES: Resource[] = [
  {
    slug: "what-is-ivf",
    category: "Fertility Treatment",
    title: "What is IVF and how does it work?",
    excerpt:
      "In-vitro fertilization is an assisted reproductive technology that helps many couples overcome infertility. Learn about the steps involved.",
    content:
      "IVF involves stimulating the ovaries, retrieving eggs, fertilizing them with sperm in a laboratory, and transferring embryos into the uterus. Each step is personalized based on medical assessment. Success depends on age, diagnosis, and individual response to treatment.",
  },
  {
    slug: "when-to-seek-fertility-help",
    category: "Fertility Basics",
    title: "When should couples seek fertility help?",
    excerpt:
      "Knowing when to see a fertility specialist can help couples get clarity and support earlier in their journey.",
    content:
      "Couples under 35 are generally advised to seek help after 12 months of trying. Women 35 and older may benefit from evaluation after 6 months. Earlier consultation is also recommended for irregular cycles, known conditions, or history of miscarriage.",
  },
  {
    slug: "ivf-vs-iui",
    category: "Treatment Comparison",
    title: "IVF vs IUI: what is the difference?",
    excerpt:
      "IUI and IVF are both fertility treatments, but they work differently and suit different medical situations.",
    content:
      "IUI places prepared sperm directly into the uterus around ovulation. IVF involves fertilizing eggs outside the body and transferring embryos. Your doctor will recommend the most appropriate option after assessment.",
  },
  {
    slug: "common-causes-infertility-women",
    category: "Women’s Health",
    title: "Common causes of infertility in women",
    excerpt:
      "Ovulation disorders, tubal issues, endometriosis, and age-related factors are common causes evaluated by specialists.",
    content:
      "Female infertility can result from problems with ovulation, blocked fallopian tubes, endometriosis, fibroids, or diminished ovarian reserve. A thorough evaluation helps identify the cause and guide treatment.",
  },
  {
    slug: "common-causes-male-infertility",
    category: "Men’s Health",
    title: "Common causes of male infertility",
    excerpt:
      "Sperm quality, hormonal imbalances, and structural issues can affect male fertility. Assessment often starts with semen analysis.",
    content:
      "Male infertility may be caused by low sperm count, poor motility, abnormal morphology, varicocele, hormonal issues, or previous infections. Treatment depends on the underlying cause.",
  },
  {
    slug: "what-is-amh-testing",
    category: "Diagnostics",
    title: "What is AMH testing?",
    excerpt:
      "Anti-Müllerian hormone (AMH) testing gives insight into ovarian reserve and helps with fertility planning.",
    content:
      "AMH is a hormone produced by ovarian follicles. A blood test can estimate ovarian reserve, which helps doctors discuss fertility potential and treatment options. It does not predict the exact chance of pregnancy.",
  },
  {
    slug: "pcos-and-fertility",
    category: "Women’s Health",
    title: "PCOS and fertility",
    excerpt:
      "PCOS can affect ovulation, but many women with PCOS conceive with appropriate support and treatment.",
    content:
      "Polycystic ovary syndrome is a hormonal condition that can cause irregular periods and anovulation. Management may include lifestyle changes, ovulation-inducing medication, and assisted reproduction if needed.",
  },
  {
    slug: "fibroids-and-fertility",
    category: "Women’s Health",
    title: "Fibroids and fertility",
    excerpt:
      "Fibroids can affect fertility depending on their size and location. Evaluation helps determine if treatment is needed.",
    content:
      "Uterine fibroids are benign growths. Those that distort the uterine cavity are more likely to affect implantation and pregnancy. Treatment is tailored based on symptoms and fertility goals.",
  },
  {
    slug: "endometriosis-and-infertility",
    category: "Women’s Health",
    title: "Endometriosis and infertility",
    excerpt:
      "Endometriosis can impact fertility through inflammation, scarring, and changes in the pelvic environment.",
    content:
      "Endometriosis may cause pain and reduce fertility. Treatment options include medication, laparoscopic surgery, and assisted reproductive technologies depending on severity and goals.",
  },
  {
    slug: "first-fertility-consultation",
    category: "Patient Guidance",
    title: "What to expect at your first fertility consultation",
    excerpt:
      "Your first visit is an opportunity to share your history, ask questions, and create a personalized plan.",
    content:
      "Bring previous medical reports, ultrasound results, hormone tests, and semen analysis if available. The doctor will review your history, discuss concerns, and recommend next steps.",
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return RESOURCES.find((r) => r.slug === slug);
}
