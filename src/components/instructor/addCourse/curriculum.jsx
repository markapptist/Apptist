import React, { useState } from "react";
import { Link } from "react-router-dom";

const Curriculum = ({nextTab3, prevTab2, newCourseData, setNewCourseData, state}) => {

  const [totalSections, setTotalSections] = useState(2);

  const [sections, setSections] = useState([
    [
      {
        title: "lesson title",
        videoUrl: "video Url",
        description: "description"
      },{
        title: "lesson title",
        videoUrl: "video Url",
        description: "description"
      }
    ],[
      {
        title: "lesson title",
        videoUrl: "video Url",
        description: "description"
      },{
        title: "lesson title",
        videoUrl: "video Url",
        description: "description"
      }
    ]
  ]);

  return (
    <>
      <fieldset className="field-card" style={{display:"block"}}>
        <div className="add-course-info">
          <div className="add-course-inner-header">
            <h4>Curriculum</h4>
          </div>
          <div className="add-course-section">
            <div to="#" className="btn" onClick={()=>{setTotalSections(totalSections+1);}}>
              Add Section
            </div>
          </div>
          <div className="add-course-form">
            {
              Array.from({length: totalSections},(_, index)=>{
                return(
                  <div className="curriculum-grid" key={index}>
                    <div className="curriculum-head">
                      <p>Section {index+1}:
                        <input type="text" style={{border:"1px solid #aaaaaa", borderRadius:"5px"}}
                          placeholder="Section Title"
                        />
                      </p>
                      <div to="#" className="btn">
                        Add Lecture
                      </div>
                    </div>
                    <div className="curriculum-info">
                      <div id="accordion">
                          {
                            sections[index].map((lesson, lessonIndex) => {
                              return(
                                <div className="faq-grid" key={lessonIndex}>
                                  <div className="faq-header">
                                    <Link
                                      className="collapsed faq-collapse"
                                      data-bs-toggle="collapse"
                                      to="#collapseOne"
                                    >
                                      <i className="fas fa-align-justify" /> Introduction
                                    </Link>
                                    <div className="faq-right">
                                      <Link to="#">
                                        <i className="far fa-pen-to-square me-1" />
                                      </Link>
                                      <Link to="#" className="me-0">
                                        <i className="far fa-trash-can" />
                                      </Link>
                                    </div>
                                  </div>
                                  <div
                                    id="collapseOne"
                                    className="collapse"
                                    data-bs-parent="#accordion">
                                    <div className="faq-body">
                                      <div className="add-article-btns">
                                        <Link to="#" className="btn">
                                          Add Article
                                        </Link>
                                        <Link to="#" className="btn me-0">
                                          Add Description
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })
                          }
                        </div>
                    </div>
                    {/* <div className="curriculum-info">
                      <div id="accordion"> 
                        <div className="faq-grid">
                          <div className="faq-header">
                            <Link
                              className="collapsed faq-collapse"
                              data-bs-toggle="collapse"
                              to="#collapseOne"
                            >
                              <i className="fas fa-align-justify" /> Introduction
                            </Link>
                            <div className="faq-right">
                              <Link to="#">
                                <i className="far fa-pen-to-square me-1" />
                              </Link>
                              <Link to="#" className="me-0">
                                <i className="far fa-trash-can" />
                              </Link>
                            </div>
                          </div>
                          <div
                            id="collapseOne"
                            className="collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="faq-body">
                              <div className="add-article-btns">
                                <Link to="#" className="btn">
                                  Add Article
                                </Link>
                                <Link to="#" className="btn me-0">
                                  Add Description
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="faq-grid">
                          <div className="faq-header">
                            <Link
                              className="collapsed faq-collapse"
                              data-bs-toggle="collapse"
                              to="#collapseTwo"
                            >
                              <i className="fas fa-align-justify" /> Installing
                              Development Software
                            </Link>
                            <div className="faq-right">
                              <Link to="#">
                                <i className="far fa-pen-to-square me-1" />
                              </Link>
                              <Link to="#" className="me-0">
                                <i className="far fa-trash-can" />
                              </Link>
                            </div>
                          </div>
                          <div
                            id="collapseTwo"
                            className="collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="faq-body">
                              <div className="add-article-btns">
                                <Link to="#" className="btn">
                                  Add Article
                                </Link>
                                <Link to="#" className="btn me-0">
                                  Add Description
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="faq-grid mb-0">
                          <div className="faq-header">
                            <Link
                              className="collapsed faq-collapse"
                              data-bs-toggle="collapse"
                              to="#collapseThree"
                            >
                              <i className="fas fa-align-justify" /> Hello World
                              Project from GitHub
                            </Link>
                            <div className="faq-right">
                              <Link to="#">
                                <i className="far fa-pen-to-square me-1" />
                              </Link>
                              <Link to="#" className="me-0">
                                <i className="far fa-trash-can" />
                              </Link>
                            </div>
                          </div>
                          <div
                            id="collapseThree"
                            className="collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="faq-body">
                              <div className="add-article-btns">
                                <Link to="#" className="btn">
                                  Add Article
                                </Link>
                                <Link to="#" className="btn me-0">
                                  Add Description
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div> 
                      </div>
                    </div> */}
                  </div>
                );
              })
            }
            {/* <div className="curriculum-grid">
              <div className="curriculum-head">
                <p>Section 1: Introduction</p>
                <Link to="#" className="btn">
                  Add Lecture
                </Link>
              </div>
              <div className="curriculum-info">
                <div id="accordion">
                  <div className="faq-grid">
                    <div className="faq-header">
                      <Link
                        className="collapsed faq-collapse"
                        data-bs-toggle="collapse"
                        to="#collapseOne"
                      >
                        <i className="fas fa-align-justify" /> Introduction
                      </Link>
                      <div className="faq-right">
                        <Link to="#">
                          <i className="far fa-pen-to-square me-1" />
                        </Link>
                        <Link to="#" className="me-0">
                          <i className="far fa-trash-can" />
                        </Link>
                      </div>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse"
                      data-bs-parent="#accordion"
                    >
                      <div className="faq-body">
                        <div className="add-article-btns">
                          <Link to="#" className="btn">
                            Add Article
                          </Link>
                          <Link to="#" className="btn me-0">
                            Add Description
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="faq-grid">
                    <div className="faq-header">
                      <Link
                        className="collapsed faq-collapse"
                        data-bs-toggle="collapse"
                        to="#collapseTwo"
                      >
                        <i className="fas fa-align-justify" /> Installing
                        Development Software
                      </Link>
                      <div className="faq-right">
                        <Link to="#">
                          <i className="far fa-pen-to-square me-1" />
                        </Link>
                        <Link to="#" className="me-0">
                          <i className="far fa-trash-can" />
                        </Link>
                      </div>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      data-bs-parent="#accordion"
                    >
                      <div className="faq-body">
                        <div className="add-article-btns">
                          <Link to="#" className="btn">
                            Add Article
                          </Link>
                          <Link to="#" className="btn me-0">
                            Add Description
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="faq-grid mb-0">
                    <div className="faq-header">
                      <Link
                        className="collapsed faq-collapse"
                        data-bs-toggle="collapse"
                        to="#collapseThree"
                      >
                        <i className="fas fa-align-justify" /> Hello World
                        Project from GitHub
                      </Link>
                      <div className="faq-right">
                        <Link to="#">
                          <i className="far fa-pen-to-square me-1" />
                        </Link>
                        <Link to="#" className="me-0">
                          <i className="far fa-trash-can" />
                        </Link>
                      </div>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      data-bs-parent="#accordion"
                    >
                      <div className="faq-body">
                        <div className="add-article-btns">
                          <Link to="#" className="btn">
                            Add Article
                          </Link>
                          <Link to="#" className="btn me-0">
                            Add Description
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="curriculum-grid">
              <div className="curriculum-head">
                <p>Section 1: JavaScript Beginnings</p>
                <Link to="#" className="btn">
                  Add Lecture
                </Link>
              </div>
              <div className="curriculum-info">
                <div id="accordion-one">
                  <div className="faq-grid">
                    <div className="faq-header">
                      <Link
                        className="collapsed faq-collapse"
                        data-bs-toggle="collapse"
                        to="#collapseFour"
                      >
                        <i className="fas fa-align-justify" /> Introduction
                      </Link>
                      <div className="faq-right">
                        <Link to="#">
                          <i className="far fa-pen-to-square me-1" />
                        </Link>
                        <Link to="#" className="me-0">
                          <i className="far fa-trash-can" />
                        </Link>
                      </div>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      data-bs-parent="#accordion-one"
                    >
                      <div className="faq-body">
                        <div className="add-article-btns">
                          <Link to="#" className="btn">
                            Add Article
                          </Link>
                          <Link to="#" className="btn me-0">
                            Add Description
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="faq-grid">
                    <div className="faq-header">
                      <Link
                        className="collapsed faq-collapse"
                        data-bs-toggle="collapse"
                        to="#collapseFive"
                      >
                        <i className="fas fa-align-justify" /> Installing
                        Development Software
                      </Link>
                      <div className="faq-right">
                        <Link to="#">
                          <i className="far fa-pen-to-square me-1" />
                        </Link>
                        <Link to="#" className="me-0">
                          <i className="far fa-trash-can" />
                        </Link>
                      </div>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse"
                      data-bs-parent="#accordion-one"
                    >
                      <div className="faq-body">
                        <div className="add-article-btns">
                          <Link to="#" className="btn">
                            Add Article
                          </Link>
                          <Link to="#" className="btn me-0">
                            Add Description
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="faq-grid">
                    <div className="faq-header">
                      <Link
                        className="collapsed faq-collapse"
                        data-bs-toggle="collapse"
                        to="#collapseSix"
                      >
                        <i className="fas fa-align-justify" /> Hello World
                        Project from GitHub
                      </Link>
                      <div className="faq-right">
                        <Link to="#">
                          <i className="far fa-pen-to-square me-1" />
                        </Link>
                        <Link to="#" className="me-0">
                          <i className="far fa-trash-can" />
                        </Link>
                      </div>
                    </div>
                    <div
                      id="collapseSix"
                      className="collapse"
                      data-bs-parent="#accordion-one"
                    >
                      <div className="faq-body">
                        <div className="add-article-btns">
                          <Link to="#" className="btn">
                            Add Article
                          </Link>
                          <Link to="#" className="btn me-0">
                            Add Description
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="faq-grid mb-0">
                    <div className="faq-header">
                      <Link
                        className="collapsed faq-collapse"
                        data-bs-toggle="collapse"
                        to="#collapseSeven"
                      >
                        <i className="fas fa-align-justify" /> Our Sample
                        Website
                      </Link>
                      <div className="faq-right">
                        <Link to="#">
                          <i className="far fa-pen-to-square me-1" />
                        </Link>
                        <Link to="#" className="me-0">
                          <i className="far fa-trash-can" />
                        </Link>
                      </div>
                    </div>
                    <div
                      id="collapseSeven"
                      className="collapse"
                      data-bs-parent="#accordion-one"
                    >
                      <div className="faq-body">
                        <div className="add-article-btns">
                          <Link to="#" className="btn">
                            Add Article
                          </Link>
                          <Link to="#" className="btn me-0">
                            Add Description
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="widget-btn">
            <Link className="btn btn-black prev_btn" onClick={prevTab2} state={state}>Previous</Link>
            <Link className="btn btn-info-light next_btn" onClick={nextTab3} state={state}>Continue</Link>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default Curriculum;
