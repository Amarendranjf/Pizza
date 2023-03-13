import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/CartSlice'
import "./PizzaItem.css"
const PizzaItem = ({ pizza }) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  }
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };

  
  return (
    <div className='pizzaItem'>
      <div className='pizzaItemOuterContainer'>
        <img src={pizza.image} style={{ width: 170, height: 80 }} />
        <div className='pizzaItemContainer'>
          <h4 className='pizzaItemText'>{pizza.name}</h4>
          <h4 className='pizzaItemDescription'>{pizza.description.length > 30 ? pizza.description.substr(0, 30) + "..." : pizza.description}</h4>
          {cart.some((c) => c.id === pizza.id) ? (
            <button onClick={() => removeItemFromCart(pizza)}
            className = "pizzaItemButton">
               Remove from Cart
            </button>
          ) : (
            <button onClick={() => addItemToCart(pizza)}
            className = "pizzaItemButton">
               Add to Cart
            </button>
          )}
        
        </div>
      </div>
    </div>
  )
}

export default PizzaItem
