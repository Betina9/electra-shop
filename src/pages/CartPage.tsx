import { ShoppingCart } from "lucide-react";

function CartPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-12">
      <div className="mb-10 flex items-center gap-3">
        <ShoppingCart size={28} className="text-[#B85F6B]" />

        <h1 className="text-3xl font-bold text-[#171717]">Min handlekurv</h1>
      </div>

      <p className="text-[#A78F8B]">
        Her kommer produktene du har lagt i handlekurven.
      </p>
    </main>
  );
}

export default CartPage;
