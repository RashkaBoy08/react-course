import { Link } from "react-router";

export const NotFound = () => (
  <section className="mx-auto max-w-2xl px-5 py-20 text-center">
    <p className="text-sm font-bold uppercase tracking-widest text-orange-700">
      404 · Page not found
    </p>
    <h1 className="mt-3 text-4xl font-black text-stone-900">
      This recipe is missing.
    </h1>
    <p className="mt-4 text-stone-600">
      The page may have moved, or the address may be incorrect.
    </p>
    <Link
      to="/"
      className="mt-7 inline-flex rounded-full bg-orange-600 px-6 py-3 font-bold text-white hover:bg-orange-700"
    >
      Return home
    </Link>
  </section>
);
