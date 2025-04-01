import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {
    const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

    // Calculate Subtotal
    const subtotal = food_list.reduce((acc, item) => {
        return acc + item.price * (cartItems[item._id] || 0);
    }, 0);

    // Delivery Fee (Static for now, you can change it dynamically)
    const deliveryFee = subtotal > 0 ? 2.0 : 0; 

    // Total Cost
    const total = subtotal + deliveryFee;

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

                <br />
                <hr />

                {food_list.map((item) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div key={item._id} className='cart-items-title cart-items-item'>
                                <img src={item.image} alt={item.name} width="50" />
                                <p>{item.name}</p>
                                <p>${item.price.toFixed(2)}</p>
                                <p>{cartItems[item._id]}</p>
                                <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>
                                <button onClick={() => removeFromCart(item._id)}>Remove</button>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>

            {/* Cart Total Section */}
            <div className="cart-total">
                <div className="cart-total-details">
                    <p>Subtotal</p>
                    <p>${subtotal.toFixed(2)}</p>
                </div>

                <hr />

                <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>${deliveryFee.toFixed(2)}</p>
                </div>

                <hr />

                <div className="cart-total-details">
                    <b>Total</b>
                    <b>${total.toFixed(2)}</b>
                </div>

                <button className="checkout-button">PROCEED TO CHECKOUT</button>
            </div>

            {/* Promo Code Section */}
            <div className="cart-promocode">
                <p>If you have a promo code, enter it here:</p>
                <div className="cart-promocode-input">
                    <input type="text" placeholder="Enter promo code" />
                    <button>Apply</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
