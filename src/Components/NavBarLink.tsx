import "./NavBarLink.css";
import { Link } from "react-router-dom";
import { SlClose } from "react-icons/sl";
import { useEffect, useRef } from "react";
import { showState } from "../Store/store";
import logo from "../../Public/Logo/LogoText.png"
import { useDispatch, useSelector } from "react-redux";
import { navToggleFunction } from "../Store/toggleSlice";

function NavBarLink() {

    const navLink = [
      { name: 'Home', link: '/' },
      { name: 'About', link: '/about' },
      { name: 'Shop', link: '/shop/All' },
      { name: 'Blog', link: '/blog' },
      { name: 'Contact', link: '/contact' }
    ];

    const dispatch = useDispatch();
    const navVisible = useSelector((state: showState) => state.showToggle.nav);
    const responsiveNav = useRef<HTMLDivElement>(null);

    const toggleFunction = () => {
      dispatch(navToggleFunction(false));
    };

      useEffect(() => {
        const handlerClickOutside = (e: MouseEvent) => {
          if (!responsiveNav.current?.contains(e.target as Node)) {
            dispatch(navToggleFunction(false));
          }
        };
    
        document.addEventListener("mousedown", handlerClickOutside);
      }, [dispatch]);

  return (
    <div>
      <div 
        ref={responsiveNav} 
        className={` ${navVisible ? "" : "responsiveNavbarHide" } responsiveNavbar`}>
        <div className="responsiveNavClose">
          <SlClose onClick={toggleFunction} />
        </div>
        <div className="responsiveNavImage">
          <img src={logo} alt="" />
        </div>

        <div className="responsiveNavLink">
          {navLink.map((item,index)=> (
              <Link key={index} to={item.link} onClick={toggleFunction}>
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
