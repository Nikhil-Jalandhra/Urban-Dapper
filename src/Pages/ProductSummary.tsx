import './ProductSummary.css'
import { useParams } from "react-router-dom";
import productData from "../Database/ProductDatabase";
import { MdOutlineCurrencyRupee} from "react-icons/md";

function ProductSummary() {

    const {id} = useParams()

    const heroProduct = productData.find(item => item.id === Number(id))

  return (
    <div>
        <div className="heroProductContainer">

                <div className='heroProductImageContainer'>
                    <div className='productSummaryImage'>
                    <img className='heroProductImage' src={heroProduct?.image} alt={heroProduct?.title} />
                    </div>
                </div>


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
                            <p>1</p>
                        </div>
                        <div className='heroProductStock'>
                            <p>InStoke</p>
                            <p>{heroProduct?.inStock}</p>
                        </div>
                    </div>
                    <button>
                        + Add to cart
                    </button>
                
            </div>
        </div>
    </div>
  );
}

export default ProductSummary;