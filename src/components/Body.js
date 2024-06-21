import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resArray, { swiggyApiData } from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState( []);
  const [searchText, setSearchText] = useState("");
  const [debounceTimer, setDebounceTimer] = useState(null);
  const { loggedInUser, setUserName } = useContext(UserContext);

  //HOC concept
  // const RestaurantWithPromotedLabel = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  // Facing CORS error while fetching live swiggy api[Plan was to load UI with api data]
  const fetchData = async () => {
    //Here, to avoid CORS error, we've have used corsproxy urls
    // const data = await fetch(
    //   "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    // const json = await data.json();
  
    // console.log(
    //   swiggyApiData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    
    setListOfRestaurants(
      // json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      swiggyApiData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurants(
      swiggyApiData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // console.log("RESTAURANT----->>>>",listOfRestaurants)

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>Looks like you're Offline. Please check your internet connection.</h1>
    );
  }

 
  const searchHandler = () => {
    
    console.log("SearchHandler fn called")
    //Filter the restaurant cards and update the UI
    const searchFilteredListOfRestaurants = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredListOfRestaurants(searchFilteredListOfRestaurants);
    //   console.log(searchFilteredListOfRestaurants)
  };

  //Debouncing logic
  const debounceHandler = () => {
    if(debounceTimer){
      clearTimeout(debounceTimer)
    }
    const newTimer = setTimeout(()=> {searchHandler()}, 1000);
    setDebounceTimer(newTimer);
}

  const filterRestaurantHandler = () => {
    //filter logic here
    const filteredListOfRestaurants = listOfRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setListOfRestaurants(filteredListOfRestaurants);
  };

  return (
    <div className="px-200 py-100 mx-10 my-2">
      <div className="flex justify-center mx-8">
        <div className="flex justify-center m-2">
          <div>
            <input
              type="text"
              placeholder="Search for restaurants"
              className="border border-orange-500 mx-2 mr-0 p-1 rounded-md w-[200px]"
              value={searchText} // input box is binded with the state variable 'searchText'
              //NOTE: On every onChange event, <Body/> component re-renders but react updates only the input text value on every render
              // onChange={(e) => {
              //   setSearchText(e.target.value);
              // }} // entered input value should update the 'searchText'
              // onChange={(e) => {
              //   searchHandler(e.target.value);
              // }}
              onChange={(e) => {
                setSearchText(e.target.value);
                debounceHandler();
              }}
            />
            <button
              className="px-4 py-1 m-1 mr-4 ml-0 bg-red-600 rounded-md text-white"
              onClick={() => searchHandler()}
            >
              Search
            </button>
            
    
            <button
              className="px-4 py-1 m-1 bg-green-600 text-white border-r-4 rounded-md"
              onClick={() => filterRestaurantHandler()}
            >
              Filter Top Rated Restaurants
            </button>
            </div>
    
        <div className="flex justify-center m-2 hidden lg:block">
          <label className="mx-2">User Name:</label>
          <input
            className="px-2 border border-black"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {/* Restaurant Card Component */}
        {filteredListOfRestaurants.length === 0 ? (
          <Shimmer />
        ) : (
          filteredListOfRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
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
