import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const TextEditor = ({setCourseDescription}) => {
  return (
    <CKEditor
      editor={ClassicEditor}
    //   onReady={(editor) => {
    //     // You can store the "editor" and use when it is needed.
       
    //   }}
      onChange={(event, editor) => {
        const data = editor.getData();
        setCourseDescription(data);
        console.log({ event, editor, data });
      }}
    //   onBlur={(event, editor) => {
    //     console.log("Blur.", editor);
    //   }}
    //   onFocus={(event, editor) => {
    //     console.log("Focus.", editor);
    //   }}
    />
  );
};

export const TextEditorForLesson = ({sectionIndex, lessonIndex, setLessonDescription}) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      onChange={(event, editor) => {
        const data = editor.getData();
        setLessonDescription(sectionIndex, lessonIndex, data);
        console.log({ event, editor, data });
      }}
    />
  );
}

export default TextEditor;
