import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { LoginImg, logo, NetIcon1, NetIcon2 } from "../../imagepath";
import { useState } from "react";
import "../../../assets/js/jquery-3.6.0.min.js"
import { Auth } from "aws-amplify";

const Register = (props) => {

  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isAnInstructor, setInstructor] = useState(false);
  const navigateTo = useNavigate();

  const [eye,seteye] = useState(true)

    const onEyeClick = () =>{
      seteye(!eye)
    }

    const registerUser = async () => {
      try {
        console.log("Registering User...",{
          fullName,
          email,
          password,
          isAnInstructor
        });
        const { user } = await Auth.signUp({
          username: email,
          password: password,
          attributes: {
            'email': email,
            'name': fullName,
            'custom:role': isAnInstructor ? "1" : "0"
          }
        });
        console.log(user);
        navigateTo("/login/verify-code", {state: {username: email, isAnInstructor}});
      } catch (error) {
        // alert("Apologies!! Something went wrong, Please try again!");
        alert(error.message)
        console.log('error signing up:', error);
      }
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
                  <img src={LoginImg} className="img-fluid" alt="Logo" />
                </div>
                <div className="mentor-course text-center">
                  <h2>
                    Welcome to <br />
                    Apptist Courses.
                  </h2>
                  <p>
                    Register to access all the courses.
                  </p>
                </div>
              </div>
          </div>
          {/* /Login Banner */}
          <div className="col-md-6 login-wrap-bg">
            {/* Login */}
            <div className="login-wrapper">
              <div className="loginbox">
                <div className="img-logo">
                  <img src={logo} className="img-fluid" alt="Logo" />
                  <div className="back-home">
                    <Link to="/">Back to Home</Link>
                  </div>
                </div>
                <h1>Sign up</h1>
                <div>
                  <div className="form-group">
                    <label className="form-control-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Full Name"
                      onChange={event => setFullName(event.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email address"
                      onChange={event => setEmail(event.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Password</label>
                      <div className="pass-group" id="passwordInput">																	
										<input className="form-control pass-input" 
                    placeholder="Enter your password" 
                    type={eye ? "password" : "text"}
                    onChange={event => setPassword(event.target.value)}/>
                    {/* <span onClick={onEyeClick} className={`fa toggle-password feather-eye" ${eye ? "fa-eye" : "fa-eye-slash" }`}/> */}
                    <span onClick={onEyeClick} className={`fa toggle-password feather-eye" ${eye ? "fa-eye" : "fa-eye-slash" }`}/>
										<span className="toggle-password feather-eye"></span>
										<span className="pass-checked"><i className="feather-check"></i></span>
									</div>
                    <div className="password-strength" id="passwordStrength">
                      <span id="poor" />
                      <span id="weak" />
                      <span id="strong" />
                      <span id="heavy" />
                    </div>
                    <div id="passwordInfo" />
                  </div>
                  <div className="form-check remember-me">
                    <label className="form-check-label mb-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="remember"
                        onClick={() => setInstructor(!isAnInstructor)}
                      />
                      <b>Are you registering as an Instructor?</b>
                    </label>
                  </div>
                  {/* <div className="form-check remember-me">
                    <label className="form-check-label mb-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="remember"
                      />
                      I agree to the
                      <Link to="/term-condition">Terms of Service</Link> and
                      <Link to="/privacy-policy">Privacy Policy.</Link>
                    </label>
                  </div> */}
                  <div className="d-grid">
                    <button className="btn btn-primary btn-start" //</div>type="submit"
                      onClick={async () => {await registerUser();}}
                    >
                      Create Account
                    </button>
                  </div>
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
                        <img src={NetIcon1} className="img-fluid" alt="Logo" />
                        Sign In using Google
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={NetIcon2} className="img-fluid" alt="Logo" />
                        Sign In using Facebook
                      </Link>
                    </li>
                  </ul>
                </div>
                <p className="mb-0">
                  Already have an account? <Link to="/login">Sign in</Link>
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

export default Register;
