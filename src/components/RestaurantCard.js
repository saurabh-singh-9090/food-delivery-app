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
  } = resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <p>{cuisines.join(",")}</p>
      <span>{costForTwo}</span>
      <h5>{avgRating} stars</h5>
      <span>Delivery in {deliveryTime} minutes</span>
    </div>
  );
};

export default RestaurantCard;
