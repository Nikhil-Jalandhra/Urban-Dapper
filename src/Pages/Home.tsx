import "./Home.css"
import { Link } from "react-router-dom";
import OurStory from "../Components/OurStory";
import blogData from "../Database/blogDatabase";
import product from "../Database/ProductDatabase";
import ProductCard from "../Components/ProductCard";
import homeImage from "../../Public/pageImages/homeImage1.jpg"
import BlogCard from "../Components/BlogCard";

function Home() {

    const uniqueCategories = Array.from(new Set(product.map(item => item.category)));
    const uniqueItem = uniqueCategories
    .map(uniqueCategory => product.find((item) => item.category === uniqueCategory ))
    .filter((item): item is { id: number; title: string; description: string; newPrice: number; oldPrice: number; category: string; image: string; inStock: number; } => item !== undefined);
    
  return (
    <div>

        {/* Home display image */}

        <div className="homeImageContainer">
            <img src={homeImage} alt="Clothes Image" className="homeImage" />
        </div>

        {/* Home image text */}

        <div className="homeTextContainer">

            <div className="homeTextContainerHeading">
                <h2 className="homeHeadingText">Crafted</h2>
            </div>

            <div className="homeTextContainerHeading2">
                <h2 className="homeHeadingText2">for Confidence</h2>
            </div>

        </div>

        {/* Our story */}

        <OurStory/>

        <div className="prouductFeaturedCardContainer">
            <Link to={"/shop/All"}><h1>Products</h1></Link>
            <div className="prouductCardsContainer">
                {uniqueItem.map((item, index) => 
                    ( index <= 3 && <ProductCard item={item} key={index}/>))}
            </div>
        </div>


        <div className="blogFeaturedCardContainer">
            <Link to={"/Blog"}><h1>Latest Blogs</h1></Link>
            <div className="blogCardsContainer">
                {blogData.map((item)=> (
                    item.id <= 3 &&  <BlogCard key={item.id} item={item}/> 
                ))}
            </div>
        </div>

    </div>
  );
}

export default Home;