export interface Ingredient {
    name: string;
    amount: number;
    unit: string;
}

export interface Recipe {
    id: number;
    name: string;
    description?: string;
    ingredients: Ingredient[]; // Skal være en array af objekter
}

export interface Meal {
    id: number;
    day: string;  // Monday, Tuesday, etc.
    type: string; // Breakfast, Lunch, Dinner
    recipe_id: number;
    recipe?: Recipe; // Relation til Recipe, kan være undefined
}

export interface Plan {
    id: number;
    week: number;
    meals: Meal[];
}
