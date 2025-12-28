import { Link } from "react-router-dom";

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-400">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, idx) => {
          const last = idx === items.length - 1;
          return (
            <li key={`${it.label}-${idx}`} className="flex items-center gap-2">
              {idx > 0 && <span className="opacity-60">→</span>}
              {it.to && !last ? (
                <Link to={it.to} className="hover:text-ice-300 transition-colors">
                  {it.label}
                </Link>
              ) : (
                <span className={last ? "text-gray-200" : ""}>{it.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

