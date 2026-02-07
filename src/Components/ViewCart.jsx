import React, { useEffect } from 'react';
import './ViewCart.css';
import { useState,useContext } from 'react';
import { CartContext } from '../App';


export const ViewCart = () => {
  const {cart} = useContext(CartContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((sum, curr) => sum + parseInt(curr.amt), 0));
  }, [cart]);
  
  return (
    <>
    <h1 className='cart-heading'>Shopping Cart</h1>
    <div className="cart-container">
      {
        cart.map((product)=>(
          <div key={product.id} className="cart-product" >
            <div className='img'>
              <img src={product.pic} alt={product.name} />
            </div>
            <div className="cart-product-details">
              <h3>{product.name}</h3>
              <p>Price Rs: {product.amt}</p>
            </div>
          </div>
        ))}
      </div>
    <h2 className='cart-amt'>Total Amount Rs: {total}</h2>
    </>
  )
}
