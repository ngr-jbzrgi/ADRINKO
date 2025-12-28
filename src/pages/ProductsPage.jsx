import { usePageTitle } from "../hooks/usePageTitle";
import PageIntro from "../components/ui/PageIntro";
import ProductsGrid from "../components/products/ProductsGrid";
import { products } from "../data/products";

export default function ProductsPage() {
  usePageTitle("Products");

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <PageIntro
          title="Products"
          subtitle="Six core industrial chemical products with clear specifications, consistent documentation, and traceable batches."
        />

        <ProductsGrid items={products.slice(0, 6)} />
      </div>
    </section>
  );
}

