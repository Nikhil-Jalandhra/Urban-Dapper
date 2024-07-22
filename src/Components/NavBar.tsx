import "./NavBar.css"
import logo from "../../Public/Logo/OnlyLogo.png"

function NavBar() {
  return (
    <div>
      <div className="navbar">

        <div className="logoContainer">
            <div className="logo">
                <img src={logo} className="logoImage" alt="Logo" />
            </div>
            <h3>URBAN-DAPPER</h3>
         </div>

        </div>
    </div>
  );
}

export default NavBar;
