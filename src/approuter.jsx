import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import VerificationCode from "./components/pages/verificationcode";
import { Home } from "./components/home";
import { Dashboard } from "./components/instructor/dashboard";
import AddCourse from "./components/instructor/addCourse";
import StudentEditProfile from "./components/student/editProfile";
import config from 'config';
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
        <Route path="/add-course" element={<AddCourse/>}/>

        {/* Stundent Components */}
        <Route path="/student-edit-profile" element={<StudentEditProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Approuter;