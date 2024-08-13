import './ProductSummary.css'
import { useParams } from "react-router-dom";
import productData from "../Database/ProductDatabase";
import { MdOutlineCurrencyRupee} from "react-icons/md";
import { MdOutlineAddCircle } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addDetails } from '../Store/cartDetailSlice';
import React, { useState } from 'react';
import { cartToggleFunction } from '../Store/cartShowHideSlice';

function ProductSummary() {

    const {id} = useParams()
    const dispatch = useDispatch()
    const heroProduct = productData.find(item => item.id === Number(id))
    const [productQuantity, setProductQuantity] = useState(1);

    const productAddToCart = (e: React.FormEvent) => {
        e.preventDefault()
        const finalProduct = {productQuantity, ...heroProduct}
        dispatch(addDetails(finalProduct))
        dispatch(cartToggleFunction(true))
        setProductQuantity(1)
    }

    
  return (
    <div>
        <div className="heroProductContainer">

                <div className='heroProductImageContainer'>
                    <div className='productSummaryImage'>
                    <img className='heroProductImage' src={heroProduct?.image} alt={heroProduct?.title} />
                    </div>
                </div>

                <form onSubmit={productAddToCart}>
                    <div className='heroProductDetails'>
                        <h1>{heroProduct?.title}</h1>
                        <div className='heroProductPrice'>
                            <p><MdOutlineCurrencyRupee/>{heroProduct?.newPrice} INR</p>
                            <p><MdOutlineCurrencyRupee/>{heroProduct?.oldPrice} INR</p>
                        </div>
                        <div className='heroProductDescription'>
                        <p>{heroProduct?.description}</p>
                        </div>
                        <div className='heroProductQuantityStock'>
                            <div className='heroProductQuantity'>
                                <p>Quantity</p>
                                <div className='qunatityInput'>
                                <input 
                                    type="number" 
                                    onChange={(e)=>setProductQuantity(Number(e.target.value))} 
                                    value={productQuantity} 
                                    min={1} 
                                    max={Number(heroProduct?.inStock)}/>
                                </div>
                            </div>
                            <div className='heroProductStock'>
                                <p>InStoke</p>
                                <p>{heroProduct?.inStock}</p>
                            </div>
                        </div>
                        <button className='addToCart' type='submit'>
                        <MdOutlineAddCircle />&nbsp;Add to cart
                        </button>
                    
                </div>
            </form>
        </div>
    </div>
  );
}

export default ProductSummary;
