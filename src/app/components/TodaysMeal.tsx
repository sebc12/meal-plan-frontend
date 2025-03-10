import { getPlans } from "@/lib/getPlans";
import { Plan } from "@/types";
import { getISOWeek } from "date-fns";
import MealList from "./MealList";

export default async function TodaysMeal() {
  const weeklyPlan: Plan[] = await getPlans();

  const today = new Date().toLocaleString("en-GB", { weekday: "long" });
  const currentWeek = getISOWeek(new Date());

  const activePlan = weeklyPlan.find((plan) => plan.week === currentWeek);
  if (!activePlan || !activePlan.meals?.length) {
    return <p className="text-center text-gray-500">No meals available for today.</p>;
  }

  return <MealList meals={activePlan.meals} today={today} />;
}
