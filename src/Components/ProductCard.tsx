import { Link } from 'react-router-dom';
import './ProductCard.css';
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
  };
}

function ProductCard({ item }: productCardData) {
  return (
    <div className="productCardContainer">
      <div className="productImageWrapper">
        <img src={item?.image || productImage} alt={item?.title} className="productImage" />
        <Link to={`/shop/product/${item?.category || "category"}/${item?.id || 5}`} className="productCardButton">
          View Product
        </Link>
      </div>

      <div className="productDetail">
        <h3 className="productTitle clamp-1">{item?.title || "title"}</h3>
        <div className="productPriceContainer">
          <h4 className="productPrice">
            <MdOutlineCurrencyRupee />{item?.newPrice || "000"}
          </h4>
          <h4 className="productOldPrice">
            <MdOutlineCurrencyRupee />{item?.oldPrice || "000"}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
