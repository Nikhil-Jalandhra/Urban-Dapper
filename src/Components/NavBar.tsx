import "./NavBar.css"
import { Link, useLocation } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { cartToggleFunction, navToggleFunction } from "../Store/toggleSlice";
import { useDispatch, useSelector } from "react-redux";
import { showState } from "../Store/store";

function NavBar() {

 const dispatch =  useDispatch();

  const cartToggleState = useSelector((state: showState) => state.showToggle.cart);
  const navToggleState = useSelector((state: showState) => state.showToggle.nav);

  const navLink = [
    { name: "Home", link: "/", },
    { name: "About", link: "/about", },
    { name: "Shop", link: "/shop/All/1", },
    { name: "Blog", link: "/blog/1", }
  ]
  
  const carttoggleFunctionality = () => {
    dispatch(cartToggleFunction(!cartToggleState))
  }

  const navtoggleFunctionality = () => {
    dispatch(navToggleFunction(!navToggleState))
    
  }

  const location = useLocation()

  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    setActiveLink(location.pathname)
  }, [activeLink,location]);
  
  return (
    <div>
      <div className="navbar">

        {/* logo here */}

        <div className="logoContainer">
          <p>URBAN-DAPPER</p>
        </div>

        {/* link here */}

        <div className="navLinkContainer">
          {
            navLink.map((item,index)=> (
              <Link key={index} to={item.link} className={`${activeLink === item.link ? "navLinkActiveCss" : ""}`}>
                <div className={`navLink`}>
                  <p>{item.name}</p>
                </div>
              </Link>
            ))
          }
        </div>

        {/* contact & cart here */}

        <div className="ccContainer">
          <Link to="/login">
          <div className={`${["/login", "/signup"].includes(activeLink) ? "navLinkActiveCss" : ""}`}>
            <BsPersonCircle />
          </div></Link>

          <div onClick={carttoggleFunctionality}><HiMiniShoppingCart /></div>

          <div className="navBarIcon" onClick={navtoggleFunctionality}><GiHamburgerMenu /></div>

        </div>

      </div>
    </div>
  );
}

export default NavBar;
