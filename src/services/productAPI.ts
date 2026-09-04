import type { Product } from "../types/product";

type ProductResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export async function getProducts(): Promise<ProductResponse> {
  const response = await fetch("https://dummyjson.com/products?limit=8");

  if (!response.ok) {
    throw new Error("Kunne ikke hente produkter");
  }

  const data: ProductResponse = await response.json();

  return data;
}
