// Single source of truth for products used across routes.
// Keep visuals/theme in components; this file is pure data.

import imgwhite from "../assets/products/imgwhite.png";
import imgred from "../assets/products/imgred.png";
import imgyellow from "../assets/products/imgyellow.png";
import imgAmmoniumChloride from "../assets/products/imgAmmoniumChloride.png";
import imgCopperSulfate from "../assets/products/imgCopperSulfate.png";

import datasheetPdf from "../assets/datasheet/datasheet.pdf";

export const products = [
  {
    slug: "caustic-soda-flakes",
    title: "Caustic Soda Flakes",
    purity: "98.62% NaOH",
    description:
      "High-purity sodium hydroxide flakes produced to INSO 364 standard for industrial use.",
    highlights: ["Industrial grade", "High purity", "Low impurities", "INSO 364 compliant"],
    specs: [
      { k: "NaOH Purity", v: "98.62 %" },
      { k: "Carbonate (Na₂CO₃)", v: "0.8 % (Max < 1)" },
      { k: "Chloride (NaCl)", v: "0.02 % (Max < 0.06)" },
      { k: "Sulphate (Na₂SO₄)", v: "0.009 % (Max < 0.01)" },
      { k: "Insolubles", v: "0.068 % (Max < 0.1)" },
      { k: "Silicate (SiO₂)", v: "< 0.01 % (Max < 0.02)" },
      { k: "Aluminum (Al₂O₃)", v: "< 10 ppm (Max < 20)" },
      { k: "Iron (Fe)", v: "< 2 ppm (Max < 30)" },
      { k: "Heavy Metals (Pb)", v: "< 2 ppm (Max < 20)" },
      { k: "Arsenic (As₂O₃)", v: "< 2 ppm (Max ≤ 2)" },
      { k: "Mercury (Hg)", v: "< 0.1 ppm (Max < 0.2)" },
      { k: "Standard", v: "INSO 364" },
    ],
    images: [imgwhite],
    pdfs: [{ label: "Safety / Datasheet (PDF)", href: datasheetPdf }],
    analysis: [
      "Produced under controlled QC sampling.",
      "Batch COA available upon request.",
    ],
  },
  {
    slug: "sodium-sulfide-red-flakes",
    title: "Sodium Sulfide (Red Flakes)",
    purity: "58.36% Na₂S",
    description:
      "Industrial-grade sodium sulfide flakes manufactured according to INSO 2074 standard.",
    highlights: ["Industrial grade", "Controlled composition", "Flake form", "INSO 2074 compliant"],
    specs: [
      { k: "Sodium Sulfide (Na₂S)", v: "58.36 %" },
      { k: "Sodium Hydrosulfide (NaHS)", v: "3.48 %" },
      { k: "Total Sulfur (Na₂S + NaHS)", v: "61.84 % (Min 60)" },
      { k: "Iron (Fe)", v: "100 ppm (Max 100)" },
      { k: "pH", v: "12" },
      { k: "Color", v: "Red" },
      { k: "Form", v: "Flake" },
      { k: "Standard", v: "INSO 2074" },
    ],
    images: [imgred],
    pdfs: [{ label: "Safety / Datasheet (PDF)", href: datasheetPdf }],
    analysis: ["Typical applications: leather processing, textile, ore flotation, water treatment."],
  },
  {
    slug: "sodium-sulfide-yellow-flakes",
    title: "Sodium Sulfide (Yellow Flakes)",
    purity: "58.27% Na₂S",
    description:
      "Industrial-grade sodium sulfide flakes manufactured according to INSO 2074 standard with consistent quality.",
    highlights: ["Industrial grade", "Controlled composition", "Consistent quality", "INSO 2074 compliant"],
    specs: [
      { k: "Na₂S Content", v: "58.27 %" },
      { k: "NaHS Content", v: "3.68 %" },
      { k: "Iron (Fe)", v: "< 10 ppm (Max 50)" },
      { k: "Total Sulfur (Na₂S + NaHS)", v: "61.95 % (Min 60)" },
      { k: "pH", v: "12" },
      { k: "Color", v: "Yellow" },
      { k: "Form", v: "Flake" },
      { k: "Standard", v: "INSO 2074" },
    ],
    images: [imgyellow],
    pdfs: [{ label: "Safety / Datasheet (PDF)", href: datasheetPdf }],
    analysis: ["Storage: keep sealed, dry, and away from oxidizers."],
  },
  {
    slug: "ammonium-chloride-industrial",
    title: "Ammonium Chloride",
    purity: "99.61% NH₄Cl",
    description:
      "Industrial-grade ammonium chloride powder produced under classic analytical methods procedures.",
    highlights: ["Industrial grade", "High purity", "White powder", "Quality controlled"],
    specs: [
      { k: "Purity", v: "99.61 % (Min 99.5)" },
      { k: "pH", v: "5.2 (Range 4–6)" },
      { k: "Color", v: "White" },
      { k: "Form", v: "Powder" },
      { k: "Test Method", v: "Classic Method" },
    ],
    images: [imgAmmoniumChloride],
    pdfs: [{ label: "Safety / Datasheet (PDF)", href: datasheetPdf }],
    analysis: ["Typical uses: fertilizer, metal processing, battery manufacturing, chemical production."],
  },
  {
    slug: "ammonium-chloride-inhouse",
    title: "Ammonium Chloride (In-house Tested)",
    purity: "99.61% NH₄Cl",
    description:
      "Industrial-grade ammonium chloride powder produced under in-house analytical methods.",
    highlights: ["Industrial grade", "High purity", "White powder", "In-house tested"],
    specs: [
      { k: "Ammonium (NH₄)", v: "33.31 % (Max 33.6)" },
      { k: "Chloride (Cl)", v: "66.3 % (Max 66.3)" },
      { k: "Purity as NH₄Cl", v: "99.61 % (Min 99.5)" },
      { k: "Color", v: "White" },
      { k: "Form", v: "Powder" },
      { k: "Test Method", v: "In-house method" },
    ],
    images: [imgAmmoniumChloride],
    pdfs: [{ label: "Safety / Datasheet (PDF)", href: datasheetPdf }],
    analysis: ["COA fields can be tailored based on customer requirements."],
  },
  {
    slug: "copper-sulfate",
    title: "Copper Sulfate",
    purity: "24.3% Cu",
    description:
      "Industrial-grade copper sulfate powder analyzed using classic analytical methods with consistent quality.",
    highlights: ["Industrial grade", "Controlled copper purity", "Low iron content", "Blue powder"],
    specs: [
      { k: "Purity as Cu", v: "24.3 % (Range 24–25)" },
      { k: "Iron (Fe)", v: "<10 ppm (Max 50)" },
      { k: "Color", v: "Blue" },
      { k: "Form", v: "Powder" },
      { k: "Test Method", v: "Classic Method" },
    ],
    images: [imgCopperSulfate],
    pdfs: [{ label: "Safety / Datasheet (PDF)", href: datasheetPdf }],
    analysis: ["Packaging options: bagged and bulk depending on grade and logistics."],
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

