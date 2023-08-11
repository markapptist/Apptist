import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Link, redirect, useNavigate } from "react-router-dom";
import Footer from "../../footer";
import {
  Course10,
  Course11,
  Course12,
  InstructorProfileBg,
  User15,
} from "../../imagepath";
import { InstructorHeader } from "../../instructor/header";
import InstructorSidebar from "../sidebar";

import { Auth, API, graphqlOperation } from "aws-amplify";
import { InstructorDashboardAPI } from "../../../api/InstructorAPIs";

import { getInstructor } from "../../../graphql/queries";

export const Dashboard = () => {

  const [instructorInfo, setInstructorInfo] = useState(null);

  const navigateTo = useNavigate();

  useEffect(() => {
    fetchInstructorDashboardPageData();
  },[]);

  const fetchInstructorDashboardPageData = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const response = await API.graphql(graphqlOperation(getInstructor, {id: user.attributes.sub}));
      console.log(response.data.getInstructor);
      setInstructorInfo(response.data.getInstructor);
    } catch (error) {
      console.log(error.response);
    }
  }

  const [initialState, setinitialState] = useState({
    series: [
      {
        name: "Current Month",
        data: [0, 10, 40, 43, 40, 25, 35, 25, 40, 30],
      },
    ],

    options: {
      chart: {
        height: 300,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      colors: ["#FF875A"],
      fill: {
        gradient: {
          opacityFrom: 0.6,
          opacityTo: 0.5,
        },
      },
      axisBorder: {
        show: true,
        color: "#78909C",
        offsetX: 0,
        offsetY: 0,
      },
      xaxis: {
        categories: [
          "",
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },

      title: {
        text: undefined,
        offsetX: 0,
        offsetY: 0,
        style: {
          color: undefined,
          fontSize: "12px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 600,
          cssClass: "apexcharts-xaxis-title",
        },
      },
      yaxis: {
        // seriesName: "seriesY",
        logbase: 10,
        // logarithmic: true,
        tickAmount: 5,
        axisBorder: {
          show: true,
          color: "#E5E4E2",
          offsetX: 0,
          offsetY: 0,
        },
      },
      grid: {
        show: true, // you can either change hear to disable all grids
        xaxis: {
          lines: {
            show: false, //or just here to disable only x axis grids
          },
        },
        yaxis: {
          lines: {
            show: false, //or just here to disable only y axis
          },
        },
      },
      markers: {
        size: 3,
        colors: undefined,
        strokeColors: "#fff",
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
          size: 8,
          sizeOffset: 3,
        },
      },
      tooltip: {
        x: {
          // format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  const [orderChart, setOrderChart] = useState({
    series: [
      {
        name: "Current Month",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
    ],
    options: {
      chart: {
        height: 300,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "19%",
          endingShape: "rounded",
          borderRadius: 7,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      colors: ["#1d9cfd"],
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
      axisBorder: {
        show: true,
        color: "#78909C",
        offsetX: 0,
        offsetY: 0,
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        // seriesName: "seriesY",
        logbase: 10,
        // logarithmic: true,
        tickAmount: 5,
        axisBorder: {
          show: false,
          color: "#E5E4E2",
          offsetX: 0,
          offsetY: 0,
        },
      },
      grid: {
        show: true, // you can either change hear to disable all grids
        xaxis: {
          lines: {
            show: false, //or just here to disable only x axis grids
          },
        },
        yaxis: {
          lines: {
            show: true, //or just here to disable only y axis
          },
        },
      },
    },
  });

  return (
    <>{
      instructorInfo==null ? (
        <h1>Loading...</h1>
      ):(
        <div className="main-wrapper">
          <InstructorHeader activeMenu={"Dashboard"} instructorInfo={instructorInfo}/>
          <div className="page-content instructor-page-content">
            <div className="container">
              <div className="row">
                {/* Sidebar */}
                <InstructorSidebar activeMenu={"Dashboard"} instructorInfo={instructorInfo}/>
                {/* Sidebar */}

                {/* Instructor Dashboard */}
                <div className="col-xl-9 col-lg-8 col-md-12">
                  <div className="row">
                    <div className="col-md-4 d-flex">
                      <div className="card instructor-card w-100">
                        <div className="card-body">
                          <div className="instructor-inner">
                            <h6>REVENUE</h6>
                            <h4 className="instructor-text-success">${instructorInfo.revenueThisMonth}</h4>
                            <p>Earning this month</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex">
                      <div className="card instructor-card w-100">
                        <div className="card-body">
                          <div className="instructor-inner">
                            <h6>STUDENTS ENROLLMENTS</h6>
                            <h4 className="instructor-text-info">{instructorInfo.newStudentEnrollments}</h4>
                            <p>New this month</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex">
                      <div className="card instructor-card w-100">
                        <div className="card-body">
                          <div className="instructor-inner">
                            <h6>COURSES RATING</h6>
                            <h4 className="instructor-text-warning">{instructorInfo.overallCoursesRating}</h4>
                            <p>Rating this month</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="settings-widget">
                        <div className="settings-inner-blk p-0">
                          <div className="sell-course-head comman-space">
                            <h3>Best Selling Courses</h3>
                          </div>
                          <div className="comman-space pb-0">
                            <div className="settings-tickets-blk course-instruct-blk table-responsive">
                              {/* Referred Users */}
                              <table className="table table-nowrap mb-0">
                                <thead>
                                  <tr>
                                    <th>COURSES</th>
                                    <th>SALES</th>
                                    <th>AMOUNT</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {
                                    instructorInfo.publishedCourses.items.map((course, index) => {
                                      return (
                                        <tr key={index} onClick={()=>{navigateTo("/course-details", {state:{courseId: course.id}})}}>
                                          <td>
                                            <div className="sell-table-group d-flex align-items-center">
                                              <div className="sell-group-img">
                                                <div>
                                                  <img
                                                    src={course.imageUrl}
                                                    className="img-fluid "
                                                    alt=""
                                                  />
                                                </div>
                                              </div>
                                              <div className="sell-tabel-info">
                                                <p>
                                                  <div>
                                                    {course.title}
                                                  </div>
                                                </p>
                                              </div>
                                            </div>
                                          </td>
                                          <td>{course.sales}</td>
                                          <td>${course.amount}</td>
                                        </tr>
                                      );
                                    })
                                  }
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      )
    }</>
  );
};
