import './Cart.css'
import { SlClose } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux';
import { cartToggleFunction } from '../Store/toggleSlice';
import { FaRupeeSign } from "react-icons/fa";
import { decrementQuantity, deleteItem, incrementQuantity } from '../Store/cartDetailSlice';
import cartNoItem from '../../Public/pageImages/cartNoItem.png'
import React, { useEffect, useRef, useState } from 'react';
import { dataObject } from '../Store/cartDetailSlice';
import { showState, totalItemState } from '../Store/store';


function Cart() {

  const inVisibleCard =  useSelector((state: showState) => state.showToggle.cart);
  const cartTotalItem =  useSelector((state: totalItemState ) => state.cartDetail);
  const [finalPrice, setFinalPrice] = useState(0);
  const dispatch = useDispatch() 
  const cartRef = useRef<HTMLDivElement>(null)

  const toggleFunction = () => {
    dispatch(cartToggleFunction(false)) 
  }
  
  const removeItemFunction = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(deleteItem(e.currentTarget.value))
  }

  const increment = (id: number) => {
    dispatch(incrementQuantity(id))
  }
  
  const decrement = (id: number) => {
    dispatch(decrementQuantity(id))
  }
  
  useEffect(() => {

    const cartCalculation = () => {
      const totalPrice = cartTotalItem.reduce((total: number, item: dataObject) => total + (item.newPrice * item.productQuantity), 0);
  
      setFinalPrice(totalPrice)
    }

    const handler = (e: MouseEvent) => {
      if (!cartRef.current?.contains(e.target as Node)) {
        dispatch(cartToggleFunction(false))
      }
    }

    document.addEventListener("mousedown", handler)
    cartCalculation()
  }, [cartTotalItem, dispatch])

  return (
    <div>
      <div ref={cartRef} className={`cartContainer ${inVisibleCard ? "" : "widthChange"}`}>
        <div className='yourCart'>
            <p>Your Cart</p>
        <button className='cartCloseButton' onClick={toggleFunction}><SlClose /></button>
        </div>

          {Number(cartTotalItem.length) ===  0 ? 
          <div className='cartNoItemContainer'>
            <div className='cartNoItemImageContainer'>
              <img src={cartNoItem} alt="Cart Empty" />
            </div>
            <p>No item found</p>
          </div> : 
          <div className='cartItemContainer'>
          {cartTotalItem.map((item: dataObject)=> (
              <div className='cartItem' key={item.id}>
                <div className='cartItemImageContainer'>
                  <img src={item.image} className='cartItemImage' alt="product" />
                </div>
                <div className='cartItemDetail'>
                  <h4>{item.title}</h4>
                  <p><FaRupeeSign />{item.newPrice}</p>
                  <button value={item.id} onClick={removeItemFunction}>Remove</button>
                </div>
                <div className='cartItemInput'>
                  <button  onClick={() => decrement(item.id)}>-</button>
                  <p>{item.productQuantity}</p>
                  <button onMouseDown={() => increment(item.id)}>+</button>
                </div>
              </div>
          ))}
        </div> }

        <div className='totalPriceContainer'>
          <div className='totalPrice'>
            <p>Subtotal</p>
            <p><FaRupeeSign />{finalPrice}</p>
          </div>
          <button>Continue to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
