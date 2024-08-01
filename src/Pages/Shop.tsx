import './Shop.css'
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import productData from '../Database/ProductDatabase';
import { useEffect, useState } from 'react';
import Loader from '../Components/Loader';

function Shop() {

  const filterLink = [
    {
      link: "/shop/All",
      value: "All",
      text: "All"
    },
    {
      link: "/shop/Belts",
      value: "Belts",
      text: "Belts"
    },
    {
      link: "/shop/Jackets",
      value: "Jacktes",
      text: "Jacktes"
    },
    {
      link: "/shop/Shoes",
      value: "Shoes",
      text: "Shoes"
    },
    {
      link: "/shop/T-Shirts",
      value: "T-Shirts",
      text: "T-Shirts"
    },
    {
      link: "/shop/Wallets",
      value: "Wallets",
      text: "Wallets"
    },
  ]

  const [filterCategory, setFilterCategory] = useState("All");
  const [finalProductsData, setFinalProductsData] = useState(productData);
  const [loader, setLoader] = useState(true);

  const currentlocation = location.pathname
  
  useEffect(() => {
    setFilterCategory(currentlocation.slice(6))
    const timer = Math.floor(Math.random() * (2000 - 1000 + 1) + 1000 )
    filterFunction()
    setTimeout(() => {
      setLoader(false)
    }, timer)

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
         {filterLink.map((item)=> (
          <Link to={item.link} onClick={setFilterValue} ><button value={item.value}>{item.text}</button></Link>
         ))} 
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
