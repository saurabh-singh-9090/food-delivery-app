import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    avgRating,
    sla: { deliveryTime },
    id,
  } = resData?.info;

  return (
    <div className="flex flex-col w-[250px] m-3 p-1 bg-gray-100 rounded-md hover:bg-gray-200">
        <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="flex flex-col p-1">
        <h3 className="font-bold py-1">{name}</h3>
        <div className=" overflow-x-hidden">{cuisines.join(",")}</div>
        <span>{costForTwo}</span>
        <h5>{avgRating} stars</h5>
        <span>Delivery in {deliveryTime} minutes</span>
      </div>
    </div>
  );
};

//Higher Order Component
// input-RestaurantCard, Output - RestaurantCardPromoted

// export const withPromotedLabel = (RestaurantCard) => {
//   return (props) => {
//     return(
//       <div>
//         <label className="absolute">Promoted</label>
//         <RestaurantCard {...props}/>
//       </div>
//     )
//   }
// }

export default RestaurantCard;
