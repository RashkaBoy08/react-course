import { RecipeCard } from "../components/RecipeCard";
import { recipes } from "../data";

export const Recipes = () => (
  <section className="mx-auto max-w-6xl px-5 py-12">
    <div className="mb-8">
      <p className="text-sm font-bold uppercase tracking-widest text-orange-700">
        The collection
      </p>
      <h1 className="mt-2 text-4xl font-black tracking-tight text-stone-900">
        All recipes
      </h1>
      <p className="mt-3 text-stone-600">
        Tried-and-loved ideas to make your next meal special.
      </p>
    </div>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  </section>
);
