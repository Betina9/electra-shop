import Header from "./components/header";
import Hero from "./components/hero";
import CategorySection from "./components/CategorySection";
import ProductSection from "./components/ProductSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategorySection />
        <ProductSection />
      </main>
    </>
  );
}

export default App;
