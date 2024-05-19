import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import resArray from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");

  // const RestaurantWithPromotedLabel = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  // Facing CORS error while fetching live swiggy api[Plan was to load UI with api data]
  const fetchData = async () => {
    //Here, to avoid CORS error, I have used corsproxy urls
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // setListOfRestaurants(resArray); //mockData of swiggy API
    // Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  console.log("RESTAURANT----->>>>",listOfRestaurants)

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false){
    return (
        <h1>
            Looks like you're Offline. Please check your internet connection.
        </h1>
    );

  }

  const searchHandler = () => {
    //Filter the restaurant cards and update the UI
    const searchFilteredListOfRestaurants = listOfRestaurants.filter(
      (res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredListOfRestaurants(searchFilteredListOfRestaurants);
    //   console.log(searchFilteredListOfRestaurants)
  }

  const filterRestaurantHandler = () => {
    //filter logic here
    const filteredListOfRestaurants = listOfRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setListOfRestaurants(filteredListOfRestaurants);
  }

  return (
    <div className="px-200 py-100 mx-10 my-2">
      <div className="flex justify-center">
        <div className="search-bar mb-2">
          <input
            type="text"
            placeholder="Search for restaurants"
            className="border border-orange-500 mx-2 ml-7 p-1 rounded-md w-[250px]"
            value={searchText} // input box is binded with the state variable 'searchText'
            //NOTE: On every onChange event, <Body/> component re-renders but react updates only the input text value on every render
            onChange={(e) => { setSearchText(e.target.value) }} // entered input value should update the 'searchText'
          />
          <button
          className="px-4 py-1 mr-3 bg-orange-200 rounded-md"
          onClick={() => searchHandler()}
          >
            Search
          </button>
        <button
          className="px-4 py-1 bg-green-700 text-white border-r-4 rounded-md"
          onClick={() => filterRestaurantHandler()}
        >
          Filter Top Rated Restaurants
        </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {/* Restaurant Card Component */}
        {filteredListOfRestaurants.length === 0 ? (
          <Shimmer />
        ) : (
          filteredListOfRestaurants.map((restaurant) => (
            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
              {/* If any restaurant is promoted, then we'll render <RestaurantWithPromotedLabel/> component else <RestaurantCard/> */}
              {/* {restaurant.info.promoted ? <RestaurantWithPromotedLabel resData={restaurant}/> : <RestaurantCard resData={restaurant} />} */}
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
