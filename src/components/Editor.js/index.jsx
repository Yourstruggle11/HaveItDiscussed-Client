import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./style.css";

export const Editor = ({body, setBody}) => {
  return (
    <div className="text-editor">
      {/* <EditorToolbar /> */}
      <ReactQuill
        theme="snow"
        value={body}
        onChange={(e) => setBody(e)}
        placeholder={"Write Your Comment Here..."}
      />
    </div>
  );
};

export default Editor;
