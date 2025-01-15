import { CDN_URL } from "../utils/constant";

const RestaurantCard = (probs) => {
  const { resData } = probs;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;
  return (
    <div className="resto-card">
      <img className="rest-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{deliveryTime}minutes</h4>
    </div>
  );
};
export default RestaurantCard;
