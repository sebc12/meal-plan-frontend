"use client";

import { useState } from "react";
import { Plan } from "@/types";

type Props = {
  week: number;
  plan?: Plan;
};

export default function WeeklyplanClient({ week, plan }: Props) {
  const [selectedMeal, setSelectedMeal] = useState<{ name: string; ingredients: string[] } | null>(null);
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const mealTypes = ["Breakfast", "Lunch", "Dinner"];

  if (!plan || !plan.meals?.length) {
    return <p className="text-center text-gray-500">No meals available for this week.</p>;
  }

  console.log(plan);

  return (
    <div className="w-full">
      <section>
        <h2 className="text-xl font-semibold mb-2">Weekly Meal Plan (Week {week})</h2>
        <div className="bg-gray-50 shadow-md rounded-lg p-4">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-left">Meal</th>
                {weekDays.map((day, index) => (
                  <th key={index} className="py-2 text-left">{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mealTypes.map((mealType) => (
                <tr key={mealType} className="border-b">
                  <td className="py-2 font-semibold">{mealType}</td>
                  {weekDays.map((day, i) => {
                    const meal = plan.meals.find((m) => m.day === day && m.type === mealType);

                    return (
                      <td key={i} className="py-2">
                        {meal ? (
                          <button
                            onClick={() => meal.recipe && setSelectedMeal({ name: meal.recipe.name, ingredients: meal.recipe.ingredients.map(ingredient => ingredient.name) })}
                            className="cursor-pointer hover:underline"
                          >
                            {meal?.recipe?.name ?? "-"}
                          </button>
                        ) : (
                          "—"
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      
      {selectedMeal && (
   <div className="fixed inset-0 flex justify-end">
    <div className="w-80 md:w-1/4 bg-white h-full shadow-lg transform transition-transform translate-x-0 duration-500 ease-in-out">
      <div className="p-6">
        <h3 className="text-xl font-semibold">{selectedMeal.name}</h3>
        
        <p className="mt-2 text-gray-600">Ingredients:</p>
        <ul className="list-disc pl-5 mt-2">
          {selectedMeal.ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient}
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
