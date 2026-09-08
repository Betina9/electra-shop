import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Hero from "./components/hero";
import CategorySection from "./components/CategorySection";
import ProductSection from "./components/ProductSection";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />

              <CategorySection onSelectCategory={setSelectedCategory} />

              <ProductSection selectedCategory={selectedCategory} />
            </main>
          }
        />

        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
