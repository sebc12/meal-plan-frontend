import Image from "next/image";
import { getRecipes } from "@/lib/getRecipes";

export default async function Home() {
  const recipes = await getRecipes(); // Hentes server-side
  console.log(recipes);
  return (
    <div >
     <div>
        <h1>Recipes</h1>
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <h2>{recipe.name}</h2>
              <p>{recipe.description}</p>
              <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.name}: {ingredient.amount} {ingredient.unit}
                </li>
              ))}
              </ul>
            </li>
          ))}
        </ul>
     </div>
    </div>
  );
}
