import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./style.css";
import {PostQuestionLogic} from "./PostQuestion.logic"

export default function PostQuestion() {
  const {    
    removeTag,
    body,
    setBody,
    addTag,
    keywords,
    keywordInput,
    setKeywordInput,  
    title,
    setTitle,
    handleSubmit
  } = PostQuestionLogic();

  return (
    <>
      <div className="w-full min-h-[50rem] py-10 bg-[#f9fafb] pt-[2rem]">
        <div className="w-11/12 bg-white min-h-[15rem] mx-auto p-5 shadow-lg rounded-lg mb-10">
          <div className="flex justify-center">
            <div className="mb-3 w-full">
              <input
                type="text"
                className="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                id="exampleFormControlInput1"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="What's you want to discuss?"
              />
            </div>
          </div>

          <div className="post-question-text-editor">
            <ReactQuill
              style={{ boxShadow: "none" }}
              theme="snow"
              value={body}
              onChange={(e) => setBody(e)}
              placeholder="Lets write and start the discussion.."
            />
          </div>

          <div className="flex justify-center mt-10">
            <div className="mb-3 w-full">
              <input
                onKeyPress={addTag}
                onChange={(e) => setKeywordInput(e.target.value)}
                value={keywordInput}
                className="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                id="exampleFormControlInput1"
                placeholder="Add some related keywords..."
              />
              <p className="text-yellow-900 text-xs italic">
                To remove any keyword, click on them!.
              </p>
            </div>
          </div>

          <div>
            {keywords.map((keyword, index) => {
              return (
                <span
                  onClick={() => removeTag(keyword)}
                  key={index}
                  className="text-xs cursor-pointer font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-600 bg-slate-200 uppercase last:mr-0 mr-1"
                >
                  {keyword}
                </span>
              );
            })}
          </div>

          <div className="w-4/5 h-5 my-10">
            <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Start Discussion
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
