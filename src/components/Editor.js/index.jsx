import React from 'react'
import ReactQuill from 'react-quill'
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import 'react-quill/dist/quill.snow.css'
import './style.css'

export const Editor = ({ body, setBody, placeholder,isComment }) => {
    return (
        <div className="text-editor">
            <EditorToolbar 
            isComment={isComment}
            />
            <ReactQuill
                style={!isComment ? { boxShadow: 'none',width: '100%' } : {
                width:'80%',
                margin: '0 auto',
                borderRadius: '20px',
                fontSize: '20px',
            }}
                theme="snow"
                value={body}
                onChange={(e) => setBody(e)}
                placeholder={placeholder}
                modules={modules}
                formats={formats}
            />
        </div>
    )
}

export default Editor
