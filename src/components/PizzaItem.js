import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/CartSlice'
import "./PizzaItem.css"
const PizzaItem = ({ pizza }) => {

  const [value, setValue] = useState("Fresh Veggies")
  const [size, setSize] = useState("regular")
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  }
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };


  const handleChange = (e) => {

    setValue(e.target.value);

  }

  const handleSize = (e) => {

    setSize(e.target.value);

  }


  return (
    <div className='pizzaItem'>
      <div className='pizzaItemOuterContainer'>
        <img src={pizza.image} style={{ width: 170, height: 80 }} />
        <div className='pizzaItemContainer'>
          <h4 className='pizzaItemText'>{pizza.name}</h4>
          <h4 className='pizzaItemDescription'>{pizza.description.length > 30 ? pizza.description.substr(0, 30) + "..." : pizza.description}</h4>
          <div>

            <select value={value} onChange={(e) => handleChange(e)}>

              <option value="Fresh Veggies">Fresh Tomatoes</option>

              <option value="Zucchini">Zucchini</option>

              <option value="Broccoli">Broccoli</option>

            </select>

          </div>

          <div>

            <select value={size} onChange={(e) => handleSize(e)}>

              <option value="1">Regular</option>

              <option value="1.5">Medium</option>

              <option value="2">Large</option>

            </select>

          </div>


          {cart.some((c) => c.id === pizza.id) ? (

            <button onClick={() => removeItemFromCart({ ...pizza, "toppings": value, "size": size })}
              className="pizzaItemButton">
              Remove from Cart
            </button>
          ) : (
            <button onClick={() => addItemToCart({ ...pizza, "toppings": value, "size": size })}
              className="pizzaItemButton">
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default PizzaItem
