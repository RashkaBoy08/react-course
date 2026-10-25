import { RecipeCard } from "../components/RecipeCard";
import { recipes } from "../data";

export const CategoriesIndex = () => (
  <div>
    <p className="text-sm font-bold uppercase tracking-widest text-orange-700">
      Find your next favorite
    </p>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-900">
      Browse all recipes
    </h2>
    <div className="mt-6 grid gap-5 lg:grid-cols-2">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  </div>
);
