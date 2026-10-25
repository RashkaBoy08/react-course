import { Link, NavLink, Outlet } from "react-router";
import { categories } from "../data";

const categoryLinkClass = ({ isActive }) =>
  `block rounded-2xl px-4 py-3 transition ${
    isActive
      ? "bg-orange-100 text-orange-900"
      : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
  }`;

export const CategoriesLayout = () => (
  <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[240px_1fr]">
    <aside>
      <h1 className="text-2xl font-black text-stone-900">Categories</h1>
      <p className="mt-2 text-sm leading-6 text-stone-600">
        Pick a category to find your next favorite.
      </p>
      <nav aria-label="Recipe categories" className="mt-5 space-y-1">
        <NavLink to="/categories" end className={categoryLinkClass}>
          <span className="font-semibold">All recipes</span>
        </NavLink>
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/categories/${category.id}`}
            className={categoryLinkClass}
          >
            <span className="block font-semibold">{category.name}</span>
            <span className="mt-1 block text-xs opacity-75">
              {category.description}
            </span>
          </NavLink>
        ))}
      </nav>
      <Link
        to="/recipes"
        className="mt-5 inline-block text-sm font-semibold text-orange-700 hover:text-orange-900"
      >
        View all recipes →
      </Link>
    </aside>
    <section className="min-w-0">
      <Outlet />
    </section>
  </div>
);
