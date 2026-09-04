import { Brush, Droplets, Heart, Sparkles } from "lucide-react";

const categories = [
  { name: "Sminke", icon: Brush },
  { name: "Hudpleie", icon: Droplets },
  { name: "Parfyme", icon: Sparkles },
  { name: "Beauty", icon: Heart },
];

function CategorySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <div className="mb-8">
        <p className="font-semibold text-[#6D5BD0]">Kategorier</p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#172033]">
          Hva ser du etter?
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <button
              key={category.name}
              type="button"
              className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-6 text-[#172033] transition hover:border-[#6D5BD0] hover:bg-[#F3F1FA] focus:outline-none focus:ring-2 focus:ring-[#6D5BD0] focus:ring-offset-2"
            >
              <Icon size={30} />

              <span className="font-semibold">{category.name}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default CategorySection;
