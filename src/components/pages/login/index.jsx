import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { LoginImg, logo, NetIcon1, NetIcon2 } from "../../imagepath";
import FeatherIcon from "feather-icons-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import { useEffect } from "react";

const Login = () => {

  const [email, setEmail] = useState(null);
  const [passwordType, setPasswordType] = useState("password");
  const [password, setPassword] = useState(null);

  const navigateTo = useNavigate();
  const {state} = useLocation();

  useEffect(()=>{
    if(state && state.cameFromRegistration)
      alert("Registered, you may login now!!");
  },[]);

  const loginUser = async () => {
    try {
      console.log("Authenticating...")
      const user = await Auth.signIn(email, password);
      if(user){
        const path = user.attributes["custom:role"]=="1" ? "/instructor-dashboard" : "/student-dashboard"
        navigateTo(path);
      }
      else
        console.log("Provide Proper Credentails!")
    } catch (err) {
      console.log('error signing in', error);
    }
  }

  const togglePassword =()=>{
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }


    var settings = {
        //autoWidth: true,
        items: 2,
        margin: 25,
        dots: true,
        nav: true,
        navText: [
          '<i className="fas fa-arrow-left"></i>',
          '<i className="fas fa-arrow-right"></i>',
        ],
    
        loop: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 1,
          },
          1170: {
            items: 1,
          },
        },
    };

  return (
    <>
      <div className="main-wrapper log-wrap">
        <div className="row">
          {/* Login Banner */}
          <div className="col-md-6 login-bg">
              <div className="welcome-login">
                <div className="login-banner">
                  <img
                    src={LoginImg}
                    className="img-fluid"
                    alt="Logo"
                  />
                </div>
                <div className="mentor-course text-center">
                  <h2>
                    Welcome to <br />
                    Apptist Courses.
                  </h2>
                  <p>
                    Login to see all the courses.
                  </p>
                </div>
              </div>   
          </div>
          {/* /Login Banner */}
          <div className="col-md-6 login-wrap-bg">
            {/* Login */}
            <div className="login-wrapper">
              <div className="loginbox">
                <div className="w-100">
                  <div className="img-logo">
                    <img
                      src={logo}
                      className="img-fluid"
                      alt="Logo"
                    />
                    <div className="back-home">
                      <Link to="/">Back to Home</Link>
                    </div>
                  </div>
                  <h1>Sign into Your Account</h1>
                  {/* <form action="/reactjs/students-profile"> */}
                    <div className="form-group">
                      <label className="form-control-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email address"
                        onChange={event => {setEmail(event.target.value)}}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-control-label">Password</label>
                      <div className="pass-group">
                      <input type={passwordType} onChange={event => {setPassword(event.target.value)}} name="password" className="form-control" placeholder="Password" />
                     <span className="toggle-password feather-eye" onClick={togglePassword}>
                     { passwordType==="password"? <FeatherIcon icon="eye"/>:<FeatherIcon icon="eye-off"/> }
                     </span>
                      </div>
                    </div>
                    <div className="forgot">
                      <span>
                        <Link className="forgot-link" to="/forgot-password">
                          Forgot Password ?
                        </Link>
                      </span>
                    </div>
                    <div className="remember-me">
                      <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                        {" "}
                        Remember me
                        <input type="checkbox" name="radio" />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="d-grid">
                      <button
                        className="btn btn-start"
                        type="submit"
                        onClick={loginUser}
                      >
                        <Link to="/setting-edit-profile">Sign In</Link>
                        
                      </button>
                    </div>
                  {/* </form> */}
                </div>
              </div>
              <div className="google-bg text-center">
                <span>
                  <Link to="#">Or sign in with</Link>
                </span>
                <div className="sign-google">
                  <ul>
                    <li>
                      <Link to="#">
                        <img
                          src={NetIcon1}
                          className="img-fluid"
                          alt="Logo"
                        />{" "}
                        Sign In using Google
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img
                          src={NetIcon2}
                          className="img-fluid"
                          alt="Logo"
                        />
                        Sign In using Facebook
                      </Link>
                    </li>
                  </ul>
                </div>
                <p className="mb-0">
                  New User ? <Link to="/register">Create an Account</Link>
                </p>
              </div>
            </div>
            {/* /Login */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
