
export default function TodaysMeal() {
  const todayMeals = [
    { meal: "Breakfast", name: "Oatmeal", status: "ingredients ready" },
    { meal: "Lunch", name: "Pasta", status: "ingredients ready" },
    { meal: "Dinner", name: "Tacos", status: "ingredients ready" },
  ];

    return (
      <div>
          <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Today's Meal</h2>
          <div className="bg-gray-50 shadow-md rounded-lg p-4">
            <table className="w-full">
              <tbody>
                {todayMeals.map((meal, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 font-semibold">{meal.meal}</td>
                    <td className="py-2">{meal.name}</td>
                    <td className="py-2 text-green-600">{meal.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        </div>
    );
  }
  