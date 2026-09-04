import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../services/productAPI";
import type { Product } from "../types/product";

function ProductSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data.products);
      } catch {
        setError("Kunne ikke hente produkter");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="mb-8">
        <p className="font-semibold text-[#6D5BD0]">Produkter</p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#172033]">
          Populært akkurat nå
        </h2>

        {loading && <p className="mt-8 text-slate-600">Laster produkter...</p>}

        {error && <p className="mt-8 text-red-600">{error}</p>}

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.title}
              brand={product.brand ?? "Ukjent merke"}
              price={product.price}
              image={product.thumbnail}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
