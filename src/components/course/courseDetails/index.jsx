import React, { useEffect, useState } from "react";
import CourseHeader from "../../header";
import InnerBanner from "../../../assets/img/inner-banner.jpg";
import DetailsContent from "./detailsContent";
import { Icon1, People, Timer, User1 } from "../../imagepath";
import Footer from "../../footer";
import { Link, useLocation } from "react-router-dom";

import { API, graphqlOperation } from "aws-amplify";

import { getCourse } from "../../../graphql/queries";

const CourseDetails = () => {

  const {state}  = useLocation();

  const [course, setCourse] = useState(null);

  const fetchCourseFromID = async (courseId) => {
    try {
      // console.log(courseId);
      const response = await API.graphql(graphqlOperation(getCourse, {id: courseId}));
      console.log(response.data.getCourse);
      setCourse(response.data.getCourse);
      // setCourse(1);
      // console.log(course, courseData.data.getCourse); 
    } catch (error) {
      console.log("Error: ",error);
    }
  }

  useEffect(()=>{
    fetchCourseFromID(state.courseId)
  },[]);

  return (
    <>
      {
        course==null
        ? (<h1>Loading...</h1>) 
        : (
          <div className="main-wrapper">
        {/* <CourseHeader activeMenu={"CourseDetails"}/> */}
          <div className="breadcrumb-bar">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-12">
                  <div className="breadcrumb-list">
                    <nav aria-label="breadcrumb" className="page-breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item" aria-current="page">
                          Courses
                        </li>
                        <li className="breadcrumb-item" aria-current="page">
                          All Courses
                        </li>
                        <li className="breadcrumb-item" aria-current="page">
                          The Complete Web Developer Course 2.0
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="inner-banner"
            style={{ backgroundImage: "url(" + "https://m.media-amazon.com/images/I/81z3M6RS9GL._RI_.jpg" + ")" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="instructor-wrap border-bottom-0 m-0">
                    <div className="about-instructor align-items-center">
                      <div className="abt-instructor-img">
                        <Link to="/instructor-profile">
                          <img
                            // src={User1}
                            // src="https://static.photocdn.pt/images/articles/2019/08/07/images/articles/2019/07/31/linkedin_profile_picture_tips-1.webp"
                            src={course.instructor.imageUrl}
                            alt="img"
                            // className="img-fluid"
                          />
                        </Link>
                      </div>
                      <div className="instructor-detail me-3">
                        <h5>
                          <Link to="/instructor-profile">{course.instructor.username}</Link>
                        </h5>
                        <p>Instructor</p>
                      </div>
                      {/* <div className="rating mb-0">
                        <i className="fas fa-star filled me-1" />
                        <i className="fas fa-star filled me-1" />
                        <i className="fas fa-star filled me-1" />
                        <i className="fas fa-star filled me-1" />
                        <i className="fas fa-star me-1" />
                        <span className="d-inline-block average-rating">
                          <span>4.5</span> (15)
                        </span>
                      </div> */}
                    </div>
                    {/* <span className="web-badge mb-3">WEB DEVELPMENT</span> */}
                  </div>
                  <h2>{course.title}</h2>
                  <p>
                    {course.description}
                  </p>
                  <div className="course-info d-flex align-items-center border-bottom-0 m-0 p-0">
                    <div className="cou-info">
                      <img src={Icon1} alt="" />
                      <p>20 Lessons</p>
                    </div>
                    <div className="cou-info">
                      <img src={Timer} alt="" />
                      <p>9hr 30min</p>
                    </div>
                    <div className="cou-info">
                      <img src={People} alt="" />
                      <p>32 students enrolled</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DetailsContent course={course}/>

          <Footer/>

        </div>
        )
      }
    </>
  );
};

export default CourseDetails;
