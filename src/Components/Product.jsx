import React from 'react';
import './Product.css';
import { useContext } from 'react';
import { CartContext } from '../App';

export const Product = ({Product}) => {
    const name=Product.name.length>15 ? Product.name.substring(0,15)+'...':Product.name;
    const {cart, setCart} = useContext(CartContext);
    const addCart=()=>{
        setCart([...cart,Product])
    }
    const removeCart=()=>{
        setCart(cart.filter((c)=>c.id!==Product.id));
        
    } 
  return (
    <div className="product">
    <div className='img'>
        <img src={Product.pic} alt={Product.name} />
    </div>
    <div className='details'>
        <h3>{name}</h3>
        <p>Price: Rs:{Product.amt}</p>
         {cart.includes(Product) ? <button className='btnRemove' onClick={removeCart}>Remove from Cart</button> :
        <button onClick={addCart}>Add to Cart</button>}
   </div>
   </div>
  )
}
