import { useState } from "react";
import { postPlans } from "@/lib/postPlans";

export default function NewWeekForm() {
  const [week, setWeek] = useState(""); // Uge
  const [meals, setMeals] = useState([
    { day: "Monday", meals: [{ type: "Breakfast", recipe_id: "" }, { type: "Lunch", recipe_id: "" }, { type: "Dinner", recipe_id: "" }] },
    { day: "Tuesday", meals: [{ type: "Breakfast", recipe_id: "" }, { type: "Lunch", recipe_id: "" }, { type: "Dinner", recipe_id: "" }] },
    { day: "Wednesday", meals: [{ type: "Breakfast", recipe_id: "" }, { type: "Lunch", recipe_id: "" }, { type: "Dinner", recipe_id: "" }] },
    { day: "Thursday", meals: [{ type: "Breakfast", recipe_id: "" }, { type: "Lunch", recipe_id: "" }, { type: "Dinner", recipe_id: "" }] },
    { day: "Friday", meals: [{ type: "Breakfast", recipe_id: "" }, { type: "Lunch", recipe_id: "" }, { type: "Dinner", recipe_id: "" }] },
    { day: "Saturday", meals: [{ type: "Breakfast", recipe_id: "" }, { type: "Lunch", recipe_id: "" }, { type: "Dinner", recipe_id: "" }] },
    { day: "Sunday", meals: [{ type: "Breakfast", recipe_id: "" }, { type: "Lunch", recipe_id: "" }, { type: "Dinner", recipe_id: "" }] },
    // Fortsæt for resten af ugen...
  ]);

  const handleMealChange = (dayIndex: number, mealIndex: number, value: string) => {
    const newMeals = [...meals];
    newMeals[dayIndex].meals[mealIndex].recipe_id = value;
    setMeals(newMeals); // Opdater måltidslisten
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Transformer måltider til en flad struktur
    const flattenedMeals = meals.flatMap((day) =>
      day.meals.map((meal) => ({
        day: day.day, // Tilføj dagen til hvert måltid
        type: meal.type,
        recipe_id: meal.recipe_id,
      }))
    );
  
    try {
      const newPlan = await postPlans({
        week,
        meals: flattenedMeals, // Send flad struktur til backend
      });
  
      console.log("Plan created:", newPlan);
      setWeek("");
      setMeals(
        meals.map((day) => ({
          ...day,
          meals: day.meals.map((meal) => ({ ...meal, recipe_id: "" })),
        }))
      );
    } catch (error) {
      console.error("Error creating plan:", error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block">Uge:</label>
        <input
          type="number"
          value={week}
          onChange={(e) => setWeek(e.target.value)}
          className="border p-2 w-full"
          placeholder="F.eks. 11"
        />
      </div>

      <div>
        <label className="block">Måltider:</label>
        {meals.map((day, dayIndex) => (
          <div key={dayIndex} className="mb-4">
            <h3 className="font-bold text-lg">{day.day}</h3>
            {day.meals.map((meal, mealIndex) => (
              <div key={mealIndex} className="flex space-x-2 mb-2">
                <span className="w-1/3 p-2 border bg-gray-100">{meal.type}</span>
                <input
                  type="number"
                  value={meal.recipe_id}
                  onChange={(e) => handleMealChange(dayIndex, mealIndex, e.target.value)}
                  placeholder="Recipe ID"
                  className="border p-2 w-2/3"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Opret Plan
      </button>
    </form>
  );
}
