import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "MacBook Air 13 M2",
    brand: "Apple",
    price: 9999,
    image: "https://placehold.co/400x400?text=MacBook",
    rating: 4.8,
  },
  {
    id: 2,
    name: "WH-1000XM5 Wireless Headphones",
    brand: "Sony",
    price: 3490,
    image: "https://placehold.co/400x400?text=Headphones",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Galaxy S23 Ultra 5G",
    brand: "Samsung",
    price: 11990,
    image: "https://placehold.co/400x400?text=Phone",
    rating: 4.6,
  },
  {
    id: 4,
    name: '65" OLED 4K Smart TV',
    brand: "LG",
    price: 12990,
    image: "https://placehold.co/400x400?text=TV",
    rating: 4.5,
  },
];

function ProductSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="mb-8">
        <p className="font-semibold text-[#6D5BD0]">Produkter</p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#172033]">
          Populært akkurat nå
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              brand={product.brand}
              price={product.price}
              image={product.image}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
