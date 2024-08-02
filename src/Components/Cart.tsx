import './Cart.css'
import { SlClose } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux';
import { cartToogleFunction } from '../Store/cartShowHideSlice';

function Cart() {

  const inVisibleCard =  useSelector((state) => state.cartToogle)
  const dispatch = useDispatch() 

  const toogleFunction = () => {
    dispatch(cartToogleFunction(!inVisibleCard))
  }

  console.log(inVisibleCard);
  

  return (
    <div>
      <div className={`cartContainer ${inVisibleCard ? "" : "widthChange"}`}>
        <div className='yourCart'>
            <p>Your Cart</p>
        <button className='cartCloseButton' onClick={toogleFunction}><SlClose /></button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
