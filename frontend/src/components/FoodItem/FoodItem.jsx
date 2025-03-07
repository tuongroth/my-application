import './FoodItem.css'; // Correct path for CSS import
import React from 'react';
import { assets } from '../../assets/assets'; // Corrected import statement

const FoodItem = ({ id, name, price, description, image }) => { // Corrected parameter destructuring

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" /> {/* Fixed syntax for className and src */}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_stars} alt="" /> {/* Fixed syntax for assets and img src */}
        </div>

        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p> {/* Fixed closing parenthesis */}
      </div>
    </div>
  );
};

export default FoodItem; // Don't forget to export the component!
