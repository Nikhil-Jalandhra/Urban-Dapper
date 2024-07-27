import './ProductCard.css'
import { MdOutlineCurrencyRupee } from "react-icons/md";

function ProductCard({item}) {
  return (
    <div>
      <div className="productCardContainer">
        <div className='productImageContainer'>
            <img src={item.image} className='productImage' alt={item.title} />
        </div>

        <div className='productCardButton'>View Product</div>

        <div className='productDetail'>    
            <h2 className='productDetailMargin'>{item.title.slice(0,20)}...</h2>
            <div className='productPriceContainer productDetailMargin'>
                <h4 className='productPrice'><MdOutlineCurrencyRupee />{item.newPrice}&nbsp;INR</h4>
                <h4 className='productPrice'><MdOutlineCurrencyRupee />{item.oldPrice}&nbsp;INR</h4>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
