import { useState } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import CategorySection from "./components/CategorySection";
import ProductSection from "./components/ProductSection";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <>
      <Header />

      <main>
        <Hero />

        <CategorySection onSelectCategory={setSelectedCategory} />

        <ProductSection selectedCategory={selectedCategory} />
      </main>
    </>
  );
}

export default App;
