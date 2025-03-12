import Link from "next/link";
import TodaysMeal from "../app/components/TodaysMeal";
import Weeklyplan from "../app/components/Weeklyplan";
export default async function Dashboard() {

  return (
    <div className="flex h-screen">
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
