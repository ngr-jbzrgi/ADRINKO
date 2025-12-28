import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -8, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="glass-effect rounded-2xl overflow-hidden transition-all group self-start hover:shadow-2xl hover:shadow-ice-500/20"
    >
      <Link to={`/products/${product.slug}`} className="block">
        <div className="relative h-44 w-full overflow-hidden">
          <img
            src={product.images?.[0]}
            alt={product.title}
            className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-all"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold text-ice-300 group-hover:text-gradient transition-all leading-tight">
            {product.title}
          </h3>

          <div className="mt-3 inline-block px-4 py-1 bg-ice-500/20 rounded-full text-ice-400 text-sm font-semibold">
            {product.purity}
          </div>

          <p className="text-gray-400 mt-4 mb-6">{product.description}</p>

          <ul className="space-y-2">
            {(product.highlights || []).slice(0, 3).map((feature, i) => (
              <li key={i} className="flex items-center text-gray-300 text-sm">
                <svg className="w-5 h-5 text-ice-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-6 inline-flex items-center gap-2 text-sm text-ice-400 group-hover:text-ice-300 transition-colors">
            View details <span aria-hidden>→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

