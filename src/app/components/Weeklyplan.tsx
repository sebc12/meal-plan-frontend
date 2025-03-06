

export default async function Weeklyplan() {

  const todayMeals = [
    { meal: "Breakfast", name: "Oatmeal", status: "ingredients ready" },
    { meal: "Lunch", name: "Pasta", status: "ingredients ready" },
    { meal: "Dinner", name: "Tacos", status: "ingredients ready" },
  ];

  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


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
                {todayMeals.map((meal, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 font-semibold">{meal.meal}</td>
                    {weekDays.map((_, i) => (
                      <td key={i} className="py-2">{i === 0 ? meal.name : "—"}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
    </div>
  );
}
