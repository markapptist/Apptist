import React, { useEffect, useState } from "react";
import StudentHeader from "../header";
import Footer from "../../footer";
import { User11 } from "../../imagepath";
import { Link } from "react-router-dom";
import StudentSideBar from "../sidebar";
import Select from "react-select";

import { StudentDashboardAPI } from "../../../api/StudentAPIs";
import { API, Auth } from "aws-amplify";

export default function StudentEditProfile() {
  const [country, setCountry] = useState(null);
  
  const [studentInfo, setStudentInfo] = useState(null);

  useEffect(()=>{
    fetchStudentDashboardPageData();
  }, []);

  const fetchStudentDashboardPageData = async () => {
    try {
      // const data = await API.get(StudentDashboardAPI.apiName, StudentDashboardAPI.path + 1);
      const data = {}
      setStudentInfo(data);
    } catch (error) {
      console.log(error.response);
    }
  }

  const options = [
    { label: "Select Country", value: "Country" },
    { label: "India", value: "India" },
    { label: "America", value: "America" },
    { label: "London", value: "London" },
  ];

  const style = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "white",
      width: "100%",
      height: "40px",
      color: "black",
      minHeight: "40px",
      border: "1px solid #e9ecef",
      paddingLeft: "5px",
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      borderRadius: state.isSelected ? "0" : "10px",
      fontSize: "14px",
      "&:hover": {
        cursor: "pointer",
      },
      outline: "none",
    }),
    menu: (base) => ({ ...base, marginTop: "0px" }),
    menuList: (base) => ({ ...base, padding: "0" }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#FFDEDA" : "white",
      color: "black",
      fontSize: "14px",
      "&:hover": {
        backgroundColor: "#FFDEDA",
        // #dddddd
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
  return (
    <>
      {studentInfo==null ? (
          <h1>Loading...</h1>
        ):(
        <div className="main-wrapper">
          <StudentHeader activeMenu={"Profile"} studentInfo={studentInfo}/>
          {/* Student Dashboard */}
          <div className="page-content">
            <div className="container">
              <div className="row">
                {/* Sidebar */}
                <StudentSideBar activeMenu="EditProfile" studentInfo={studentInfo}/>
                {/* Sidebar */}
    
                {/* Profile Details */}
                <div className="col-xl-9 col-md-8">
                  <div className="settings-widget profile-details">
                    <div className="settings-menu p-0">
                      <div className="profile-heading">
                        <h3>Profile Details</h3>
                    </div>
                      <div className="course-group mb-0 d-flex">
                        <div className="course-group-img d-flex align-items-center">
                          <Link to="student-profile">
                            {/* <img src={studentInfo.studentImage} alt="" className="img-fluid" /> */}
                            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt="" className="img-fluid" />
                          </Link>
                          <div className="course-name">
                            <h4>
                              <Link to="student-profile">Profile Photo</Link>
                            </h4>
                          </div>
                        </div>
                        <div className="profile-share d-flex align-items-center justify-content-center">
                          <Link to="#;" className="btn btn-success">
                            Update
                          </Link>
                          <Link to="#;" className="btn btn-danger">
                            Delete
                          </Link>
                        </div>
                      </div>
                      <div className="checkout-form personal-address add-course-info ">
                        <div className="personal-info-head">
                          <h4>Personal Details</h4>
                          <p>Edit your personal information and address.</p>
                        </div>
                        <form action="#">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label className="form-control-label">
                                  First Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter your first Name"
                                  // defaultValue={studentInfo ? studentInfo.studentFirstName : ""}
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label className="form-control-label">
                                  Last Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={"Enter your last Name"}
                                  // defaultValue={studentInfo ? studentInfo.studentLastName : ""}
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label className="form-control-label">Phone</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter your Phone"
                                  // defaultValue={studentInfo ? studentInfo.studentPhoneNumber : ""}
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label className="form-control-label">Email</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter your Email"
                                  // defaultValue={studentInfo ? studentInfo.studentEmail : ""}
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label className="form-control-label">
                                  Birthday
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Birth of Date"
                                  // defaultValue={studentInfo ? studentInfo.studentBirthday : ""}
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label className="form-label">Country</label>
    
                                <Select
                                  className=" select country-select"
                                  name="sellist1"
                                  options={options}
                                  defaultValue={options[0]}
                                  placeholder="Select Country"
                                  onChange={setCountry}
                                  styles={style}
                                ></Select>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label className="form-control-label">
                                  Address
                                </label>
                                <textarea
                                  type="text"
                                  className="form-control"
                                  placeholder="Address"
                                  // defaultValue={studentInfo ? studentInfo.studentAddress : ""}
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            {/* <div className="col-lg-6">
                              <div className="form-group">
                                <label className="form-control-label">
                                  Address Line 2 (Optional)
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Address"
                                />
                              </div>
                            </div> */}
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label className="form-control-label">City</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter your City"
                                  // defaultValue={studentInfo ? studentInfo.studentCity : ""}
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label className="form-control-label">
                                  ZipCode
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter your Zipcode"
                                  // defaultValue={studentInfo ? studentInfo.StudentCityZipCode : ""}
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <div className="update-profile">
                              <button type="button" className="btn btn-primary">
                                Update Profile
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Profile Details */}
              </div>
            </div>
          </div>
          {/* Student Dashboard */}
          <Footer />
        </div>
      )}
    </>
  );
}
