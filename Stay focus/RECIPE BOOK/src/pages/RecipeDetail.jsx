import { Link, useParams } from "react-router";
import { RecipeCard } from "../components/RecipeCard";
import { categories, recipes } from "../data";
import { NotFound } from "./NotFound";

export const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((item) => item.id === Number(id));

  if (!recipe) return <NotFound />;

  const category = categories.find((item) => item.id === recipe.category);

  return (
    <article className="mx-auto max-w-4xl px-5 py-12">
      <Link
        to="/recipes"
        className="font-semibold text-orange-700 hover:text-orange-900"
      >
        ← All recipes
      </Link>
      <header className="mt-7 rounded-3xl bg-orange-50 p-7 sm:p-10">
        <span className="rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange-800">
          {category?.name ?? recipe.category}
        </span>
        <h1 className="mt-5 text-4xl font-black tracking-tight text-stone-900 sm:text-5xl">
          {recipe.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-600">
          {recipe.description}
        </p>
      </header>
      <div className="mt-8 grid gap-8 sm:grid-cols-[0.8fr_1.2fr]">
        <section className="rounded-3xl border border-stone-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-stone-900">Ingredients</h2>
          <ul className="mt-5 space-y-3">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient} className="flex gap-3 text-stone-700">
                <span className="text-orange-600" aria-hidden="true">
                  ✓
                </span>
                {ingredient}
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-3xl border border-stone-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-stone-900">Instructions</h2>
          <ol className="mt-5 space-y-4">
            {recipe.instructions.map((instruction, index) => (
              <li key={instruction} className="flex gap-4 text-stone-700">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-orange-100 text-sm font-bold text-orange-800">
                  {index + 1}
                </span>
                <span className="pt-0.5">{instruction}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </article>
  );
};
