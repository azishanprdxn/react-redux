import React from 'react';
import { useSelector } from 'react-redux';
import { selectCount } from '../features/counter/counterSlice';
import './Cart.css';

const Cart = () => {
  const count = useSelector(selectCount);

  return (
    <div className="cart-section">
      <div className="cart">
        <span className="fa fa-shopping-cart cart-icon" aria-hidden="true"></span>
        {
          (count !== 0 && count >= 0) ? <span className="cart-count">{count}</span> : null
        }
      </div>
    </div>
  )
}

export default Cart;