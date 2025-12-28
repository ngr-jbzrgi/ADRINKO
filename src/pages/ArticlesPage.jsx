import { useMemo } from "react";

import { articles } from "../data/articles";
import { usePageTitle } from "../hooks/usePageTitle";
import PageIntro from "../components/ui/PageIntro";
import ArticleCard from "../components/articles/ArticleCard";

export default function ArticlesPage() {
  usePageTitle("Articles");

  const list = useMemo(() => {
    return [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 6);
  }, []);

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <PageIntro title="Articles" subtitle="Six product-related articles with short, structured content." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((article, index) => (
            <ArticleCard key={article.slug} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

