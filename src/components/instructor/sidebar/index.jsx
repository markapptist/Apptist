import React from "react";
import {
  Bell,
  Book,
  DollarSign,
  Home,
  Lock,
  PieChart,
  Power,
  RefreshCw,
  Server,
  Settings,
  ShoppingBag,
  Star,
  Trash2,
  User,
  Users,
} from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import { InstructorProfileBg, User15 } from "../../imagepath";
import { Auth } from "aws-amplify";

export default function InstructorSidebar({ activeMenu, instructorInfo }) {

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
    <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
      <div className="sideStickyBar">
        <div className="settings-widget dash-profile">
          <div className="settings-menu p-0">
            <div className="profile-bg">
              <h5>Beginner</h5>
              <img src="https://images.freecreatives.com/wp-content/uploads/2016/03/Cute-Purple-Background.jpg" alt="" />
              <div className="profile-img">
                <Link to="#">
                  <img src={instructorInfo.imageUrl} alt="" />
                </Link>
              </div>
            </div>
            <div className="profile-group">
              <div className="profile-name text-center">
                <h4>
                  <Link to="#">{instructorInfo.username}</Link>
                </h4>
                <p>Instructor</p>
              </div>
              <div className="go-dashboard text-center">
                <Link to="/add-course"
                  state={{
                    imageUrl: instructorInfo.imageUrl,
                    username: instructorInfo.username
                  }}
                  className="btn btn-primary">
                  Create New Course
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="settings-widget account-settings feather-icon">
          <div className="settings-menu">
            <h3>DASHBOARD</h3>
            <ul>
              <li className="nav-item">
                <Link
                  to="#"
                  className={
                    activeMenu === "Dashboard" ? "nav-item active" : "nav-item"
                  }
                >
                  <Home size={20} /> My Dashboard
                </Link>
              </li>
              <li
                className={
                  activeMenu === "Courses" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="#" className="nav-link">
                  <Book size={20} /> My Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#"
                  className={
                    activeMenu === ("StudentGrid" || "StudentList")
                      ? "nav-item active"
                      : "nav-item"
                  }
                >
                  <Users size={20} /> Students
                </Link>
              </li>
            </ul>
            <div className="instructor-title">
              <h3>ACCOUNT SETTINGS</h3>
            </div>
            <ul>
              <li className="nav-item">
                <Link
                  to="#"
                  className={
                    activeMenu === "EditProfile"
                      ? "nav-item active"
                      : "nav-item"
                  }
                >
                  <Settings size={20} /> Edit Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#"
                  className={
                    activeMenu === "Notification"
                      ? "nav-item active"
                      : "nav-item"
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
                <Link className="nav-link" onClick={SignOut}>
                  <Power size={20} /> Sign Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
