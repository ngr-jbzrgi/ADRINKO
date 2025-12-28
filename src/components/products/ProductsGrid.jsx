import ProductCard from "./ProductCard";

export default function ProductsGrid({ items }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
      {items.map((product, index) => (
        <ProductCard key={product.slug} product={product} index={index} />
      ))}
    </div>
  );
}

