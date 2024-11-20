import React from "react";
import Navbar from "../components/Navbar.Jsx";
import Footer from "../components/Footer";
import Course from "../components/Course";

function Courses() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen ">
        <Course></Course>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Courses;
