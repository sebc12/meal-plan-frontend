import { getPlans } from "@/lib/getPlans";
import { Plan } from "@/types";
import { getISOWeek } from "date-fns";

export default async function TodaysMeal() {
  const weeklyPlan: Plan[] = await getPlans();

  const mealTypes = ["Breakfast", "Lunch", "Dinner"];

  // Find dagens navn (Monday, Tuesday, etc.)
  const today = new Date().toLocaleString("en-GB", { weekday: "long" });

  // Find den aktuelle uge med date-fns
  const currentWeek = getISOWeek(new Date());
  const activePlan = weeklyPlan.find((plan) => plan.week === currentWeek);

  console.log("Today's name:", today);
  console.log("Current week:", currentWeek);
  console.log("Active Plan:", activePlan);

  // Hvis der ikke er nogen plan for denne uge
  if (!activePlan || !activePlan.meals?.length) {
    return <p className="text-center text-gray-500">No meals available for today.</p>;
  }

  return (
    <div>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Today's Meal</h2>
        <div className="bg-gray-50 shadow-md rounded-lg p-4">
          <table className="w-full">
            <tbody>
              {mealTypes.map((mealType) => {
                const meal = activePlan.meals.find(
                  (m) => m.day === today && m.type === mealType
                );
                return (
                  <tr key={mealType} className="border-b">
                    <td className="py-2 font-semibold">{mealType}</td>
                    <td className="py-2">{meal?.recipe?.name ?? "—"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
