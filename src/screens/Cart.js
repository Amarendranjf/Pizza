import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { decrementQuantity, incrementQuantity } from '../redux/CartSlice';
import "./Cart.css"
import AddLocationIcon from '@mui/icons-material/AddLocation';
function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const increasedQuantity = (item) => {
    dispatch(incrementQuantity(item))
  }
  const decreaseQuantity = (item) => {
    dispatch(decrementQuantity(item))
  }
  const total = cart.map((item) => item.price* item.quantity).reduce((curr, prev) => curr+prev,0 );
  return (
    <>
      <Header />
      <div className='cart'>
        <div className='cartLeft'>
          {cart.map((item, index) => (
            <div style={{marginBottom:20, display: "flex", flexDirectio:"row", alignItems:"center", justifyContent:"space-between"}}>
              <div className='cartimage'>
                <img src={item.image} style={{ height: 60, width: 60, borderRadius: 5 }} />
              </div>

              <div className='cartDescription'>
                <h3 className='cartText'>{item.name}</h3>
                <h4 className='cartTextDescription'>{item.description.length>30 ? item.description.substr(0,80)+ "..." : item.description}</h4>
              </div>

              <div style = {{marginLeft:"auto"}} className="cartTotal">
                 <h4>{item.price * item.quantity}</h4>
                 <div className='cartButtons'>
                   <div onClick = {() => decreaseQuantity(item)}className='cardButton'>
                      -
                   </div>
                   <div className='cardButton'>
                      {item.quantity}
                   </div>
                   <div onClick = {() => increasedQuantity(item)}className='cardButton'>
                      +
                   </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
        <div className='cartRight'>
          <h3 className='cartRightText'>Choose delivery address</h3>
          <div className='cardTop'>
            <AddLocationIcon style = {{color:'gray', fontSize:17}}/>
            <div className='cardRightDesc'>
              <h4>Add Location</h4>
            </div>
          </div>

          <h3 className='cartRightText'>Price Details</h3>
          <div>
            <div style = {{display:"flex", alignItems: "center"}}>
              <h4>{total}</h4>
            </div>
          </div>
          <button style={{backgroundColor:"blue",color:"white"}}>Checkout</button>
        </div>
      </div>
    </>

  )
}

export default Cart;
