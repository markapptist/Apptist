import {
  CategoryIcon,
  CategoryIcon1,
  CategoryIcon2,
  CategoryIcon3,
  CategoryIcon4,
  CategoryIcon5,
} from "../../imagepath";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

const TopCategory = ({ courseList }) => {
  var settings = {
    //autoWidth: true,
    items: 2,
    margin: 25,
    gap:10,
    dots: true,
    nav: true,
    navText: [
      '<i className="fas fa-arrow-left"></i>',
      '<i className="fas fa-arrow-right"></i>',
    ],

    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin:25
      },
      768: {
        items: 3,
        margin:25
      },
      1170: {
        items: 4,
        margin:25
      },
    },
  };

  return (
    <section className="section how-it-works">
      <div className="container">
        <div className="section-header aos" data-aos="fade-up">
          <div className="section-sub-head">
            <span>Favourite Course</span>
            <h2>Top Category</h2>
          </div>
          <div className="all-btn all-category d-flex align-items-center">
            <Link to="/" className="btn btn-primary">
              All Categories
            </Link>
          </div>
        </div>
        <div className="section-text aos" data-aos="fade-up">
          <p>
            Categories that you want to explore
          </p>
        </div>
        <OwlCarousel
          {...settings}
          className="owl-carousel mentoring-course owl-theme aos"
          data-aos="fade-up"
          loop
          margin={10}
          nav
        >
        {
          courseList.map((course, index) => {
            return (
              <div className="feature-box text-center " key={index} style={{width: "100%", height: "100%", overflow: "hidden"}}>
                <div  style={{width: "100%", height: "100%", overflow: "hidden"}}>
                    <img src={course.imageUrl} alt="" />
                </div>
                  <div className="feature-header" style={{width: "100%", height: "100%"}}>
                    <div className="feature-cont">
                      <div className="feature-text">{course.title}</div>
                    </div>
                  </div>
                  <p>{course.instructor.username}</p>
              </div>
            )
          })
        }
        </OwlCarousel>
      </div> 
    </section>
  );
};

export default TopCategory;
