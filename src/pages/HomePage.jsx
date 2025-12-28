import { useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import About from "../components/About";
import LightboxModal from "../components/ui/LightboxModal";
import SectionHeader from "../components/ui/SectionHeader";
import ProductsGrid from "../components/products/ProductsGrid";
import GalleryGrid from "../components/gallery/GalleryGrid";
import ArticleCard from "../components/articles/ArticleCard";

import { products } from "../data/products";
import { articles } from "../data/articles";
import { galleryItems } from "../data/gallery";

import { useMemo, useState } from "react";
import { usePageTitle } from "../hooks/usePageTitle";

export default function HomePage() {
  usePageTitle("Home");

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const previewProducts = useMemo(() => products.slice(0, 3), []);
  const latestArticles = useMemo(() => {
    return [...articles]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  }, []);
  const previewGallery = useMemo(() => galleryItems.slice(0, 6), []);

  const [lbOpen, setLbOpen] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);

  return (
    <>
      <Hero opacity={opacity} />

      {/* Products preview */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <SectionHeader title="Products" subtitle="Industrial chemicals with verified specifications" />
          </div>

          <ProductsGrid items={previewProducts} />

          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-ice-500 to-frost-500 font-semibold shadow-lg hover:shadow-ice-500/40 transition-all"
            >
              View all products <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About preview */}
      <About variant="preview" />

      {/* Articles preview */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <SectionHeader title="Articles" subtitle="Short technical reads related to products and procurement" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article, index) => (
              <ArticleCard key={article.slug} article={article} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-gray-200"
            >
              View all articles <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <SectionHeader title="Gallery" subtitle="A quick look at products, packaging, and operations" />
          </div>

          <GalleryGrid
            items={previewGallery}
            onOpen={(idx) => {
              setLbIndex(idx);
              setLbOpen(true);
            }}
          />

          <div className="mt-12 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-gray-200"
            >
              View full gallery <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <LightboxModal
        open={lbOpen}
        items={previewGallery}
        activeIndex={lbIndex}
        onClose={() => setLbOpen(false)}
      />
    </>
  );
}

