import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CartPage from "./pages/CartPage";
import Header from "./components/header";
import Hero from "./components/hero";
import CategorySection from "./components/CategorySection";
import ProductSection from "./components/ProductSection";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState<number[]>(() => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  });

  return (
    <BrowserRouter>
      <Header cartCount={cart.length} />

      <Routes>
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="/"
          element={
            <main>
              <Hero />

              <CategorySection onSelectCategory={setSelectedCategory} />

              <ProductSection
                selectedCategory={selectedCategory}
                onAddToCart={(id) => {
                  const updatedCart = [...cart, id];

                  setCart(updatedCart);
                  localStorage.setItem("cart", JSON.stringify(updatedCart));
                }}
              />
            </main>
          }
        />

        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
