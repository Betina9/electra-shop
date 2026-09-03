import { Heart, ShoppingCart } from "lucide-react";

type ProductCardProps = {
  name: string;
  brand: string;
  price: number;
  image: string;
  rating?: number;
};

function ProductCard({ name, brand, price, image, rating }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4 transition hover:border-[#6D5BD0] hover:shadow-md">
      <div className="relative mb-4 flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-slate-50">
        <button
          type="button"
          aria-label="{`Lagre ${name}`"
          className="absolute right-3 top-3 rounded-full bg-white p-2 text-slate-600 shadow-sm transition hover:text-[#6D5BD0]"
        >
          <Heart size={18} />
        </button>

        <img
          src={image}
          alt={name}
          className="h-full w-full object-contain p-5"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <p className="text-sm text-slate-500">{brand}</p>

        <h3 className="mt-1 font-semibold text-[#172033]">{name}</h3>

        {rating !== undefined && (
          <p className="mt-2 text-sm text-slate-600">★ {rating}</p>
        )}

        <p className="mt-4 text-xl font-bold text-[#172033]">
          {price.toLocaleString("nb-NO")} kr
        </p>

        <button
          type="button"
          className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#6D5BD0] px-4 py-3 font-semibold text-white transition hover:bg-[#5B4BC4] focus:outline-none focus:ring-2 focus:ring-[#6D5BD0] focus:ring-offset-2"
        >
          <ShoppingCart size={18} />
          Legg i handlekurv
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
