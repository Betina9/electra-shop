import heroImage from "../assets/sminkehero.png";

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-8">
      <div
        className="relative min-h-[390px] overflow-hidden rounded-2xl bg-cover bg-center px-8 py-16 sm:px-12 lg:px-16"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="relative z-10 max-w-xl">
          <p className="mb-3 font-semibold uppercase tracking-widest text-[#B85F6B]">
            Beauty du gleder deg til å bruke
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-[#171717] sm:text-5xl">
            Finn dine nye favoritter
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-8 text-slate-700">
            Utforsk sminke, parfyme og beautyprodukter – samlet på ett sted.
          </p>

          <button
            type="button"
            className="mt-8 rounded-lg bg-[#B85F6B] px-6 py-3 font-semibold text-white transition hover:bg-[#A6505C] focus:outline-none focus:ring-2 focus:ring-[#B85F6B] focus:ring-offset-2"
          >
            Utforsk produkter
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
