import { createBrowserRouter } from "react-router";
import { App } from "./App";
import { CategoriesIndex } from "./pages/CategoriesIndex";
import { CategoriesLayout } from "./pages/CategoriesLayout";
import { CategoryRecipes } from "./pages/CategoryRecipes";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { RecipeDetail } from "./pages/RecipeDetail";
import { Recipes } from "./pages/Recipes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "recipes", element: <Recipes /> },
      { path: "recipes/:id", element: <RecipeDetail /> },
      {
        path: "categories",
        element: <CategoriesLayout />,
        children: [
          { index: true, element: <CategoriesIndex /> },
          { path: ":categoryId", element: <CategoryRecipes /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
