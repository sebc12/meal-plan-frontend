
export default function TodaysMeal() {

    return (
      <div>
          <div >
            <div className="mb-4">
              <h2 className="text-2xl">
                Todays meal
              </h2>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl w-2/3 ">
              <ul className="space-y-4 p-2">
                <li className="flex justify-between">
                  <h3>
                    Breakfast
                  </h3>
                  <p>
                    Oatmeal
                  </p>
                  <p>
                    ingredients ready
                  </p>
                </li>
                <li className="flex justify-between">
                  <h3>
                    Lunch
                  </h3>
                  <p>
                    Pasta
                  </p>
                  <p>
                    ingredients ready
                  </p>
                </li>
                <li className="flex justify-between">
                  <h3>
                    Dinner
                  </h3>
                  <p>
                    Tacos
                  </p>
                  <p>
                    ingredients ready
                  </p>
                </li>  
              </ul>
            </div>
          </div>
        </div>
    );
  }
  