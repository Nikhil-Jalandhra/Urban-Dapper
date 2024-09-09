import './ProductCard.css';
import { Link } from 'react-router-dom';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import productImage from "../../Public/Images/ProductImages/wallet1.jpg";

interface productCardData {
  item: { 
    id: number;
    title: string;
    description: string;
    newPrice: number;
    oldPrice: number;
    category: string;
    image: string;
    inStock: number;
  }
}

function ProductCard({item}: productCardData) {
  return (
    <div>
      <div className="productCardContainer">
        <div className='productImageContainer'>
            <img src={item?.image || productImage} 
            className='productImage' 
            alt={item?.title} />
        </div>

        <Link to={`/shop/product/${item?.category||"category"}/${item?.id || 5}`}>
          <div className='productCardButton'>View Product</div>
        </Link>

        <div className='productDetail'>    
            <h2 className='productDetailMargin'>{item?.title.slice(0,20)||"title"}...</h2>
            <div className='productPriceContainer productDetailMargin'>
                <h4 className='productPrice'>
                  <MdOutlineCurrencyRupee />
                  {item?.newPrice|| "000"}&nbsp;INR
                </h4>
                <h4 className='productPrice'>
                  <MdOutlineCurrencyRupee />
                  {item?.oldPrice || "000"}&nbsp;INR
                </h4>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
