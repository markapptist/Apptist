import React, { useState, useRef } from "react";
import { TextEditorForLesson } from "./editor";
import { Link } from "react-router-dom";

const Curriculum = ({nextTab3, prevTab2, newCourseData, setNewCourseData, state}) => {

  const videoUploadHandler = (event, sectionIndex, lessonIndex) => {
    let file = event.target.files[0];

    const updatedSection = [...sections];
    if(sectionIndex>=0 && sectionIndex<updatedSection.length){
      if(lessonIndex>=0 && lessonIndex<updatedSection[sectionIndex].length){
        updatedSection[sectionIndex][lessonIndex]["video"] = file;
        setSections(updatedSection);
        console.log("Video Saved successfully!\n", "saved value:", sections[sectionIndex][lessonIndex].video);
      }else{
        console.log("Invalid Lesson Index");
      }
    }else{
      console.log("Invalid Section Index");
    }
  }

  const [editorToggler, setEditorToggler] = useState(false);

  const [totalSections, setTotalSections] = useState(2);

  const [sections, setSections] = useState([
    [
      {
        title: "lesson title",
        videoUrl: null,
        video: null,
        description: "description"
      },{
        title: "lesson title",
        videoUrl: null,
        video: null,
        description: "description"
      }
    ],[
      {
        title: "lesson title",
        videoUrl: null,
        video: null,
        description: "description"
      },{
        title: "lesson title",
        videoUrl: null,
        video: null,
        description: "description"
      }
    ]
  ]);

  const addSection = () => {
    const updatedSection = [...sections, [
      {
        title: "lesson title",
        videoUrl: null,
        video: null,
        description: "description"
      }
    ]]
    setSections(updatedSection);
  }

  const addLecture = (sectionIndex) => {
    console.log(sectionIndex);  
    const updateSection = [...sections];
    updateSection[sectionIndex].push({
      title: "lesson title",
      videoUrl: null,
      video: null,
      description: "description"
    });
    setSections(updateSection);
  }

  const setLessonDescription = (sectionIndex, lessonIndex, description) => {
    const updatedSection = [...sections];
    if(sectionIndex>=0 && sectionIndex<updatedSection.length){
      if(lessonIndex>=0 && lessonIndex<updatedSection[sectionIndex].length){
        updatedSection[sectionIndex][lessonIndex]["description"] = description;
        setSections(updatedSection);
      }else{
        console.log("Invalid Lesson Index");
      }
    }else{
      console.log("Invalid Section Index");
    }
  }

  const onDeleteSection = (sectionIndex) => {
    const updatedSection = [...sections];
    if(sectionIndex>=0 && sectionIndex<updatedSection.length){
      updatedSection.splice(sectionIndex, 1);
      setTotalSections(totalSections ? totalSections-1 : 0);
      setSections(updatedSection);
    }else{
      console.log("Invalid Section Index");
    }
  }

  const onLessonDelete = (sectionIndex, lessonIndex) => {
    const updatedSection = [...sections];
    if(sectionIndex>=0 && sectionIndex<updatedSection.length){
      if(lessonIndex>=0 && lessonIndex<updatedSection[sectionIndex].length){
        updatedSection[sectionIndex].splice(lessonIndex, 1);
        setSections(updatedSection);
      }else{
        console.log("Invalid Lesson Index");
      }
    }else{
      console.log("Invalid Section Index");
    }
  }

  return (
    <>
      <fieldset className="field-card" style={{display:"block"}}>
        <div className="add-course-info">
          <div className="add-course-inner-header">
            <h4>Curriculum</h4>
          </div>
          <div className="add-course-section">
            <div className="btn" onClick={()=>{addSection(); setTotalSections(totalSections+1);}}>
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
                      <div className="btn" style={{borderColor:"red", color:"red"}} onClick={()=>{onDeleteSection(index)}}>
                        Delete Section
                      </div>
                      <div to="#" className="btn" onClick={()=>{addLecture(index);}}>
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
                                      to={"#collapse"+lessonIndex}
                                    >
                                      <i className="fas fa-circle-play"/><i style={{fontSize:"1rem"}}>Lesson {lessonIndex+1}:</i>
                                      <input type="text" style={{border:"1px solid #aaaaaa", borderRadius:"5px"}}
                                        placeholder="Title"
                                      />
                                    </Link>
                                    <div className="faq-right">
                                      <div onClick={()=>{onLessonDelete(index, lessonIndex)}} className="me-0">
                                        <i className="far fa-trash-can" />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    id={"collapse"+lessonIndex}
                                    className="collapse"
                                    data-bs-parent="#accordion">
                                    <div className="faq-body">
                                      <div className="add-article-btns">
                                        <div className="btn" style={{paddingBottom:"2px"}}>
                                          <label htmlFor={"videoInput"+lessonIndex}>Add Video</label>
                                          <input type="file" 
                                            id={"videoInput"+lessonIndex}
                                            onChange={(event)=>{
                                              console.log("upload video");
                                              videoUploadHandler(event, index, lessonIndex);
                                            }}
                                            accept="video/*"
                                            style={{display:"none"}}
                                          />
                                          {
                                            sections[index][lessonIndex].video && (
                                              <span style={{margin:"5px",padding: "5px", borderRadius: "5px" ,backgroundColor: "#1d9cfd", color: "white"}}>
                                                <i>WinFile1.mp4</i>{"\u00A0"}
                                                  <i className="fa fa-times" onClick={()=>{
                                                    const updateSection = [...sections]
                                                    updateSection[index][lessonIndex].video = null;
                                                    setSections(updateSection);
                                                  }}/>
                                              </span>
                                            )
                                          }
                                        </div>
                                        <div className="btn" style={{paddingBottom:"2px"}}>
                                          <label onClick={()=>{
                                            console.log(editorToggler);
                                            setEditorToggler(!editorToggler);
                                            }}>Add Description</label>
                                        </div>
                                        {
                                          editorToggler && (
                                            <div className="editor">
                                              <TextEditorForLesson setLessonDescription={setLessonDescription} sectionIndex={index}
                                              lessonIndex={lessonIndex}
                                              />
                                            </div>
                                          )
                                        }
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })
                          }
                        </div>
                    </div>
                  </div>
                );
              })
            }
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
