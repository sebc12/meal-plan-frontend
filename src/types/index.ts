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
