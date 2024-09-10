import './Contact.css';
import { ImCool } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function Contact() {
  return (
    <div>
      <div className="contactFormContainer">
        <div className='contactDetailBox'>
          <div className='contactDetail'>
            <h2>Contact Us</h2>
            <p>No. 125 -Haryana 001 Bharat</p>
            <p>nikhiljalandhra@gmail.com</p>
            <p>+91 12345-67890</p>
            <div className='contactIcon'>
                <p><FaGithub/></p>
                <p><FaLinkedin/></p>
                <p><BsTwitterX/></p>
                <p><ImCool/></p>
            </div>
          </div>
        </div>

        <div className='inputContainerBox'>
          <div className='inputContainer'>
              <h2>Drop Us a Message</h2>
              <div className='contactTwoInput'>
                  <div className='inputTwins'>
                    <input type="text" placeholder='Your Name' />
                  </div>
                  <div className='inputTwins'>
                    <input type="text" placeholder='Your Email' />
                  </div>
              </div>
              <textarea name="" id="" placeholder='Type here'></textarea>
              <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
