import React from "react";
import { Link } from "react-router-dom";
import { Icon19, Icon20, Icon21, logo } from "../imagepath";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Top */}
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              {/* Footer Widget */}
              <div className="footer-widget footer-about">
                <div className="footer-logo">
                  <img src={logo} alt="logo" />
                </div>
                <div className="footer-about-content">
                  <p>
                    Best tool to learn new technologies online
                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    consequat mauris Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Ut consequat mauris */}
                  </p>
                </div>
              </div>
              {/* /Footer Widget */}
            </div>
            <div className="col-lg-2 col-md-6">
            </div>
            <div className="col-lg-2 col-md-6">
              {/* Footer Widget */}
              {/* <div className="footer-widget footer-menu">
                <h2 className="footer-title">For Student</h2>
                <ul>
                  <li>
                    <Link to="/students-profile">Profile</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/students-list">Student</Link>
                  </li>
                  <li>
                    <Link to="/deposit-student-dashboard"> Dashboard</Link>
                  </li>
                </ul>
              </div> */}
              {/* /Footer Widget */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Footer Widget */}
              <div className="footer-widget footer-contact">
                <h2 className="footer-title">Details</h2>
                <div className="news-letter">
                  <form>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your email address"
                      name="email"
                    />
                  </form>
                </div>
                <div className="footer-contact-info">
                  <div className="footer-address">
                    <img src={Icon20} alt="" className="img-fluid" />
                    <p>
                      {" "}
                      Humber College
                      <br /> Toronto, Ontario, Canada{" "}
                    </p>
                  </div>
                  <p>
                    <img src={Icon19} alt="" className="img-fluid" />
                    aptist@gmail.com
                  </p>
                  <p className="mb-0">
                    <img src={Icon21} alt="" className="img-fluid" />
                    +1 1234567890
                  </p>
                </div>
              </div>
              {/* /Footer Widget */}
            </div>
          </div>
        </div>
      </div>
      {/* /Footer Top */}
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          {/* Copyright */}
          <div className="copyright">
            <div className="row">
              <div className="col-md-6">
                {/* <div className="privacy-policy">
                  <ul>
                    <li>
                      <Link to="/term-condition">Terms</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy</Link>
                    </li>
                  </ul>
                </div> */}
              </div>
              <div className="col-md-6">
                <div className="copyright-text">
                  <p className="mb-0">© 2023 APPTIST. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
          {/* /Copyright */}
        </div>
      </div>
      {/* /Footer Bottom */}
    </footer>
  );
};

export default Footer;
