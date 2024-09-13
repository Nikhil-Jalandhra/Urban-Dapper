import "./Login.css";
import { Link } from "react-router-dom";
import loginImage from "../../Public/pageImages/loginImage.png";

function Login() {
  return (
    <div>
        <div className="loginContainer">
            <div className="loginTwinsContainer">
                <div className="loginImageContainer">
                    <img src={loginImage} alt="Login Image" />
                </div>
            </div>
            <div className="loginTwinsContainer">
                <div className="loginInputContianer">
                        <p>Email Address</p>
                    <div className="loginInputTwins">
                        <input type="text" placeholder="Enter Email Address" />
                    </div>
                        <p>Password</p>
                    <div className="loginInputTwins">
                        <input type="text" placeholder="Enter Password" />
                    </div>
                <button>Login</button>
                <p>Don't have account? Please <Link to="/signup" >signup..</Link></p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Login;
