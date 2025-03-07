import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem'; // Import the FoodItem component if not already imported

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list"> {/* Fixed missing opening div tag */}
        {food_list.map((item, index) => {
          return (
            <FoodItem 
              key={index} 
              id={item._id} 
              name={item.name} 
              description={item.descr} 
              price={item.price} 
              image={item.image} 
            />
          );
        })}
      </div> {/* Fixed missing closing div tag */}
    </div>
  );
};

export default FoodDisplay;
