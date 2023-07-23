import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../imagepath";

const PageHeader = ({ activeMenu }) => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [mobileSubMenu, setMobileSubMenu] = useState(false);
    const [mobileSubMenu2, setMobileSubMenu2] = useState(false);
    const [mobileSubMenu22, setMobileSubMenu22] = useState(false);
    const [mobileSubMenu3, setMobileSubMenu3] = useState(false);
    const [mobileSubMenu32, setMobileSubMenu32] = useState(false);
    const [mobileSubMenu4, setMobileSubMenu4] = useState(false);
    const [mobileSubMenu42, setMobileSubMenu42] = useState(false);
    const [mobileSubMenu43, setMobileSubMenu43] = useState(false);
    const [mobileSubMenu5, setMobileSubMenu5] = useState(false);
    const [mobileSubMenu6, setMobileSubMenu6] = useState(false);
  
    const openMobileMenu = (event) => {
      document.body.classList.add("menu-opened");
      setMobileMenu(true);
    };
    const hideMobileMenu = (event) => {
      document.body.classList.remove("menu-opened");
      setMobileMenu(false);
    };
  
    const openMobileSubMenu = (e) => {
      e.preventDefault();
      setMobileSubMenu(!mobileSubMenu);
    };
    const openMobileSubMenu2 = (e) => {
      e.preventDefault();
      setMobileSubMenu2(!mobileSubMenu2);
    };
    const openMobileSubMenu22 = (e) => {
      e.preventDefault();
      setMobileSubMenu22(!mobileSubMenu22);
    };
    const openMobileSubMenu3 = (e) => {
      e.preventDefault();
      setMobileSubMenu3(!mobileSubMenu3);
    };
    const openMobileSubMenu32 = (e) => {
      e.preventDefault();
      setMobileSubMenu32(!mobileSubMenu32);
    };
    const openMobileSubMenu4 = (e) => {
      e.preventDefault();
      setMobileSubMenu4(!mobileSubMenu4);
    };
    const openMobileSubMenu42 = (e) => {
      e.preventDefault();
      setMobileSubMenu42(!mobileSubMenu42);
    };
    const openMobileSubMenu43 = (e) => {
      e.preventDefault();
      setMobileSubMenu43(!mobileSubMenu43);
    };
    const openMobileSubMenu5 = (e) => {
      e.preventDefault();
      setMobileSubMenu5(!mobileSubMenu5);
    };
  const [navbar, setNavbar] = useState(false);

  const changeHeaderBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeHeaderBackground);

  return (
    <>
      <div className="main-wrapper">
        <header className="header header-page">
          <div className="header-fixed">
          <nav
          className={
            navbar
              ? "navbar navbar-expand-lg header-nav scroll-sticky add-header-bg"
              : "navbar navbar-expand-lg header-nav scroll-sticky"
          }
        >
          <div className="container ">
            <div className="navbar-header">
              <Link
                id="mobile_btn"
                to="#"
                onClick={openMobileMenu}
              >
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </Link>
              <Link to="#" className="navbar-brand logo">
                <img src={logo} className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/" className="menu-logo">
                  <img src={logo} className="img-fluid" alt="Logo" />
                </Link>
                <Link
                  id="menu_close"
                  className="menu-close"
                  to="#"
                  onClick={hideMobileMenu}
                >
                  <i className="fas fa-times"></i>
                </Link>
              </div>
              <ul className="main-nav">
                <li className="has-submenu">
                  <Link to="/" className={mobileSubMenu ? "submenu" : ""}>
                    Home{" "}
                  </Link>
                  <ul
                    className={
                      mobileSubMenu ? "submenu submenuShow" : "submenu"
                    }
                  >
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="/instructor-dashboard">
                    Instructor{" "}
                    <i
                      className="fas fa-chevron-down "
                      onClick={openMobileSubMenu2}
                    ></i>
                  </Link>
                  <ul
                    className={
                      mobileSubMenu2 ? "submenu submenuShow" : "submenu"
                    }
                  >
                    <li>
                      <Link to="/instructor-dashboard" onClick={hideMobileMenu}>
                        Dashboard
                      </Link>
                    </li>
                    <li className="has-submenu ">
                      <Link to="/instructor-list">
                        Instructor
                        <i
                          className="fas fa-chevron-right listMob"
                          onClick={openMobileSubMenu22}
                        ></i>
                      </Link>
                      <ul
                        className={
                          mobileSubMenu22 ? "submenu submenuShow" : "submenu"
                        }
                      >
                        <li className={activeMenu === "Grid" ? "active" : ""}>
                        <li>
                          <Link to="/instructor-list">List</Link>
                        </li>
                          <Link to="/instructor-grid" onClick={hideMobileMenu}>
                            Grid
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className={activeMenu === "Courses" ? "active" : ""}>
                      <Link to="/instructor-course" onClick={hideMobileMenu}>
                        My Course
                      </Link>
                    </li>
                    <li className={activeMenu === "Reviews" ? "active" : ""}>
                      <Link to="/instructor-reviews" onClick={hideMobileMenu}>
                        Reviews
                      </Link>
                    </li>
                    <li className={activeMenu === "Orders" ? "active" : ""}>
                      <Link to="/instructor-orders" onClick={hideMobileMenu}>
                        Orders
                      </Link>
                    </li>
                    <li className={activeMenu === "Payouts" ? "active" : ""}>
                      <Link to="/instructor-payouts" onClick={hideMobileMenu}>
                        Payouts
                      </Link>
                    </li>
                    <li className={activeMenu === "Tickets" ? "active" : ""}>
                      <Link to="/instructor-tickets" onClick={hideMobileMenu}>
                        Support Ticket
                      </Link>
                    </li>
                    <li className={activeMenu === "Profile" ? "active" : ""}>
                      <Link to="/instructor-profile" onClick={hideMobileMenu}>
                        Instructor Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/instructor-delete-profile"
                        onClick={hideMobileMenu}
                      >
                        Delete Profile
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="/students-list">
                    Student{" "}
                    <i
                      className="fas fa-chevron-down"
                      onClick={openMobileSubMenu3}
                    ></i>
                  </Link>
                  <ul
                    className={
                      mobileSubMenu3
                        ? "submenu first-submenu submenuShow"
                        : "submenu first-submenu"
                    }
                  >
                    <li className="has-submenu ">
                      <Link to="/students-list">
                        Student
                        <i
                          className="fas fa-chevron-right listMob"
                          onClick={openMobileSubMenu32}
                        ></i>
                      </Link>
                      <ul
                        className={
                          mobileSubMenu32 ? "submenu submenuShow" : "submenu"
                        }
                      >
                        <li >
                          <Link to="/students-list" onClick={hideMobileMenu}>
                            List
                          </Link>
                        </li>
                        <li className={activeMenu === "Grid1" ? "active" : ""}>
                          <Link to="/students-grid" onClick={hideMobileMenu}>
                            Grid
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={activeMenu === "EditProfile" ? "active" : ""}
                    >
                      <Link to="/setting-edit-profile" onClick={hideMobileMenu}>
                        Student Profile
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "Notification" ? "active" : ""}
                    >
                      <Link
                        to="/setting-student-notification"
                        onClick={hideMobileMenu}
                      >
                        Notification
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "Subscription" ? "active" : ""}
                    >
                      <Link
                        to="/setting-student-subscription"
                        onClick={hideMobileMenu}
                      >
                        Subscribtion
                      </Link>
                    </li>
                    <li className={activeMenu === "Payment" ? "active" : ""}>
                      <Link
                        to="/setting-student-payment"
                        onClick={hideMobileMenu}
                      >
                        Payment
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu active">
                  <Link to="/">
                    Pages                     <i
                      className="fas fa-chevron-down"
                      onClick={openMobileSubMenu4}
                    ></i>
                  </Link>
                  <ul
                    className={
                      mobileSubMenu4 ? "submenu submenuShow" : "submenu"
                    }
                  >
                    <li className="has-submenu">
                      <Link to="/course-list">
                        Course
                        <i
                          className="fas fa-chevron-right listMob"
                          onClick={openMobileSubMenu42}
                        ></i>
                      </Link>
                      <ul
                        className={
                          mobileSubMenu42 ? "submenu submenuShow" : "submenu"
                        }
                      >
                        <li className={activeMenu === "AddCourse" ? "active" : ""}>
                          <Link to="/add-course" onClick={hideMobileMenu}>
                            Add Course
                          </Link>
                        </li>
                        <li className={activeMenu === "CourseList" ? "active" : ""}>
                          <Link to="/course-list" onClick={hideMobileMenu}>
                            Course List
                          </Link>
                        </li>
                        <li className={activeMenu === "CourseGrid" ? "active" : ""}>
                          <Link to="/course-grid" onClick={hideMobileMenu}>
                            Course Grid
                          </Link>
                        </li>
                        <li className={activeMenu === "CourseDetails" ? "active" : ""}>
                          <Link
                            to="/course-details"
                            onClick={hideMobileMenu}
                          >
                            Course Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className={activeMenu === "Jobcategory" ? "active" : ""}>
                      <Link to="/job-category" onClick={hideMobileMenu}>
                        Category
                      </Link>
                    </li>
                    <li className={activeMenu === "Cart" ? "active" : ""}>
                      <Link to="/cart" onClick={hideMobileMenu}>
                        Cart
                      </Link>
                    </li>
                    <li className={activeMenu === "Checkout" ? "active" : ""}>
                      <Link to="/checkout" onClick={hideMobileMenu}>
                        Checkout
                      </Link>
                    </li>
                    <li >
                      <Link to="/login" onClick={hideMobileMenu}>
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/register" onClick={hideMobileMenu}>
                        Register
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="login-link">
                  <Link to="/login" onClick={hideMobileMenu}>
                    Login / Signup
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
                <li className="nav-item">
                  <Link className="nav-link header-sign" to="/login">
                    Signin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link header-login" to="/register">
                    Signup
                  </Link>
                </li>
              </ul>
          </div>
        </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default PageHeader;
