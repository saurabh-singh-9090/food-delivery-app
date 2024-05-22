import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () =>{

    const [showIndex, setShowIndex] = useState(null);

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null){
        return <Shimmer/>;
    }

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards }= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log("itemCards--->>>",resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    return resInfo === null ? (
      <Shimmer />
    ) : (
      <div className="flex flex-col border solid border-red-700">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-2xl py-4">{name}</h1>
          <p className="font-bold text-lg">
            {cuisines.join(", ")} - {costForTwoMessage}
          </p>
        </div>
        {/* <ul>
                {itemCards?.map(item => <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100 || item.card.info.name.defaultPrice/100}</li>)}
            </ul> */}
        {/* Category Accordions */}
        {categories.map((category, index) => (
          // Controlled component
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    );
}

export default RestaurantMenu;