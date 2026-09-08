import { Heart, Search, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/makeupDream.png";

function Header() {
  const location = useLocation();

  const isFavoritesPage = location.pathname === "/favorites";

  return (
    <header className="border-b border-[#EAD8D5] bg-[#FFFDFC]">
      <div className="mx-auto flex max-w-7xl items-center gap-8 px-6 py-4">
        <a href="/" aria-label="Makeup Dream – hjem">
          <img
            src={logo}
            alt="Makeup Dream"
            className="h-18 w-60 object-fill"
          />
        </a>

        <div className="relative ml-auto w-full max-w-4xl">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A78F8B]"
          />

          <input
            type="search"
            placeholder="Søk etter sminke, parfyme og hudpleie..."
            className="w-full rounded-lg border border-[#EAD8D5] bg-white px-4 py-3 pl-12 text-[#171717] outline-none transition placeholder:text-[#A78F8B] focus:border-[#B85F6B] focus:ring-2 focus:ring-[#F1D6D8]"
          />
        </div>

        <Link
          to="/favorites"
          aria-label="Favoritter"
          className={`p-2 transition ${
            isFavoritesPage
              ? "text-[#B85F6B]"
              : "text-[#171717] hover:text-[#B85F6B]"
          }`}
        >
          <Heart />
        </Link>

        <button
          type="button"
          aria-label="Handlekurv"
          className="relative p-2 text-[#171717] transition hover:text-[#B85F6B]"
        >
          <ShoppingCart />

          <span className="absolute -right-1 -top-1 rounded-full bg-[#B85F6B] px-1.5 text-xs text-white">
            0
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;
