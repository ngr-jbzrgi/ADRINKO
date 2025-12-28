import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";

export default function NotFoundPage() {
  usePageTitle("Not Found");

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-effect rounded-2xl p-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Page not found</h1>
          <p className="text-gray-300 mb-6">
            The page you are looking for doesn’t exist or may have moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-gray-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

