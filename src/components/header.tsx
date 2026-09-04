import { Search, ShoppingCart } from "lucide-react";

function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-4">
        <a
          href="/"
          className="text-2xl font-bold tracking-tight text-slate-950"
        >
          Makeup Dream
        </a>

        <div className="relative flex-1">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="search"
            placeholder="Søk etter sminke, parfyme og hudpleie..."
            className="w-full rounded-lg border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
          />
        </div>

        <button
          type="button"
          aria-label="Åpne handlekurv"
          className="relative rounded-lg p-3 text-slate-700 transition hover:bg-slate-100 hover:text-violet-600"
        >
          <ShoppingCart size={24} />

          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#6D5BD0] px-1 text-xs font-semibold text-white">
            0
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;
