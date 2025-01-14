const RestaurantCard = (probs) => {
  const { resData } = probs;
  const { src, name, cuisines, avgeRating, costForTwo, deleveryTime } =
    resData?.data;
  return (
    <div className="resto-card">
      <img className="rest-logo" src={src} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgeRating}stars</h4>
      <h4>₹ {costForTwo / 100} FOR TWO</h4>
      <h4>{deleveryTime}minutes</h4>
    </div>
  );
};
export default RestaurantCard;
