import './Cart.css'
import { SlClose } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux';
import { cartToogleFunction } from '../Store/cartShowHideSlice';
import { FaRupeeSign } from "react-icons/fa";
import { decrementQuantity, deleteItem, incrementQuantity } from '../Store/cartDetailSlice';
import cartNoItem from '../../Public/pageImages/cartNoItem.png'
import { useEffect, useState } from 'react';

function Cart() {

  const inVisibleCard =  useSelector((state) => state.cartToogle);
  const cartTotalItem =  useSelector((state) => state.cartDetail);
  const [finalPrice, setFinalPrice] = useState(0);
  const dispatch = useDispatch() 

  const toogleFunction = () => {
    dispatch(cartToogleFunction(false))
  }
  
  const removeItemFunction = (e) => {
    dispatch(deleteItem(e.target.value))
  }

  const cartCalculation = () => {
    const totalPrice = cartTotalItem.reduce((total, item) => total + (item.newPrice * item.productQuantity), 0);

    setFinalPrice(totalPrice)
  }

  const increment = (id) => {
    dispatch(incrementQuantity(id))
  }
  
  const decrement = (id) => {
    dispatch(decrementQuantity(id))
  }
  
  useEffect(() => {
    cartCalculation()
  }, [cartTotalItem])

  return (
    <div>
      <div className={`cartContainer ${inVisibleCard ? "" : "widthChange"}`}>
        <div className='yourCart'>
            <p>Your Cart</p>
        <button className='cartCloseButton' onClick={toogleFunction}><SlClose /></button>
        </div>

          {Number(cartTotalItem.length) ===  0 ? 
          <div className='cartNoItemContainer'>
            <div className='cartNoItemImageContainer'>
              <img src={cartNoItem} alt="Cart Empty" />
            </div>
            <p>No item found</p>
          </div> : 
          <div className='cartItemContainer'>
          {cartTotalItem.map((item)=> (
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
