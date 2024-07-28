import './Shop.css'
import ProductCard from '../Components/ProductCard';
import productData from '../Database/ProductDatabase';

function Shop() {
  return (
    <div>
      <div className='productCardsContainer'>
        <div className='productsFilter'>
          <button>All</button> 
          <button>Belts</button> 
          <button>Jackets</button> 
          <button>Shoes</button> 
          <button>T-Shirts</button>
          <button>Wallets</button> 
        </div> 
        <div className="shopContainer">
            {productData.map((item,index)=> (
                <ProductCard key={index} item={item}/>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
