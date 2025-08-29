import "./Footer.css"
import { FaRegCopyright } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { TbSend2 } from "react-icons/tb";

function Footer() {
  return (
    <div>
        <div className="footerContainer">

          <div className="footerAbout">

            <div className="footerPayment">
              <p>Get 100% OFF by advance payment</p>
              <div className="footerInputContainer">
                <input type="text" className="footerInput" placeholder="This is just display" />
                <TbSend2/>
              </div>
            </div>

            <div className="footerSocial">
              <p>Follow us on :</p>
              <div className="footerSocialIconContainer">
                <p><IoLogoLinkedin/></p>
                <p><FaGithub/></p>
              </div> 
          </div>

          </div>

          <div className="footerAbout">

            <div className="footerRights">
            <p>URBAN DAPPPER: All rights reserved</p>
            <p> <FaRegCopyright className="copyRightIcon"/>
              &nbsp;2024 design and developed by <a href="https://github.com/Nikhil-Jalandhra">JNEEK</a>
            </p>
            <p className="firstBoxThirdLine">Powered by <a href="https://www.linkedin.com/in/nikhil-jalandhra-1479742b0/">Nikhil Jalandhra</a></p>
            </div>
          </div>

        </div>      
    </div>
  );
}

export default Footer;
