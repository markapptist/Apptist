import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../footer";
import {InstructorHeader} from "../header";
import Basic from "./basic";
import CourseMedia from "./courseMedia";
import Curriculum from "./curriculum";
import Settings from "./settings";
import Success from "./success";

import { Storage } from "aws-amplify";

const AddCourse = () => {
  const [TabChange, setTabChange] = useState(false);
  const [TabChange1, setTabChange1] = useState(false);
  const [TabChange2, setTabChange2] = useState(false);
  const [TabChange3, setTabChange3] = useState(false);
  const [PageChange, setPageChange] = useState("basic");

  const {state} = useLocation();

  const [newCourseData, setNewCourseData] = useState(null);

  const [courseCoverImage, setCourseCoverImage] = useState(null);   //Structure: {file, url}
  const [courseCoverVideo, setCourseCoverVideo] = useState(null);   //Structure: {file, url}


  // **************** IMP Requirement *****************************
  const uploadFileToS3 = async (file) => {
    if(!file) return;
    try{
      await Storage.put(file.name, file, {
        contentType: file.type
      });
      alert(file.name," uploaded successfully!");
    }catch(error){
      alert(error.message);
      console.log("Error: ", error);
    }
  }

  // useEffect(()=>{
  //   console.log("state: ",state);
  //   console.log("courseData: ",newCourseData);
  // },[newCourseData]);

  const nextTab = () => {
    setTabChange(true);
    setPageChange("courseMedia");
  };

  const prevTab1 = () => {
    setTabChange(false);
    setPageChange("basic");
  };

  const nextTab2 = () => {
    setTabChange1(true);
    setTabChange(true);
    setPageChange("curriculum");
  };

  const prevTab2 = () => {
    setTabChange1(false);
    setPageChange("courseMedia");
  };

  const nextTab3 = () => {
    setTabChange2(true);
    setTabChange(true);
    setPageChange("settings");
  };

  const prevTab3 = () => {
    setTabChange2(false);
    setPageChange("curriculum");
  };

  const nextTab4 = () => {
    setTabChange3(true);
    setTabChange(true);
    setPageChange("success");
  };


  return (
    <>
      <div className="main-wrapper">
        <InstructorHeader activeMenu={"AddCourse"} instructorInfo={state}/>

        <section className="page-content course-sec">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="add-course-header">
                  <h2>Add New Course</h2>
                  <div className="add-course-btns">
                    <ul className="nav">
                      <li>
                        <Link
                          to="/dashboard-instructor"
                          className="btn btn-black"
                        >
                          Back to Course
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn btn-success-dark">
                          Save
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="widget-set">
                    <div className="widget-setcount">
                      <ul id="progressbar">
                        <li
                          className={
                            TabChange ? "progress-activated" : "progress-active"
                          }
                        >
                          <p>
                            <span></span> Basic Information
                          </p>
                        </li>
                        <li
                          className={
                            TabChange1
                              ? "progress-activated"
                              : "" || TabChange
                              ? "progress-active"
                              : ""
                          }
                        >
                          <p>
                            <span></span> Courses Media
                          </p>
                        </li>
                        <li
                          className={
                            TabChange2
                              ? "progress-activated"
                              : "" || TabChange1
                              ? "progress-active"
                              : ""
                          }
                        >
                          <p>
                            <span></span> Curriculum
                          </p>
                        </li>
                        <li
                          className={
                            TabChange3
                              ? "progress-activated"
                              : "" || TabChange2
                              ? "progress-active"
                              : ""
                          }
                        >
                          <p>
                            <span /> Settings
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div className="widget-content multistep-form">
                      {PageChange === "basic" ? (
                        <Basic nextTab={nextTab} newCourseData={newCourseData} setNewCourseData={setNewCourseData}
                        state={state}/>
                      ) : (
                        ""
                      )}
                      {PageChange === "courseMedia" ? (
                        <CourseMedia nextTab2={nextTab2} prevTab1={prevTab1} 
                        newCourseData={newCourseData} 
                        setNewCourseData={setNewCourseData}
                        setCourseCoverImage={setCourseCoverImage}
                        setCourseCoverVideo={setCourseCoverVideo}
                        state={state}/>
                      ) : (
                        ""
                      )}
                      {PageChange === "curriculum" ? (
                        <Curriculum nextTab3={nextTab3} prevTab2={prevTab2} newCourseData={newCourseData} setNewCourseData={setNewCourseData}
                        state={state}/>
                      ) : (
                        ""
                      )}
                      {PageChange === "settings" ? (
                        <Settings nextTab4={nextTab4} prevTab3={prevTab3} newCourseData={newCourseData} setNewCourseData={setNewCourseData}
                        state={state}/>
                      ) : (
                        ""
                      )}
                      {PageChange === "success" ? (
                        <Success />
                      ) : (
                        ""
                      )}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AddCourse;
