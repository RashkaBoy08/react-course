import { Link } from "react-router";
import { categories } from "../data";

export const RecipeCard = ({ recipe }) => {
  const category = categories.find((item) => item.id === recipe.category);

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <span className="mb-4 w-fit rounded-full bg-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange-800">
        {category?.name ?? recipe.category}
      </span>
      <h3 className="text-xl font-bold text-stone-900">{recipe.title}</h3>
      <p className="mt-2 flex-1 leading-7 text-stone-600">
        {recipe.description}
      </p>
      <Link
        to={`/recipes/${recipe.id}`}
        className="mt-6 inline-flex w-fit items-center gap-2 font-semibold text-orange-700 hover:text-orange-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700"
      >
        View recipe <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
};
