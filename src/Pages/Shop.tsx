import './Shop.css'
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import productData from '../Database/ProductDatabase';
import { useEffect, useState } from 'react';
import Loader from '../Components/Loader';

function Shop() {

  const [filterCategory, setFilterCategory] = useState("All");
  const [finalProductsData, setFinalProductsData] = useState(productData);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = Math.floor(Math.random() * (3000 - 1000 + 1) + 1000 )
    filterFunction()
    setTimeout(() => {
      setLoader(false)
    }, timer);
  }, [filterCategory]);

  const  setFilterValue = (e) => {
    setFilterCategory(e.target.value)
  }

  const filterFunction = () => {
    if(filterCategory === "All"){
       setFinalProductsData(productData)
      }else {
        const data = productData.filter((item)=> (item.category === filterCategory))
        setFinalProductsData(data)
    }
    setLoader(true)
  }
  

  return (
    <div>
      <div className='productCardsContainer'>
        <div className='productsFilter'>
          <Link to={`/shop/All`}><button value="All" onClick={setFilterValue}>All</button></Link> 
          <Link to={`/shop/Belts`}><button value="Belts" onClick={setFilterValue} >Belts</button></Link> 
          <Link to={`/shop/Jackets`}><button value="Jackets" onClick={setFilterValue} >Jackets</button></Link> 
          <Link to={`/shop/Shoes`}><button value="Shoes" onClick={setFilterValue} >Shoes</button></Link> 
          <Link to={`/shop/T-Shirts`}><button value="T-Shirts" onClick={setFilterValue} >T-Shirts</button></Link>
          <Link to={`/shop/Wallets`}><button value="Wallets" onClick={setFilterValue} >Wallets</button></Link> 
        </div> 
        {loader ? <Loader/> :
          <div className="shopContainer">
          {finalProductsData.map((item,index)=> (
              <ProductCard key={index} item={item}/>
          ))}
          </div>
        }
      </div>
    </div>
  );
}


export default Shop;
