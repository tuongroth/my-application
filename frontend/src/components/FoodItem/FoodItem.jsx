import { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import './FoodItem.css';

const FoodItem = ({ id, name, price, description, image }) => {
  // Get cart state and functions from context
  const { addToCart, removeFromCart, cartItems } = useContext(StoreContext);
  // Get the current count of this item in the cart (default to 0)
  const itemCount = cartItems[id] || 0;

  return (
    <div className="food-item">
      {/* Food Image Section */}
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
      </div>

      {/* Food Info */}
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price.toFixed(2)}</p>
      </div>

      {/* Food Item Counter */}
      <div className="food-item-counter">
        {itemCount === 0 ? (
          // Show only the add button if count is 0
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_green}
            alt="Add"
          />
        ) : (
          // Show counter with remove, current count, and add buttons if count > 0
          <>
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove"
            />
            <p>{itemCount}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Add"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default FoodItem;
