import TodaysMeal from "./components/TodaysMeal";
import Weeklyplan from "./components/Weeklyplan";

export default async function Home() {

  return (
    <div className="flex w-full h-screen">
      <div className="bg-gray-100 pt-12 w-1/6 h-full flex flex-col items-center">
        <h1>
          Sidemenu
        </h1>
      </div>
      <div className="p-8 w-full">
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
