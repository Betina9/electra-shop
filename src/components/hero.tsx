function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-8">
      <div className="grid items-center gap-12 rounded-2xl bg-[#F3F1FA] px-8 py-16 sm:px-12 lg:grid-cols-2 lg:px-16">
        <div className="max-w-xl">
          <p className="mb-3 font-semibold text-[#6D5BD0]">
            Beauty du gleder deg til å bruke
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Finn dine nye favoritter
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-8 text-slate-600">
            Utforsk sminke, parfyme og beautyprodukter – samlet på ett sted.
          </p>

          <button
            type="button"
            className="mt-8 rounded-lg bg-[#6D5BD0] px-6 py-3 font-semibold text-white transition hover:bg-[#5B4BC4] focus:outline-none focus:ring-2 focus:ring-[#6D5BD0] focus:ring-offset-2"
          >
            Utforsk produkter
          </button>
        </div>

        <div className="hidden lg:flex lg:justify-center">
          <div className="relative flex h-72 w-full max-w-md items-center justify-center">
            <div className="absolute h-56 w-56 rounded-full bg-white/60" />

            <div className="relative flex h-48 w-40 rotate-6 items-center justify-center rounded-xl bg-[#172033] shadow-xl">
              <div className="h-36 w-28 rounded-lg bg-gradient-to-br from-[#6D5BD0] to-[#A99DE3]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
