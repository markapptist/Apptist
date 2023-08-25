import React from "react";
import {
  Bell,
  Calendar,
  Clipboard,
  CreditCard,
  Power,
  Trash2,
} from "react-feather";
import { Link, redirect, useNavigate } from "react-router-dom";
import { ProfileBg, User11 } from "../../imagepath";
import { Auth } from "aws-amplify";

export default function StudentSideBar({ activeMenu, studentInfo }) {

  const navigateTo = useNavigate();

  const SignOut = async () => {
    const confirm = window.confirm("Are you sure you want to log out?");
    try {
      if(confirm){
        await Auth.signOut();
        console.log("signing out");
        navigateTo("/");
      }
    } catch (error) {
      console.log('error signing out: ', error.message) 
    }
  }

  return (
    <div className="col-xl-3 col-md-4 theiaStickySidebar">
      <div className="settings-widget dash-profile mb-3">
        <div className="settings-menu p-0">
          <div className="profile-bg">
            {/* <h5>{studentInfo.studentLevel}</h5> */}
            <h5>Begineer</h5>
            <img src="https://static.vecteezy.com/system/resources/previews/003/031/764/original/blue-wide-background-with-linear-blurred-gradient-free-vector.jpg" alt="" />
            <div className="profile-img">
              <Link to="#">
                {/* <img src={studentInfo.studentImage} alt="" /> */}
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt="" />
              </Link>
            </div>
          </div>
          <div className="profile-group">
            <div className="profile-name text-center">
              <h4>
                {/* <Link to="#">{studentInfo.studentFirstName+" "+studentInfo.studentLastName}</Link> */}
                <Link to="#">{" "}</Link>
              </h4>
              <p>Student</p>
            </div>
            <div className="go-dashboard text-center">
              <Link to="/instructor-dashboard" className="btn btn-primary">
                Go to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="settings-widget account-settings">
        <div className="settings-menu">
          <h3>ACCOUNT SETTINGS</h3>
          <ul>

            <li className="nav-item">
              <Link
                to="#"
                className={
                  activeMenu === "Notification" ? "nav-item active" : "nav-item"
                }
              >
                <Bell size={20} /> Notifications
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="#"
                className={
                  activeMenu === "DeleteProfile"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <Trash2 size={20} /> Delete Profile
              </Link>
            </li>


            <li className="nav-item">
              <Link to="#" className="nav-link" onClick={SignOut}>
                <Power size={20} /> Sign Out
              </Link>
            </li>
            {activeMenu === "Ticket" ? (
              <li className="nav-item active">
                <Link to="#" className="nav-link">
                  <Clipboard size={20} /> Support Tickets
                </Link>
              </li>
            ) : null}
          </ul>
          <h3>Courses</h3>
          <ul>
            <li className="nav-item">
              <Link
                to="#"
                className={
                  activeMenu === "Subscription" ? "nav-item active" : "nav-item"
                }
              >
                <Calendar size={20} /> My Courses
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="#"
                className={
                  activeMenu === "Payment" ? "nav-item active" : "nav-item"
                }
              >
                <CreditCard size={20} /> Payment
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}
