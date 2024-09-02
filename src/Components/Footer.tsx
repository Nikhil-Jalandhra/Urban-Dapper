import "./Footer.css"
import { TbSend2 } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { BiSolidMap } from "react-icons/bi";
import { FaRegCopyright } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import logo from "../../Public/Logo/OnlyLogo.png";

function Footer() {
  return (
    <div>
      <div className="footerContainer">
        
        {/* First Section */}
        <div className="fourDiv">
          <div className="footerBoxFirst">
            <img src={logo} alt="Logo" className="footerLogo" />
            <h2 className="footerLogoText">URBAN-DAPPER</h2>
            <p className="firstBoxFirstLine">
              <FaRegCopyright className="copyRightIcon" />&nbsp;2024 design and
            </p>
            <p className="firstBoxSecondLine">
              developed by <a href="https://github.com/Nikhil-Jalandhra">JNEEK</a>
            </p>
            <p className="firstBoxThirdLine">
              Powered by <a href="https://www.linkedin.com/in/nikhil-jalandhra-1479742b0/">Nikhil Jalandhra</a>
            </p>
          </div>
        </div>

        {/* Second Section */}
        <div className="fourDiv">
          <div className="footerBoxSecond">
            <p className="secondBoxFirstLine">
              <BiSolidMap className="locationIcon" /> No. 125 – Haryana,
            </p>
            <p className="secondBoxSecondLine">001 BHARAT.</p>
            <p className="secondBoxThirdLine">nikhilJalandhra@gmail.com</p>
            <p className="secondBoxThirdLine">+91 12345-67890</p>
          </div>
        </div>

        {/* Third Section */}
        <div className="fourDiv">
          <div className="footerBoxThird">
            <p>Get 100% OFF</p>
            <p>By advance payment</p>
            <div className="footerInputContainer">
              <input
                type="text"
                className="footerInput"
                placeholder="This is just display"
              />
              <p><TbSend2 /></p>
            </div>
          </div>
        </div>

        {/* Fourth Section */}
        <div className="fourDiv">
          <div className="footerBoxFourth">
            <p>Follow us on:</p>
            <div className="footerIconContainer">
              <p><IoLogoLinkedin /></p>
              <p><FaGithub /></p>
              <p><FaTwitter /></p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}


export default Footer;
