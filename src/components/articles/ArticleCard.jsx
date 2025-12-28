import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ArticleCard({ article, index = 0 }) {
  const d = new Date(article.date);
  const dateLabel = Number.isNaN(d.getTime()) ? article.date : d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="glass-effect rounded-2xl p-6 hover:shadow-2xl hover:shadow-ice-500/10 transition-all"
    >
      <div className="text-xs text-gray-400 mb-3 flex flex-wrap gap-x-3 gap-y-1">
        <span>{dateLabel}</span>
        <span className="opacity-60">•</span>
        <span>{article.readTime}</span>
      </div>

      <h3 className="text-xl font-bold text-ice-300 mb-3">
        <Link to={`/articles/${article.slug}`} className="hover:text-gradient transition-colors">
          {article.title}
        </Link>
      </h3>

      <p className="text-gray-400">{article.summary}</p>

      <div className="mt-5">
        <Link to={`/articles/${article.slug}`} className="text-sm text-ice-400 hover:text-ice-300 transition-colors inline-flex items-center gap-2">
          Read article <span aria-hidden>→</span>
        </Link>
      </div>
    </motion.div>
  );
}

