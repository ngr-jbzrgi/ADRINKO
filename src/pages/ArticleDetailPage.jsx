import { Link, useParams } from "react-router-dom";
import { useMemo } from "react";

import { getArticleBySlug } from "../data/articles";
import { products } from "../data/products";
import { usePageTitle } from "../hooks/usePageTitle";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import ProductsGrid from "../components/products/ProductsGrid";

function ArticleContent({ blocks }) {
  return (
    <div className="space-y-6">
      {blocks.map((b, idx) => {
        if (b.type === "heading") {
          return (
            <h2 key={idx} className="text-2xl font-bold text-ice-300">
              {b.text}
            </h2>
          );
        }
        if (b.type === "paragraph") {
          return (
            <p key={idx} className="text-gray-300 leading-relaxed">
              {b.text}
            </p>
          );
        }
        if (b.type === "list") {
          return (
            <ul key={idx} className="space-y-2 text-gray-300">
              {b.items.map((it, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-ice-400 mt-0.5">•</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          );
        }
        return null;
      })}
    </div>
  );
}

export default function ArticleDetailPage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  usePageTitle(article ? article.title : "Article");

  const related = useMemo(() => {
    if (!article) return [];
    const set = new Set(article.relatedProductSlugs || []);
    return products.filter((p) => set.has(p.slug));
  }, [article]);

  if (!article) {
    return (
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass-effect rounded-2xl p-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Article not found</h1>
            <p className="text-gray-300 mb-6">This article may have been moved or renamed.</p>
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-gray-200"
            >
              Back to Articles
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const d = new Date(article.date);
  const dateLabel = Number.isNaN(d.getTime())
    ? article.date
    : d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Articles", to: "/articles" },
              { label: article.title },
            ]}
          />
        </div>

        <div className="mb-8">
          <Link to="/articles" className="text-sm text-ice-400 hover:text-ice-300 transition-colors">
            ← Back to Articles
          </Link>
        </div>

        <div className="glass-effect rounded-2xl p-8">
          <div className="text-xs text-gray-400 mb-4 flex flex-wrap gap-x-3 gap-y-1">
            <span>{dateLabel}</span>
            <span className="opacity-60">•</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">{article.title}</h1>
          <p className="text-gray-300 text-lg mb-8">{article.summary}</p>

          <ArticleContent blocks={article.content} />
        </div>

        {!!related.length && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-ice-300 mb-6">Related products</h2>
            <ProductsGrid items={related} />
          </div>
        )}
      </div>
    </section>
  );
}

