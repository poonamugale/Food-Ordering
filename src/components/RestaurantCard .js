import { CDN_URL } from "../utils/constant";

const RestaurantCard = (probs) => {
  const { resData } = probs;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="resto-card bg-gray-100 m-4 p-4 w-[250px] rounded-lg hover:bg-gray-400">
      <img
        className="rest-logo rounded-lg w-[250] h-[200]"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};
export default RestaurantCard;
