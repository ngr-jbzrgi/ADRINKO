import { Link, useParams } from "react-router-dom";
import { useMemo, useState } from "react";

import { getProductBySlug } from "../data/products";
import { usePageTitle } from "../hooks/usePageTitle";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import LightboxModal from "../components/ui/LightboxModal";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  usePageTitle(product ? product.title : "Product");

  const imageItems = useMemo(() => {
    const imgs = product?.images || [];
    return imgs.map((src, idx) => ({
      src,
      alt: `${product?.title || "Product"} image ${idx + 1}`,
    }));
  }, [product]);

  const [lbOpen, setLbOpen] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);

  if (!product) {
    return (
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass-effect rounded-2xl p-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Product not found</h1>
            <p className="text-gray-300 mb-6">This product may have been moved or renamed.</p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-gray-200"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Products", to: "/products" },
              { label: product.title },
            ]}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link to="/products" className="text-sm text-ice-400 hover:text-ice-300 transition-colors">
            ← Back to Products
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* left: images */}
          <div className="glass-effect rounded-2xl p-6">
            <h2 className="text-xl font-bold text-ice-300 mb-4">Images</h2>
            <div className="grid grid-cols-2 gap-4">
              {imageItems.map((it, idx) => (
                <button
                  key={it.src}
                  type="button"
                  onClick={() => {
                    setLbIndex(idx);
                    setLbOpen(true);
                  }}
                  className="rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
                  aria-label="Open image preview"
                >
                  <div className="aspect-[4/3]">
                    <img src={it.src} alt={it.alt} className="w-full h-full object-cover" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* right: summary */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">{product.title}</h1>
            <div className="inline-block px-4 py-1 bg-ice-500/20 rounded-full text-ice-400 text-sm font-semibold mb-5">
              {product.purity}
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">{product.description}</p>

            <div className="mt-8 glass-effect rounded-2xl p-6">
              <h2 className="text-xl font-bold text-ice-300 mb-4">Highlights</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {product.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <span className="text-ice-400 mt-0.5">✓</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* specs */}
        <div className="mt-10 glass-effect rounded-2xl p-6">
          <h2 className="text-xl font-bold text-ice-300 mb-4">Specifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-sm text-gray-400 border-b border-white/10">
                  <th className="py-3 pr-4 font-semibold">Parameter</th>
                  <th className="py-3 font-semibold">Value</th>
                </tr>
              </thead>
              <tbody>
                {product.specs.map((row, idx) => (
                  <tr key={idx} className="border-b border-white/5">
                    <td className="py-3 pr-4 text-gray-300">{row.k}</td>
                    <td className="py-3 text-gray-200 font-medium">{row.v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* analysis / technical details */}
        <div className="mt-10 glass-effect rounded-2xl p-6">
          <h2 className="text-xl font-bold text-ice-300 mb-4">Analysis / Technical details</h2>

          {!!product.analysis?.length && (
            <ul className="space-y-2 text-gray-300 mb-6">
              {product.analysis.map((line, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-ice-400 mt-0.5">•</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          )}

          {!!product.pdfs?.length && (
            <div className="flex flex-wrap gap-3">
              {product.pdfs.map((p) => (
                <a
                  key={p.href}
                  href={p.href}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-gray-200"
                >
                  <span>PDF</span>
                  <span className="text-sm text-gray-300">{p.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>

        <LightboxModal open={lbOpen} items={imageItems} activeIndex={lbIndex} onClose={() => setLbOpen(false)} />
      </div>
    </section>
  );
}

