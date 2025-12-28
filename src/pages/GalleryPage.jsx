import { useMemo, useState } from "react";

import { galleryCategories, galleryItems } from "../data/gallery";
import { usePageTitle } from "../hooks/usePageTitle";
import PageIntro from "../components/ui/PageIntro";
import GalleryGrid from "../components/gallery/GalleryGrid";
import LightboxModal from "../components/ui/LightboxModal";

export default function GalleryPage() {
  usePageTitle("Gallery");

  const [category, setCategory] = useState("all");
  const filtered = useMemo(() => {
    if (category === "all") return galleryItems;
    return galleryItems.filter((it) => it.category === category);
  }, [category]);

  const [lbOpen, setLbOpen] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <PageIntro title="Gallery" subtitle="Responsive grid gallery with optional categories and click-to-preview." />

        {/* categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {galleryCategories.map((c) => {
            const active = c === category;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={`px-4 py-2 rounded-full border transition-all capitalize ${
                  active
                    ? "bg-ice-500/15 text-ice-300 border-ice-500/30"
                    : "bg-white/5 text-gray-200 border-white/10 hover:bg-white/10"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        <GalleryGrid
          items={filtered}
          onOpen={(idx) => {
            setLbIndex(idx);
            setLbOpen(true);
          }}
        />

        <LightboxModal open={lbOpen} items={filtered} activeIndex={lbIndex} onClose={() => setLbOpen(false)} />
      </div>
    </section>
  );
}

