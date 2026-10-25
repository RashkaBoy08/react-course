import { RecipeCard } from "../components/RecipeCard";
import { categories, recipes } from "../data";
import { NotFound } from "./NotFound";
import { useParams } from "react-router";

export const CategoryRecipes = () => {
  const { categoryId } = useParams();
  const category = categories.find((item) => item.id === categoryId);

  if (!category) return <NotFound />;

  const filteredRecipes = recipes.filter(
    (recipe) => recipe.category === category.id,
  );

  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-widest text-orange-700">
        Recipe category
      </p>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-900">
        {category.name}
      </h2>
      <p className="mt-2 text-stone-600">{category.description}</p>
      {filteredRecipes.length > 0 ? (
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="mt-6 rounded-2xl border border-dashed border-stone-300 bg-white p-6 text-stone-600">
          No recipes in this category yet. Try another category or browse all
          recipes.
        </p>
      )}
    </div>
  );
};
