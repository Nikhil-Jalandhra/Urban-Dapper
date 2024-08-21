import { Link } from "react-router-dom";
import "./SignUp.css"
import singUpImage from "../../Public/pageImages/signupImage.png"

function SignUp() {
  return (
    <div>
      <div>
        <div className="signUpContainer">
            <div className="signUpTwinsContainer">
                <div className="signUpImageContainer">
                    <img src={singUpImage} alt="signUp Image" />
                </div>
            </div>
            <div className="signUpTwinsContainer">
                <div className="signUpInputContianer">
                        <p>Name</p>
                    <div className="signUpInputTwins">
                        <input type="text" placeholder="Enter Name" />
                    </div>
                        <p>Email Address</p>
                    <div className="signUpInputTwins">
                        <input type="text" placeholder="Enter Email Address" />
                    </div>
                        <p>Password</p>
                    <div className="signUpInputTwins">
                        <input type="text" placeholder="Enter Password" />
                    </div>
                        <p>Confirm Password</p>
                    <div className="signUpInputTwins">
                        <input type="text" placeholder="Confirm Password" />
                    </div>
                <button>SignUp</button>
                <p>Already Signup? Please <Link to="/login" >login..</Link></p>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default SignUp;
