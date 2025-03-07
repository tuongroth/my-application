import { useState, useContext } from "react";
import { assets } from "../../assets/assets";
import './FoodItem.css'


const FoodItem = ({ id, name, price, description, image }) => {
 
  return (
    <div className="food-item">
      {/* Food Image Section */}
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        
      </div>



      {/* Food Info */}
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price.toFixed(2)}</p>
      </div>

   
    </div>
  );
};

export default FoodItem;
