import { useEffect, useState } from "react";
import { getRecipes } from "@/lib/getRecipes";

interface RecipeDropdownProps {
  onSelect: (recipeName: string) => void;
}

export default function RecipeDropdown({ onSelect }: RecipeDropdownProps) {
  const [recipes, setRecipes] = useState<{ id: number; name: string }[]>([]);
  
  useEffect(() => {
    async function fetchRecipes() {
      try {
        const data = await getRecipes();
        setRecipes(data);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      }
    }
    fetchRecipes();
  }, []);

  return (
    <select onChange={(e) => onSelect(e.target.value)} required>
      <option value="">Select a recipe</option>
      {recipes.map((recipe) => (
        <option key={recipe.id} value={recipe.name}>
          {recipe.name}
        </option>
      ))}
    </select>
  );
}
