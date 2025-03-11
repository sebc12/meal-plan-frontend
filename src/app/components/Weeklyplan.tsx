import { getPlans } from "@/lib/getPlans";
import { Plan } from "@/types";
import { getISOWeek } from "date-fns";
import WeeklyList from "./WeeklyList";

export default async function Weeklyplan() {
  const weeklyPlan: Plan[] = await getPlans();

  const currentWeek = getISOWeek(new Date());
  const activePlan = weeklyPlan.find((plan) => plan.week === currentWeek);

  return <WeeklyList week={currentWeek} plan={activePlan} />;
}
