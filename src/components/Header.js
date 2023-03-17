import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./Header.css";
import { ShoppingCart } from '@mui/icons-material';

const Header = () => {
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  return (
    <div className='header'>
      <div className='headerLeft'>
        <img className='image' src = "https://pizzaonline.dominos.co.in/static/assets/logo_white.svg" alt= "image"/>
      </div>

      <div onClick = {()=> navigate("/cart")} style={{position: "relative", cursor: "pointer"}}>
        <ShoppingCart style = {{color: "white"}}/>
        <span style={{backgroundColor: "white", width: 14, height: 14, borderRadius:
      7, textAlign: "center", position:"absolute",bottom:14,left:14, fontSize:13, fontWeight:"400"}}>{cart.length}</span>
      </div>

      <div className='headerRight'>
        <h1 className='headerText'>Ch Amarendra</h1>
        <h4 className  = 'headerText'>8374766599</h4>
      </div>
    </div>
  )
}

export default Header
