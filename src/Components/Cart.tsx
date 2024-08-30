import './Cart.css';
import { SlClose } from 'react-icons/sl';
import { FaRupeeSign } from 'react-icons/fa';
import { dataObject } from '../Store/cartDetailSlice';
import { useDispatch, useSelector } from 'react-redux';
import { cartToggleFunction } from '../Store/toggleSlice';
import { showState, totalItemState } from '../Store/store';
import React, { useEffect, useRef, useState } from 'react';
import cartNoItem from '../../Public/pageImages/cartNoItem.png';
import { decrementQuantity, deleteItem, incrementQuantity } from '../Store/cartDetailSlice';

function Cart() {
  const inVisibleCard = useSelector((state: showState) => state.showToggle.cart);
  const cartTotalItem = useSelector((state: totalItemState) => state.cartDetail);

  const dispatch = useDispatch();
  const cartRef = useRef<HTMLDivElement>(null);
  const [finalPrice, setFinalPrice] = useState(0);

  const toggleFunction = () => {
    dispatch(cartToggleFunction(false));
  };

  const removeItemFunction = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(deleteItem(e.currentTarget.value));
  };

  const increment = (id: number) => {
    dispatch(incrementQuantity(id));
  };

  const decrement = (id: number) => {
    dispatch(decrementQuantity(id));
  };

  useEffect(() => {
    // Function to calculate the total price of items in the cart
    const calculateCartTotal = () => {
      const totalPrice = cartTotalItem.reduce(
        (total: number, item: dataObject) => total + item.newPrice * item.productQuantity,
        0
      );
      setFinalPrice(totalPrice);
    };

    // Handler to close the cart if clicked outside of it
    const handleClickOutside = (e: MouseEvent) => {
      if (!cartRef.current?.contains(e.target as Node)) {
        dispatch(cartToggleFunction(false));
      }
    };

    // Add event listener for mouse down to detect clicks outside of the cart
    document.addEventListener('mousedown', handleClickOutside);

    // Calculate the cart total price whenever cartTotalItem or dispatch changes
    calculateCartTotal();

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cartTotalItem, dispatch]);

  return (
    <div>
      <div
        ref={cartRef}
        className={`cartContainer ${inVisibleCard ? '' : 'widthChange'}`}
      >
        <div className='yourCart'>
          <p>Your Cart</p>
          <button className='cartCloseButton' onClick={toggleFunction}>
            <SlClose />
          </button>
        </div>

        {Number(cartTotalItem.length) === 0 ? (
          <div className='cartNoItemContainer'>
            <div className='cartNoItemImageContainer'>
              <img src={cartNoItem} alt='Cart Empty' />
            </div>
            <p>No item found</p>
          </div>
        ) : (
          <div className='cartItemContainer'>
            {cartTotalItem.map((item: dataObject) => (
              <div className='cartItem' key={item.id}>
                <div className='cartItemImageContainer'>
                  <img src={item.image} className='cartItemImage' alt='product' />
                </div>
                <div className='cartItemDetail'>
                  <h4>{item.title}</h4>
                  <p>
                    <FaRupeeSign />
                    {item.newPrice}
                  </p>
                  <button value={item.id} onClick={removeItemFunction}>
                    Remove
                  </button>
                </div>
                <div className='cartItemInput'>
                  <button onClick={() => decrement(item.id)}>-</button>
                  <p>{item.productQuantity}</p>
                  <button onMouseDown={() => increment(item.id)}>+</button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className='totalPriceContainer'>
          <div className='totalPrice'>
            <p>Subtotal</p>
            <p>
              <FaRupeeSign />
              {finalPrice}
            </p>
          </div>
          <button>Continue to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
