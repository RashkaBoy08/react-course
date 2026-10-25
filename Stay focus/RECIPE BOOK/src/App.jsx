import { Link, NavLink, Outlet } from "react-router";

const navLinkClass = ({ isActive }) =>
  `rounded-full px-4 py-2 text-sm font-semibold transition ${
    isActive
      ? "bg-orange-100 text-orange-800"
      : "text-stone-600 hover:bg-stone-100 hover:text-stone-950"
  }`;

export const App = () => (
  <div className="min-h-screen">
    <header className="border-b border-stone-200 bg-white/90">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="flex items-center gap-3" aria-label="Recipe Book home">
          <span className="grid size-10 place-items-center rounded-2xl bg-orange-600 text-xl text-white">
            R
          </span>
          <span className="text-lg font-extrabold tracking-tight text-stone-900">
            Recipe Book
          </span>
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-1">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/recipes" className={navLinkClass}>
            Recipes
          </NavLink>
          <NavLink to="/categories" className={navLinkClass}>
            Categories
          </NavLink>
        </nav>
      </div>
    </header>
    <main>
      <Outlet />
    </main>
    <footer className="mt-16 border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-6 text-sm text-stone-500">
        Made for good food and good company.
      </div>
    </footer>
  </div>
);
