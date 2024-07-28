import './Shop.css'
import ProductCard from '../Components/ProductCard';
import productData from '../Database/ProductDatabase';
import { useEffect, useState } from 'react';

function Shop() {

  const [filterCategory, setFilterCategory] = useState("All");
  const [finalProductsData, setFinalProductsData] = useState(productData);

  useEffect(() => {
    filterFunction()
  }, [filterCategory]);


  const  setFilterValue = (e) => {
    setFilterCategory(e.target.value)
  }

  console.log(filterCategory)

  const filterFunction = () => {
    if(filterCategory === "All"){
       setFinalProductsData(productData)
      }else {
        const data = productData.filter((item)=> (item.category === filterCategory))
        setFinalProductsData(data)

    }
  }
  

  return (
    <div>
      <div className='productCardsContainer'>
        <div className='productsFilter'>
          <button value="All" onClick={setFilterValue}>All</button> 
          <button value="Belts" onClick={setFilterValue} >Belts</button> 
          <button value="Jackets" onClick={setFilterValue} >Jackets</button> 
          <button value="Shoes" onClick={setFilterValue} >Shoes</button> 
          <button value="T-Shirts" onClick={setFilterValue} >T-Shirts</button>
          <button value="Wallets" onClick={setFilterValue} >Wallets</button> 
        </div> 
        <div className="shopContainer">
            {finalProductsData.map((item,index)=> (
                <ProductCard key={index} item={item}/>
            ))}
        </div>
      </div>
    </div>
  );
}


export default Shop;
