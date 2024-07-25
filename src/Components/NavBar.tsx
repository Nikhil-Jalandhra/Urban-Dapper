import "./NavBar.css"
import { Link } from "react-router-dom";
import logo from "../../Public/Logo/OnlyLogo.png"
import { BsPersonCircle } from "react-icons/bs";
import { HiMiniShoppingCart } from "react-icons/hi2";

function NavBar() {

  const navLink = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Shop",
      link: "/shop"
    },
    {
      name: "Blog",
      link: "/blog"
    },
    {
      name: "Contact",
      link: "/Contact"
    },
  ]

  return (
    <div>
      <div className="navbar">

        {/* logo here */}

        <div className="logoContainer">
          <div className="logo">
            <img src={logo} className="logo" alt="Logo" />
          </div>
          <p>URBAN-DAPPER</p>
        </div>

        {/* link here */}

        <div className="navLink">
          {
            navLink.map((item,index)=> (
              <div key={index} className="navLinkContainer">
                <Link to={item.link}><p>{item.name}</p></Link>
              </div>
            ))
          }
        </div>

        {/* contact & cart here */}

        <div className="ccContainer">
          <div className="ccIcon"><BsPersonCircle /></div>
          <div className="ccIcon"><HiMiniShoppingCart /></div>
        </div>

      </div>
    </div>
  );
}

export default NavBar;
