import { getPlans } from "@/lib/getPlans";
import { Plan } from "@/types";

export default async function Weeklyplan() {
  const weeklyPlan: Plan[] = await getPlans();
  console.log(weeklyPlan);

  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const mealTypes = ["Breakfast", "Lunch", "Dinner",];

  return (
    <div className="w-full">
      <section>
        <h2 className="text-xl font-semibold mb-2">Weekly Meal Plan</h2>
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
                    const meal = weeklyPlan[0]?.meals.find(
                      (m) => m.day === day && m.type === mealType
                    );
                    return (
                      <td key={i} className="py-2">
                        {meal?.recipe?.name ?? "—"}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
