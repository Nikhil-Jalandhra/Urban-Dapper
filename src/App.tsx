import "./App.css";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Loader from "./Components/Loader";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import Shop from "./Pages/Shop";
import ProductSummary from "./Pages/ProductSummary";
import Blog from "./Pages/Blog";
import BlogSummary from "./Pages/BlogSummary";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Cart from "./Components/Cart";
import NavBarLink from "./Components/NavBarLink";

function App() {

  useEffect(() => {
    const timer = Math.floor(Math.random() * (3000 - 1000 + 1) + 1000 );
    setTimeout(()=>{
      setLoaderFalse(false);
    }, timer) 
  },);

  const [loaderFalse, setLoaderFalse] = useState(true);

  return (
    <>
      {loaderFalse ? <Loader/> : 
        <Router>
          <NavBar/>
          <NavBarLink/>
          <Cart/>
            <Routes>
              <Route element={<Home/>} path="/"/> 
              <Route element={<About/>} path="/about"/>
              <Route element={<Shop/>} path="/shop/:category"/>
              <Route element={<ProductSummary/>} path="/shop/product/:category/:id" />
              <Route element={<Blog/>} path="/blog"/>
              <Route element={<BlogSummary/>} path="/blog/:blogId/:title"/>
              <Route element={<Contact/>} path="/contact"/>
              <Route element={<Login/>} path="/login"/>
              <Route element={<SignUp/>} path="/signup"/>
            </Routes>
          <Footer/>
        </Router>
      }
    </>
  )
}

export default App
