import { useEffect, useState } from "react";
import { getProducts } from "../services/productAPI";
import type { Product } from "../types/product";

type CategorySectionProps = {
  onSelectCategory: (category: string) => void;
};

function CategorySection({ onSelectCategory }: CategorySectionProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function LoadProducts() {
      const data = await getProducts();
      setProducts(data.products);
    }

    LoadProducts();
  }, []);

  const beautyProducts = products.filter(
    (product) => product.category === "beauty"
  );

  const categories = [
    {
      name: "Sminke",
      apiCategory: "beauty",
      image:
        products.find((product) => product.category === "beauty")?.thumbnail ||
        "",
    },
    {
      name: "Hudpleie",
      apiCategory: "skin-care",
      image:
        products.find((product) => product.category === "skin-care")
          ?.thumbnail || "",
    },
    {
      name: "Parfyme",
      apiCategory: "fragrances",
      image:
        products.find((product) => product.category === "fragrances")
          ?.thumbnail || "",
    },
    {
      name: "Alle produkter",
      apiCategory: "all",
      image: beautyProducts[1]?.thumbnail,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <div className="mb-8">
        <p className="font-semibold text-[#B85F6B]">Kategorier</p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#172033]">
          Hva ser du etter?
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {categories.map((category) => (
          <button
            key={category.name}
            type="button"
            onClick={() => onSelectCategory(category.apiCategory)}
            className="cursor-pointer overflow-hidden rounded-xl border border-[#EAD8D5] bg-white text-[#171717] transition hover:border-[#B85F6B] hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B85F6B] focus:ring-offset-2"
          >
            <div className="flex h-36 items-center justify-center bg-[#FFF8F7]">
              {category.image && (
                <img
                  src={category.image}
                  alt=""
                  className="h-full w-full object-contain p-4"
                />
              )}
            </div>

            <div className="p-4 text-center">
              <span className="font-semibold">{category.name}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
