import Link from "next/link";
import TodaysMeal from "../components/TodaysMeal";
import Weeklyplan from "../components/Weeklyplan";
import Sidebar from "../components/Sidebar";

export default async function Dashboard() {

  return (
    <div className="flex w-full h-screen">
      < Sidebar />
      <div className="p-8 w-4/5">
            <div className="flex justify-between mb-8">
              <div>
                  <h1 className="text-3xl font-semibold">
                    Welcome to foodieplanner
                  </h1>
                  <p>
                    The simple meal planner
                  </p>
                </div>
                  <div>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                    Add Recipes
                  </button>
              </div>
            </div>
              <div>
                <TodaysMeal />
              </div>

              <div>
                <div className="w-full">
              < Weeklyplan />
                </div>
              </div>

        
      </div>
     
    </div>
  );
}
