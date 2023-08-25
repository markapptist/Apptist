import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import VerificationCode from "./components/pages/verificationcode";
import { Home } from "./components/home";
import { Dashboard } from "./components/instructor/dashboard";
import AddCourse from "./components/instructor/addCourse";
import StudentEditProfile from "./components/student/editProfile";
import CourseDetails from "./components/course/courseDetails";
import StudentDashboard from "./components/student/depositDashboard";

import config from 'config';
import PaymentPage from "./components/course/checkout";
const Approuter = () => {
  return (
    <BrowserRouter basename={`${config.publicPath}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/verify-code" element={<VerificationCode/>} />
        <Route path="/register" element={<Register />} />

        {/* Instructor Components */}
        <Route path="/instructor-dashboard" element={<Dashboard />} />
        <Route path="/course-details" element={<CourseDetails/>}/>
        <Route path="/add-course" element={<AddCourse/>}/>

        {/* Stundent Components */}
        <Route path="/student-dashboard" element={<StudentDashboard/>}/>
        <Route path="/student-edit-profile" element={<StudentEditProfile />} />

        <Route path="/checkout" element={<PaymentPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Approuter;