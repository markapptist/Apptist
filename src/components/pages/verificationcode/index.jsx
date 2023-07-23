import React, { useState } from "react";
import { LoginImg, logo } from "../../imagepath";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { Auth } from "aws-amplify";

const VerificationCode = () => {

    const [code, setCode] = useState("");
    
    const navigateTo = useNavigate();
    const {state} = useLocation();

    const confirmSignUp = async () => {
        try {
          await Auth.confirmSignUp(state.username, code);
          console.log("verified!");
          navigateTo("/login", {state: {cameFromRegistration: true}});
        } catch (error) {
          alert(error.message)
          console.log("error confirming sign up", error);
        }
      };
    
    const resendVerificationCode = async () => {
        try {
        await Auth.resendSignUp(state.username);
        alert("A new code has been sent!")
        console.log("code resent successfully");
        } catch (err) {
        alert("Something went wrong, please try again!")
        console.log("error resending code: ", err);
        }
    };

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
      <div className="main-wrapper">
        <div className="row">
          {/* Login Banner */}
          <div className="col-md-6 login-bg">
            <OwlCarousel
              {...settings}
              className="owl-carousel login-slide owl-theme"
              data-aos="fade-up"
            >
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
                    DreamsLMS Courses.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
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
                    DreamsLMS Courses.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
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
                    DreamsLMS Courses.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
            </OwlCarousel>
          </div>
          {/* /Login Banner */}
          <div className="col-md-6 login-wrap-bg">
            {/* Login */}
            <div className="login-wrapper">
              <div className="loginbox">
                <h1>Verification Code</h1>
                <div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your code"
                      onChange={event => {setCode(event.target.value)}}
                    />
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-start" type="submit"
                        onClick={confirmSignUp}
                    >
                      Verify
                    </button>
                    <button className="btn btn-start" type="submit" style={{ marginTop: 10 }}
                        onClick={resendVerificationCode}
                    >
                      Resend Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* /Login */}
          </div>
        </div>
      </div>
    </>
  );
};

export default VerificationCode;
