export async function postRecipes(recipeData: any) {
    const res = await fetch("http://127.0.0.1:8000/api/recipes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(recipeData),
    });

    if (!res.ok) {
        throw new Error("Failed to create plan");
    }

    return res.json();
}
