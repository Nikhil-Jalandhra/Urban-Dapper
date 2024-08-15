import "./NavBarLink.css"
import { Link } from "react-router-dom";
import logo from "../../Public/Logo/LogoText.png"
import { TbSend2 } from "react-icons/tb";

function NavBarLink() {

    const navLink = [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Shop",
          link: "/shop/All",
        },
        {
          name: "Blog",
          link: "/blog",
        },
        {
          name: "Contact",
          link: "/contact",
        },
      ]

  return (
    <div>
      <div className="responsiveNavbar">
        <div className="responsiveNavImage">
          <img src={logo} alt="" />
        </div>
        <div className="responsiveNavinput">
         <input type="text" placeholder="This is just display" />
         <p><TbSend2/></p>
        </div>

        <div className="responsiveNavLink">
          {
            navLink.map((item,index)=> (
              <Link key={index} to={item.link}>
                    <div>
                      <p>{item.name}</p>
                    </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default NavBarLink;
