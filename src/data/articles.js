// Single source of truth for articles used across routes.

export const articles = [
  {
    slug: "how-to-read-a-chemical-coa",
    title: "How to Read a Chemical COA (Certificate of Analysis)",
    summary:
      "A practical guide to the most common COA fields, what they mean, and how to compare batches against a specification.",
    date: "2025-05-12",
    readTime: "6 min",
    content: [
      { type: "heading", text: "What a COA is (and what it is not)" },
      {
        type: "paragraph",
        text: "A Certificate of Analysis (COA) summarizes measured properties for a specific production batch. It is not a substitute for safe handling instructions (SDS) and does not replace incoming inspection when required.",
      },
      { type: "heading", text: "Typical fields you will see" },
      {
        type: "list",
        items: [
          "Product and batch/lot number",
          "Test methods and acceptance criteria",
          "Measured values (purity, impurities, moisture, etc.)",
          "Date of analysis and sign-off",
        ],
      },
      { type: "heading", text: "How to compare against your spec" },
      {
        type: "paragraph",
        text: "Compare each measured value to the acceptance range and note any ‘max’ or ‘min’ limits. For critical parameters, define incoming checks that match your process risk.",
      },
    ],
    relatedProductSlugs: ["caustic-soda-flakes", "ammonium-chloride-industrial"],
  },
  {
    slug: "caustic-soda-handling-basics",
    title: "Caustic Soda Handling Basics for Industrial Sites",
    summary:
      "Key storage and handling considerations for sodium hydroxide flakes, including moisture control and compatibility notes.",
    date: "2025-04-02",
    readTime: "5 min",
    content: [
      { type: "heading", text: "Moisture control matters" },
      {
        type: "paragraph",
        text: "Sodium hydroxide is hygroscopic. Keep packaging sealed and store in a dry area to prevent caking and concentration changes during dissolution.",
      },
      { type: "heading", text: "Compatibility notes" },
      {
        type: "list",
        items: [
          "Avoid contact with acids and reactive metals",
          "Use compatible plastics or coated equipment where appropriate",
          "Always follow your SDS and site procedures",
        ],
      },
    ],
    relatedProductSlugs: ["caustic-soda-flakes"],
  },
  {
    slug: "sodium-sulfide-application-overview",
    title: "Sodium Sulfide: Application Overview and Key Specs",
    summary:
      "Where sodium sulfide is commonly used, which spec points are most relevant, and how to select flake grades.",
    date: "2025-03-10",
    readTime: "7 min",
    content: [
      { type: "heading", text: "Common industrial uses" },
      {
        type: "paragraph",
        text: "Sodium sulfide is used in leather processing, textiles, and certain mining/ore flotation workflows, among other industrial processes.",
      },
      { type: "heading", text: "Spec points to watch" },
      {
        type: "list",
        items: [
          "Na₂S content and total sulfur",
          "Iron content (Fe) for sensitive processes",
          "Physical form and packaging requirements",
        ],
      },
    ],
    relatedProductSlugs: ["sodium-sulfide-red-flakes", "sodium-sulfide-yellow-flakes"],
  },
  {
    slug: "ammonium-chloride-quality-parameters",
    title: "Ammonium Chloride: Quality Parameters That Impact Performance",
    summary:
      "A short breakdown of purity, pH, and appearance metrics, and how they map to industrial use cases.",
    date: "2025-02-18",
    readTime: "4 min",
    content: [
      { type: "heading", text: "Purity and trace limits" },
      {
        type: "paragraph",
        text: "Purity is often specified as %NH₄Cl. Depending on the application, additional trace limits may be important and should be agreed in advance.",
      },
      { type: "heading", text: "pH and process fit" },
      {
        type: "paragraph",
        text: "pH (in solution) can be used as a quick indicator for consistency across batches, especially when aligned with your internal reference ranges.",
      },
    ],
    relatedProductSlugs: ["ammonium-chloride-industrial", "ammonium-chloride-inhouse"],
  },
  {
    slug: "choosing-copper-sulfate-grade",
    title: "Choosing a Copper Sulfate Grade: What to Verify",
    summary:
      "A checklist of what to confirm (copper content, iron, form) before placing an order for copper sulfate in industrial workflows.",
    date: "2025-01-22",
    readTime: "5 min",
    content: [
      { type: "heading", text: "Start from the application" },
      {
        type: "paragraph",
        text: "Different industrial applications may tolerate different impurity levels. Confirm which parameters are critical, then align on target ranges and methods.",
      },
      { type: "heading", text: "Quick checklist" },
      { type: "list", items: ["Copper content range", "Iron (Fe) limit", "Form/particle handling", "Packaging and labeling"] },
    ],
    relatedProductSlugs: ["copper-sulfate"],
  },
  {
    slug: "industrial-packaging-and-traceability",
    title: "Industrial Packaging and Traceability: What Good Looks Like",
    summary:
      "How labeling, lot tracking, and packaging choices support reliable receiving, storage, and auditing.",
    date: "2024-12-05",
    readTime: "6 min",
    content: [
      { type: "heading", text: "Labeling essentials" },
      {
        type: "list",
        items: [
          "Product name and grade",
          "Net weight and packaging type",
          "Lot/batch identifier",
          "Production/packing date where applicable",
        ],
      },
      { type: "heading", text: "Why traceability reduces risk" },
      {
        type: "paragraph",
        text: "Clear lot tracking makes recalls, audits, and process investigations faster and more reliable—especially when combined with COA/SDS availability and consistent packaging.",
      },
    ],
    relatedProductSlugs: ["sodium-sulfide-red-flakes", "caustic-soda-flakes"],
  },
];

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug);
}

