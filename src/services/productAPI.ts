import type { Product } from "../types/product";

type ProductResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export async function getProducts(): Promise<ProductResponse> {
  const categories = ["beauty", "fragrances", "skin-care"];

  const responses = await Promise.all(
    categories.map((category) =>
      fetch(`https://dummyjson.com/products/category/${category}`)
    )
  );

  if (responses.some((response) => !response.ok)) {
    throw new Error("Kunne ikke hente produkter");
  }

  const data: ProductResponse[] = await Promise.all(
    responses.map((response) => response.json())
  );

  const products = data.flatMap((response) => response.products);

  return {
    products,
    total: products.length,
    skip: 0,
    limit: products.length,
  };
}
