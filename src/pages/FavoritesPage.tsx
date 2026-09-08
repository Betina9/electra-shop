import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productAPI";
import type { Product } from "../types/product";

function FavoritesPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFavorites() {
      const data = await getProducts();

      const savedFavorites: number[] = JSON.parse(
        localStorage.getItem("favorites") || "[]"
      );

      const favoriteProducts = data.products.filter((product) =>
        savedFavorites.includes(product.id)
      );

      setProducts(favoriteProducts);
      setLoading(false);
    }

    loadFavorites();
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-6 py-14">
      <p className="font-semibold text-[#B85F6B]">Favoritter</p>

      <h1 className="mt-2 text-3xl font-bold text-[#171717]">
        Dine favoritter
      </h1>

      {loading && <p className="mt-8 text-slate-600">Laster favoritter...</p>}

      {!loading && products.length === 0 && (
        <p className="mt-8 text-slate-600">Du har ingen favoritter ennå.</p>
      )}

      {!loading && products.length > 0 && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.title}
              brand={product.brand ?? "Ukjent merke"}
              price={product.price}
              image={product.thumbnail}
              rating={product.rating}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default FavoritesPage;
