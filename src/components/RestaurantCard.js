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
      <h5>{cuisines.join(",")}</h5>
      <h5>{costForTwo}</h5>
      <h5>{avgRating} stars</h5>
      <h5>Delivery in {deliveryTime} minutes</h5>
    </div>
  );
};

export default RestaurantCard;
