import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {
    const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                
                {food_list.map((item) => {
                    if (cartItems[item.id] > 0) {
                        return (
                            <div key={item.id} className="cart-item">
                                <p><img src={item.image} alt={item.name} width="50" /></p>
                                <p>{item.name}</p>
                                <p>${item.price}</p>
                                <p>{cartItems[item.id]}</p>
                                <p>${(item.price * cartItems[item.id]).toFixed(2)}</p>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default Cart;
