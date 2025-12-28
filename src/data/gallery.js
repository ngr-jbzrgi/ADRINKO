// Single source of truth for gallery images used across routes.

import product1 from "../assets/sliders/product-1.png";
import product2 from "../assets/sliders/product-2.png";
import product3 from "../assets/sliders/product-3.png";
import product4 from "../assets/sliders/product-4.png";
import labHands from "../assets/sliders/lab-hands.png";
import team1 from "../assets/sliders/team-1.png";
import team2 from "../assets/sliders/team-2.png";

import imgwhite from "../assets/products/imgwhite.png";
import imgred from "../assets/products/imgred.png";
import imgyellow from "../assets/products/imgyellow.png";
import imgAmmoniumChloride from "../assets/products/imgAmmoniumChloride.png";
import imgCopperSulfate from "../assets/products/imgCopperSulfate.png";

export const galleryItems = [
  { src: product1, alt: "Ammonium Chloride packaging", category: "product" },
  { src: product2, alt: "Caustic soda flakes", category: "product" },
  { src: product3, alt: "Jumbo bag packaging", category: "packaging" },
  { src: product4, alt: "FIBC bulk bags", category: "packaging" },
  { src: labHands, alt: "Lab handling and checks", category: "industrial" },
  { src: team1, alt: "Warehouse inspection", category: "warehouse" },
  { src: team2, alt: "Production team inspection", category: "industrial" },
  { src: imgwhite, alt: "Caustic soda flakes product shot", category: "product" },
  { src: imgred, alt: "Sodium sulfide flakes (red)", category: "product" },
  { src: imgyellow, alt: "Sodium sulfide flakes (yellow)", category: "product" },
  { src: imgAmmoniumChloride, alt: "Ammonium chloride product shot", category: "product" },
  { src: imgCopperSulfate, alt: "Copper sulfate product shot", category: "product" },
];

export const galleryCategories = ["all", "product", "industrial", "packaging", "warehouse"];

