import './Shop.css';
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';
import { Link, useLocation } from 'react-router-dom';
import productData from '../Database/ProductDatabase';
import { MouseEvent, useEffect, useState } from 'react';

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
  ];

  const [filterCategory, setFilterCategory] = useState("All");
  const [finalProductsData, setFinalProductsData] = useState(productData);
  const [currentloaction, setCurrentloaction] = useState("shop/All");
  const [loader, setLoader] = useState(true);
  const currentLinklocation = useLocation();

  useEffect(() => {
    // Function to filter product data based on category
    const filterFunction = () => {
      if (filterCategory === "All") {
        setFinalProductsData(productData);
      } else {
        const data = productData.filter(item => item.category === filterCategory);
        setFinalProductsData(data);
      }
      setLoader(true);
    };
  
    // Update filterCategory and currentLinklocation
    setFilterCategory(currentLinklocation.pathname.slice(6));
    setCurrentloaction(currentLinklocation.pathname);
    
    // Call the filter function to update the products data
    filterFunction();
  
    // Random timer between 1000ms and 2000ms to simulate loading
    const timer = Math.floor(Math.random() * (2000 - 1000 + 1) + 1000);
    setTimeout(() => {
      setLoader(false);
    }, timer);
  
  }, [filterCategory, currentLinklocation.pathname]);
  
  
  const  setFilterValue = (e: MouseEvent<HTMLButtonElement>) => {
    setFilterCategory(e.currentTarget?.value)
  }
    
  return (
    <div>
      <div className='productCardsContainer'>
        <div className='productsFilter'>
         {filterLink.map((item)=> (
          <Link to={item.link} key={item.text} ><button onClick={setFilterValue} className={`${currentloaction === item.link ? "filterLinkActiveCss": ""}`} value={item.value}>{item.text}</button></Link>
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
