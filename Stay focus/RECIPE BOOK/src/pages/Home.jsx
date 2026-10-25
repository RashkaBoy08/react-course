import { Link } from "react-router";

const destinations = [
  {
    title: "Explore recipes",
    description: "Browse every dish in the collection.",
    to: "/recipes",
    label: "See all recipes",
  },
  {
    title: "Find a category",
    description: "Choose a meal or something sweet.",
    to: "/categories",
    label: "Browse categories",
  },
];

export const Home = () => (
  <div className="mx-auto max-w-6xl px-5 py-12 sm:py-20">
    <section className="overflow-hidden rounded-[2rem] bg-stone-900 px-7 py-12 text-white sm:px-12 sm:py-16">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
        A little inspiration for your kitchen
      </p>
      <h1 className="max-w-2xl text-4xl font-black tracking-tight sm:text-6xl">
        Make something
        <span className="text-orange-300"> delicious.</span>
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-8 text-stone-300">
        Find a favorite, try a new idea, and bring everyone to the table.
      </p>
      <Link
        to="/recipes"
        className="mt-8 inline-flex rounded-full bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300"
      >
        Browse recipes
      </Link>
    </section>

    <section className="mt-12">
      <h2 className="text-2xl font-bold text-stone-900">Where to start?</h2>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {destinations.map((destination) => (
          <article
            key={destination.to}
            className="rounded-3xl border border-stone-200 bg-white p-6"
          >
            <h3 className="text-xl font-bold text-stone-900">
              {destination.title}
            </h3>
            <p className="mt-2 text-stone-600">{destination.description}</p>
            <Link
              to={destination.to}
              className="mt-5 inline-block font-semibold text-orange-700 hover:text-orange-900"
            >
              {destination.label} →
            </Link>
          </article>
        ))}
      </div>
    </section>
  </div>
);
