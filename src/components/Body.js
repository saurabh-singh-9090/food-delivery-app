import RestaurantCard from "./RestaurantCard";
import resArray from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    //State variable - It's a super powewrful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resArray);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic here
            const filteredListOfRestaurants = listOfRestaurants.filter((restaurant)=> restaurant.info.avgRating > 4);
            setListOfRestaurants(filteredListOfRestaurants)
            console.log(filteredListOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* Restaurant Card Component */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
