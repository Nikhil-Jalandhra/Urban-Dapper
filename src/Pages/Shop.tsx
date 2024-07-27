import './Shop.css'
import ProductCard from '../Components/ProductCard';
import productData from '../Database/ProductDatabase';

function Shop() {
  return (
    <div>
        <div className="shopContainer">
            {productData.map((item,index)=> (
                <ProductCard key={index} item={item}/>
            ))}
        </div>
    </div>
  );
}

export default Shop;
