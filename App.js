import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://st3.depositphotos.com/10195522/37170/v/450/depositphotos_371700660-stock-illustration-food-delivery-icon-vector-graphic.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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

const resList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "1",
      name: "KFC",
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/4c1906b4-f727-434b-8496-a2e669269dde_243625.JPG",

      cuisines: ["Burger", "Biryani", "Fast Food", "Snaks", "American"],
      costForTwo: 40000,
      avgeRating: "4.2",
      deleveryTime: 36,
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "2",
      name: "Burger King",
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/16/a989969b-13f9-4931-8ebc-df9515dc8d2f_675289.jpg",
      cuisines: ["Burger", "Biryani", "Fast Food", "Snaks", "American"],
      costForTwo: 40000,
      avgeRating: "4.2",
      deleveryTime: 36,
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "3",
      name: "McDonald's",
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/a6317ac5-d089-45bf-a392-c5384cbdd1e8_506982.jpg",
      cuisines: ["Burger", "Biryani", "Fast Food", "Snaks", "American"],
      costForTwo: 40000,
      avgeRating: "4.2",
      deleveryTime: 36,
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "4",
      name: "Domino's Pizza",
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/1/c6f74d18-edb2-42d1-8f69-f91efb943c32_25396.jpg",
      cuisines: ["Burger", "Biryani", "Fast Food", "Snaks", "American"],
      costForTwo: 40000,
      avgeRating: "4.2",
      deleveryTime: 36,
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "5",
      name: "Cafe Arabia",
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/3/11/cd029f04-9123-4304-ac0a-f242f4c64cb9_19bd9e19-b1d3-4010-90ed-e5187a93aeef.png_compressed",
      cuisines: ["Burger", "Biryani", "Fast Food", "Snaks", "American"],
      costForTwo: 40000,
      avgeRating: "4.2",
      deleveryTime: 36,
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "6",
      name: "Krushna Pure Veg",
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ohrooroghiooqsfytjri",
      cuisines: ["Burger", "Biryani", "Fast Food", "Snaks", "American"],
      costForTwo: 40000,
      avgeRating: "4.2",
      deleveryTime: 36,
    },
  },
];
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resto-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={resList.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const APPLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<APPLayout />);
