import React from 'react'
import "./Body.css"
import pizza from '../data/pizza'
import PizzaItem from './PizzaItem'
import { useSelector } from 'react-redux'
const Body = () => {
    const data = pizza;
    const cart = useSelector((state) => state.cart.cart);
    console.log(cart);
  return (
    <div className='body'>
      {data.map((item, index) => (
        <PizzaItem pizza = {item} key = {index}/>
      ))}
    </div>
  )
}

export default Body
