"use client";

import { useState } from "react";
import { Meal } from "@/types";

export default function MealList({ meals, today }: { meals: Meal[], today: string }) {
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);

  const mealTypes = ["Breakfast", "Lunch", "Dinner"];

  const handleMealClick = (meal: Meal | undefined) => {
    if (meal?.recipe) {
      setSelectedMeal(meal);
    }
  };

  return (
    <div className="pb-16">
      <h2 className="text-xl font-semibold mb-2">Today's Meal</h2>
      <div className="bg-gray-50 shadow-md rounded-lg p-4">
        <table className="w-full">
          <tbody>
            {mealTypes.map((mealType) => {
              const meal = meals.find((m) => m.day === today && m.type === mealType);
              return (
                <tr
                  key={mealType}
                  className="border-b cursor-pointer hover:bg-gray-100"
                  onClick={() => handleMealClick(meal)}
                >
                  <td className="py-2 font-semibold">{mealType}</td>
                  <td className="py-2">{meal?.recipe?.name ?? "—"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {selectedMeal && (
   <div className="fixed inset-0 flex justify-end">
    <div className="w-80 md:w-1/4 bg-white h-full shadow-lg transform transition-transform translate-x-0 duration-500 ease-in-out">
      <div className="p-6">
        <h3 className="text-xl font-semibold">{selectedMeal?.recipe?.name}</h3>
        <h3 className="text-xl font-semibold">{selectedMeal?.recipe?.description}</h3>
        <p className="mt-2 text-gray-600">Ingredients:</p>
        <ul className="list-disc pl-5 mt-2">
          {selectedMeal?.recipe?.ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.name ?? (ingredient)}
              {ingredient.amount && ` - ${ingredient.amount}`}
              {ingredient.unit && ` ${ingredient.unit}`}
            </li>
          ))}
        </ul>
        <button
          onClick={() => setSelectedMeal(null)}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
}
