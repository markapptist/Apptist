import React, { useState } from "react";
import Header from "../header";
import {
  bannerimg,
  Become1,
  Become2,
  CertificateIcon,
  CourseIcon,
  GratuateIcon,
  Icon01,
  Icon02,
  Icon03,
  Icon04,
  Join,
  PencilIcon,
} from "../imagepath";
import TopCategory from "./slider/topCategory";
import Loginbg from "../../assets/img/banner.png";
import Footer from "../footer";
import Select from "react-select";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useSpring, animated } from "react-spring";

import { API, graphqlOperation } from "aws-amplify";
import { listCourses } from "./queries";

const options = [
  { label: "Category", value: "Category" },
  { label: "Angular", value: "Angular" },
  { label: "Node Js", value: "Node Js" },
  { label: "React", value: "React" },
  { label: "Python", value: "Python" },
];

export const Home = () => {
  const [value, setValue] = useState(null);

  const [pageInfo, setPageInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await API.graphql(graphqlOperation(listCourses));
      const data = response.data.listCourses.items; 
      console.log("data:", data, "length:", data.length);
      setPageInfo(data);
    } catch (error) {
      console.log(error.response);
    }
  }

  const style = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "#FFDEDA",
      border: state.isFocused ? 0 : 0,
      paddingLeft: "5px",
      paddingTop:"5px",
      paddingBottom:"5px",
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      borderRadius: state.isSelected ? "0" : "10px",
      fontSize: "14px",
      "&:hover": {
        border: state.isFocused ? 0 : 0,
        color: "black",
      },
      borderRadius: "50px",
      outline: "none",
    }),
    menu: (base) => ({ ...base, marginTop: "2px" }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#FFDEDA" : "white",
      fontSize: "14px",
      "&:hover": {
        backgroundColor: "#FFDEDA",
      },
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      color: "black",
      transform: state.selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
      transition: "250ms",
    }),
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }

  return (
    <>
      {pageInfo==null ? (
        <h1>Loading...</h1>
      ): (
        <div className="main-wrapper">
          <Header />
          <section
            className="home-slide d-flex align-items-center"
            style={{ backgroundImage: "url(" + Loginbg + ")" }}
          >
            <div className="container">
              <div className="row ">
                <div className="col-md-7">
                  <div className="home-slide-face aos" data-aos="fade-up">
                    <div className="home-slide-text ">
                      <h5>The Leader in Online Learning</h5>
                      <h1>Engaging &amp; Accessible Online Courses For All</h1>
                      <p>Own your future learning new skills online</p>
                    </div>
                    <div className="banner-content">
                      <form className="form" action="/reactjs/">
                        <div className="form-inner">
                          <div className="input-group homeSearch">
                            <i className="fa-solid fa-magnifying-glass search-icon" />
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Search School, Online eductional centers, etc"
                            />
                            <span className="drop-detail">
                              <Select
                              // className="select2-container"
                                options={options}
                                value={options.value}
                                defaultValue={options[0]}
                                placeholder="Category"
                                onChange={setValue}
                                styles={style}
                              ></Select>
                            </span>
                            <button
                              className="btn sub-btn"
                              type="submit"
                            >
                              <i className="fas fa-arrow-right" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="trust-user">
                      <p>
                        Trusted by over 15K Users <br />
                        worldwide since 2022
                      </p>
                      <div className="trust-rating d-flex align-items-center">
                        <div className="rate-head">
                          <h2>
                          <span className="d-flex"> 
                              <Number n={1000} />+
                          </span>
                          </h2>
                        </div>
                        <div className="rating d-flex align-items-center">
                          <h2 className="d-inline-block average-rating">{4.8}</h2>
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 d-flex align-items-center">
                  <div className="girl-slide-img aos" data-aos="fade-up">
                    <img src={bannerimg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section student-course">
            <div className="container">
              <div className="course-widget">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="course-full-width">
                      <div
                        className="blur-border course-radius align-items-center aos"
                        data-aos="fade-up"
                      >
                        <div className="online-course d-flex align-items-center">
                          <div className="course-img">
                            <img src={PencilIcon} alt="" />
                          </div>
                          <div className="course-inner-content">
                            <h4>
                              {/* <span>10</span>K */}
                              <span className="d-flex"> 
                              <Number n={3000} />
                          </span>
                            </h4>
                            <p>Online Courses</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 d-flex">
                    <div className="course-full-width">
                      <div
                        className="blur-border course-radius aos"
                        data-aos="fade-up"
                      >
                        <div className="online-course d-flex align-items-center">
                          <div className="course-img">
                            <img src={CourseIcon} alt="" />
                          </div>
                          <div className="course-inner-content">
                            <h4>
                            <span className="d-flex"> 
                              <Number n={200} />+
                          </span>
                            </h4>
                            <p>Expert Tutors</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 d-flex">
                    <div className="course-full-width">
                      <div
                        className="blur-border course-radius aos"
                        data-aos="fade-up"
                      >
                        <div className="online-course d-flex align-items-center">
                          <div className="course-img">
                            <img src={CertificateIcon} alt="" />
                          </div>
                          <div className="course-inner-content">
                            <h4>
                            <span className="d-flex"> 
                              <Number n={150} />+
                          </span>
                            </h4>
                            <p>Ceritified Courses</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 d-flex">
                    <div className="course-full-width">
                      <div
                        className="blur-border course-radius aos"
                        data-aos="fade-up"
                      >
                        <div className="online-course d-flex align-items-center">
                          <div className="course-img">
                            <img src={GratuateIcon} alt="" />
                          </div>
                          <div className="course-inner-content">
                            <h4>
                            <span className="d-flex"> 
                              <Number n={300} />+
                          </span>
                            </h4>
                            <p>Online Students</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <TopCategory courseList={pageInfo} />
          <section className="section master-skill">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-12">
                  <div className="section-header aos" data-aos="fade-up">
                    <div className="section-sub-head">
                      <span>What’s New</span>
                      <h2>Master the skills to drive your career</h2>
                    </div>
                  </div>
                  <div className="section-text aos" data-aos="fade-up">
                    <p>
                      Get certified, master modern tech skills, and level up your
                      career — whether you’re starting out or a seasoned pro. 95%
                      of eLearning learners report our hands-on content directly
                      helped their careers.
                    </p>
                  </div>
                  <div className="career-group aos" data-aos="fade-up">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 d-flex">
                        <div className="certified-group blur-border d-flex">
                          <div className="get-certified d-flex align-items-center">
                            <div className="blur-box">
                              <div className="certified-img ">
                                <img src={Icon01} alt="" className="img-fluid" />
                              </div>
                            </div>
                            <p>Stay motivated with engaging instructors</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 d-flex">
                        <div className="certified-group blur-border d-flex">
                          <div className="get-certified d-flex align-items-center">
                            <div className="blur-box">
                              <div className="certified-img ">
                                <img src={Icon02} alt="" className="img-fluid" />
                              </div>
                            </div>
                            <p>Keep up with in the latest in cloud</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 d-flex">
                        <div className="certified-group blur-border d-flex">
                          <div className="get-certified d-flex align-items-center">
                            <div className="blur-box">
                              <div className="certified-img ">
                                <img src={Icon03} alt="" className="img-fluid" />
                              </div>
                            </div>
                            <p>Get certified with 100+ certification courses</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 d-flex">
                        <div className="certified-group blur-border d-flex">
                          <div className="get-certified d-flex align-items-center">
                            <div className="blur-box">
                              <div className="certified-img ">
                                <img src={Icon04} alt="" className="img-fluid" />
                              </div>
                            </div>
                            <p>Build skills your way, from labs to courses</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12 d-flex align-items-end">
                  <div className="career-img aos" data-aos="fade-up">
                    <img src={Join} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Footer */}
          <Footer />
          {/* /Footer */}
        </div>
      )}
    </>
  );
};

export default Home;
