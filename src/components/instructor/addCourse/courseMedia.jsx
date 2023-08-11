import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const CourseMedia = ({prevTab1, nextTab2, newCourseData, setNewCourseData, setCourseCoverImage, setCourseCoverVideo, state}) => {

  const [imageUploaded, setImageUploaded] = useState(null);
  const [videoUploaded, setVideoUploaded] = useState(null);

  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const fileUploadHandler = (event, fileType) => {
    let file = event.target.files[0];
    if(fileType=="image"){
      setCourseCoverImage({file: file, Url: null});
      setImageUploaded(file.name);
    }else{
      setCourseCoverVideo({file: file, Url: null});
      setVideoUploaded(file.name);
    }
  }

  return (
    <>
      <fieldset className="field-card" style={{display:"block"}}>
        <div className="add-course-info">
          <div className="add-course-inner-header">
            <h4>Courses Media</h4>
          </div>
          <div className="add-course-form">
            <form action="#">
              <div className="form-group">
                <label className="add-course-label">Course cover image</label>
                <div className="relative-form">
                  {/* <span>No File Selected */}
                    <input 
                      type="url" 
                      onChange={(event)=>{
                        setCourseCoverImage({file: null, Url: event.target.value}); 
                        setImageUploaded(event.target.value);
                      }}
                      placeholder={imageUploaded && imageUploaded!="Url" ? "Below file is selected" : "Provide a URL for the image or upload an image file"}
                      style={{width: "100%", height: "100%", border: "none"}}
                    />
                  {/* </span> */}
                  <label className="relative-file-upload">
                    Upload a File 
                    <input type="file" 
                      onChange={(event)=>{fileUploadHandler(event, "image")}}
                      accept="image/*"
                      ref={imageInputRef}
                    />
                  </label>
                </div>
                {imageUploaded && imageInputRef.current.value &&
                  (<span style={{padding: "10px", borderRadius: "5px" ,backgroundColor: "#1d9cfd", color: "white"}}>
                    <i>{imageUploaded}</i>{"\u00A0"}
                      <i className="fa fa-times" onClick={()=>{
                        setImageUploaded(null);
                        imageInputRef.current.value = null;
                        }} />
                  </span>)
                }
              </div>
              {/* <div className="form-group">
                <div className="add-image-box">
                  <Link to="#">
                    <i className="far fa-image" />
                  </Link>
                </div>
              </div> */}
              <div className="form-group">
                <label className="add-course-label">Course cover video</label>
                {/* <input
                  type="text"
                  className="form-control"
                  placeholder="Video URL"
                /> */}
                <div className="relative-form">
                  {/* <span>No File Selected */}
                    <input 
                      type="url" 
                      onChange={(event)=>{
                        setCourseCoverVideo({file: null, Url: event.target.value}); 
                        setVideoUploaded(event.target.value);
                      }}
                      placeholder={videoUploaded && videoUploaded!="Url" ? "Below file is selected" : "Provide a URL for the video or upload a video"}
                      style={{width: "100%", height: "100%", border: "none"}}
                    />
                  {/* </span> */}
                  <label className="relative-file-upload">
                    Upload a File 
                    <input type="file" 
                      onChange={(event)=>{fileUploadHandler(event, "video");}}
                      accept="video/*"
                      ref={videoInputRef}
                    />
                  </label>
                </div>
                {videoUploaded && videoInputRef.current.value &&
                  (<span style={{padding: "10px", borderRadius: "5px" ,backgroundColor: "#1d9cfd", color: "white"}}>
                    <i>{videoUploaded}</i>{"\u00A0"}
                    {/* <button style={{border:"none", background: "none"}}> */}
                      <i className="fa fa-times" onClick={()=>{
                        setVideoUploaded(null);
                        videoInputRef.current.value = null;  
                      }}></i>
                    {/* </button> */}
                  </span>)
                }
              </div>
              {/* <div className="form-group">
                <div className="add-image-box add-video-box">
                  <Link to="#">
                    <i className="fas fa-circle-play"/>
                  </Link>
                </div>
              </div> */}
            </form>
          </div>
          <div className="widget-btn">
            <Link className="btn btn-black prev_btn" onClick={prevTab1} state={state}>Previous</Link>
            <Link className="btn btn-info-light next_btn" onClick={()=>{
              imageUploaded && videoUploaded 
              ? nextTab2()
              : alert("Please upload both the files");
            }} state={state}>Continue</Link>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default CourseMedia;
