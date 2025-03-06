import TodaysMeal from "./components/TodaysMeal";

export default async function Home() {

  return (
    <div className="flex w-full h-screen">
      <div className="bg-gray-300 pt-12 w-1/8 h-full flex flex-col items-center">
        <h1>
          Sidemenu
        </h1>
      </div>
      <div className="p-8 w-4/5">

        <div className="flex items-center justify-between w-2/3 mb-12">
          <div>
            <h1 className="text-3xl">
              Welcome to foodieplanner
            </h1>
            <p>
              The simple meal planner
            </p>
          </div>
        <div>
          <button className="border rounded-xl px-4 py-2">Add recipes</button>
        </div>
        </div>
        <div>
          <TodaysMeal />
        </div>
      </div>
    </div>
  );
}
