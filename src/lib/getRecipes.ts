import { Recipe } from '../types/index';

export async function getRecipes(): Promise<Recipe[]> {
    const res = await fetch(`http://127.0.0.1:8000/api/recipes`, {
        cache: 'no-store' // Ingen caching for friske data
    });

    if (!res.ok) {
        throw new Error("Failed to fetch recipes");
    }

    return res.json();
}
