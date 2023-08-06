import React from "react";
import { Link } from "react-router-dom";
import TextEditor from "./editor";
import Select from "react-select";
import { useState } from "react";

const Basic = ({ nextTab, newCourseData, setNewCourseData, state }) => {

  const [courseTitle, setCourseTitle] = useState("Course Title");
  const [courseCategory, setCourseCategory] = useState("Category 01");
  const [courseLevel, setCourseLevel] = useState("Level 01");
  const [courseDescription, setCourseDescription] = useState("No Description Provided!");

  const option = [
    { label: "Category 01" },
    { label: "Category 02", value: "Category 02" },
    { label: "Category 03", value: "Category 03" },
    { label: "Category 04", value: "Category 04" },
  ];

  const options = [
    { label: "Level 01" },
    { label: "Level 02", value: "Level 02" },
    { label: "Level 03", value: "Level 03" },
    { label: "Level 04", value: "Level 04" },
  ];

  const customStyles = {
    option: (base, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...base,
        backgroundColor: isFocused ? "#FFDEDA" : "white",
      };
    },
    // dropdownIndicator: (base, state) => ({
    //   ...base,
    //   transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
    //   transition: '300ms',
    // }),
  };

  return (
    <>
      <fieldset id="first">
        <div className="add-course-info">
          <div className="add-course-inner-header">
            <h4>Basic Information</h4>
          </div>
          <div className="add-course-form">
            <form action="#">
              <div className="form-group">
                <label className="add-course-label">Course Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Course Title"
                  onChange={event => {setCourseTitle(event.target.value)}}
                  defaultValue={courseTitle}
                />
              </div>
              <div className="form-group">
                <label className="add-course-label">Courses Category</label>
                <Select
                  options={option}
                  defaultValue={courseCategory}
                  onChange={setCourseCategory}
                  placeholder="Category 01"
                  styles={customStyles}
                ></Select>
              </div>
              <div className="form-group">
                <label className="add-course-label">Courses Level</label>
                <Select
                  options={options}
                  defaultValue={courseLevel}
                  onChange={setCourseLevel}
                  placeholder="Level 01"
                  styles={customStyles}
                ></Select>
              </div>
              <div className="form-group mb-0">
                <label className="add-course-label">Course Description</label>
                <div id="editor">
                  <TextEditor setCourseDescription={setCourseDescription}/>
                  {/* <TextEditor /> */}
                </div>
              </div>
            </form>
          </div>
          <div className="widget-btn">
            <Link to="#" className="btn btn-black">
              Back
            </Link>
            <Link
              to="#"
              state={state}
              className="btn btn-info-light next_btn"
              onClick={()=>{
                setNewCourseData(
                  {
                    ...newCourseData,
                    title: courseTitle,
                    category: courseCategory,
                    level: courseLevel,
                    description: courseDescription
                  }
                );
                console.log({
                  ...newCourseData,
                  title: courseTitle,
                  category: courseCategory.value,
                  level: courseLevel.value,
                  description: courseDescription
                });
                nextTab();
              }}
            >
              Continue
            </Link>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default Basic;
