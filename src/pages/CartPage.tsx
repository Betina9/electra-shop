import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { getProducts } from "../services/productAPI";
import type { Product } from "../types/product";

function CartPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data.products);
      } catch (error) {
        console.error("Kunne ikke hente produkter:");
      }
    }
    loadProducts();
  }, []);

  const cartIds: number[] = JSON.parse(localStorage.getItem("cart") || "[]");

  const cartProducts = cartIds
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is Product => product !== undefined);

  const groupedProducts = cartProducts.reduce<
    { product: Product; quantity: number }[]
  >((acc, product) => {
    const existingProduct = acc.find((item) => item.product.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      acc.push({ product, quantity: 1 });
    }

    return acc;
  }, []);

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-12">
      <div className="mb-10 flex items-center gap-3">
        <ShoppingCart size={28} className="text-[#B85F6B]" />

        <h1 className="text-3xl font-bold text-[#171717]">Min handlekurv</h1>
      </div>

      <div className="space-y-6">
        {groupedProducts.map(({ product, quantity }) => (
          <div
            key={product.id}
            className="flex items-center gap-6 rounded-lg border border-[#EAD8D5] bg-white p-4"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-24 w-24 rounded-lg object-contain"
            />

            <div>
              <h2 className="font-semibold text-[#171717]">{product.title}</h2>

              <p className="mt-2 font-bold text-[#B85F6B]">
                {product.price.toLocaleString("nb-NO")} kr
              </p>

              <p className="mt-2 text-sm text-[#171717]">Antall: {quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default CartPage;
